import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { FiMapPin, FiCode, FiBriefcase, FiHome, FiMail, FiUserCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { tagline } = personalInfo;

  const rolesCycle = ['Full-Stack Developer(MERN)', 'Software Engineer'];
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(55);

  useEffect(() => {
    const handleType = () => {
      const idx = loopNum % rolesCycle.length;
      const fullText = rolesCycle[idx];

      if (isDeleting) {
        setCurrentRoleText(fullText.substring(0, currentRoleText.length - 1));
        setTypingSpeed(25);
      } else {
        setCurrentRoleText(fullText.substring(0, currentRoleText.length + 1));
        setTypingSpeed(55);
      }

      if (!isDeleting && currentRoleText === fullText) {
        setTypingSpeed(1800); // Pause for 1.8s when full text is typed
        setIsDeleting(true);
      } else if (isDeleting && currentRoleText === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(300); // Pause before starting the next word
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRoleText, isDeleting, loopNum, typingSpeed]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/KrishnaSingh9999',
      icon: <FaGithub className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/krishnasingh9811/',
      icon: <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Krishna-2003/',
      icon: <SiLeetcode className="w-5 h-5 text-[#FFA116]" />
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/krishna1863singh',
      icon: <SiHackerrank className="w-5 h-5 text-[#2EC866]" />
    },
    {
      name: 'Email',
      url: 'mailto:krishna1863singh@gmail.com',
      icon: <FiMail className="w-5 h-5 text-gray-400" />
    }
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center bg-white dark:bg-[#07080e] px-4 sm:px-6 lg:px-8 overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 transition-colors duration-300"
    >
      {/* Decorative Grid and Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(99,102,241,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
          {/* Left Column: Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2 sm:mb-3">
              Hi, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-4 sm:mb-5">
              Krishna Singh
            </h1>

            {/* Dynamic Role & Badges (Fixed height container for 100% Zero Layout Shift) */}
            <div className="flex flex-col items-center lg:items-start mb-5 sm:mb-6 w-full">
              {/* Dedicated Fixed-Height Role Text Row */}
              <div className="h-8 sm:h-9 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400 inline-flex items-center tracking-tight">
                  <span>{currentRoleText}</span>
                  <span className="ml-1 w-[2px] h-5 sm:h-6 bg-indigo-600 dark:bg-indigo-400 animate-pulse shrink-0" />
                </span>
              </div>

              {/* Permanent Secondary Badges Row */}
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-[#10B981] text-xs sm:text-sm font-bold">
                  Java
                </span>
                <span className="text-gray-300 dark:text-gray-700">|</span>
                <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-semibold">
                  Problem Solver
                </span>
              </div>
            </div>

            <p className="max-w-xl text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-7 sm:mb-8 leading-relaxed">
              {tagline}
            </p>

            {/* View My Work & Contact Me Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-7 sm:mb-8 w-full sm:w-auto">
              <a
                href="#featured"
                onClick={(e) => handleScrollToSection(e, 'featured')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                View My Work <span className="text-lg leading-none">&rarr;</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, 'contact')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-gray-800 dark:text-white bg-gray-50 dark:bg-transparent border border-gray-300 dark:border-slate-800 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-slate-900/50 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Contact Me <FiMail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </a>
            </div>

            {/* Social Links under buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors duration-300 text-xs sm:text-sm font-medium"
                  aria-label={`Visit ${social.name} profile`}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] p-6 sm:p-8 rounded-3xl bg-gray-50/90 dark:bg-[#090b14]/75 border border-gray-200 dark:border-purple-500/20 backdrop-blur-xl flex flex-col shadow-lg dark:shadow-[0_0_40px_rgba(139,92,246,0.1)]">
              {/* Profile image with gradient ring and green status dot */}
              <div className="relative mx-auto mb-5 sm:mb-6">
                <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-[#00F2FE] via-[#9F5FFE] to-[#00F2FE]">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-900">
                    <img
                      src="/profile.jpg"
                      alt="Krishna Singh"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 sm:right-2 w-4 h-4 sm:w-4.5 sm:h-4.5 bg-[#10B981] border-[3px] border-white dark:border-[#090b14] rounded-full" />
              </div>

              {/* Card info list - left-aligned inside a block */}
              <div className="flex flex-col gap-3.5 sm:gap-4 text-gray-700 dark:text-gray-300 w-full max-w-[260px] mx-auto">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-gray-500 dark:text-gray-400 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Noida, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-600 dark:text-[#10B981]">
                  <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-emerald-600 dark:text-[#10B981]" />
                  <span className="text-xs sm:text-sm font-semibold">Open to Work</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-gray-500 dark:text-gray-400 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">B.Tech CSE Graduate</span>
                </div>
                <div className="flex items-start gap-3">
                  <FiHome className="text-gray-500 dark:text-gray-400 w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 leading-tight">
                    KCC Institute of Technology & Management
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full mt-12 sm:mt-16 md:mt-20 p-4 sm:p-6 bg-gray-50/80 dark:bg-[#090b14]/50 border border-gray-200 dark:border-slate-800/80 rounded-3xl shadow-sm dark:shadow-[0_0_30px_rgba(139,92,246,0.05)] backdrop-blur-md"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <FiBriefcase className="text-indigo-600 dark:text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mb-1.5 sm:mb-2" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">4+</span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">Projects Built</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center">
              <FiCode className="text-indigo-600 dark:text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mb-1.5 sm:mb-2" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">200+</span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">DSA Problems</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center">
              <FaGraduationCap className="text-indigo-600 dark:text-blue-500 w-5 h-5 sm:w-6 sm:h-6 mb-1.5 sm:mb-2" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">B.Tech CSE</span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">Graduated (7.6 CGPA)</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center">
              <FiUserCheck className="text-emerald-600 dark:text-[#10B981] w-5 h-5 sm:w-6 sm:h-6 mb-1.5 sm:mb-2" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-600 dark:text-[#10B981]">Open to Work</span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">Full-time Roles</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

