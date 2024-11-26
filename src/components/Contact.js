import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaEnvelope, FaPhone, FaSatellite, FaRocket, FaStar, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      // Clear form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: 'ایمیل',
      value: 'alixtronzx@gmail.com',
      link: 'mailto:alixtronzx@gmail.com'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      label: 'تلفن',
      value: '09134398990',
      link: 'tel:+989134398990'
    },
    {
      icon: <FaTelegram className="w-6 h-6" />,
      label: 'تلگرام',
      value: '@alixtron',
      link: 'https://t.me/alixtron'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-8 h-8" />,
      url: 'https://github.com/alixtron0',
      label: 'GitHub'
    },
    {
      icon: <FaInstagram className="w-8 h-8" />,
      url: 'https://www.instagram.com/ali_farasat0/profilecard',
      label: 'Instagram'
    }
  ];

  // Floating elements animation
  const FloatingElements = () => {
    return (
      <>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:block"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {i % 3 === 0 ? (
              <FaStar className="text-blue-300/20" />
            ) : i % 3 === 1 ? (
              <FaSatellite className="text-cyan-300/20" />
            ) : (
              <FaRocket className="text-purple-300/20" />
            )}
          </motion.div>
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden">
      <FloatingElements />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-right mb-12"
        >
          <div className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-blue-500/30">
            <h2 className="text-4xl font-bold font-Vazir text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-cyan-300 mb-6">
              تماس با من
            </h2>
            <p className="text-gray-300 font-Vazir text-lg">
              برای همکاری یا هر گونه سوال، می‌توانید با من در ارتباط باشید
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-2xl font-Vazir text-blue-300 mb-6 text-right">راه‌های ارتباطی</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -10 }}
                    className="flex items-center justify-end gap-4 text-gray-300 hover:text-blue-300 transition-colors group"
                  >
                    <div className="text-right">
                      <p className="font-Vazir text-sm text-gray-400">{info.label}</p>
                      <p className="font-Vazir">{info.value}</p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 20 }}
                      className="text-blue-400 group-hover:text-blue-300 transition-colors"
                    >
                      {info.icon}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-2xl font-Vazir text-blue-300 mb-6 text-right">شبکه‌های اجتماعی</h3>
              <div className="flex justify-end gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-gray-900/30 rounded-xl p-6 border border-blue-500/30"
          >
            <h3 className="text-2xl font-Vazir text-blue-300 mb-6 text-right">ارسال پیام</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-right text-gray-300 font-Vazir mb-2">
                  نام
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border border-blue-500/20 rounded-lg px-4 py-2 text-right font-Vazir text-white focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-right text-gray-300 font-Vazir mb-2">
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border border-blue-500/20 rounded-lg px-4 py-2 text-right font-Vazir text-white focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-right text-gray-300 font-Vazir mb-2">
                  پیام
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-800/50 border border-blue-500/20 rounded-lg px-4 py-2 text-right font-Vazir text-white focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-Vazir py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                ارسال پیام
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
