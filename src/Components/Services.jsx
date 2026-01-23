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
    <div className="min-h-screen bg-zinc-50 px-4 sm:px-8 py-32">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium mb-8 text-gray-900">
            Our <span className="italic">Services</span>
        </h1>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-10"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            So here's what we do. We take your architectural ideas and turn them into visuals that actually make sense. No jargon, no fluff — just good work that helps you sell your vision.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {servicesList.map((service, index) => (
            <Link to="/contact" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <div className="p-10 bg-white border-2 border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-0.5 bg-gray-900 mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h3 className="text-xl sm:text-2xl text-gray-900 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                      {service.name}
              </h3>
            </div>
                  <div className="mt-6 flex items-center text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="text-sm uppercase tracking-widest">Learn More</span>
                    <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Cartoon Animation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 text-gray-900">
            Cartoon <span className="italic">Animation</span> Services
        </h2>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Sometimes you need something fun. Something that makes people smile. That's where our cartoon work comes in. Whether it's explaining a concept or just adding some personality, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
          {cartoonServices.map((service, index) => (
            <Link to="/contact" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="p-12 bg-white border-2 border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-0.5 bg-gray-900 mb-6 mx-auto transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-center text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                    {service.name}
              </h3>
            </div>
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
          <h3 className="font-serif text-3xl sm:text-4xl font-medium text-gray-900 mb-10">
            Think We Can Help? <span className="italic">Let's Talk</span>
          </h3>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-black text-white font-medium text-base tracking-widest transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl uppercase"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
