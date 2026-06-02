import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-transparent border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-400 font-medium">
          © 2026 {personalInfo.name} · Built with React & Tailwind · All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
