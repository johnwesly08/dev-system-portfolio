'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS, CERTIFICATIONS, EXPERIENCE, EDUCATION } from '@/constants';
import { Award, GraduationCap, CheckCircle2, Briefcase } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Column: Awards & Accomplishments */}
        <div className="space-y-10">
          <div className="mb-8">
            <h3 className="text-4xl font-bold text-gradient mb-2 flex items-center gap-3">
              <Award className="text-accent" size={28} />
              Accomplishments
            </h3>
            <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
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
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h4 className="font-semibold text-base leading-tight">{item.title}</h4>
                  <span className="text-xs font-mono text-gray-600 whitespace-nowrap">{item.year}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Experience, Ed & Certs */}
        <div className="space-y-16">
          
          {/* Experience Section */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-gradient mb-2 flex items-center gap-3">
                <Briefcase className="text-accent" size={28} />
                Experience
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
            </div>
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h4 className="font-semibold text-base">{exp.role}</h4>
                  <span className="text-xs font-mono text-gray-600 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-accent text-sm font-medium mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{exp.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-gradient mb-2 flex items-center gap-3">
                <GraduationCap className="text-accent" size={28} />
                Education
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
            </div>
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h4 className="font-semibold text-base">{edu.degree}</h4>
                  <span className="text-xs font-mono text-gray-600 whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-accent text-sm font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{edu.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-gradient mb-2 flex items-center gap-3">
                <CheckCircle2 className="text-accent" size={28} />
                Certifications
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
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

        </div>
      </div>
    </section>
  );
}