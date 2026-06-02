import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';


// Lazy load sections for optimized page performance and code splitting
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const FeaturedProject = lazy(() => import('./components/FeaturedProject'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20 bg-white dark:bg-gray-950 text-indigo-600 dark:text-indigo-400">
    <div className="w-10 h-10 border-4 border-current border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased selection:bg-indigo-500 selection:text-white">
        <Suspense fallback={<SectionLoader />}>
          <Navbar />
          <main>
            <Hero />
            <FeaturedProject />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
