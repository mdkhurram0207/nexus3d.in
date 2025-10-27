import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AgencyLogo = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 sm:mt-6 text-center z-20"
    >
      {/* Logo Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-widest"
      >
        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
          Nexus 3D
        </span>
      </motion.h1>

      {/* Slogan */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-xs sm:text-base lg:text-lg font-medium text-gray-300 mt-2"
      >
        Transforming Ideas into Stunning 3D Realities
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="h-0.5 sm:h-1 mt-3 mx-auto w-[60%] sm:w-[50%] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
      />
    </motion.div>
  );
};

export default AgencyLogo;
