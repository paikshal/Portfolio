import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Target, Code } from 'lucide-react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const cards = [
    {
      icon: <Brain className="w-12 h-12 text-[#d957ff]" />,
      title: "My Background",
      content: "Passionate Data Scientist with expertise in machine learning, automation, and intelligent systems. I transform complex data into actionable insights that drive business decisions and innovation."
    },
    {
      icon: <Target className="w-12 h-12 text-[#14b8a6]" />,
      title: "My Vision",
      content: "Building the future through AI and automation. I focus on creating intelligent solutions that solve real-world problems and make technology accessible to everyone."
    },
    {
      icon: <Code className="w-12 h-12 text-[#d957ff]" />,
      title: "My Tech Stack",
      content: "Python, Machine Learning, Docker, Linux, SQL, Power BI, and modern web technologies. I believe in using the right tools to create efficient and scalable solutions."
    }
  ];

  return (
    <section id="about" className="py-20 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #262525, rgba(56, 119, 255, 0.05))' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            About <span className="text-[#3877ff]">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Discover my journey in data science and machine learning
          </p>
        </motion.div>

        <div ref={containerRef} className="relative h-[400px] overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-8 absolute top-0 left-0"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="min-w-[350px] h-[350px] p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl border border-gray-800 hover:border-[#d957ff]/50 transition-all duration-300"
                className="min-w-[350px] h-[350px] p-8 backdrop-blur-lg rounded-2xl border border-gray-600 hover:border-[#3877ff]/50 transition-all duration-300"
                style={{ background: 'linear-gradient(to bottom right, rgba(64, 64, 64, 0.8), rgba(38, 37, 37, 0.8))' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(56, 119, 255, 0.2)"
                }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {card.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {card.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;