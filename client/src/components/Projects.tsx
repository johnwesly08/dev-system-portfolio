'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold mb-4 text-gradient">Featured Work</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of projects where I applied engineering principles to solve complex problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-3xl group hover:border-accent/50 transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-bold group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <div className="flex gap-3">
                <a href={project.link} target="_blank" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                <a href={project.demo} target="_blank" className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="mb-6">
              <div className="text-xs font-mono text-accent uppercase mb-3 tracking-widest">Key Achievement</div>
              <p className="text-sm text-gray-300 italic">"{project.win}"</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-bold uppercase tracking-tighter bg-white/5 px-2 py-1 rounded border border-white/10 text-gray-400">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
