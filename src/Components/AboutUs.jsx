import React, { useState, useEffect } from 'react';
import { FaRegFileAlt, FaGlobeAmericas, FaUserFriends } from 'react-icons/fa';

const AboutUs = () => {
  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);
  const [clients, setClients] = useState(0);

  const startCounting = (target, setter, interval = 50) => {
    let count = 0;
    const step = Math.ceil(target / 100);
    const timer = setInterval(() => {
      if (count >= target) clearInterval(timer);
      else {
        count += step;
        setter(count);
      }
    }, interval);
  };

  useEffect(() => {
    startCounting(120, setProjects);
    startCounting(5, setCountries);
    startCounting(40, setClients);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center p-4 sm:p-8 bg-gradient-to-b from-black via-blue-900 to-black text-white">
      <div className="max-w-2xl sm:max-w-4xl w-full text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-300 mb-6">About Us</h1>
        <p className="text-base sm:text-lg leading-6 sm:leading-8 mb-4">
          Welcome to our company! We specialize in architectural visualization and animation. Since 2018, we've delivered high-quality 3D rendering, modeling, and animation services.
        </p>
        <p className="text-base sm:text-lg leading-6 sm:leading-8 mb-4">
          We've successfully completed 120+ projects, collaborating with clients worldwide. Our portfolio includes architectural renderings, 3D walkthroughs, and creative 3D cartoon animations.
        </p>
        <p className="text-base sm:text-lg leading-6 sm:leading-8 mb-4">
          Our commitment to precision, timely delivery, and client satisfaction drives us to create immersive and visually stunning projects.
        </p>
        <p className="text-base sm:text-lg leading-6 sm:leading-8 mb-4">
          With a passionate team of designers and animators, we push creative boundaries to bring ideas to life.
        </p>
        <p className="text-base sm:text-lg leading-6 sm:leading-8 mb-6">
          We believe in turning visions into reality by combining technology, creativity, and expertise. Let’s collaborate and create something extraordinary together.
        </p>

        {/* Counter Section */}
        <div className="mt-8 flex flex-wrap sm:flex-nowrap justify-center gap-8 sm:gap-16">
          <div className="flex flex-col items-center">
            <FaRegFileAlt size={40} className="text-white mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-blue-300">{projects}+</p>
            <p className="text-sm sm:text-base text-gray-400">Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGlobeAmericas size={40} className="text-white mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-blue-300">{countries}+</p>
            <p className="text-sm sm:text-base text-gray-400">Countries</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserFriends size={40} className="text-white mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-blue-300">{clients}+</p>
            <p className="text-sm sm:text-base text-gray-400">Clients</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 sm:mt-12">
          <p className="text-base sm:text-lg">📍 Raza Building, Near Temptations, Delhi Road, Pakwara, Moradabad 244102</p>
          <p className="text-base sm:text-lg mt-4">
            📞 <a href="tel:+919756170713" className="text-blue-400 hover:underline">+91 9756170713</a>
          </p>
          <p className="text-base sm:text-lg mt-4">
            ✉️ <a href="mailto:contact@nexus3d.in" className="text-blue-400 hover:underline">contact@nexus3d.in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
