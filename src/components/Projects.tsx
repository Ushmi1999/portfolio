import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Star, Eye, Code2, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  category: string;
  stats: {
    stars: number;
    views: number;
    forks: number;
  };
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = ['All', 'Web App', 'Mobile', 'API', 'Tool'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'School Management System',
      description: 'I developed a web-based School Management System using PHP and MySQL to manage student data, attendance, grades, and teacher assignments. The system includes secure login for admins, teachers, and students, and features like class scheduling, result management, and attendance tracking. This project helped me gain hands-on experience in backend development, database integration, and user role management.',
      image: '/sms.jpeg',
      technologies: ['PHP', 'MySQL'],
      github: '#',
      demo: '#',
      featured: true,
      category: 'Web App',
      stats: { stars: 234, views: 1200, forks: 45 }
    },
    {
      id: 2,
      title: 'Arogya e - counselling',
      description: 'Arogya is a web-based e-counseling system developed to connect clients with professional therapists in a secure and user-friendly environment. The platform features client registration, appointment booking, counselor profiles, session management, feedback, and online payments. Developed using Node.js, Express.js, and Mysql, this project strengthened my skills in full-stack development, API integration, and user-centered design.',
      image: '/e-counselling.jpg',
      technologies: ['Next.js', 'Express.js', 'MYSQL', 'TypeScript'],
      github: '#',
      demo: '#',
      featured: true,
      category: 'Web App',
      stats: { stars: 189, views: 890, forks: 32 }
    },
    
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => [...prev, index]);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [filteredProjects]);

  return (
    <section className="py-20 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 relative z-30">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 liquid-card">
            <div className="p-2 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-xl">
              <Code2 className="text-white drop-shadow-lg" size={24} />
            </div>
            <span className="text-purple-200 font-medium drop-shadow-sm">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            A curated collection of my most impactful work, showcasing innovation, technical excellence, and creative problem-solving.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="flex flex-wrap gap-2 p-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 liquid-card">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 liquid-button relative ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-purple-500/50 to-blue-500/50 text-white border border-white/30'
                    : 'text-gray-200 hover:text-white hover:bg-white/20'
                }`}
              >
                {category}
                {activeFilter === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`group relative transition-all duration-700 ${
                visibleProjects.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {project.featured ? (
                // Featured Project Layout
                <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-purple-400/50 transition-all duration-500 shadow-2xl liquid-card">
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/80 to-orange-500/80 rounded-full backdrop-blur-sm border border-white/20">
                      <Star className="text-white drop-shadow-lg" size={16} />
                      <span className="text-white font-medium text-sm drop-shadow-sm">Featured</span>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden rounded-l-3xl lg:rounded-r-none rounded-r-3xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-purple-900/40 transition-all duration-500" />
                      
                      {/* Action Buttons */}
                      <div className="absolute bottom-6 right-6 flex gap-3">
                        <a
                          href={project.github}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-gray-200 hover:text-white hover:bg-purple-500/50 transition-all duration-300 border border-white/20 liquid-button transform hover:scale-110"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demo}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-gray-200 hover:text-white hover:bg-blue-500/50 transition-all duration-300 border border-white/20 liquid-button transform hover:scale-110"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>

                      {/* Stats Overlay */}
                      <div className="absolute top-6 right-6 flex flex-col gap-2">
                        <div className="flex items-center gap-1 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full">
                          <Star className="text-yellow-400" size={14} />
                          <span className="text-white text-sm font-medium">{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full">
                          <Eye className="text-blue-400" size={14} />
                          <span className="text-white text-sm font-medium">{project.stats.views}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 rounded-full text-sm border border-white/20 backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors duration-300 drop-shadow-lg">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-200 mb-8 leading-relaxed text-lg drop-shadow-sm">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 rounded-full text-sm border border-white/20 backdrop-blur-sm liquid-tag hover:scale-105 transition-transform duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-6">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors duration-300 drop-shadow-sm group/link"
                        >
                          <Github size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
                          <span className="font-medium">View Code</span>
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center gap-2 text-gray-200 hover:text-purple-300 transition-colors duration-300 drop-shadow-sm group/link"
                        >
                          <ExternalLink size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
                          <span className="font-medium">Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Regular Project Layout
                <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-purple-400/50 transition-all duration-500 shadow-2xl liquid-card group">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Image Section */}
                    <div className="md:col-span-2 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 group-hover:from-purple-900/20 transition-all duration-500" />
                      
                      {/* Quick Stats */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <div className="flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full">
                          <Zap className="text-yellow-400" size={12} />
                          <span className="text-white text-xs font-medium">{project.stats.forks}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-3 p-6 md:p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 rounded-full text-sm border border-white/20 backdrop-blur-sm">
                          {project.category}
                        </span>
                        <div className="flex gap-2">
                          <a
                            href={project.github}
                            className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-200 hover:text-white hover:bg-purple-500/50 transition-all duration-300 border border-white/20 liquid-button"
                          >
                            <Github size={16} />
                          </a>
                          <a
                            href={project.demo}
                            className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-200 hover:text-white hover:bg-blue-500/50 transition-all duration-300 border border-white/20 liquid-button"
                          >
                            <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 drop-shadow-lg">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-200 mb-4 leading-relaxed drop-shadow-sm line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 rounded-full text-xs border border-white/20 backdrop-blur-sm liquid-tag"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs border border-white/20 backdrop-blur-sm">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-300">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="text-yellow-400" size={14} />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="text-blue-400" size={14} />
                            <span>{project.stats.views}</span>
                          </div>
                        </div>
                        <div className="text-purple-300 font-medium">View Project →</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 liquid-card">
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
              Interested in collaborating?
            </h3>
            <p className="text-gray-200 mb-6 drop-shadow-sm">
              Let's discuss your next project and bring your ideas to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/50 to-blue-600/50 hover:from-purple-600/70 hover:to-blue-600/70 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 backdrop-blur-xl border border-white/20 liquid-button"
            >
              <span>Start a Project</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;