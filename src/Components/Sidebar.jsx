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
      {/* Optimized Mobile-First Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSidebar}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 p-3 sm:p-4 bg-black/90 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-black transition-all duration-300 rounded-xl sm:rounded-2xl shadow-lg"
        style={{ zIndex: 9999 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <HiMenuAlt3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.button>

      {/* Mobile-Optimized Brand Name */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 hidden sm:flex items-center gap-2 sm:gap-4"
      >
        <div className="text-right bg-black/60 backdrop-blur-md px-3 py-2 sm:px-6 sm:py-3 border border-white/20 rounded-xl sm:rounded-2xl shadow-lg">
          <h1 className="font-serif text-lg sm:text-xl md:text-2xl font-light text-white tracking-wide">
            Nexus 3D
          </h1>
          <p className="text-xs text-gray-300 tracking-widest hidden md:block uppercase font-light">
            3D Visualization Studio
          </p>
        </div>
      </motion.div>

      {/* Optimized Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Mobile-First Responsive Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-80 sm:w-96 bg-white text-black shadow-2xl z-40 overflow-y-auto"
          >
            {/* Compact Header */}
            <div className="p-4 sm:p-6 pt-16 sm:pt-20 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-gray-900 mb-1">
                  Nexus 3D
                </h2>
                <p className="text-sm text-gray-600 tracking-wide font-light">
                  3D Visualization Studio
                </p>
                <div className="w-12 h-px bg-gradient-to-r from-gray-300 to-transparent mt-3"></div>
              </motion.div>
            </div>

            {/* Optimized Navigation */}
            <nav className="p-4 sm:p-6 flex-1">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-black text-white shadow-lg'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className={`p-2 sm:p-3 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-white/20' 
                            : 'bg-gray-100 group-hover:bg-gray-200'
                        }`}>
                          <Icon className={`text-lg sm:text-xl transition-all duration-300 ${
                            isActive 
                              ? 'text-white' 
                              : 'text-gray-600 group-hover:text-gray-900'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`text-base sm:text-lg font-medium transition-all duration-300 ${
                            isActive ? 'text-white' : 'text-gray-900'
                          }`}>
                            {item.label}
                          </span>
                          <p className={`text-xs sm:text-sm transition-all duration-300 truncate ${
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

            {/* Mobile-Optimized Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <p className="text-xs sm:text-sm text-gray-600 mb-3 uppercase tracking-wide font-light">Get in Touch</p>
                <div className="flex gap-2 sm:gap-3">
                  <motion.a
                    href="tel:+919756170713"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-blue-600 text-white text-xs sm:text-sm transition-all duration-300 hover:bg-blue-700 uppercase tracking-wide rounded-lg sm:rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-1 sm:gap-2"
                  >
                    <FaPhone className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Call</span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/+919756170713"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-green-600 text-white text-xs sm:text-sm transition-all duration-300 hover:bg-green-700 uppercase tracking-wide rounded-lg sm:rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-1 sm:gap-2"
                  >
                    <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">WhatsApp</span>
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