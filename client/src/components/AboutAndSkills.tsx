'use client';
import { motion } from 'framer-motion';
import { SKILLS } from '@/constants';

export default function AboutAndSkills() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* About Part */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <div>
            <h3 className="text-4xl font-bold text-gradient mb-2">About Me</h3>
            <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
          </div>
<p className="text-gray-400 leading-relaxed text-base font-light">
            I am a Software Developer experienced in both web and mobile development. I specialize 
            in building scalable systems using the MERN stack and Python-based frameworks like Django, 
            while also developing native Android and cross-platform mobile applications. I leverage 
            Python and Java for core programming and complex problem-solving.
          </p>
          <p className="text-gray-400 leading-relaxed text-base font-light">
            My journey is driven by a passion for designing secure, end-to-end architectures, 
            with a long-term vision of becoming a Software Architect. Currently, I am expanding 
            my technical arsenal by exploring and integrating AI agents into my development 
            workflow to build smarter, more efficient software solutions.
          </p>
        </motion.div>

        {/* Skills Part */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <div>
            <h3 className="text-4xl font-bold text-gradient mb-2">Technical Arsenal</h3>
            <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category} className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase text-gray-600 tracking-wider font-semibold">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 bg-white/5 border border-white/10 hover:border-accent/60 hover:text-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
                    >
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