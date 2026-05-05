'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-5xl font-bold mb-4 text-gradient">Featured Work</h3>
        <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
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
            <div className="flex justify-between items-start mb-5">
              <h4 className="text-xl font-semibold group-hover:text-accent transition-colors leading-tight">
                {project.title}
              </h4>
              <div className="flex gap-3 ml-4 flex-shrink-0">
                <a href={project.link} target="_blank" className="text-gray-500 hover:text-accent transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href={project.demo} target="_blank" className="text-gray-500 hover:text-accent transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm font-light">
              {project.description}
            </p>
            <div className="mb-6 pb-4 border-t border-white/5">
              <div className="text-xs font-mono text-accent/80 uppercase mb-2 tracking-wider font-semibold">• Key Achievement</div>
              <p className="text-sm text-gray-300 leading-relaxed">{project.win}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {project.tech.map((t) => (
                <span key={t} className="text-[11px] font-semibold uppercase tracking-tight bg-white/5 px-2.5 py-1.5 rounded-md border border-white/10 text-gray-400 hover:text-gray-300 hover:border-white/20 transition-all">
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