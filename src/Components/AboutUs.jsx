import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRegFileAlt, FaGlobeAmericas, FaUserFriends, FaRocket, FaAward, FaHeart } from 'react-icons/fa';

const AboutUs = () => {
  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);
  const [clients, setClients] = useState(0);

  const startCounting = (target, setter, interval = 50) => {
    let count = 0;
    const step = Math.ceil(target / 100);
    const timer = setInterval(() => {
      if (count >= target) {
        clearInterval(timer);
        setter(target);
      } else {
        count += step;
        setter(Math.min(count, target));
      }
    }, interval);
  };

  useEffect(() => {
    startCounting(120, setProjects);
    startCounting(5, setCountries);
    startCounting(40, setClients);
  }, []);

  const stats = [
    { icon: FaRegFileAlt, value: projects, label: 'Projects Completed' },
    { icon: FaUserFriends, value: clients, label: 'Happy Clients' },
    { icon: FaGlobeAmericas, value: countries, label: 'Countries Served' }
  ];

  const values = [
    { 
      icon: FaAward, 
      title: 'Excellence', 
      description: 'Delivering top-tier quality in every project'
    },
    { 
      icon: FaRocket, 
      title: 'Innovation', 
      description: 'Pushing creative boundaries with cutting-edge technology'
    },
    { 
      icon: FaHeart, 
      title: 'Passion', 
      description: 'Loving what we do and making every detail count'
    }
  ];

  const timeline = [
    { year: '2018', event: 'Nexus 3D Founded', description: 'Started our journey in architectural visualization' },
    { year: '2020', event: 'International Expansion', description: 'Expanded services to clients across multiple countries' },
    { year: '2022', event: '100+ Projects Milestone', description: 'Completed our 100th successful project' },
    { year: '2025', event: 'Industry Leader', description: 'Recognized as a leading 3D visualization studio' }
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900 tracking-tight">
            About Us
          </h1>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            We are a team of passionate 3D artists and designers dedicated to transforming architectural visions into stunning visual reality.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300"
              >
                <Icon className="text-4xl text-gray-900 mx-auto mb-4" />
                <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-2">
                  {stat.value}+
                </div>
                <div className="text-sm sm:text-base text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 text-center mb-6 tracking-tight">
            Our Story
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-12"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto font-light text-center mb-6">
            Since 2018, Nexus 3D has been at the forefront of architectural visualization, helping architects, developers, and designers bring their concepts to life through photorealistic 3D renders and animations.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto font-light text-center">
            With a commitment to quality, innovation, and client satisfaction, we've grown from a small studio to a trusted partner for projects across multiple countries, delivering excellence in every frame.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 text-center mb-6 tracking-tight">
            Our Core Values
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-gray-50 border border-gray-200 hover:border-gray-900 transition-all duration-300"
                >
                  <div className="w-16 h-16 border border-gray-900 flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-2xl text-gray-900" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-base text-gray-600 font-light">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 text-center mb-6 tracking-tight">
            Our Journey
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-12"></div>
          <div className="space-y-8 max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 border border-gray-900 flex items-center justify-center">
                  <span className="text-lg font-light text-gray-900">{item.year}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-light text-gray-900 mb-2">{item.event}</h4>
                  <p className="text-base text-gray-600 font-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 p-12 border border-gray-200"
        >
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Let's Create Together
          </h3>
          <p className="text-base text-gray-600 mb-8 font-light">
            Ready to bring your architectural vision to life?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919756170713"
              className="px-8 py-3 bg-black text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 uppercase"
            >
              Contact Us
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-transparent text-gray-900 font-medium text-sm tracking-wide border border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white uppercase"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
