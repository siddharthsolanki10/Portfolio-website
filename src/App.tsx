import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
import BackgroundElements from './components/BackgroundElements';
import { ThemeProvider } from './contexts/ThemeContext';
import SEO from './components/SEO';

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-all duration-300 will-change-transform overflow-x-hidden overflow-y-auto">
        <BackgroundElements />
        <Navbar />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-xl text-gray-500 dark:text-gray-400">Loading...</div>}>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 will-change-transform"
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </motion.main>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;