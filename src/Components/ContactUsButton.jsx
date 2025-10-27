import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUsButton = () => {
  return (
    <motion.a
      href="tel:+919756170713"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 flex items-center gap-2 bg-black text-white px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm border border-white/20 hover:border-white shadow-lg transition-all duration-300"
      title="Call Us"
    >
      <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5" />
      <span className="font-medium hidden sm:inline uppercase tracking-wide">Contact</span>
    </motion.a>
  );
};

export default ContactUsButton;
