import React from 'react';
import { experiences, educations, certificates } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FiExternalLink, FiBriefcase, FiBookOpen, FiAward } from 'react-icons/fi';

const Experience: React.FC = () => {
  return (
    <>
      {/* 1. Professional Work Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-[#07080e] relative overflow-hidden transition-colors duration-300">
        {/* Background accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
              <FiBriefcase className="text-indigo-600 dark:text-indigo-400 w-8 h-8" />
              <span>Work Experience</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#090b14]/80 border border-gray-200 dark:border-purple-500/20 hover:border-indigo-500/30 dark:hover:border-purple-500/40 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.08)] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-gray-100 dark:border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                        {exp.role}
                      </h3>
                      {exp.type && (
                        <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.company} <span className="text-gray-500 dark:text-gray-400 font-normal">| {exp.location}</span>
                    </h4>
                  </div>
                  <span className="inline-block self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40">
                    {exp.dateRange}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-sm sm:text-base text-gray-600 dark:text-gray-300 list-none text-left">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-1 flex-shrink-0 text-sm">
                        ▹
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-[#07080e] relative overflow-hidden border-t border-gray-200 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
              <FiBookOpen className="text-indigo-600 dark:text-indigo-400 w-8 h-8" />
              <span>Education</span>
            </h2>
            <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Vertical Timeline Left Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-800" />

            <div className="space-y-12">
              {educations.map((edu) => (
                <div key={edu.id} className="relative flex items-start">
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-[10px] md:left-[26px] w-3.5 h-3.5 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-[#07080e] z-10" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="w-full ml-10 md:ml-16"
                  >
                    <div className="p-5 sm:p-6 rounded-2xl bg-gray-50/90 dark:bg-[#090b14]/75 border border-gray-200 dark:border-purple-500/15 hover:border-indigo-500/30 dark:hover:border-purple-500/30 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.05)] transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400">
                          {edu.dateRange}
                        </span>
                        {edu.grade && (
                          <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1 mb-4">
                        {edu.institution} <span className="text-gray-500 font-normal">| {edu.location}</span>
                      </h4>

                      {/* Achievements bullets list */}
                      <ul className="space-y-2 px-1 text-sm sm:text-base text-gray-600 dark:text-gray-400 list-none text-left">
                        {edu.achievements.map((achievement, actIdx) => (
                          <li key={actIdx} className="flex gap-2.5 items-start text-left">
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5 flex-shrink-0 text-lg leading-none">
                              •
                            </span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Certificates & Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50 dark:bg-[#07080e] relative overflow-hidden border-t border-gray-200 dark:border-slate-900 transition-colors duration-300">
        {/* Background accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                <FiAward className="text-indigo-600 dark:text-indigo-400 w-8 h-8" />
                <span>Certificates & Achievements</span>
              </h2>
              <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert, index) => {
                const hasLink = 'link' in cert && cert.link;
                const content = (
                  <>
                    <div className="flex justify-between items-start gap-2">
                      <span className="block font-bold text-sm text-gray-800 dark:text-gray-200 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {cert.title}
                      </span>
                      {hasLink && (
                        <FiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 shrink-0 mt-0.5" />
                      )}
                    </div>
                    <span className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-2">
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
                      className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#090b14]/75 border border-gray-200 dark:border-purple-500/15 hover:border-indigo-500/30 dark:hover:border-purple-500/30 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.05)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#090b14]/75 border border-gray-200 dark:border-purple-500/15 shadow-sm dark:shadow-none flex flex-col justify-between"
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
