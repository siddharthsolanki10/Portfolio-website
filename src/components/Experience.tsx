import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      type: 'education',
      institution: 'Silver Oak University',
      position: 'B.Tech in Computer Engineering',
      location: 'Ahmedabad, Gujarat',
      period: '2023 - Present',
      description: 'Currently pursuing Bachelor of Technology in Computer Engineering with focus on modern web technologies and software development.',
      highlights: [
        'Specializing in Frontend Development and React.js',
        'Active participant in coding competitions and hackathons',
        'Building practical projects to strengthen technical skills',
        'Learning advanced concepts in Computer Science'
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      status: 'Current'
    },
    {
      id: 2,
      type: 'education',
      institution: 'Pulkit Madhyamik Shala',
      position: 'Higher Secondary Certificate (XII)',
      location: 'Junagadh, Gujarat',
      period: '2022 - 2023',
      description: 'Completed Higher Secondary education in Physics, Chemistry, and Mathematics (PCM) stream from Gujarat State Education Board.',
      highlights: [
        'Focused on PCM (Physics, Chemistry, Mathematics)',
        'Developed strong analytical and problem-solving skills',
        'Foundation for engineering studies',
        'Gujarat State Education Board (GSEB)'
      ],
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
      status: 'Completed'
    },
    {
      id: 3,
      type: 'education',
      institution: 'Manas School',
      position: 'Secondary School Certificate (X)',
      location: 'Junagadh, Gujarat',
      period: '2020 - 2021',
      description: 'Completed Secondary education from Gujarat State Education Board with strong academic foundation.',
      highlights: [
        'Gujarat State Education Board (GSEB)',
        'Strong foundation in core subjects',
        'Developed interest in technology and programming',
        'Excellent academic performance'
      ],
      icon: GraduationCap,
      color: 'from-green-500 to-teal-500',
      status: 'Completed'
    },
  ];

  const achievements = [
    {
      title: '20+ Projects Completed',
      description: 'Built various web applications including blogs, e-commerce sites, and mini projects',
      icon: Code,
      color: 'text-blue-600'
    },
    {
      title: 'Self-Taught Developer',
      description: 'Learned modern web technologies through online resources and practical projects',
      icon: Award,
      color: 'text-purple-600'
    },
    {
      title: 'Modern Tech Stack',
      description: 'Proficient in React.js, JavaScript, Tailwind CSS, and various development tools',
      icon: Code,
      color: 'text-green-600'
    },
  ];

  const skills = [
    'React.js Development',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Tailwind CSS',
    'Redux State Management',
    'React Router',
    'Git & GitHub',
    'Responsive Design',
    'UI/UX with Figma',
    'Problem Solving'
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
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
            className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Education & Experience</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My Learning
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My educational background and self-learning journey in frontend development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-6 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-current rounded-full bg-gradient-to-r ${exp.color}`}></div>

                    {/* Content */}
                    <div className="ml-6 sm:ml-20">
                      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 justify-between mb-4 min-w-0 w-full">
                          <div className="flex items-center gap-3 min-w-0 w-full">
                            <div className={`bg-gradient-to-r ${exp.color} p-3 rounded-lg`}>
                              <exp.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="min-w-0 w-full">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate break-words w-full">
                                {exp.position}
                              </h3>
                              <p className="text-blue-600 dark:text-blue-400 font-medium truncate break-words w-full">
                                {exp.institution}
                              </p>
                              <div className="flex flex-wrap items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1 min-w-0 w-full">
                                <div className="flex items-center gap-1 min-w-0">
                                  <Calendar size={14} />
                                  <span className="truncate max-w-[100px] sm:max-w-none">{exp.period}</span>
                                </div>
                                <div className="flex items-center gap-1 min-w-0">
                                  <MapPin size={14} />
                                  <span className="truncate max-w-[120px] sm:max-w-none">{exp.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap shrink-0 mt-2 sm:mt-0 ${
                            exp.status === 'Current' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          }`}>
                            {exp.status}
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {exp.description}
                        </p>

                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements & Skills */}
          <div className="lg:col-span-1 space-y-8">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-white/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Achievements
                </h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.05, duration: 0.4 }}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl"
            >
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                Currently Learning
              </h4>
              <p className="text-green-600 dark:text-green-400 text-sm">
                Advanced React patterns, TypeScript, Next.js, and backend development with Node.js to become a well-rounded full-stack developer.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;