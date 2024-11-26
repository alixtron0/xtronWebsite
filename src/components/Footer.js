import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaHeart,FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/alixtron0',
      label: 'GitHub'
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/ali_farasat0/profilecard',
      label: 'Instagram'
    },
    {
      icon: <FaTelegram className="w-5 h-5" />,
      url: 'https://t.me/alixtron',
      label: 'Telegram'
    }
  ];

  return (
<footer className="relative bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-gray-900/95 text-white py-12 border-t border-blue-500/30 backdrop-blur-sm">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Links */}
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:shadow-lg hover:shadow-blue-500/25"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright Text */}
          <motion.div 
            className="text-center font-Vazir"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 flex items-center justify-center gap-2 text-lg">
            توسط علی فراست
              <motion.span
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              >
                <FaHeart className="text-red-500 w-5 h-5 filter drop-shadow-glow" />
              </motion.span>
              ساخته شده با
            </p>
            <motion.p 
              className="text-sm text-gray-400 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              ©  تمامی حقوق این وبسایت محفوظ است
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex gap-8 font-Vazir"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a 
              href="/about" 
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:scale-110 transform"
              whileHover={{ y: -2 }}
            >
              درباره من
            </motion.a>
            <motion.a 
              href="/projects" 
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:scale-110 transform"
              whileHover={{ y: -2 }}
            >
              نمونه کارها
            </motion.a>
            <motion.a 
              href="/contact" 
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:scale-110 transform"
              whileHover={{ y: -2 }}
            >
              تماس با من
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
