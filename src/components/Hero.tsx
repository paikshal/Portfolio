import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ExternalLink, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Paikshal Prajapti";
  const tagline = "Turning Data into Automation, Intelligence, and Insight.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1]
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(217, 87, 255, 0.5)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #262525, rgba(56, 119, 255, 0.1), #262525)' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%233877ff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            <span className="text-[#3877ff]">{displayText}</span>
            <motion.span
              className="text-[#3877ff]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 font-medium"
            style={{ fontFamily: 'Sora, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Data Scientist & ML Engineer
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 max-w-md leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            {tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-[#3877ff] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 border-2 border-[#3877ff] hover:bg-transparent hover:text-[#3877ff] transition-all duration-300"
              data-cursor-hover
            >
              <ExternalLink size={20} />
              View Projects
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-transparent text-[#14b8a6] px-8 py-3 rounded-full font-semibold flex items-center gap-2 border-2 border-[#14b8a6] hover:bg-[#14b8a6] hover:text-white transition-all duration-300"
              data-cursor-hover
            >
              <Mail size={20} />
              Contact
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-transparent text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 border-2 border-gray-500 hover:border-white transition-all duration-300"
              data-cursor-hover
            >
              <Download size={20} />
              Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={floatingAnimation}
            className="relative z-10"
          >
            <div className="w-80 h-80 mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3877ff] to-[#14b8a6] rounded-full blur-xl opacity-30"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center overflow-hidden">
                <img src="/paikshal.jpg" alt="Paikshal" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Floating particles */}
          {/* Floating dots removed for clean look */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={floatingAnimation}
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;