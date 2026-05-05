'use client';
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { PROFILE } from '@/constants';

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

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // This detects scroll direction to hide/show the navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // Scrolling down -> hide
    } else {
      setHidden(false); // Scrolling up -> show
    }
  });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
<motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 flex justify-center pt-6 px-6"
    >
      {/* Replaced 'glass' with strict Tailwind backdrop-blur and border */}
      <div className="px-8 py-4 rounded-full flex items-center gap-8 shadow-2xl bg-black/50 backdrop-blur-xl border border-white/10">
        <a href="/" className="font-bold text-xl text-gradient tracking-tight">JW.</a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-5 border-l border-white/10 pl-5">
          <a href={PROFILE.github} target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon size={18} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}