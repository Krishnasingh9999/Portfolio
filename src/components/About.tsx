import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { bioParagraphs } = personalInfo;

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Callout & Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight text-left">
              I build real-time, scalable solutions that bridge the gap between design and system logic.
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-left">
              Focusing on clean code and efficient algorithms to create software that solves real-world challenges.
            </p>

            {/* Quick bullets card */}
            <div className="p-6 rounded-2xl bg-[#0c0d21]/60 border border-white/5 space-y-4 shadow-xl text-left">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Stack Development</h4>
                  <p className="text-xs text-gray-400">Proficient in MongoDB, Express.js, React, Node.js, and Redis.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Problem Solving</h4>
                  <p className="text-xs text-gray-400">Solved 200+ challenges on LeetCode & HackerRank in Java.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Academic Foundation</h4>
                  <p className="text-xs text-gray-400">Bachelor of Technology in Computer Science & Engineering (2026).</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-gray-450 dark:text-gray-400 text-sm sm:text-base leading-relaxed text-left"
          >
            {bioParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
