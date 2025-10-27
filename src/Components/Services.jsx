import React from "react";
import { motion } from "framer-motion";
import { FaCube, FaBuilding, FaPalette, FaVideo, FaFilm, FaCamera, FaMagic, FaPencilRuler } from "react-icons/fa";

const servicesList = [
  { name: "Architectural Visualization Services", icon: FaBuilding, color: "from-blue-500 to-cyan-500" },
  { name: "Architectural Rendering Services", icon: FaCamera, color: "from-purple-500 to-pink-500" },
  { name: "3D Modeling Design Services", icon: FaCube, color: "from-green-500 to-teal-500" },
  { name: "2D Animation Services", icon: FaVideo, color: "from-orange-500 to-red-500" },
  { name: "3D Walkthrough Animation Services", icon: FaFilm, color: "from-indigo-500 to-blue-500" },
  { name: "3D Architectural Visualization Services", icon: FaPalette, color: "from-pink-500 to-rose-500" },
  { name: "3D Animation Services", icon: FaMagic, color: "from-cyan-500 to-blue-500" },
  { name: "3D Architectural Rendering Services", icon: FaPencilRuler, color: "from-yellow-500 to-orange-500" },
  { name: "Architectural Designing Services", icon: FaBuilding, color: "from-violet-500 to-purple-500" },
  { name: "Animation Services", icon: FaVideo, color: "from-emerald-500 to-green-500" },
  { name: "3D Architectural Animation Services", icon: FaFilm, color: "from-red-500 to-pink-500" },
  { name: "Architectural Renderings", icon: FaCamera, color: "from-teal-500 to-cyan-500" },
];

const cartoonServices = [
  { name: "3D Cartoon Animation", icon: FaMagic, color: "from-pink-500 to-purple-500" },
  { name: "2D Cartoon Animation", icon: FaPalette, color: "from-orange-500 to-pink-500" }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-8 py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive 3D visualization and animation solutions tailored to bring your architectural visions to life
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-2xl" />
                </div>

                {/* Service Name */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Decorative Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cartoon Animation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text text-transparent">
              Cartoon Animation Services
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Creative and engaging cartoon animations for all your storytelling needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {cartoonServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="text-white text-3xl" />
                </div>

                {/* Service Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-100 group-hover:text-white transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Decorative Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h3>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
