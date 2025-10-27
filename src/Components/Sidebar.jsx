import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBriefcase, FaCog, FaInfoCircle, FaEnvelope, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: FaHome, description: 'Welcome to our studio' },
    { path: '/projects', label: 'Projects', icon: FaBriefcase, description: 'View our portfolio' },
    { path: '/services', label: 'Services', icon: FaCog, description: 'What we offer' },
    { path: '/about', label: 'About', icon: FaInfoCircle, description: 'Our story' },
    { path: '/contact', label: 'Contact', icon: FaEnvelope, description: 'Get in touch' }
  ];

  return (
    <div className="relative">
      {/* Modern Sidebar Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 p-4 bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-xl border border-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 rounded-2xl"
        style={{ zIndex: 9999 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="w-5 h-5 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <HiMenuAlt3 className="w-5 h-5 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.button>

      {/* Modern Brand Name - Hidden on Mobile */}
      <motion.div 
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-6 right-6 z-40 hidden md:flex items-center gap-4"
      >
        <div className="text-right bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 backdrop-blur-xl px-6 py-4 border border-white/20 rounded-2xl shadow-2xl">
          <h1 className="font-serif text-xl sm:text-2xl font-light text-white tracking-wide">
            Nexus 3D
          </h1>
          <p className="text-xs text-gray-300 tracking-widest hidden sm:block uppercase font-light">
            3D Visualization Studio
          </p>
        </div>
      </motion.div>

      {/* Modern Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl z-40"
          />
        )}
      </AnimatePresence>

      {/* Modern Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 h-full w-96 bg-gradient-to-br from-white via-gray-50 to-white text-black shadow-2xl z-40 overflow-y-auto border-r border-gray-200"
          >
            {/* Modern Sidebar Header */}
            <div className="p-8 pt-24 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-serif text-4xl font-light text-gray-900 mb-2">
                  Nexus 3D
                </h2>
                <p className="text-sm text-gray-600 tracking-wide font-light">
                  3D Visualization Studio
                </p>
                <div className="w-16 h-px bg-gradient-to-r from-gray-300 to-transparent mt-4"></div>
              </motion.div>
            </div>

            {/* Modern Sidebar Navigation */}
            <nav className="p-6">
              <ul className="space-y-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`group relative flex items-center gap-4 p-5 rounded-2xl transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-r from-black to-gray-900 text-white shadow-xl shadow-black/20'
                            : 'hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 hover:shadow-lg hover:shadow-gray-200/50'
                        }`}
                      >
                        <motion.div
                          className={`p-3 rounded-xl transition-all duration-300 ${
                            isActive 
                              ? 'bg-white/20' 
                              : 'bg-gray-100 group-hover:bg-gray-200'
                          }`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className={`text-xl transition-all duration-300 ${
                            isActive 
                              ? 'text-white' 
                              : 'text-gray-600 group-hover:text-gray-900'
                          }`} />
                        </motion.div>
                        <div className="flex-1">
                          <span className={`text-lg font-medium transition-all duration-300 ${
                            isActive ? 'text-white' : 'text-gray-900'
                          }`}>
                            {item.label}
                          </span>
                          <p className={`text-sm transition-all duration-300 ${
                            isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-700'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Modern Sidebar Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <p className="text-sm text-gray-600 mb-4 uppercase tracking-wide font-light">Get in Touch</p>
                <div className="flex gap-3 justify-center">
                  <motion.a
                    href="tel:+919756170713"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm transition-all duration-300 hover:from-blue-700 hover:to-blue-800 uppercase tracking-wide rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <FaPhone className="w-3 h-3" />
                    Call
                  </motion.a>
                  <motion.a
                    href="https://wa.me/+919756170713"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm transition-all duration-300 hover:from-green-700 hover:to-green-800 uppercase tracking-wide rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-3 h-3" />
                    WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
