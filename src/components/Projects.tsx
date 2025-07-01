import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, Calendar, ChevronRight, Filter, Eye, Code, Zap } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = ['All', 'Full Stack', 'Frontend', 'E-commerce', 'Mini Projects'];

  const projects = [
    { 
      id: 0,
      title: 'Kidolio',
      description: "A future-ready platform to manage childhood records, track academic progress, and centralize health milestones. I contributed as the Frontend Developer, focusing on responsive UI, smooth navigation, and family-first experiences.",
      image: 'https://images.pexels.com/photos/861308/pexels-photo-861308.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full Stack',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Vercel'],
      github: '#',
      demo: 'https://kidolio.vercel.app',
      featured: true,
      year: '2025',
      status: 'Live',
      complexity: 'Advanced'
    },
    {
      id: 1,
      title: 'Appwrite Blog Platform',
      description: 'Full-featured blogging platform with blog creation, editing, image uploads, and secure user authentication. Built with modern React architecture and backend integration.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full Stack',
      tags: ['React', 'Tailwind CSS', 'Redux', 'Appwrite', 'TinyMCE'],
      github: 'https://github.com/mrsiddharthsolanki/Appwrite_Blog',
      demo: 'https://appwrite-blog-rosy-seven.vercel.app/',
      featured: true,
      year: '2025',
      status: 'Live',
      complexity: 'Advanced'
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
      year: '2025',
      status: 'On work',
      complexity: 'Advanced'
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
      year: '2024',
      status: '-',
      complexity: 'Intermediate'
    },
    {
      id: 4,
      title: 'Book Management System',
      description: 'DOM-based book management application with CRUD operations, form validation, and local storage integration.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      tags: ['JavaScript', 'DOM', 'Local Storage', 'Validation'],
      github: 'https://github.com/mrsiddharthsolanki/Book-MangeMent-System-/tree/main/Book%20Manger',
      demo: 'https://book-mangement-system-puce.vercel.app/',
      featured: false,
      year: '2024',
      status: 'Live',
      complexity: 'Beginner'
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
      year: '2025',
      status: '-',
      complexity: 'Beginner'
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
      year: '2025',
      status: '-',
      complexity: 'Intermediate'
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const featuredProjects = projects.filter(p => p.featured);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 px-6 py-3 rounded-full mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Work & Projects
              </span>
            </div>
          </div>
          
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Projects that </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
              Inspire & Innovate
            </span>
            </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Exploring innovation through <span className="font-semibold text-blue-600 dark:text-blue-400">20+ projects</span> 
            <br className="hidden sm:block" />
            showcasing modern web development and user experience design
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tech Stacks</div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Featured</div>
            </div>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mr-4">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter by:</span>
            </div>
            {filters.map((filterName) => (
              <button
                key={filterName}
                onClick={() => setFilter(filterName)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterName
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:scale-105 hover:shadow-lg backdrop-blur-sm border border-white/20'
                }`}
              >
                <span className="relative z-10">{filterName}</span>
                {filter === filterName && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Spotlight */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">Spotlight Projects</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Work
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My most impactful projects showcasing advanced development skills and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative transition-all duration-700 delay-${index * 100}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 group-hover:border-blue-500/30 group-hover:-translate-y-2">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Star size={12} />
                        Featured
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(project.complexity)}`}>
                        {project.complexity}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Calendar size={12} />
                        {project.year}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                        title="View Code"
                      >
                        <Github size={18} className="text-gray-700" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-200 shadow-lg"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-green-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-medium">{project.status}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-medium">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive collection of projects across different technologies and complexities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-blue-500/30 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star size={10} />
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(project.complexity)}`}>
                      {project.complexity}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full hover:bg-white hover:scale-110 transition-all duration-200"
                    >
                      <Github size={16} className="text-gray-700" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
                      <Calendar size={10} />
                      {project.year}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No projects found in this category.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                Try selecting a different filter to explore more projects.
              </p>
            </div>
          )}
        </div>

        {/* Enhanced CTA Section */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/50 dark:via-gray-900 dark:to-purple-950/50 rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6">
                <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Explore More</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Want to See More?
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover my complete portfolio with <span className="font-semibold text-blue-600 dark:text-blue-400">20+ projects</span> including 
                mini applications, UI experiments, and cutting-edge solutions. 
                Each project tells a story of growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://github.com/mrsiddharthsolanki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <Github size={20} />
                  <span>View All Projects</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Updated Weekly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>20+ Stars</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;