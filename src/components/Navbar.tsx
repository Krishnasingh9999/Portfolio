import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
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
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-md shadow-lg border-b border-gray-900/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors duration-300"
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
        <div className="flex items-center md:hidden space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            aria-label="Toggle mobile navigation menu"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-gray-100 dark:border-gray-900/50 bg-white dark:bg-gray-950 shadow-inner overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-base font-medium py-2 transition-colors duration-300 ${
                    activeId === link.id
                      ? 'text-indigo-600 dark:text-indigo-400 border-l-2 border-indigo-600 pl-2'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white pl-2'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
