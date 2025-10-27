import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBriefcase, FaCog, FaInfoCircle, FaEnvelope, FaTimes } from 'react-icons/fa';
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
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/projects', label: 'Projects', icon: FaBriefcase },
    { path: '/services', label: 'Services', icon: FaCog },
    { path: '/about', label: 'About', icon: FaInfoCircle },
    { path: '/contact', label: 'Contact', icon: FaEnvelope }
  ];

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 p-3 bg-black/90 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-black transition-all duration-500 shadow-lg hover:shadow-white/10"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-white" />
          ) : (
            <HiMenuAlt3 className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Brand Name - Always Visible */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-6 right-6 z-40 flex items-center gap-4"
      >
        <div className="text-right bg-black/40 backdrop-blur-md px-6 py-3 border border-white/10">
          <h1 className="font-serif text-xl sm:text-2xl font-light text-white tracking-wide">
            Nexus 3D
          </h1>
          <p className="text-xs text-gray-300 tracking-widest hidden sm:block uppercase">
            3D Visualization Studio
          </p>
        </div>
      </motion.div>

      {/* Backdrop Overlay */}
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

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-80 bg-white text-black shadow-2xl z-40 overflow-y-auto"
          >
            {/* Sidebar Header */}
            <div className="p-8 border-b border-gray-200">
              <h2 className="font-serif text-3xl font-medium text-gray-900">
                Nexus 3D
              </h2>
              <p className="text-sm text-gray-600 mt-2 tracking-wide">
                3D Visualization Studio
              </p>
            </div>

            {/* Sidebar Navigation */}
            <nav className="p-6">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-4 p-4 transition-all duration-300 group ${
                          isActive
                            ? 'bg-black text-white'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <Icon className={`text-xl transition-all duration-300 ${
                          isActive 
                            ? 'text-white' 
                            : 'text-gray-600 group-hover:text-gray-900'
                        }`} />
                        <span className={`text-lg ${
                          isActive ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Sidebar Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-3 uppercase tracking-wide font-medium">Get in Touch</p>
                <div className="flex gap-3 justify-center">
                  <a
                    href="tel:+919756170713"
                    className="flex-1 py-2 px-4 bg-black text-white text-sm transition-all duration-300 hover:bg-gray-800 uppercase tracking-wide"
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/+919756170713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 bg-white border border-gray-900 text-gray-900 text-sm transition-all duration-300 hover:bg-gray-900 hover:text-white uppercase tracking-wide"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
