import React, { useState, useEffect } from 'react';
import HomeVideo from './HomeVideo';
import AgencyLogo from './AgencyLogo';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  const [showContact, setShowContact] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowContact(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Centered Header with Logo */}
      <div className="absolute top-0 left-0 w-full z-10 p-4 flex justify-center">
        <AgencyLogo />
      </div>

      {/* Video Section */}
      <HomeVideo />

      {/* Contact Section */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4 w-full max-w-[90%] transition-all duration-500 ${
          showContact ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="tel:+919756170713"
          className="flex items-center bg-blue-500 text-black py-2 px-4 rounded-full hover:bg-blue-800 text-sm sm:text-lg"
        >
          <FaPhoneAlt size={20} className="mr-2" />
          <span>+91 9756170713</span>
        </a>
        <a
          href="https://wa.me/+919756170713"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-black py-2 px-4 rounded-full hover:bg-green-600 text-sm sm:text-lg"
        >
          <FaWhatsapp size={20} className="mr-2" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
