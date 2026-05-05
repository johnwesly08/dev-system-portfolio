'use client';
import { motion } from 'framer-motion';
import { PROFILE } from '@/constants';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl px-4"
      >
        <h2 className="text-accent font-mono mb-6 tracking-widest uppercase text-xs font-semibold">• Available for opportunities</h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight text-white">
          Building <span className="text-gradient">Scalable Systems</span> & AI-Driven Experiences
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          {PROFILE.summary}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 group">
            View My Work <ArrowDownRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="#contact" className="glass px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
            Get In Touch
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-500 rounded-full animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
}
