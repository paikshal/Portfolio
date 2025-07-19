import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Student-Faculty Research Management System",
      category: "Web Development",
      tags: ["Python", "Django", "PostgreSQL", "ML"],
      description: "A comprehensive platform for managing research collaborations between students and faculty members.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/paikshal",
      live: "https://demo.com"
    },
    {
      id: 2,
      title: "Hand Detection Tic Tac Toe",
      category: "Machine Learning",
      tags: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
      description: "An interactive tic-tac-toe game controlled by hand gestures using computer vision.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/paikshal",
      live: "https://demo.com"
    },
    {
      id: 3,
      title: "Personal AI Chatbot",
      category: "AI",
      tags: ["Python", "NLP", "OpenAI", "Streamlit"],
      description: "An intelligent chatbot powered by natural language processing for personalized conversations.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/paikshal",
      live: "https://demo.com"
    }
  ];

  const filters = ['All', 'Web Development', 'Machine Learning', 'AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20" style={{ background: 'linear-gradient(to bottom, #262525, rgba(56, 119, 255, 0.05))' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Featured <span className="text-[#3877ff]">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Explore my latest work in data science and machine learning
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                   ? 'bg-[#3877ff] text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
              data-cursor-hover
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl border border-gray-800 hover:border-[#d957ff]/50 transition-all duration-300 overflow-hidden">
                <div className="backdrop-blur-lg rounded-2xl border border-gray-600 hover:border-[#3877ff]/50 transition-all duration-300 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(64, 64, 64, 0.8), rgba(38, 37, 37, 0.8))' }}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-[#3877ff]/20 text-[#3877ff] rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {project.description}
                    </p>
                    
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-[#14b8a6] hover:text-white transition-colors"
                        data-cursor-hover
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-[#3877ff] hover:text-white transition-colors"
                        data-cursor-hover
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="rounded-2xl border border-gray-600 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                style={{ background: 'linear-gradient(to bottom right, #404040, #262525)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                    data-cursor-hover
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {projects.find(p => p.id === selectedProject)?.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={projects.find(p => p.id === selectedProject)?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#14b8a6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#14b8a6]/80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor-hover
                    >
                      <Github size={20} />
                      View Code
                    </motion.a>
                    
                    <motion.a
                      href={projects.find(p => p.id === selectedProject)?.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#3877ff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3877ff]/80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor-hover
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;