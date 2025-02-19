import React, { useEffect, useState } from "react";

const AgencyLogo = () => {
  const [show, setShow] = useState(false);
  const [darken, setDarken] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500); // Fade-in delay
    setTimeout(() => setDarken(true), 4500); // Transition to gold/black after 4s
  }, []);

  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 sm:mt-4 text-center transition-opacity duration-1000 ease-in-out">
      {/* Logo Text */}
      <h1
        className={`text-lg sm:text-4xl font-extrabold uppercase tracking-widest transition-all duration-[3000ms] ease-in-out
          ${show ? "opacity-100 text-white brightness-150 drop-shadow-lg" : "opacity-0"}
          ${darken ? "text-gold-400" : ""}`} // Changes to gold after 4s
      >
        Nexus 3D
      </h1>

      {/* Slogan */}
      <p
        className={`text-xs sm:text-lg font-medium italic transition-opacity duration-1000 ease-in-out
        ${show ? "opacity-100 text-white brightness-125" : "opacity-0"}
        ${darken ? "text-gray-300" : ""}`} // Subtle change after 4s
      >
        Transforming Ideas into Stunning 3D Realities
      </p>

      {/* Meteor Line (Opposite Direction, White Glow) */}
      <div
        className={`relative h-0.5 sm:h-1 mt-2 sm:mt-3 mx-auto overflow-hidden transition-all duration-[2000ms] ease-in-out
          ${show ? "opacity-100 w-[60%] sm:w-[50%] bg-transparent" : "opacity-0 w-0"}
          ${darken ? "bg-gray-500" : ""}`} // Subtle fade after 4s
      >
        {/* Meteor Effect */}
        <div
          className={`absolute right-0 top-0 h-full w-full transition-all duration-[2000ms] ease-in-out
          ${show ? "translate-x-0 scale-110 brightness-150" : "translate-x-full scale-125"} 
          ${darken ? "brightness-100" : ""}`}
          style={{
            background: "linear-gradient(to left, white, gold, transparent)",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.7)", // Bright Glow
          }}
        ></div>
      </div>
    </div>
  );
};

export default AgencyLogo;
