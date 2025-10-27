import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-medium mb-6">Nexus 3D</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming architectural visions into stunning 3D reality. Professional visualization services with over 7 years of excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 uppercase tracking-wide">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+919756170713"
                className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-300 group"
              >
                <FaPhoneAlt className="text-base mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span>+91 9756170713</span>
              </a>
              <a
                href="mailto:contact@nexus3d.in"
                className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-300 group"
              >
                <FaEnvelope className="text-base mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span>contact@nexus3d.in</span>
              </a>
              <a
                href="https://wa.me/+919756170713"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors duration-300 group"
              >
                <FaWhatsapp className="text-base mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp Chat</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-base mt-0.5" />
                <span>Raza Building, Near Temptations,<br />Delhi Road, Pakwara,<br />Moradabad 244102, UP, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Nexus 3D. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
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

