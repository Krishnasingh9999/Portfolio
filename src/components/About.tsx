import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { bioParagraphs } = personalInfo;

  return (
    <section id="about" className="pt-10 pb-20 bg-gray-50 dark:bg-gray-950/40 relative">
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
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-10"
        >
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed text-center sm:text-left">
            {bioParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
