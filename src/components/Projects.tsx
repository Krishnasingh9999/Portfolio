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
    <section id="projects" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Other Projects
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.filter((project) => !project.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="flex flex-col relative rounded-2xl bg-[#0c0d21]/45 border border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-500/20"
            >

              {/* Card Contents */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3.5 leading-relaxed">
                    {project.description}
                  </p>
                  {project.bullets && (
                    <ul className="text-xs text-gray-400 mb-4 space-y-1.5 list-none text-left">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed text-left">
                          <span className="text-indigo-400 mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
                          <span>
                            {bullet.replace(/\*\*/g, '')}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="px-2 py-0.5 text-[10px] font-semibold rounded bg-indigo-950/40 text-indigo-300 border border-indigo-900/30"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Actions Links */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    {project.liveAdmin && (
                      <a
                        href={project.liveAdmin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                        aria-label={`View live admin demo for ${project.title}`}
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span>Admin</span>
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
