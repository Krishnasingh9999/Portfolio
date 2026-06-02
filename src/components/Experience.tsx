import React from 'react';
import { experiences, certificates } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Experience: React.FC = () => {
  return (
    <>
      <section id="education" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative text-left">
          {/* Vertical Timeline Left Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp) => {
              return (
                <div
                  key={exp.id}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-[10px] md:left-[26px] w-3.5 h-3.5 rounded-full bg-indigo-500 border-4 border-[#030014] z-10 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />

                  {/* Content Card (Left-aligned & pushed to the right of the line) */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="w-full ml-10 md:ml-16"
                  >
                    <div className="p-6 rounded-2xl bg-[#0c0d21]/50 border border-white/5 hover:border-indigo-500/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] transition-all duration-300">
                      <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-indigo-950/40 text-indigo-300 border border-indigo-900/30 mb-3">
                        {exp.dateRange}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-indigo-400 mt-1 mb-4">
                        {exp.company} <span className="text-gray-450 font-normal">| {exp.location}</span>
                      </h4>

                      {/* Achievements bullets list */}
                      <ul className="space-y-3 px-1 text-sm text-gray-400 list-none text-left">
                        {exp.achievements.map((achievement, actIdx) => (
                          <li
                            key={actIdx}
                            className="flex gap-2.5 items-start text-left"
                          >
                            <span className="text-indigo-400 font-bold mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>

    <section id="achievements" className="py-20 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-white tracking-wider mb-8 text-center sm:text-left">
            Certificates & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => {
              const hasLink = 'link' in cert && cert.link;
              const content = (
                <>
                  <div className="flex justify-between items-start gap-3">
                    <span className="block font-bold text-sm text-gray-250 leading-snug group-hover:text-indigo-400 transition-colors duration-300">
                      {cert.title}
                    </span>
                    {hasLink && (
                      <FiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300 shrink-0 mt-0.5" />
                    )}
                  </div>
                  <span className="inline-block text-xs font-semibold text-indigo-400 mt-2">
                    {cert.issuer}
                  </span>
                </>
              );

              if (hasLink) {
                return (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-[#0c0d21]/50 border border-white/5 hover:border-indigo-500/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#0c0d21]/50 border border-white/5 flex flex-col justify-between"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Experience;
