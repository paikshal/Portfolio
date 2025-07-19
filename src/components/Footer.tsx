import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/paikshal",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/paikshal-prajapti",
      label: "LinkedIn"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      href: "https://wa.me/91XXXXXXXXXX",
      label: "WhatsApp"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:paikshal.prajapti@email.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-600" style={{ background: 'linear-gradient(to top, #262525, #404040)' }}>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
              Paikshal <span className="text-[#3877ff]">Prajapti</span>
            </h3>
            <p className="text-gray-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Data Scientist & ML Engineer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3877ff] transition-colors duration-300 p-3 rounded-full border border-gray-500 hover:border-[#3877ff]/50"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(56, 119, 255, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                data-cursor-hover
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
          >
            <p className="text-gray-300 italic text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              "Turning data into automation, intelligence, and insight - one algorithm at a time."
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#3877ff] to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              © 2024 Paikshal Prajapti. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#3877ff] text-white p-3 rounded-full shadow-lg hover:bg-[#3877ff]/80 transition-all duration-300"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 20px rgba(56, 119, 255, 0.5)"
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-cursor-hover
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;