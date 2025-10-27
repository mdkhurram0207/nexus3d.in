import React, { useState, useEffect } from 'react';
import HomeVideo from './HomeVideo';
import { FaPhoneAlt, FaWhatsapp, FaArrowRight, FaPlay, FaCheckCircle, FaAward, FaUsers, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whyChooseUs = [
    { icon: FaAward, title: 'Premium Quality', description: 'Photorealistic 3D renderings' },
    { icon: FaRocket, title: 'Fast Delivery', description: 'On-time project completion' },
    { icon: FaUsers, title: 'Expert Team', description: '7+ years of experience' },
    { icon: FaCheckCircle, title: '100% Satisfaction', description: 'Unlimited revisions' }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <HomeVideo />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Welcome Text */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <p className="text-blue-400 text-sm sm:text-base font-medium tracking-widest uppercase">
                Welcome to
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nexus 3D
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Transforming architectural visions into stunning 3D reality with photorealistic precision
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Link
                to="/projects"
                className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                View Our Work
                <FaPlay className="group-hover:translate-x-1 transition-transform text-sm" />
              </Link>
              <Link
                to="/contact"
                className="group flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base border border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                Get Quote
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">120+</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">40+</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pink-400">5+</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Countries</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Nexus 3D</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              We deliver exceptional 3D visualization services with precision and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Ready to Bring Your Vision to Life?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919756170713"
                className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-full font-medium text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
              >
                <FaPhoneAlt className="group-hover:rotate-12 transition-transform" />
                <span>+91 9756170713</span>
              </a>
              <a
                href="https://wa.me/+919756170713"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-full font-medium text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-500/50"
              >
                <FaWhatsapp className="group-hover:rotate-12 transition-transform" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
