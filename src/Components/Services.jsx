import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const servicesList = [
  { name: "Architectural Visualization Services" },
  { name: "Architectural Rendering Services" },
  { name: "3D Modeling Design Services" },
  { name: "2D Animation Services" },
  { name: "3D Walkthrough Animation Services" },
  { name: "3D Architectural Visualization Services" },
  { name: "3D Animation Services" },
  { name: "3D Architectural Rendering Services" },
  { name: "Architectural Designing Services" },
  { name: "Animation Services" },
  { name: "3D Architectural Animation Services" },
  { name: "Architectural Renderings" },
];

const cartoonServices = [
  { name: "3D Cartoon Animation" },
  { name: "2D Cartoon Animation" }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900 tracking-tight">
            Our Services
          </h1>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Comprehensive 3D visualization and animation solutions tailored to bring your architectural visions to life
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {servicesList.map((service, index) => (
            <Link to="/contact" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group p-8 bg-gray-50 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg sm:text-xl font-light text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                  {service.name}
                </h3>
                <div className="w-8 h-px bg-gray-900 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Cartoon Animation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-gray-900 tracking-tight">
            Cartoon Animation Services
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 font-light">
            Creative and engaging cartoon animations for all your storytelling needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-24">
          {cartoonServices.map((service, index) => (
            <Link to="/contact" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-10 bg-gray-50 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl font-light text-center text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                  {service.name}
                </h3>
                <div className="w-12 h-px bg-gray-900 mt-4 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 tracking-tight">
            Ready to Start Your Project?
          </h3>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-black text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 uppercase"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
