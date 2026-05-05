'use client';
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { PROFILE } from '@/constants';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

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
            <FaGithub size={18} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}