import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Share2, Github, Terminal } from 'lucide-react';

const PythonProjects = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const projects = [
    {
      id: 1,
      icon: <Mail className="w-12 h-12 text-[#3877ff]" />,
      title: "Send Email",
      description: "Automated email sending system with SMTP integration and template support",
      github: "https://github.com/paikshal/python-utility-hub/tree/main/email_sender_python"
    },
    {
      id: 2,
      icon: <MessageSquare className="w-12 h-12 text-[#14b8a6]" />,
      title: "Send SMS",
      description: "SMS gateway integration for automated text messaging and notifications",
      github: "https://github.com/paikshal/python-utility-hub/tree/main/sms_sender"
    },
    {
      id: 3,
      icon: <Phone className="w-12 h-12 text-[#3877ff]" />,
      title: "Make Phone Call",
      description: "Voice calling automation using Twilio API for programmatic calls",
      github: "https://github.com/paikshal/python-utility-hub/tree/main/phone_call"
    },
    {
      id: 4,
      icon: <Share2 className="w-12 h-12 text-[#14b8a6]" />,
      title: "Post on Social Media",
      description: "Multi-platform social media posting automation with scheduling",
      github: "https://github.com/paikshal/python-utility-hub/tree/main/instagram_auto_post"
    },
    {
      id: 5,
      icon: <MessageSquare className="w-12 h-12 text-[#3877ff]" />,
      title: "Send WhatsApp",
      description: "WhatsApp Business API integration for automated messaging",
      github: "https://github.com/paikshal/python-utility-hub/tree/main/whatsapp%20python"
    },
    {
      id: 6,
      icon: <Terminal className="w-12 h-12 text-[#14b8a6]" />,
      title: "CLI Menu App",
      description: "Interactive command-line interface with menu-driven navigation",
      github: "https://github.com/paikshal/python-utility-hub/tree/main/ssh_command"
    }
  ];

  const handleCardFlip = (id: number) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#262525' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Python <span className="text-[#3877ff]">Mini Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Automation scripts and utilities built with Python
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
              className="relative h-64 cursor-pointer"
              onClick={() => handleCardFlip(project.id)}
              data-cursor-hover
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ 
                  rotateY: flippedCards.includes(project.id) ? 180 : 0 
                }}
                transition={{ duration: 0.6 }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Front of card */}
                <div 
                  className="absolute inset-0 w-full h-full backdrop-blur-lg rounded-2xl border border-gray-600 hover:border-[#3877ff]/50 transition-all duration-300 flex flex-col items-center justify-center p-6"
                  style={{ background: 'linear-gradient(to bottom right, rgba(64, 64, 64, 0.8), rgba(38, 37, 37, 0.8))' }}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white text-center" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-center mt-2 text-sm">
                    Click to flip
                  </p>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute inset-0 w-full h-full backdrop-blur-lg rounded-2xl border border-[#3877ff]/50 flex flex-col items-center justify-center p-6"
                  style={{ background: 'linear-gradient(to bottom right, rgba(56, 119, 255, 0.2), rgba(20, 184, 166, 0.2))' }}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <p className="text-white text-center mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {project.description}
                  </p>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#3877ff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3877ff]/80 transition-colors"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(56, 119, 255, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    data-cursor-hover
                  >
                    <Github size={20} />
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PythonProjects;