import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, X, ExternalLink } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Linux for Enterprises: A Comprehensive Guide",
      excerpt: "Exploring how major corporations leverage Linux for scalability, security, and cost-effectiveness in their infrastructure.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Linux",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "Linux has become the backbone of enterprise computing, powering everything from web servers to supercomputers. This comprehensive guide explores how organizations can successfully adopt Linux in their infrastructure, covering deployment strategies, security considerations, and cost-benefit analysis. We'll examine real-world case studies from Fortune 500 companies and provide actionable insights for IT decision-makers.",
      tags: ["Linux", "Enterprise", "System Administration", "Open Source"]
    },
    {
      id: 2,
      title: "Real-World Docker: Best Practices and Use Cases",
      excerpt: "Practical insights into containerization strategies and Docker implementation patterns for production environments.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Docker",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "Docker has revolutionized how we build, ship, and run applications. This article dives deep into production-ready Docker practices, including multi-stage builds, security considerations, orchestration strategies, and monitoring approaches. Learn from real-world implementations and avoid common pitfalls in your containerization journey.",
      tags: ["Docker", "DevOps", "Containerization", "Production"]
    },
    {
      id: 3,
      title: "AI & Automation: Building Intelligent Scripts",
      excerpt: "Leveraging artificial intelligence to create smarter automation solutions for everyday tasks and complex workflows.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "AI",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "The intersection of AI and automation opens up incredible possibilities for solving complex problems. This article explores how to build intelligent scripts that can adapt, learn, and make decisions. We'll cover practical examples using Python, machine learning libraries, and automation frameworks to create solutions that go beyond simple scripting.",
      tags: ["AI", "Automation", "Machine Learning", "Python"]
    },
    {
      id: 4,
      title: "Python for Data Science: Advanced Techniques",
      excerpt: "Deep dive into advanced Python techniques for data manipulation, analysis, and machine learning model development.",
      date: "2023-12-28",
      readTime: "12 min read",
      category: "Python",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "Python's ecosystem for data science is vast and powerful. This comprehensive guide covers advanced techniques in pandas, NumPy, and scikit-learn, along with best practices for data preprocessing, feature engineering, and model optimization. Perfect for data scientists looking to level up their Python skills.",
      tags: ["Python", "Data Science", "Machine Learning", "Analytics"]
    },
    {
      id: 5,
      title: "Building Scalable Web Applications",
      excerpt: "Architecture patterns and technologies for creating web applications that can handle growth and high traffic loads.",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "Scalability is crucial for modern web applications. This article explores various architecture patterns, database optimization techniques, caching strategies, and deployment practices that enable applications to scale effectively. Learn how to build systems that grow with your user base.",
      tags: ["Web Development", "Scalability", "Architecture", "Performance"]
    },
    {
      id: 6,
      title: "The Future of DevOps: Trends and Predictions",
      excerpt: "Exploring emerging trends in DevOps practices, tools, and methodologies that will shape the future of software development.",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "DevOps",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "DevOps continues to evolve rapidly, with new tools and practices emerging regularly. This article examines the latest trends in CI/CD, infrastructure as code, monitoring, and security integration. We'll also explore predictions for the future of DevOps and how organizations can prepare for upcoming changes.",
      tags: ["DevOps", "CI/CD", "Infrastructure", "Future Tech"]
    }
  ];

  const categories = ['All', 'Linux', 'Docker', 'AI', 'Python', 'Web Development', 'DevOps'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-20" style={{ background: 'linear-gradient(to bottom, #262525, rgba(56, 119, 255, 0.05))' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Latest <span className="text-[#3877ff]">Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Insights, tutorials, and thoughts on technology and development
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#3877ff] text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post.id)}
              data-cursor-hover
            >
              <div className="backdrop-blur-lg rounded-2xl border border-gray-600 hover:border-[#3877ff]/50 transition-all duration-300 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(64, 64, 64, 0.8), rgba(38, 37, 37, 0.8))' }}>
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#3877ff]/80 text-white rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3877ff] transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-[#14b8a6]/20 text-[#14b8a6] rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.div
                      className="flex items-center gap-2 text-[#3877ff] group-hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm">Read More</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="rounded-2xl border border-gray-600 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                style={{ background: 'linear-gradient(to bottom right, #404040, #262525)' }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const post = blogPosts.find(p => p.id === selectedPost);
                  return post ? (
                    <div>
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 object-cover"
                        />
                        <button
                          onClick={() => setSelectedPost(null)}
                          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          data-cursor-hover
                        >
                          <X size={20} />
                        </button>
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 bg-[#3877ff] text-white rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h1 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {post.title}
                        </h1>
                        
                        <div className="prose prose-invert max-w-none">
                          <p className="text-gray-300 leading-relaxed text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {post.content}
                          </p>
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-gray-800">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-[#14b8a6]/20 text-[#14b8a6] rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Blog;