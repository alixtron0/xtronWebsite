import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaStar } from 'react-icons/fa';
import limiterpng from '../images/limiter.png'
import xrt from '../images/x.png'
import gym from '../images/gym.png'
import vam from '../images/vam.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('همه');

  const filters = ['همه', 'فرانت‌اند', 'بک‌اند', 'فول‌استک'];

  const projects = [

    {
      title: 'ایپی لیمیتر xui',
      description: 'یک برنامه پایتون که اطلاعات کاربران رو از دیتابیس میگیره و محدودشون میکنه',
      image: limiterpng,
      category: 'بک‌اند',
      technologies: ['python', 'sql'],
      github: 'https://github.com/alixtron0/limiter',
      
    },
    {
      title: 'رستوران ایکس',
      description: 'لندینگ پیج رستوران با دیزاینی زیبا',
      image: xrt,
      category: 'فرانت‌اند',
      technologies: ['Html', 'Tailwind CSS'],
      github: 'https://github.com/alixtron0/x-restaurant',
      demo: 'https://alixtron0.github.io/x-restaurant/'
    },
    {
      title: 'لندینگ پیج باشگاه',
      description: 'یک لندینگ پیج زیبا برای باشگاه و با قابلیت های بیشتر',
      image: gym,
      category: 'فرانت‌اند',
      technologies: ['Html', ' CSS'],
      github: 'https://github.com/alixtron0/style-gym.ir',
      demo: 'https://gym.xtr.lol'
    },
    {
      title: 'سیستم مدریت وام',
      description: 'سیستم مدریت وام با فرانت اندی زیبا و بک اندی بشدت قدرتمند با قابلیت های زیاد یوسر و پسورد admin admin123',
      image: vam,
      category: 'فول‌استک',
      technologies: ['React', 'Node.js', 'sqllite', 'Express'],

      demo: 'http://x.xtr.lol:3000'
    },
    
  ];

  const filteredProjects = activeFilter === 'همه' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Floating stars animation
  const StarField = () => {
    return [...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <FaStar className="text-blue-300/30" />
      </motion.div>
    ));
  };

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Floating Elements */}
      <StarField />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-right mb-12"
        >
          <div className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-blue-500/30">
            <h2 className="text-4xl font-bold font-Vazir text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-cyan-300 mb-6">
              نمونه کارها
            </h2>
            <p className="text-gray-300 font-Vazir text-lg">
              برخی از پروژه‌های اخیر من که با تکنولوژی‌های مختلف پیاده‌سازی شده‌اند
            </p>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-Vazir transition-all duration-300 backdrop-blur-sm ${
                activeFilter === filter
                ? 'bg-blue-600/80 text-white shadow-lg shadow-blue-500/25 border border-blue-400/50'
                : 'bg-gray-800/30 text-gray-300 hover:bg-gray-700/50 border border-blue-500/20'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
                <div className="relative backdrop-blur-sm bg-gray-900/30 rounded-xl overflow-hidden border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <motion.div
                      className="absolute top-4 right-4 z-20"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <FaRocket className="text-blue-400/50 w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-Vazir text-blue-300 mb-2 text-right">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-right font-Vazir">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4 justify-end">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-blue-900/30 text-blue-300 rounded-full font-Vazir border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex justify-end gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <FaGithub className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
