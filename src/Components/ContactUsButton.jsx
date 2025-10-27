import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUsButton = () => {
  return (
    <motion.a
      href="tel:+919756170713"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
      title="Call Us"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5" />
      </motion.div>
      <span className="font-semibold hidden sm:inline">Contact</span>
    </motion.a>
  );
};

export default ContactUsButton;
