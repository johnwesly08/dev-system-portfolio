'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '@/constants';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center p-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass px-6 py-3 rounded-full flex items-center gap-8"
      >
        <a href="/" className="font-bold text-xl text-gradient">JW.</a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={PROFILE.github} target="_blank" className="hover:text-accent transition-colors"><Github size={18} /></a>
          <a href={PROFILE.linkedin} target="_blank" className="hover:text-accent transition-colors"><Linkedin size={18} /></a>
        </div>
      </motion.div>
    </nav>
  );
}
