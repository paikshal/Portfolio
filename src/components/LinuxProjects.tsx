import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ExternalLink, X } from 'lucide-react';

const LinuxProjects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Linux in Companies Blog",
      description: "Comprehensive guide on Linux adoption in enterprise environments",
      content: "Detailed analysis of how major corporations leverage Linux for scalability, security, and cost-effectiveness. Covers deployment strategies, case studies, and best practices.",
      command: "$ ./linux-enterprise-guide.sh",
      link: "https://blog.example.com/linux-companies"
    },
    {
      id: 2,
      title: "GUI → CLI Translation",
      description: "Tool to convert GUI operations to command-line equivalents",
      content: "Interactive utility that teaches command-line alternatives for common GUI tasks. Helps users transition from graphical interfaces to efficient terminal workflows.",
      command: "$ python gui-to-cli.py --interactive",
      link: "https://github.com/paikshal/gui-to-cli"
    },
    {
      id: 3,
      title: "Terminal Enhancement Tools",
      description: "Collection of scripts to enhance terminal productivity",
      content: "Custom aliases, functions, and utilities to supercharge your terminal experience. Includes colorization, shortcuts, and productivity boosters.",
      command: "$ bash enhance-terminal.sh --install",
      link: "https://github.com/paikshal/terminal-enhancements"
    },
    {
      id: 4,
      title: "Ctrl+C vs Ctrl+Z Guide",
      description: "Educational content on Linux signal handling",
      content: "In-depth explanation of process control signals in Linux. Covers SIGINT, SIGTERM, SIGKILL, and background process management.",
      command: "$ man signal-handling",
      link: "https://blog.example.com/linux-signals"
    },
    {
      id: 5,
      title: "Terminal WhatsApp Client",
      description: "Command-line interface for WhatsApp messaging",
      content: "Python-based terminal client for WhatsApp Web API. Send messages, manage contacts, and handle notifications from the command line.",
      command: "$ python whatsapp-cli.py --login",
      link: "https://github.com/paikshal/whatsapp-cli"
    },
    {
      id: 6,
      title: "Terminal Email Client",
      description: "Lightweight email client for terminal enthusiasts",
      content: "Feature-rich email client built for terminal users. Supports IMAP, SMTP, multiple accounts, and advanced filtering capabilities.",
      command: "$ ./terminal-mail --setup",
      link: "https://github.com/paikshal/terminal-mail"
    }
  ];

  const TerminalCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => setSelectedProject(project.id)}
      data-cursor-hover
    >
      <div className="bg-gray-900 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all duration-300 overflow-hidden">
        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm ml-2">terminal</span>
        </div>
        
        <div className="p-6 font-mono">
          <div className="text-green-400 mb-2">
            <span className="text-gray-400">user@system:</span>
            <span className="text-blue-400">~/projects</span>
            <span className="text-gray-400">$ </span>
          </div>
          
          <motion.div
            className="text-green-300 mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {project.command}
          </motion.div>
          
          <div className="text-white">
            <h3 className="text-lg font-bold mb-2 text-[#d957ff]">{project.title}</h3>
             <h3 className="text-lg font-bold mb-2 text-[#3877ff]">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <Terminal size={16} />
              <span>Click to view details</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20" style={{ background: 'linear-gradient(to bottom, #262525, #404040)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Linux <span className="text-[#3877ff]">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            System administration and terminal-based solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <TerminalCard key={project.id} project={project} index={index} />
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
                className="bg-gray-900 rounded-lg border border-green-500/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300 text-sm ml-2">
                      {projects.find(p => p.id === selectedProject)?.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                    data-cursor-hover
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 font-mono">
                  <div className="text-green-400 mb-4">
                    <span className="text-gray-400">user@system:</span>
                    <span className="text-blue-400">~/projects</span>
                    <span className="text-gray-400">$ </span>
                    <span className="text-green-300">
                      {projects.find(p => p.id === selectedProject)?.command}
                    </span>
                  </div>
                  
                  <div className="text-white space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#d957ff] mb-2">
                        {projects.find(p => p.id === selectedProject)?.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {projects.find(p => p.id === selectedProject)?.content}
                      </p>
                    </div>
                    
                    <motion.a
                      href={projects.find(p => p.id === selectedProject)?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded font-medium hover:bg-green-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor-hover
                    >
                      <ExternalLink size={20} />
                      View Project
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

export default LinuxProjects;