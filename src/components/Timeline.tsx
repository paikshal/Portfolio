import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Timeline = () => {
  const timelineData = [
    {
      year: "2025",
      title: "Advanced AI & ML Research",
      company: "Independent Research",
      location: "Remote",
      description: "Focusing on cutting-edge machine learning algorithms and automation solutions for real-world applications.",
      type: "work",
      skills: ["Deep Learning", "Computer Vision", "NLP", "MLOps"]
    },
    {
      year: "2024",
      title: "Project Automation Specialist",
      company: "Freelance",
      location: "Remote",
      description: "Developed automation workflows using Python, Docker, and cloud technologies for various clients.",
      type: "work",
      skills: ["Python", "Docker", "CI/CD", "Cloud Computing"]
    },
    {
      year: "2023",
      title: "Bachelor of Technology",
      company: "XYZ University",
      location: "India",
      description: "Specialized in Computer Science with focus on Data Science and Machine Learning.",
      type: "education",
      skills: ["Data Structures", "Algorithms", "Database Management", "Software Engineering"]
    },
    {
      year: "2022",
      title: "Full Stack Development",
      company: "Tech Startup",
      location: "Remote",
      description: "Built web applications using modern technologies and implemented ML models in production.",
      type: "work",
      skills: ["React", "Node.js", "Python", "Machine Learning"]
    },
    {
      year: "2021",
      title: "Linux System Administration",
      company: "Open Source Contributor",
      location: "Global",
      description: "Contributed to various Linux projects and developed system administration tools.",
      type: "work",
      skills: ["Linux", "System Administration", "Shell Scripting", "DevOps"]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="timeline" className="py-20" style={{ backgroundColor: '#262525' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Experience & <span className="text-[#3877ff]">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            My journey through education and professional experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#3877ff] to-[#14b8a6] h-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    className="backdrop-blur-lg rounded-2xl border border-gray-600 hover:border-[#3877ff]/50 transition-all duration-300 p-6"
                    style={{ background: 'linear-gradient(to bottom right, rgba(64, 64, 64, 0.8), rgba(38, 37, 37, 0.8))' }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-[#3877ff]" />
                      <span className="text-[#3877ff] font-bold text-lg">{item.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <ExternalLink className="w-4 h-4 text-[#14b8a6]" />
                      <span className="text-[#14b8a6] font-medium">{item.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{item.location}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-[#3877ff]/20 text-[#3877ff] rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="relative z-10 w-6 h-6 bg-[#3877ff] rounded-full border-4"
                  style={{ borderColor: '#262525' }}
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(56, 119, 255, 0.4)",
                      "0 0 0 10px rgba(56, 119, 255, 0)",
                      "0 0 0 0 rgba(56, 119, 255, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;