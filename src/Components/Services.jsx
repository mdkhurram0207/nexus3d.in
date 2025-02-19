import React from "react";

const servicesList = [
  "Architectural Visualization Services",
  "Architectural Rendering Services",
  "3D Modeling Design Services",
  "2D Animation Services",
  "3D Walkthrough Animation Services",
  "3D Architectural Visualization Services",
  "3D Animation Services",
  "3D Architectural Rendering Services",
  "Architectural Designing Services",
  "Animation Services",
  "3D Architectural Animation Services",
  "Architectural Renderings",
];

const cartoonServices = ["3D Cartoon Animation", "2D Cartoon Animation"];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-8 py-12 bg-black text-white">
      <div className="w-full max-w-screen-xl">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-400 text-center mb-12 uppercase tracking-widest">
          Our Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="p-5 bg-gray-900 rounded-xl text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-200">
                {service}
              </h3>
            </div>
          ))}
        </div>

        {/* Cartoon Animation Section */}
        <h2 className="text-2xl sm:text-4xl font-bold text-pink-400 text-center mt-16 mb-10 uppercase tracking-wide">
          Cartoon Animation Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cartoonServices.map((service, index) => (
            <div
              key={index}
              className="p-5 bg-gray-900 rounded-xl text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-200">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
