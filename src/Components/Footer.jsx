import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    '3D Rendering',
    'Walkthrough Videos',
    '3D Modeling',
    'Architectural Visualization',
    '2D/3D Animation'
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Desktop: Show all columns, Mobile: Show only Company Info and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Nexus 3D</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Transforming architectural visions into stunning 3D reality. Professional visualization services with over 7 years of excellence.
            </p>
          </div>

          {/* Quick Links - Hidden on Mobile */}
          <div className="hidden lg:block">
            <h4 className="font-serif text-base sm:text-lg font-medium mb-4 sm:mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Hidden on Mobile */}
          <div className="hidden lg:block">
            <h4 className="font-serif text-base sm:text-lg font-medium mb-4 sm:mb-6 uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm sm:text-base">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-base sm:text-lg font-medium mb-4 sm:mb-6 uppercase tracking-wide">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="tel:+919756170713"
                className="flex items-start gap-3 text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-300 group"
              >
                <FaPhoneAlt className="text-sm sm:text-base mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span>+91 9756170713</span>
              </a>
              <a
                href="mailto:contact@nexus3d.in"
                className="flex items-start gap-3 text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-300 group"
              >
                <FaEnvelope className="text-sm sm:text-base mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="break-all">contact@nexus3d.in</span>
              </a>
              <a
                href="https://wa.me/+919756170713"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-300 group"
              >
                <FaWhatsapp className="text-sm sm:text-base mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp Chat</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm sm:text-base">
                <FaMapMarkerAlt className="text-sm sm:text-base mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Raza Building, Near Temptations, Delhi Road, Pakwara, Moradabad 244102, UP, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Nexus 3D. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

