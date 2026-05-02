'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Download, Cpu, Globe } from 'lucide-react';
import TerminalTile from './TerminalTile';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22c8.3 0 11-8 11-11 0-4.5-3.5-8-8-8-2 0-3 1-4 2a5 5 0 0 0-4 0c-1-1-2-2-4-2-4.5 0-8 3.5-8 8 0 3 2 5 5 6v1c0 1 1 1 1 1h11z" />
    <path d="M9 12h6" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="2" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function BentoGrid() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then(res => res.json())
      .then(json => setData(json.data))
      .catch(err => console.error("API Error:", err));
  }, []);

  if (!data) return <div className="flex items-center justify-center min-h-screen text-accent font-mono">Loading System...</div>;

  const { profile, skills, projects } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6 p-6 max-w-7xl mx-auto mt-20">

      {/* 1. Hero Tile (Large) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bento-card col-span-1 md:col-span-2 row-span-2 p-8 flex flex-col justify-center relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-accent to-cyan-400 mb-6 overflow-hidden">
            <img src="/api/placeholder/80/80" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {profile.name}
          </h1>
          <p className="text-xl text-slate-secondary mb-8 max-w-md leading-relaxed">
            Building scalable systems with a focus on performance and AI-driven efficiency.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-dark transition-all"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 blur-3xl rounded-full" />
      </motion.div>

      {/* 2. Terminal Tile (Medium) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bento-card col-span-1 md:col-span-2 row-span-1"
      >
        <TerminalTile />
      </motion.div>

      {/* 3. Tech Stack Tile (Small) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bento-card col-span-1 p-6 flex flex-col justify-between"
      >
        <div className="flex items-center gap-2 mb-4 text-accent">
          <Cpu size={20} />
          <span className="text-xs font-mono uppercase tracking-widest">Stack</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.values(skills).flat().slice(0, 12).map((skill: any) => (
            <span key={skill} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-secondary">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 4. Live Stats / Public API Tile (Small) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bento-card col-span-1 p-6 flex flex-col justify-between"
      >
        <div className="flex items-center gap-2 mb-4 text-accent">
          <Globe size={20} />
          <span className="text-xs font-mono uppercase tracking-widest">API Status</span>
        </div>
        <div className="mono text-[10px] text-gray-500 space-y-1">
          <p className="text-slate-primary">$ curl http://localhost:5000/api/profile</p>
          <p className="text-green-400">{"{ \"status\": \"online\", \"version\": \"1.0\" }"} </p>
          <a href="http://localhost:5000/api/profile" target="_blank" className="text-accent underline block mt-2">View JSON Output</a>
        </div>
      </motion.div>

      {/* 5. Top Projects Tile (Large/Wide) */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bento-card col-span-1 md:col-span-4 p-8"
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">Flagship Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <div key={project.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all group">
              <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h4>
              <p className="text-sm text-slate-secondary mb-4 line-clamp-2">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.link} className="text-xs flex items-center gap-1 text-accent hover:underline"><GithubIcon size={14} /> Code</a>
                <a href={project.demo} className="text-xs flex items-center gap-1 text-accent hover:underline"><ExternalLink size={14} /> Demo</a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 6. Contact Tile (Medium) */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col justify-center"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
            <Mail size={20} />
          </div>
          <h3 className="text-2xl font-bold">Get In Touch</h3>
        </div>
        <div className="flex gap-6">
          <a href={profile.linkedin} target="_blank" className="text-slate-secondary hover:text-accent transition-colors"><LinkedinIcon size={24} /></a>
          <a href={profile.github} target="_blank" className="text-slate-secondary hover:text-accent transition-colors"><GithubIcon size={24} /></a>
          <a href={`mailto:${profile.email}`} className="text-slate-secondary hover:text-accent transition-colors"><Mail size={24} /></a>
        </div>
      </motion.div>
    </div>
  );
}
