'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '@/constants';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-12 rounded-[3rem] space-y-8"
      >
        <h3 className="text-4xl font-bold text-gradient">Let's Connect</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-all">
            <Mail size={18} /> Email Me
          </a>
          <div className="flex items-center gap-4">
            <a href={PROFILE.github} target="_blank" className="p-3 glass rounded-full hover:text-accent transition-colors"><Github size={22} /></a>
            <a href={PROFILE.linkedin} target="_blank" className="p-3 glass rounded-full hover:text-accent transition-colors"><Linkedin size={22} /></a>
          </div>
        </div>
        <div className="pt-12 text-gray-500 text-sm font-mono">
          © {new Date().getFullYear()} — Designed & Built by {PROFILE.name}
        </div>
      </motion.div>
    </section>
  );
}
