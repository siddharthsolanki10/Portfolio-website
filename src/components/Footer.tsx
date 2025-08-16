import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ExternalLink, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mrsiddharthsolanki', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/siddharth-solanki-225439325/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:solankisiddharth059@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const projects = [
    { name: 'Kidolio', href: 'https://kidolio.vercel.app' },
    { name: 'Appwrite Blog Platform', href: 'https://github.com/mrsiddharthsolanki/Appwrite_Blog' },
    { name: 'Twitter Clone', href: 'https://github.com/mrsiddharthsolanki/Tweeter-Cone' },
    { name: 'SwiftCart E-Commerce', href: 'https://github.com/mrsiddharthsolanki/ShiftCart-ecommerce' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left justify-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col items-center justify-center"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 text-center">
              Siddharth Solanki
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-center">
              Frontend-focused MERN Stack Developer and B.Tech Computer Engineering student. I love crafting modern, user-centric web applications with React.js, Tailwind CSS, and a strong eye for UI/UX. Always eager to learn, collaborate, and turn ideas into engaging digital experiences. Let’s connect and build something great together!
            </p>
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">20+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-gray-400 text-sm">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">∞</div>
                <div className="text-gray-400 text-sm">Passion</div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon size={20} className="group-hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code size={20} className="text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-2 bg-blue-400 rounded-full transition-all duration-300"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ExternalLink size={20} className="text-purple-400" />
              Featured Projects
            </h4>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.name}>
                  <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-2 bg-purple-400 rounded-full transition-all duration-300"></span>
                    {project.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Education Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left gap-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Currently Studying</h4>
              <p className="text-gray-300">B.Tech Computer Engineering at Silver Oak University, Ahmedabad</p>
              <p className="text-gray-400 text-sm">2023 - Present</p>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Available for Opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>Built with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using React.js & Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Coffee size={16} className="text-orange-400" />
                <span>Fueled by coffee & passion</span>
              </div>
              <div>
                © {new Date().getFullYear()} Siddharth Solanki. All rights reserved.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;