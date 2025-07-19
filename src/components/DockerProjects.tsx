import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const DockerProjects = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Why Docker?",
      description: "Comprehensive guide explaining Docker's benefits and use cases in modern development",
      icon: "🐳",
      github: "https://github.com/paikshal/docker-guide",
      demo: "https://docker-guide.demo.com"
    },
    {
      id: 2,
      title: "Docker Tools",
      description: "Collection of useful Docker utilities and helper scripts for container management",
      icon: "🛠️",
      github: "https://github.com/paikshal/docker-tools",
      demo: "https://docker-tools.demo.com"
    },
    {
      id: 3,
      title: "Apache in Docker",
      description: "Containerized Apache web server with custom configurations and optimization",
      icon: "🌐",
      github: "https://github.com/paikshal/apache-docker",
      demo: "https://apache-docker.demo.com"
    },
    {
      id: 4,
      title: "Docker-in-Docker (DinD)",
      description: "Advanced Docker setup enabling Docker commands within Docker containers",
      icon: "🔄",
      github: "https://github.com/paikshal/docker-in-docker",
      demo: "https://dind.demo.com"
    },
    {
      id: 5,
      title: "GUI in Docker",
      description: "Running graphical applications inside Docker containers with X11 forwarding",
      icon: "🖥️",
      github: "https://github.com/paikshal/docker-gui",
      demo: "https://docker-gui.demo.com"
    },
    {
      id: 6,
      title: "Docker Sound",
      description: "Audio support in Docker containers with PulseAudio integration",
      icon: "🔊",
      github: "https://github.com/paikshal/docker-sound",
      demo: "https://docker-sound.demo.com"
    }
  ];

  return (
    <section className="py-20" style={{ background: 'linear-gradient(to bottom, #404040, #262525)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Docker <span className="text-[#3877ff]">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Containerization solutions and Docker ecosystem tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              data-cursor-hover
            >
              <motion.div
                className="relative h-80 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-lg rounded-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 overflow-hidden"
                animate={{
                  rotateY: hoveredCard === project.id ? 15 : 0,
                  scale: hoveredCard === project.id ? 1.05 : 1,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                whileHover={{
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
              >
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between">
                  <div className="text-center">
                    <motion.div
                      className="text-6xl mb-6"
                      animate={{
                        scale: hoveredCard === project.id ? 1.2 : 1,
                        rotate: hoveredCard === project.id ? 360 : 0
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.icon}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-4 justify-center mt-6">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor-hover
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor-hover
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/0 group-hover:border-blue-400/50 transition-all duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DockerProjects;