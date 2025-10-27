import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRegFileAlt, FaGlobeAmericas, FaUserFriends, FaRocket, FaAward, FaHeart, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

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
    { icon: FaRegFileAlt, value: projects, label: 'Projects Completed', color: 'from-blue-400 to-cyan-400' },
    { icon: FaUserFriends, value: clients, label: 'Happy Clients', color: 'from-purple-400 to-pink-400' },
    { icon: FaGlobeAmericas, value: countries, label: 'Countries Served', color: 'from-green-400 to-teal-400' }
  ];

  const values = [
    { 
      icon: FaAward, 
      title: 'Excellence', 
      description: 'Delivering top-tier quality in every project',
      color: 'from-yellow-400 to-orange-400'
    },
    { 
      icon: FaRocket, 
      title: 'Innovation', 
      description: 'Pushing creative boundaries with cutting-edge technology',
      color: 'from-blue-400 to-purple-400'
    },
    { 
      icon: FaHeart, 
      title: 'Passion', 
      description: 'Bringing enthusiasm and dedication to every design',
      color: 'from-pink-400 to-red-400'
    }
  ];

  const timeline = [
    { year: '2018', event: 'Founded Nexus 3D', description: 'Started our journey in 3D visualization' },
    { year: '2020', event: 'International Expansion', description: 'Began serving clients across 5 countries' },
    { year: '2022', event: '100+ Projects', description: 'Milestone achievement in project delivery' },
    { year: '2025', event: 'Industry Leader', description: 'Recognized as a premier 3D visualization studio' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Nexus 3D
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Your trusted partner in transforming architectural visions into breathtaking 3D realities
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-3xl text-white" />
                </div>
                <div className={`text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}+
                </div>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Since 2018, <span className="text-blue-400 font-semibold">Nexus 3D</span> has been at the forefront of architectural visualization and animation. We specialize in delivering high-quality 3D rendering, modeling, and animation services that bring architectural concepts to life with stunning photorealistic precision.
              </p>
              <p>
                Our journey has been marked by the successful completion of <span className="text-purple-400 font-semibold">120+ projects</span>, collaborating with clients across the globe. From architectural renderings and 3D walkthroughs to creative cartoon animations, our diverse portfolio showcases our versatility and expertise.
              </p>
              <p>
                At Nexus 3D, we believe in the power of visualization to transform ideas into reality. Our commitment to precision, timely delivery, and client satisfaction drives us to create immersive and visually stunning projects that exceed expectations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.event}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">
                  Raza Building, Near Temptations, Delhi Road, Pakwara, Moradabad 244102
          </p>
        </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+919756170713" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +91 9756170713
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:contact@nexus3d.in" className="text-purple-400 hover:text-purple-300 transition-colors">
                  contact@nexus3d.in
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
