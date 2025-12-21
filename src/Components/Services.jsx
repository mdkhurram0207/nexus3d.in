import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAllServices } from "../data/servicesData";
import SEOHead from "./SEO/SEOHead";

const Services = () => {
  // Get all services from data file
  const services = getAllServices();
  
  // SEO metadata for services listing page
  const seoData = {
    title: "Our Services | Nexus 3D - 3D Architectural Rendering & Animation Services",
    description: "Explore Nexus 3D's comprehensive range of 3D architectural rendering, visualization, and animation services. Professional solutions for architects and designers.",
    keywords: "3D rendering services, architectural visualization services, 3D animation services, Nexus 3D services, building visualization",
    canonicalUrl: "https://nexus3d.in/services"
  };

  return (
    <>
      {/* SEO Head Component - Updates meta tags dynamically */}
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
      />
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
            Comprehensive 3D visualization and animation solutions tailored to bring your architectural visions to life
          </p>
        </motion.div>

        {/* Main Services Grid - Dynamic services from data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <Link to={`/services/${service.slug}`} key={service.id}>
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
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-4 line-clamp-3">
                      {service.description}
                    </p>
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="font-serif text-3xl sm:text-4xl font-medium text-gray-900 mb-10">
            Ready to Start Your <span className="italic">Project?</span>
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
    </>
  );
};

export default Services;
