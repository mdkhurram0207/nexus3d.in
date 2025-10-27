import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@nexus3d.in?subject=${subject}&body=${body}`;
    setFormStatus('Opening your email client...');
  };

  const contactMethods = [
    {
      icon: FaPhoneAlt,
      title: "Phone",
      value: "+91 9756170713",
      link: "tel:+919756170713",
      color: "blue"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "contact@nexus3d.in",
      link: "mailto:contact@nexus3d.in",
      color: "purple"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "Chat with Us",
      link: "https://wa.me/+919756170713",
      external: true,
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900 tracking-tight">
            Get in Touch
          </h1>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Let's discuss your next project. We're here to help bring your architectural vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors duration-300 bg-white text-gray-900"
                  placeholder="+91 XXXXXXXXXX"
                />
            </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors duration-300 bg-white text-gray-900 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
            </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-black text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 uppercase"
              >
                Send Message
              </button>

              {formStatus && (
                <p className="text-center text-sm text-gray-600 font-light">{formStatus}</p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const colorClasses = {
                  blue: "bg-blue-600 hover:bg-blue-700 border-blue-600",
                  green: "bg-green-600 hover:bg-green-700 border-green-600",
                  purple: "bg-purple-600 hover:bg-purple-700 border-purple-600"
                };
                return (
                  <motion.a
                    key={index}
                    href={method.link}
                    target={method.external ? "_blank" : "_self"}
                    rel={method.external ? "noopener noreferrer" : ""}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-4 p-6 text-white transition-all duration-300 ${colorClasses[method.color]}`}
                  >
                    <div className="w-12 h-12 bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wide mb-1">
                        {method.title}
                      </h3>
                      <p className="text-base font-light">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-gray-50 border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gray-900 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-gray-900 text-xl" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-2">
                    Location
                  </h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    Raza Building, Near Temptations,<br />
                    Delhi Road, Pakwara,<br />
                    Moradabad 244102,<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-6 bg-gray-50 border border-gray-200"
            >
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide mb-3">
                Business Hours
              </h3>
              <div className="space-y-2 text-base text-gray-600 font-light">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
