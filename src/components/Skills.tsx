import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', level: 88, color: 'from-cyan-400 to-blue-500' },
        { name: 'Redux', level: 85, color: 'from-purple-500 to-indigo-600' },
        { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-cyan-600' },
        { name: 'Bootstrap', level: 80, color: 'from-pink-500 to-red-500' },
      ],
    },
    {
      title: 'Basics',
      skills: [
        { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', level: 92, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js (Basic)', level: 70, color: 'from-green-500 to-emerald-600' },
        { name: 'Express.js', level: 68, color: 'from-gray-700 to-gray-900' },
        { name: 'MongoDB', level: 75, color: 'from-green-400 to-green-700' },
        { name: 'Appwrite', level: 65, color: 'from-blue-400 to-blue-700' },
      ],
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'from-gray-700 to-gray-900' },
        { name: 'Postman', level: 80, color: 'from-orange-400 to-yellow-500' },
        { name: 'Figma', level: 82, color: 'from-purple-400 to-pink-500' },
        { name: 'Framer Motion', level: 78, color: 'from-pink-400 to-purple-600' },
        { name: 'UI/UX Design', level: 85, color: 'from-blue-400 to-purple-500' },
        { name: 'Prototyping (Figma)', level: 80, color: 'from-pink-400 to-blue-400' },
      ],
    },
  ];

  const techStack = [
    { name: 'React', icon: '⚛️', description: 'Component-based UI library' },
    { name: 'JavaScript', icon: '🟨', description: 'Modern ES6+ features' },
    { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS framework' },
    { name: 'Redux', icon: '🔄', description: 'State management' },
    { name: 'Git', icon: '🔧', description: 'Version control' },
    { name: 'Figma', icon: '🎯', description: 'UI/UX Design tool' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
            className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Skills & Technologies</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Technical
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
             MERN stack technologies and modern tools I use to build seamless, scalable, and engaging web experiences.
          </p>
        </motion.div>

        {/* Skills Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ x: [-100, 200] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Preferred Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Currently Learning & Exploring
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              As a passionate learner, I'm constantly expanding my skill set and staying updated 
              with the latest frontend technologies and industry best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Advanced React Patterns', 'TypeScript', 'Next.js', 'Backend Development'].map((topic) => (
                <span
                  key={topic}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;