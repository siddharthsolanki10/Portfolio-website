import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Full Stack', 'Frontend', 'E-commerce', 'Mini Projects'];

  const projects = [
    {
      id: 1,
      title: 'Appwrite Blog Platform',
      description: 'Full-featured blogging platform with blog creation, editing, image uploads, and secure user authentication. Built with modern React architecture and backend integration.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full Stack',
      tags: ['React', 'Tailwind CSS', 'Redux', 'Appwrite', 'TinyMCE'],
      github: 'https://github.com/mrsiddharthsolanki/Appwrite_Blog',
      demo: '#',
      featured: true,
      year: '2025'
    },
    {
      id: 2,
      title: 'Twitter Clone - Social Media App',
      description: 'Real-time social media application with tweet functionality, bookmarks, user authentication, and profile editing capabilities.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full Stack',
      tags: ['React', 'Redux', 'Appwrite', 'React Router'],
      github: 'https://github.com/mrsiddharthsolanki/Tweeter-Cone',
      demo: '#',
      featured: true,
      year: '2025'
    },
    {
      id: 3,
      title: 'SwiftCart E-Commerce',
      description: 'Modern e-commerce platform with product listing, advanced filtering, shopping cart functionality, and responsive checkout UI.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      github: 'https://github.com/mrsiddharthsolanki/ShiftCart-ecommerce',
      demo: '#',
      featured: false,
      year: '2024'
    },
    {
      id: 4,
      title: 'Book Management System',
      description: 'DOM-based book management application with CRUD operations, form validation, and local storage integration.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      tags: ['JavaScript', 'DOM', 'Local Storage', 'Validation'],
      github: 'https://github.com/mrsiddharthsolanki/Book-MangeMent-System-/tree/main/Book%20Manger',
      demo: '#',
      featured: false,
      year: '2024'
    },
    {
      id: 5,
      title: 'Currency Converter',
      description: 'Real-time currency converter with live exchange rates, multiple currency support, and clean user interface.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mini Projects',
      tags: ['JavaScript', 'API', 'CSS', 'HTML'],
      github: 'https://github.com/mrsiddharthsolanki',
      demo: '#',
      featured: false,
      year: '2025'
    },
    {
      id: 6,
      title: 'React Todo Application',
      description: 'Feature-rich todo application with add, edit, delete functionality, local storage persistence, and responsive design.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mini Projects',
      tags: ['React', 'Hooks', 'Local Storage', 'CSS'],
      github: 'https://github.com/mrsiddharthsolanki',
      demo: '#',
      featured: false,
      year: '2025'
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
            className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-green-700 dark:text-green-300">Featured Work</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            20+ practical projects showcasing my skills in React.js, JavaScript, and modern web development
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filterName) => (
              <motion.button
                key={filterName}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterName)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterName
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 backdrop-blur-sm'
                }`}
              >
                {filterName}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star size={12} />
                      Featured
                    </span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Calendar size={12} />
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github size={20} className="text-gray-700" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="text-gray-700" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star size={12} />
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github size={20} className="text-gray-700" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="text-gray-700" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in More Projects?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I have 20+ projects including mini applications, UI clones, and experimental features. 
              Check out my GitHub for the complete collection!
            </p>
            <motion.a
              href="https://github.com/mrsiddharthsolanki"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Github size={20} />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;