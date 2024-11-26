import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerMessage, setHeaderMessage] = useState('');
  const [fullMessage, setFullMessage] = useState('');
  const location = useLocation();

  // Reset header message when component mounts (on refresh)
  useEffect(() => {
    setHeaderMessage('');
  }, []);

  useEffect(() => {
    // Update full message based on the current route
    switch (location.pathname) {
      case '/':
      case '/home':
        setFullMessage('خوش آمدید به وبسایت من 👋');
        break;
      case '/about':
        setFullMessage('درباره مهارت‌های من');
        break;
      case '/projects':
        setFullMessage('نمونه کارهای من');
        break;
      case '/contact':
        setFullMessage('ارتباط با من');
        break;
      default:
        setFullMessage('');
    }

    // Enhanced typing effect with smoother animation
    let index = 0;
    let typingSpeed = 80; // Base typing speed
    const randomVariation = () => Math.random() * 50 - 25; // Adds natural variation to typing speed

    const typingInterval = setInterval(() => {
      if (index < fullMessage.length) {
        setHeaderMessage((prev) => prev + fullMessage.charAt(index));
        index++;
        // Adjust typing speed for next character
        typingSpeed = 80 + randomVariation();
      } else {
        clearInterval(typingInterval);
        // Keep message visible for longer
        setTimeout(() => {
          // Fade out effect
          setHeaderMessage((prev) => prev.slice(0, -1));
          const fadeOutInterval = setInterval(() => {
            setHeaderMessage((prev) => {
              if (prev.length === 0) {
                clearInterval(fadeOutInterval);
                return '';
              }
              return prev.slice(0, -1);
            });
          }, 50);
        }, 3000);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
}, [location.pathname, fullMessage]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900/40 backdrop-blur-md text-white p-6 flex justify-between items-center border-b border-blue-500/30 sticky top-0 z-50">
      {/* Logo and Spaceship */}
      <div className="flex items-center gap-4">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-3xl font-bold font-Vazir bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          Xtron
        </motion.h1>
        
        {/* Animated Spaceship */}
        <motion.div
          initial={{ x: -20 }}
          animate={{ 
            x: 0,
            y: [0, -5, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            x: { duration: 0.5 },
            y: { duration: 2, repeat: Infinity },
            rotate: { duration: 2, repeat: Infinity }
          }}
          className="hidden md:block"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M12 2L2 8L12 14L22 8L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-blue-400"
            />
            <motion.path
              d="M2 14L12 20L22 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
              className="text-cyan-300"
            />
            {/* Engine glow effect */}
            <motion.circle
              cx="12"
              cy="14"
              r="2"
              fill="#60A5FA"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
          </svg>
        </motion.div>
      </div>

      <div className="flex-grow flex justify-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold font-Vazir text-center text-blue-200"
        >
          {headerMessage}
        </motion.h2>
      </div>

      {/* Navigation - Moved to the left */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-white focus:outline-none hover:text-blue-300 transition-colors duration-300"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:static bg-gray-900/80 backdrop-blur-md md:bg-transparent w-full md:w-auto top-full left-0 z-50 md:z-auto`}>
        <ul className="flex flex-col md:flex-row p-4 md:p-0 gap-2">
          {[

            { name: 'تماس با من', path: '/contact' },
            { name: 'پروژه‌ها', path: '/projects' },
            { name: 'درباره من', path: '/about' },
            { name: 'خانه', path: '/home' }


            
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <a
                href={item.path}
                className="block w-full text-center py-2 px-6 rounded-lg transition-all duration-300 hover:bg-blue-800/30 hover:text-blue-300 border border-transparent hover:border-blue-500/30 backdrop-blur-sm"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
