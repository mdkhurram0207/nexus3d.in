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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6 text-white" />
        ) : (
          <HiMenuAlt3 className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
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
            className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white shadow-2xl z-40 overflow-y-auto"
          >
            {/* Sidebar Header */}
            <div className="p-8 border-b border-gray-700">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Nexus 3D
              </h2>
              <p className="text-sm text-gray-400 mt-2">
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
                        className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                            : 'hover:bg-white/10'
                        }`}
                      >
                        <Icon className={`text-xl transition-all duration-300 ${
                          isActive 
                            ? 'text-white scale-110' 
                            : 'text-gray-400 group-hover:text-white group-hover:scale-110'
                        }`} />
                        <span className={`text-lg font-medium ${
                          isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
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
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700 bg-gray-900/50">
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-3">Get in Touch</p>
                <div className="flex gap-3 justify-center">
                  <a
                    href="tel:+919756170713"
                    className="flex-1 py-2 px-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-sm text-blue-300 transition-all duration-300"
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/+919756170713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-sm text-green-300 transition-all duration-300"
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
