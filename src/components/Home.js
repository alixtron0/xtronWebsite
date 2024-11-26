import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const skillsData = [
  { name: 'جاوااسکریپت', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'ری‌اکت', icon: FaReact, color: '#61DAFB' },
  { name: 'نود جی‌اس', icon: FaNodeJs, color: '#339933' },
  { name: 'پایتون', icon: FaPython, color: '#3776AB' },
  { name: 'تایپ‌اسکریپت', icon: SiTypescript, color: '#3178C6' },
  { name: 'مونگو دی‌بی', icon: SiMongodb, color: '#47A248' },
  { name: 'اکسپرس', icon: SiExpress, color: '#ffffff' },
  { name: 'اس‌کیو‌ال', icon: FaDatabase, color: '#336791' },
  { name: 'تیلویند', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'نکست جی‌اس', icon: SiNextdotjs, color: '#ffffff' }
];

const Home = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i === 0 ? 'rgba(59, 130, 246, 0.1)' : i === 1 ? 'rgba(147, 51, 234, 0.1)' : 'rgba(236, 72, 153, 0.1)'} 0%, transparent 70%)`,
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Right Side */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="order-1 md:order-2 text-right"
          >
            <motion.div 
              className="relative space-y-6 backdrop-blur-md bg-gray-900/40 p-8 rounded-2xl overflow-hidden"
              initial={{ boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.1)" }}
              animate={{
                boxShadow: [
                  "0 0 0 1px rgba(59, 130, 246, 0.1)",
                  "0 0 0 2px rgba(59, 130, 246, 0.2)",
                  "0 0 0 1px rgba(59, 130, 246, 0.1)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(120deg, #60A5FA, #67E8F9, #818CF8)",
                  backgroundSize: "200% 200%",
                  opacity: 0.1
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />

              {/* Content */}
              <div className="relative">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold font-Vazir bg-clip-text text-transparent bg-gradient-to-l from-blue-400 via-cyan-300 to-blue-500 leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{ 
                    duration: 0.8,
                    backgroundPosition: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  توسعه‌ دهنده فول‌استک
                </motion.h1>

                <motion.p 
                  className="text-xl md:text-2xl text-blue-200 font-Vazir mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  متخصص جاوااسکریپت و پایتون
                </motion.p>

                <motion.p 
                  className="text-gray-300 font-Vazir text-lg leading-relaxed mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  سلام👋 من علی فراست هستم. یک توسعه‌دهنده در زمینه فرانت‌اند و بک‌اند. 
                  علاقه‌مند به ساخت وب‌سایت‌های مدرن و کاربردی با استفاده از جدیدترین تکنولوژی‌ها.
                </motion.p>

                <motion.div 
                  className="flex gap-4 justify-end pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <motion.a
                    href="#/projects"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden bg-gradient-to-l from-blue-600 to-blue-800 text-white font-Vazir py-3 px-8 rounded-xl transition-all duration-300"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">نمونه کارها</span>
                  </motion.a>

                  <motion.a
                    href="#/contact"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgba(96, 165, 250, 0.8)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-blue-500/30 text-blue-300 hover:text-blue-200 font-Vazir py-3 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  >
                    تماس با من
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Grid - Left Side */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="order-2 md:order-1"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(120deg, ${skill.color}20, ${skill.color}40, ${skill.color}20)`,
                      backgroundSize: '200% 200%'
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear"
                    }}
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}30 0%, transparent 70%)`
                    }}
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Main content box */}
                  <motion.div
                    className="relative bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 p-4 rounded-xl"
                    whileHover={{
                      scale: 1.05,
                      borderColor: `${skill.color}80`,
                      transition: {
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                          rotateY: [0, 360]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
                      </motion.div>
                      <span className="text-sm font-Vazir text-blue-200 text-center group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
