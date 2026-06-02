import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaServer,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJs,
  FaPython,
  FaCss3Alt,
  FaCoffee,
  FaGithub,
  FaBrain,
  FaCube,
  FaDatabase,
  FaTerminal,
  FaNetworkWired,
  FaProjectDiagram,
  FaLaptopCode,
  FaCode,
  FaTools,
  FaRobot,
  FaBookOpen,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiPostman,
  SiC,
  SiCplusplus,
  SiBootstrap,
  SiJsonwebtokens,
  SiRedis,
  SiSocketdotio,
  SiEclipseide,
  SiIntellijidea,
  SiRender,
  SiNetlify,
  SiOpenai,
  SiGithubcopilot,
  SiGooglegemini,
  SiMysql,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills: React.FC = () => {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaReact':
        return <FaReact className="w-5 h-5 text-sky-500" />;
      case 'SiTypescript':
        return <SiTypescript className="w-5 h-5 text-blue-600" />;
      case 'SiRedux':
        return <SiRedux className="w-5 h-5 text-purple-500" />;
      case 'SiTailwindcss':
        return <SiTailwindcss className="w-5 h-5 text-sky-400" />;
      case 'FaHtml5':
        return <FaHtml5 className="w-5 h-5 text-orange-600" />;
      case 'FaNodeJs':
        return <FaNodeJs className="w-5 h-5 text-green-600" />;
      case 'SiExpress':
        return <SiExpress className="w-5 h-5 text-gray-700 dark:text-gray-350" />;
      case 'SiMongodb':
        return <SiMongodb className="w-5 h-5 text-emerald-500" />;
      case 'FaServer':
        return <FaServer className="w-5 h-5 text-indigo-500" />;
      case 'FaDocker':
        return <FaDocker className="w-5 h-5 text-sky-600" />;
      case 'SiVercel':
        return <SiVercel className="w-5 h-5 text-black dark:text-white" />;
      case 'FaGitAlt':
        return <FaGitAlt className="w-5 h-5 text-orange-500" />;
      case 'VscCode':
        return <VscCode className="w-5 h-5 text-blue-500" />;
      case 'SiPostman':
        return <SiPostman className="w-5 h-5 text-orange-500" />;
      case 'FaJava':
        return <FaJava className="w-5 h-5 text-amber-600" />;
      case 'FaJs':
        return <FaJs className="w-5 h-5 text-yellow-500" />;
      case 'FaPython':
        return <FaPython className="w-5 h-5 text-blue-500" />;
      case 'SiC':
        return <SiC className="w-5 h-5 text-blue-600" />;
      case 'SiCplusplus':
        return <SiCplusplus className="w-5 h-5 text-sky-600" />;
      case 'FaDatabase':
        return <FaDatabase className="w-5 h-5 text-indigo-500" />;
      case 'FaCss3Alt':
        return <FaCss3Alt className="w-5 h-5 text-blue-500" />;
      case 'SiBootstrap':
        return <SiBootstrap className="w-5 h-5 text-purple-600" />;
      case 'SiJsonwebtokens':
        return <SiJsonwebtokens className="w-5 h-5 text-pink-500" />;
      case 'SiRedis':
        return <SiRedis className="w-5 h-5 text-red-600" />;
      case 'SiSocketdotio':
        return <SiSocketdotio className="w-5 h-5 text-gray-800 dark:text-gray-100" />;
      case 'FaCoffee':
        return <FaCoffee className="w-5 h-5 text-amber-700" />;
      case 'SiMysql':
        return <SiMysql className="w-5 h-5 text-blue-500" />;
      case 'FaGithub':
        return <FaGithub className="w-5 h-5 text-gray-900 dark:text-gray-100" />;
      case 'SiEclipseide':
        return <SiEclipseide className="w-5 h-5 text-indigo-600" />;
      case 'SiIntellijidea':
        return <SiIntellijidea className="w-5 h-5 text-purple-500" />;
      case 'SiRender':
        return <SiRender className="w-5 h-5 text-teal-500" />;
      case 'SiNetlify':
        return <SiNetlify className="w-5 h-5 text-teal-400" />;
      case 'SiOpenai':
        return <SiOpenai className="w-5 h-5 text-emerald-600" />;
      case 'SiGithubcopilot':
        return <SiGithubcopilot className="w-5 h-5 text-indigo-500" />;
      case 'SiGooglegemini':
        return <SiGooglegemini className="w-5 h-5 text-indigo-400" />;
      case 'FaBrain':
        return <FaBrain className="w-5 h-5 text-pink-500" />;
      case 'FaCube':
        return <FaCube className="w-5 h-5 text-amber-500" />;
      case 'FaTerminal':
        return <FaTerminal className="w-5 h-5 text-green-500" />;
      case 'FaNetworkWired':
        return <FaNetworkWired className="w-5 h-5 text-blue-500" />;
      case 'FaProjectDiagram':
        return <FaProjectDiagram className="w-5 h-5 text-indigo-500" />;
      case 'FaLaptopCode':
        return <FaLaptopCode className="w-5 h-5 text-emerald-500" />;
      default:
        return null;
    }
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Languages':
        return <FaCode className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Frontend Technologies':
        return <FaLaptopCode className="w-6 h-6 text-sky-500 dark:text-sky-400" />;
      case 'Backend Technologies':
        return <FaServer className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />;
      case 'Databases':
        return <FaDatabase className="w-6 h-6 text-blue-500 dark:text-blue-400" />;
      case 'Tools & Platforms':
        return <FaTools className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case 'AI & Developer Productivity Tools':
        return <FaRobot className="w-6 h-6 text-purple-500 dark:text-purple-400" />;
      case 'Core Subjects':
        return <FaBookOpen className="w-6 h-6 text-rose-500 dark:text-rose-400" />;
      default:
        return <FaCode className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  const getCategoryTheme = (categoryName: string) => {
    switch (categoryName) {
      case 'Languages':
        return {
          accent: 'border-t-4 border-t-indigo-600 dark:border-t-indigo-500',
          glow: 'group-hover:shadow-indigo-500/10 dark:group-hover:shadow-indigo-400/5',
        };
      case 'Frontend Technologies':
        return {
          accent: 'border-t-4 border-t-sky-500 dark:border-t-sky-400',
          glow: 'group-hover:shadow-sky-500/10 dark:group-hover:shadow-sky-400/5',
        };
      case 'Backend Technologies':
        return {
          accent: 'border-t-4 border-t-emerald-500 dark:border-t-emerald-400',
          glow: 'group-hover:shadow-emerald-500/10 dark:group-hover:shadow-emerald-400/5',
        };
      case 'Databases':
        return {
          accent: 'border-t-4 border-t-blue-500 dark:border-t-blue-400',
          glow: 'group-hover:shadow-blue-500/10 dark:group-hover:shadow-blue-400/5',
        };
      case 'Tools & Platforms':
        return {
          accent: 'border-t-4 border-t-amber-500 dark:border-t-amber-400',
          glow: 'group-hover:shadow-amber-500/10 dark:group-hover:shadow-amber-400/5',
        };
      case 'AI & Developer Productivity Tools':
        return {
          accent: 'border-t-4 border-t-purple-500 dark:border-t-purple-400',
          glow: 'group-hover:shadow-purple-500/10 dark:group-hover:shadow-purple-400/5',
        };
      case 'Core Subjects':
        return {
          accent: 'border-t-4 border-t-rose-500 dark:border-t-rose-400',
          glow: 'group-hover:shadow-rose-500/10 dark:group-hover:shadow-rose-400/5',
        };
      default:
        return {
          accent: 'border-t-4 border-t-indigo-600 dark:border-t-indigo-500',
          glow: 'group-hover:shadow-indigo-500/10 dark:group-hover:shadow-indigo-400/5',
        };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
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
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Detailed breakdown of my technical expertise, structured by functional categories to showcase full-stack competence.
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => {
            const theme = getCategoryTheme(category.name);
            return (
              <motion.div
                key={category.name}
                variants={cardVariants}
                className={`group flex flex-col p-5 rounded-2xl bg-[#0c0d21]/40 border border-white/5 hover:border-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] hover:-translate-y-1 transition-all duration-300 ${theme.accent}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-2.5 border-b border-white/5">
                  <div className="p-2 rounded-xl bg-black/30 border border-white/5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
                
                {/* Skill boxes list (aligned to top) */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-gray-300 hover:text-indigo-400 hover:bg-[#0c0d21] hover:border-indigo-500/30 transition-all duration-200 text-xs font-semibold shadow-xs"
                    >
                      {getSkillIcon(skill.iconName)}
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
