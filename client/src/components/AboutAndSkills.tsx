'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE, SKILLS } from '@/constants';

export default function AboutAndSkills() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* About Part */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-gradient">About Me</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            I am a software engineer with a background in Electronics and Communication Engineering,
            which gives me a unique perspective on the intersection of hardware and software.
            I specialize in building end-to-end applications, from high-performance backends
            to intuitive mobile interfaces.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            My journey is driven by curiosity and a desire to solve real-world problems,
            as evidenced by my success in the Smart India Hackathon and professional
            certifications from industry leaders like Google, Meta, and IBM.
          </p>
        </motion.div>

        {/* Skills Part */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-gradient">Technical Arsenal</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category} className="space-y-3">
                <h4 className="text-sm font-mono uppercase text-gray-500 tracking-wider">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="glass px-3 py-1 rounded-md text-xs font-medium text-gray-300 hover:text-accent transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
