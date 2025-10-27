import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUsButton = () => {
  return (
    <motion.a
      href="tel:+919756170713"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-1/2 right-6 transform -translate-y-1/2 z-40 group"
      title="Call Us"
    >
      {/* Decorative line */}
      <div className="absolute -left-8 top-1/2 w-6 h-px bg-white/20 group-hover:bg-white transition-all duration-500"></div>
      
      {/* Main button */}
      <div className="relative flex items-center gap-3 bg-black/90 backdrop-blur-md text-white px-5 py-3 md:px-7 md:py-4 text-xs md:text-sm border border-white/10 hover:border-white/30 shadow-lg hover:shadow-white/10 transition-all duration-500 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-light hidden sm:inline uppercase tracking-[0.2em] relative z-10">Contact</span>
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.a>
  );
};

export default ContactUsButton;
