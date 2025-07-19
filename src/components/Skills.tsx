import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, Users, Clock } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Technical Skills",
      skills: ["OOPS", "Operating Systems", "DBMS", "Machine Learning"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "React", "Node.js"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Platforms",
      skills: ["Git", "VS Code", "Docker", "Linux", "Power BI", "Jupyter"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Analytics",
      skills: ["SQL", "Power BI", "Data Analysis", "Machine Learning"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      skills: ["Time Management", "Teamwork", "Quick Learner", "Problem Solving"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#262525' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Technical <span className="text-[#3877ff]">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(56, 119, 255, 0.2)"
              }}
              className="group p-6 backdrop-blur-lg rounded-2xl border border-gray-600 hover:border-[#3877ff]/50 transition-all duration-300 cursor-pointer"
              style={{ background: 'linear-gradient(to bottom right, rgba(64, 64, 64, 0.8), rgba(38, 37, 37, 0.8))' }}
              data-cursor-hover
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="text-[#3877ff] mr-3"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-[#14b8a6] rounded-full mr-3"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;