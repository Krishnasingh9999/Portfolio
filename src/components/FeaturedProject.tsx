import React from 'react';
import { projects } from '../data/portfolioData';
import { FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FeaturedProject: React.FC = () => {
  const project = projects.find((p) => p.featured);

  if (!project) return null;

  const { title, description, tech, github, live, liveAdmin } = project;



  return (
    <section id="featured" className="pt-4 pb-12 bg-white dark:bg-[#07080e] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading & Link */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <a
            href="#projects"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300 group"
          >
            <span>View All Projects</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </a>
        </div>

        {/* Featured Horizontal Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50/50 dark:bg-[#0d0f1a]/80 backdrop-blur-md border border-gray-200 dark:border-slate-800 rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-8 relative hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 group shadow-lg dark:shadow-2xl"
        >
          {/* Left Side: Screenshot Image */}
          <div className="w-full lg:w-[45%] shrink-0 relative rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800/80 bg-gray-100 dark:bg-slate-950">
            <img
              src="/medidost_landscape.png"
              alt={`${title} Preview`}
              className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Right Side: Details */}
          <div className="flex-1 flex flex-col items-start text-left relative lg:pr-12">
            {/* Featured Badge */}
            <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-indigo-100 dark:bg-[#1f1638] text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 mb-3.5">
              Featured
            </span>

            {/* Project Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
              {description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tech.map((techItem) => (
                <span
                  key={techItem}
                  className="px-2.5 py-1 text-xs font-semibold rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30 transition-colors duration-300"
                >
                  {techItem}
                </span>
              ))}
            </div>

            {/* Actions Links */}
            <div className="flex flex-wrap items-center gap-6 mt-2">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300"
                aria-label={`View live demo for ${title}`}
              >
                <span>Live Demo</span>
                <FiExternalLink className="w-4 h-4" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300"
                aria-label={`View GitHub repository for ${title}`}
              >
                <span>GitHub</span>
                <FiGithub className="w-4 h-4" />
              </a>
              {liveAdmin && (
                <a
                  href={liveAdmin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300"
                  aria-label={`View live admin demo for ${title}`}
                >
                  <span>Admin Panel</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Right Chevron arrow (hidden on mobile, positioned on the right edge on desktop) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center text-gray-400 dark:text-slate-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300">
              <FiChevronRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
