import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaServer, FaDatabase, FaRocket, FaInstagram } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    {
      category: "فرانت‌اند",
      icon: <FaCode className="text-blue-400 w-6 h-6" />,
      items: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 90 },
        { name: "React.js", icon: <SiReact className="text-blue-400" />, level: 85 },
        { name: "Next.js", icon: <SiReact className="text-white" />, level: 80 },
        { name: "HTML/CSS", icon: <FaCode className="text-orange-400" />, level: 95 }
      ]
    },
    {
      category: "بک‌اند",
      icon: <FaServer className="text-green-400 w-6 h-6" />,
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: 90 },
        { name: "Python", icon: <SiPython className="text-blue-500" />, level: 80 },
        { name: "Express.js", icon: <SiNodedotjs className="text-gray-400" />, level: 85 }
      ]
    },
    {
      category: "پایگاه داده",
      icon: <FaDatabase className="text-purple-400 w-6 h-6" />,
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 85 },
        { name: "SQL", icon: <FaDatabase className="text-blue-400" />, level: 80 }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 relative">
      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 0
          }}
          animate={{
            y: [0, Math.random() * 30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <FaRocket className="text-blue-500/20 w-8 h-8" />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-right mb-16"
        >
          <div className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-blue-500/30">
            <h2 className="text-4xl font-bold font-Vazir text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-cyan-300 mb-6">
              درباره من
            </h2>
            <p className="text-gray-300 font-Vazir text-lg leading-relaxed mb-6">
              سلام👋 من علی فراستم متولد شهر اصفهان از بچگی علاقه زیادی به سیستم و کامپیوتر داشتم
              که الان رسیدم به اینجا. من توانایی های زیادی در زمینه های فرانت اند و بک اند کسب کردم
              که میتونم هرچیزی تو تصورات کلاینت باشه رو روی کد اجرا کنم
             
            </p>
            <div className="flex justify-end gap-4 mb-8">
              <motion.a
                href="https://github.com/alixtron0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaGithub className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/ali_farasat0/profilecard"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaInstagram className="w-8 h-8" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="backdrop-blur-sm bg-gray-900/30 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: groupIndex * 0.2
                  }}
                >
                  {skillGroup.icon}
                </motion.div>
                <h3 className="text-xl font-Vazir text-blue-300">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-Vazir">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-right"
        >
          <div className="backdrop-blur-sm bg-gray-900/30 rounded-xl p-8 border border-blue-500/30">
            <h2 className="text-4xl font-bold font-Vazir text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-cyan-300 mb-8">
              تجربیات کاری
            </h2>
            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-colors"
              >
                <h3 className="text-xl font-Vazir text-blue-300 mb-2">توسعه‌دهنده فول‌استک</h3>
                <p className="text-gray-400 mb-4 font-Vazir"></p>
                <ul dir='rtl' className="list-disc list-inside space-y-2 text-gray-300 font-Vazir">
                  <li>  توسعه و نگهداری اپلیکیشن های وب با node.js و react.js</li>
                  <li>پیاده‌سازی رابط‌های کاربری ریسپانسیو و زیبا</li>
                  <li>طراحی و پیاده‌سازی API‌ های RESTful</li>
                  <li>کار با پایگاه‌های داده MongoDB و SQL</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
