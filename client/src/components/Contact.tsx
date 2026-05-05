'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '@/constants';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

// Custom SVG for GitHub
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22c8.3 0 11-8 11-11 0-4.5-3.5-8-8-8-2 0-3 1-4 2a5 5 0 0 0-4 0c-1-1-2-2-4-2-4.5 0-8 3.5-8 8 0 3 2 5 5 6v1c0 1 1 1 1 1h11z" />
    <path d="M9 12h6" />
  </svg>
);

// Custom SVG for LinkedIn
const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="2" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-5xl font-bold mb-4 text-gradient">Let's Connect</h3>
        <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
          Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.a
          href={`mailto:${PROFILE.email}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl hover:border-accent/50 hover:bg-white/10 transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all">
              <Mail className="text-accent" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">Email</h4>
              <p className="text-gray-400 text-sm font-light break-all">{PROFILE.email}</p>
            </div>
          </div>
        </motion.a>

        <motion.a
          href={`tel:${PROFILE.phone}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-2xl hover:border-accent/50 hover:bg-white/10 transition-all group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all">
              <Phone className="text-accent" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">Phone</h4>
              <p className="text-gray-400 text-sm font-light">{PROFILE.phone}</p>
            </div>
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <MapPin className="text-accent" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-1">Location</h4>
              <p className="text-gray-400 text-sm font-light">{PROFILE.location}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-12 rounded-3xl max-w-2xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project or idea..."
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-accent/50"
          >
            Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-accent/10 border border-accent/50 rounded-lg text-center text-accent font-medium"
            >
              ✓ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
        </form>
      </motion.div>

      <div className="flex justify-center gap-6 mt-16">
        <motion.a
          href={PROFILE.github}
          target="_blank"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-4 bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/50 rounded-lg transition-all hover:scale-110 text-gray-400 hover:text-accent"
        >
          <GithubIcon size={24} />
        </motion.a>
        <motion.a
          href={PROFILE.linkedin}
          target="_blank"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-4 bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/50 rounded-lg transition-all hover:scale-110 text-gray-400 hover:text-accent"
        >
          <LinkedinIcon size={24} />
        </motion.a>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-white/5">
        <p className="text-gray-500 text-sm font-light">
          © 2024 John Wesly P D. Designed with passion.
        </p>
      </div>
    </section>
  );
}