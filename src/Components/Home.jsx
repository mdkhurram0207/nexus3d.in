import React, { useState, useEffect } from 'react';
import HomeVideo from './HomeVideo';
import AgencyLogo from './AgencyLogo';
import { FaPhoneAlt, FaWhatsapp, FaArrowRight, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showContact, setShowContact] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowContact(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0">
        <HomeVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Centered Header with Logo */}
      <div className="absolute top-0 left-0 w-full z-10 p-4 flex justify-center">
        <AgencyLogo />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Transforming</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Visions
            </span>
            <br />
            <span className="text-white">Into Stunning</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              3D Reality
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Award-winning 3D architectural visualization, rendering, and animation services 
            that bring your projects to life with photorealistic precision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Link
              to="/projects"
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              View Our Work
              <FaPlay className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                120+
              </div>
              <div className="text-sm sm:text-base text-gray-400 mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                40+
              </div>
              <div className="text-sm sm:text-base text-gray-400 mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-sm sm:text-base text-gray-400 mt-1">Countries Served</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4 w-full max-w-[90%] transition-all duration-500 z-20 ${
          showContact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <a
          href="tel:+919756170713"
          className="group flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-full font-medium text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
        >
          <FaPhoneAlt size={18} className="group-hover:rotate-12 transition-transform" />
          <span>+91 9756170713</span>
        </a>
        <a
          href="https://wa.me/+919756170713"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full font-medium text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-500/50"
        >
          <FaWhatsapp size={18} className="group-hover:rotate-12 transition-transform" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
