import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20" style={{ backgroundColor: '#262525' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            My <span className="text-[#3877ff]">Resume</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Download my resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg rounded-2xl border border-gray-600 hover:border-[#3877ff]/50 transition-all duration-300 p-8"
            style={{ background: 'linear-gradient(to bottom right, rgba(64, 64, 64, 0.8), rgba(38, 37, 37, 0.8))' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Resume Preview */}
              <div className="relative">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-[#3877ff] to-[#14b8a6] p-6">
                    <h3 className="text-white font-bold text-xl">Paikshal Prajapti</h3>
                    <p className="text-gray-100">Data Scientist & ML Engineer</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
                      <div className="space-y-2">
                        <div className="border-l-2 border-[#3877ff] pl-3">
                          <p className="text-sm text-gray-600">Data Scientist</p>
                          <p className="text-xs text-gray-500">2023 - Present</p>
                        </div>
                        <div className="border-l-2 border-[#14b8a6] pl-3">
                          <p className="text-sm text-gray-600">ML Engineer</p>
                          <p className="text-xs text-gray-500">2022 - 2023</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {['Python', 'ML', 'Docker', 'Linux'].map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                      <div className="border-l-2 border-[#3877ff] pl-3">
                        <p className="text-sm text-gray-600">B.Tech Computer Science</p>
                        <p className="text-xs text-gray-500">2019 - 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg pointer-events-none"></div>
              </div>

              {/* Download Actions */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Download Resume
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Get a comprehensive overview of my skills, experience, and qualifications. 
                    My resume includes detailed information about my technical expertise, project experience, 
                    and professional achievements.
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#3877ff] to-[#14b8a6] text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-3 hover:from-[#3877ff]/80 hover:to-[#14b8a6]/80 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(56, 119, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor-hover
                  >
                    <Download size={20} />
                    Download PDF Resume
                  </motion.button>

                  <motion.button
                    className="w-full bg-transparent border-2 border-[#3877ff] text-[#3877ff] py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-[#3877ff] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor-hover
                  >
                    <Eye size={20} />
                    View Online Resume
                  </motion.button>
                </div>

                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Quick Stats</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-[#3877ff]">5+</div>
                      <div className="text-sm text-gray-300">Years Experience</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-[#14b8a6]">20+</div>
                      <div className="text-sm text-gray-300">Projects Completed</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-[#3877ff]">10+</div>
                      <div className="text-sm text-gray-300">Technologies</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-2xl font-bold text-[#14b8a6]">100%</div>
                      <div className="text-sm text-gray-300">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;