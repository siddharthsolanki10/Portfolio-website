import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Database, Zap, Award, Users, Coffee, Heart, BookOpen, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: 'Frontend Specialist',
      description: 'Building interactive, scalable React.js applications with a focus on clean code and maintainability.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'UI/UX & Design',
      description: 'Designing beautiful, user-centric interfaces using Figma and Tailwind CSS for seamless experiences.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Project-Based Learning',
      description: '20+ hands-on projects including full-stack apps, e-commerce, and real-world UI clones.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Zap,
      title: 'Modern Stack',
      description: 'React.js, Redux, Tailwind, and supporting backend with Node.js, Express, MongoDB, and Appwrite.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const stats = [
    { icon: Award, number: '20+', label: 'Projects Built', color: 'text-blue-600' },
    { icon: BookOpen, number: 'B.Tech', label: 'Computer Eng.', color: 'text-purple-600' },
    { icon: Coffee, number: '∞', label: 'Learning Hours', color: 'text-orange-600' },
    { icon: Heart, number: '100%', label: 'Passion', color: 'text-red-600' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">About Me</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            MERN Stack Developer
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              with a Frontend Focus
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a B.Tech Computer Engineering student at Silver Oak University with a passion for building modern, user-focused web applications. My strengths lie in frontend development—creating clean, responsive interfaces with React.js, Tailwind CSS, and Figma—while also supporting full-stack features with Node.js, Express, MongoDB, and Appwrite. I thrive on transforming ideas into engaging digital experiences through thoughtful design and robust code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Hi, I'm Siddharth Solanki, a frontend-focused MERN stack developer based in Ahmedabad. I thrive on building engaging user interfaces and practical web solutions. My journey is driven by curiosity, hands-on learning, and a passion for UI/UX.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With 20+ projects, including a Twitter clone, blog platform, and Kidolio (BOLT Hackathon), I specialize in React.js, Tailwind CSS, and Figma. I also work with Node.js and MongoDB to support full-stack features. Always eager to learn, I enjoy collaborating and turning ideas into reality.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, number, label, color }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${color}`} />
                    <div className={`text-2xl font-bold ${color}`}>{number}</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">{label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Educational Background
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white">Silver Oak University</h4>
                <p className="text-blue-600 dark:text-blue-400">B.Tech Computer Engineering</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">2023 - Present</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white">Pulkit Madhyamik Shala</h4>
                <p className="text-purple-600 dark:text-purple-400">HSC (XII - PCM)</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">2022 - 2023</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white">Manas School</h4>
                <p className="text-green-600 dark:text-green-400">SSC (X - GSEB)</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">2020 - 2021</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;