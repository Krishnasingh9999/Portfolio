import React from 'react';
import { projects } from '../data/portfolioData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Other Projects
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="flex flex-col relative rounded-2xl bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-800"
            >

              {/* Card Contents */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white mb-1 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mb-2 leading-snug font-medium">
                    {project.description}
                  </p>
                  {project.bullets && (
                    <ul className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 mb-3 space-y-1 list-none">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-1 leading-snug text-left">
                          <span className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0 w-1 h-1 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                          <span className="text-gray-600 dark:text-gray-400 font-medium">
                            {bullet.replace(/\*\*/g, '')}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                    {project.liveAdmin && (
                      <a
                        href={project.liveAdmin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                        aria-label={`View live admin demo for ${project.title}`}
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span>Admin Panel</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
