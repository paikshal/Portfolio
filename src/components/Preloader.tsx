import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const text = "Paikshal Prajapti";
  
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: '#262525' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="text-4xl md:text-6xl font-bold text-[#3877ff] mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.1,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Data Scientist & ML Engineer
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <div className="w-12 h-12 border-2 border-[#d957ff] rounded-full animate-spin border-t-transparent"></div>
          <div className="w-12 h-12 border-2 border-[#3877ff] rounded-full animate-spin border-t-transparent"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;