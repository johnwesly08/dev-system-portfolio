const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});
app.use('/api/contact', limiter);

// Mail transporter (global)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Changed from 587
  secure: true, // Changed from false
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Add this verification block to see exactly what's happening in Render logs
transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter Verification Error:", error);
  } else {
    console.log("Mail server is ready to send messages");
  }
});

app.get('/api/env-check', (req, res) => {
  res.json({
    EMAIL_USER: process.env.EMAIL_USER || null,
    EMAIL_PASS_EXISTS: !!process.env.EMAIL_PASS,
    EMAIL_TO: process.env.EMAIL_TO || null,
  });
});

// Profile API
app.get('/api/profile', (req, res) => {
  try {
    const profileData = require('./data/profile.json');
    res.json({
      status: "online",
      data: profileData,
      timestamp: new Date().toISOString()
    });
  } catch {
    res.status(500).json({ error: "Failed to fetch profile data" });
  }
});

// Contact API
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Valid input required" });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({
      error: "Mail server is not configured",
    });
  }

  if (!recipient) {
    return res.status(500).json({
      error: "Mail recipient is not configured",
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: recipient,
      subject: `Portfolio Contact: ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`
    });

    res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});