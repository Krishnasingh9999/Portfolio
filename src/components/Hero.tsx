import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { FiMapPin, FiCode, FiBriefcase, FiHome, FiMail, FiUserCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { tagline } = personalInfo;
  
  const rolesCycle = ['Full Stack Developer (MERN)', 'Software Engineer'];
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    const handleType = () => {
      const idx = loopNum % rolesCycle.length;
      const fullText = rolesCycle[idx];

      if (isDeleting) {
        setCurrentRoleText(fullText.substring(0, currentRoleText.length - 1));
        setTypingSpeed(22); // slightly slower deletion
      } else {
        setCurrentRoleText(fullText.substring(0, currentRoleText.length + 1));
        setTypingSpeed(45); // slightly slower typing speed
      }

      if (!isDeleting && currentRoleText === fullText) {
        setTypingSpeed(1000); // slightly longer pause at full text
        setIsDeleting(true);
      } else if (isDeleting && currentRoleText === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(200); // slightly longer pause before starting next role
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRoleText, isDeleting, loopNum, typingSpeed]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/KrishnaSingh9999',
      icon: <FaGithub className="w-5 h-5 text-white" />
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
      className="relative flex flex-col items-center bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-8 md:pb-10"
    >
      {/* Decorative Grid and Background Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-3">
              Hi, I'm
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Krishna Singh
              </span>
            </h1>

            {/* Dynamic Role Container */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-base sm:text-lg md:text-xl font-semibold mb-6">
              <span className="text-indigo-400 min-h-[28px] inline-flex items-center tracking-tight font-bold">
                <span>{currentRoleText}</span>
                <span className="ml-1 w-[2px] h-[20px] bg-indigo-400 animate-pulse shrink-0" />
              </span>
              <span className="text-gray-755 dark:text-gray-700">|</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] text-xs sm:text-sm font-bold">
                Java
              </span>
              <span className="text-gray-755 dark:text-gray-700">|</span>
              <span className="text-gray-300">Problem Solver</span>
            </div>

            <p className="max-w-xl text-sm sm:text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              {tagline}
            </p>

            {/* View My Work & Contact Me Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, 'projects')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-95 duration-200"
              >
                View My Work <span className="text-lg leading-none">&rarr;</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, 'contact')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-white bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2 active:scale-95 duration-200"
              >
                Contact Me <FiMail className="w-4 h-4 text-gray-400" />
              </a>
            </div>

            {/* Social Links under buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative w-full max-w-[340px] p-8 rounded-3xl bg-[#0c0d21]/60 border border-white/10 backdrop-blur-xl flex flex-col shadow-[0_0_50px_rgba(99,102,241,0.15)] hover:border-indigo-500/30 transition-colors duration-300"
            >
              {/* Profile image with gradient ring and green status dot */}
              <div className="relative mx-auto mb-6">
                <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-slate-900">
                    <img
                      src="/profile.jpg"
                      alt="Krishna Singh"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <span className="absolute bottom-1 right-2 w-4.5 h-4.5 bg-[#10B981] border-[3px] border-[#0c0d21] rounded-full shadow-md" />
              </div>

              {/* Card info list - left-aligned inside a block */}
              <div className="flex flex-col gap-4 text-gray-300 w-full max-w-[260px] mx-auto">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-indigo-400 w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium text-gray-300">Noida, India</span>
                </div>
                <div className="flex items-center gap-3 text-[#10B981]">
                  <FiBriefcase className="w-5 h-5 shrink-0 text-[#10B981]" />
                  <span className="text-sm font-semibold">Open to Work</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-indigo-400 w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium text-gray-300">B.Tech CSE (2022 – 2026)</span>
                </div>
                <div className="flex items-start gap-3">
                  <FiHome className="text-indigo-400 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-300 leading-tight">
                    KCC Institute of Technology & Management
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full mt-16 md:mt-20 p-6 bg-[#0c0d21]/40 border border-white/5 rounded-3xl shadow-[0_0_30px_rgba(99,102,241,0.05)] backdrop-blur-md"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-x-0 lg:divide-x divide-white/5">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <FiBriefcase className="text-indigo-400 w-6 h-6 mb-2" />
              <span className="text-xl sm:text-2xl font-bold text-white">4+</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1">Projects</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center pl-0 lg:pl-4">
              <FiCode className="text-indigo-400 w-6 h-6 mb-2" />
              <span className="text-xl sm:text-2xl font-bold text-white">200+</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1">DSA Problems</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center pl-0 lg:pl-4">
              <FaGraduationCap className="text-indigo-400 w-6 h-6 mb-2" />
              <span className="text-xl sm:text-2xl font-bold text-white">B.Tech CSE</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1">2026</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center pl-0 lg:pl-4">
              <FiUserCheck className="text-emerald-450 w-6 h-6 mb-2 text-emerald-400" />
              <span className="text-xl sm:text-2xl font-bold text-emerald-450 text-emerald-450 dark:text-emerald-400">Open to Work</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1">Full-time Opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

