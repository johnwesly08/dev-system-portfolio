'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS, CERTIFICATIONS, EXPERIENCE } from '@/constants';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Awards */}
        <div className="space-y-10">
          <div className="flex items-center gap-4 mb-8">
            <Award className="text-accent" size={32} />
            <h3 className="text-3xl font-bold text-gradient">Accomplishments</h3>
          </div>
          <div className="space-y-6">
            {ACHIEVEMENTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl border-l-4 border-l-accent"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <span className="text-xs font-mono text-gray-500">{item.year}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certs & Ed */}
        <div className="space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle2 className="text-accent" size={32} />
              <h3 className="text-3xl font-bold text-gradient">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-4 rounded-xl flex items-center justify-between"
                >
                  <span className="text-sm font-medium">{cert.name}</span>
                  <span className="text-[10px] font-mono text-gray-500">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-accent" size={32} />
              <h3 className="text-3xl font-bold text-gradient">Education</h3>
            </div>
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg">{exp.role}</h4>
                  <span className="text-xs font-mono text-gray-500">{exp.period}</span>
                </div>
                <p className="text-accent text-sm font-medium mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
