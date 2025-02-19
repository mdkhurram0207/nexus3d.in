import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUsButton = () => {
  return (
    <a
      href="tel:+919756170713"
      className="fixed top-1/2 right-2 transform -translate-y-1/2 flex items-center gap-1 bg-black text-white px-4 py-2 text-xs md:px-6 md:py-4 md:text-sm rounded-md shadow-lg border border-white transition-all duration-300 hover:bg-green-700 animate-borderGlow"
      title="Call Us"
    >
      <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5" />
      <span className="font-semibold">Contact</span>
    </a>
  );
};

export default ContactUsButton;
