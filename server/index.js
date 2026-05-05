const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 1. Public Profile API
app.get('/api/profile', (req, res) => {
  try {
    // In a real scenario, this would come from a database
    // For now, we use the constants we defined
    const profileData = require('./data/profile.json');
    res.json({
      status: "online",
      data: profileData,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch profile data" });
  }
});

// 2. Mail Server Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({
      error: "Mail server is not configured. Set EMAIL_USER and EMAIL_PASS on the server.",
    });
  }

  // Configure your SMTP transporter
  // Replace these with environment variables in production
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS  // Your App Password
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    replyTo: email,
    to: 'johnweslypd@gmail.com',
    subject: `Portfolio Contact: ${name}`,
    text: `Message from ${name} (${email}):\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Dev-System Server running on port ${PORT}`);
});
