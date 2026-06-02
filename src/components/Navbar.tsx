import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiHome, FiUser, FiCpu, FiFolder, FiBookOpen, FiAward, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 25
    }
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home', icon: <FiHome className="w-5 h-5" /> },
    { name: 'About', id: 'about', icon: <FiUser className="w-5 h-5" /> },
    { name: 'Skills', id: 'skills', icon: <FiCpu className="w-5 h-5" /> },
    { name: 'Projects', id: 'projects', icon: <FiFolder className="w-5 h-5" /> },
    { name: 'Education', id: 'education', icon: <FiBookOpen className="w-5 h-5" /> },
    { name: 'Achievements', id: 'achievements', icon: <FiAward className="w-5 h-5" /> },
    { name: 'Contact', id: 'contact', icon: <FiMail className="w-5 h-5" /> },
  ];

  const activeId = useScrollSpy(navLinks.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-gray-950'
          : isScrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-lg border-b border-slate-900 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors duration-300 z-50"
        >
          Krishna<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop Navigation Links & Download Button */}
        <div className="hidden md:flex items-center md:gap-4 lg:gap-6 xl:gap-8">
          <nav className="flex items-center md:space-x-3.5 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative py-1.5 md:text-xs lg:text-sm font-medium transition-colors duration-300 ${
                  activeId === link.id
                    ? 'text-indigo-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {activeId === link.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-lg font-medium md:text-xs lg:text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-1.5 lg:gap-2 shadow-md shadow-indigo-500/20 shrink-0"
          >
            <FiDownload className="w-4 h-4 shrink-0" />
            <span>
              <span className="hidden lg:inline">Download </span>Resume
            </span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center md:hidden space-x-4 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Toggle mobile navigation menu"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (Slides down from the top) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-gray-950 flex flex-col px-6 pt-28 pb-8"
          >
            {/* Navigation links centered vertically */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col space-y-5 my-auto text-center"
            >
              {navLinks.map((link) => (
                <motion.a
                  variants={itemVariants}
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-2xl font-bold tracking-tight py-1.5 transition-colors duration-300 ${
                    activeId === link.id
                      ? 'text-indigo-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Resume Button in Mobile Menu */}
              <motion.div variants={itemVariants} className="pt-4 flex justify-center">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
                >
                  <FiDownload className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Social Icons at bottom of overlay */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="mt-auto pt-6 border-t border-slate-900 flex justify-center gap-6 text-gray-400"
            >
              <motion.a
                variants={itemVariants}
                href="https://github.com/KrishnaSingh9999"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="https://www.linkedin.com/in/krishnasingh9811/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="mailto:krishna1863singh@gmail.com"
                className="hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
