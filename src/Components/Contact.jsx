import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

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
    // Create mailto link with form data
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
      color: "from-blue-400 to-cyan-400",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "contact@nexus3d.in",
      link: "mailto:contact@nexus3d.in",
      color: "from-purple-400 to-pink-400",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "Chat with Us",
      link: "https://wa.me/+919756170713",
      color: "from-green-400 to-teal-400",
      bgColor: "from-green-500/20 to-teal-500/20",
      external: true
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen px-4 sm:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's bring your vision to life together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="+91 1234567890"
                />
            </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
            </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
              {formStatus && (
                <p className="text-center text-green-400 text-sm">{formStatus}</p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Choose your preferred way to reach us. We're here to help bring your vision to life!
              </p>

              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={index}
                      href={method.link}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-center gap-4 p-6 bg-gradient-to-r ${method.bgColor} rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 group`}
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                        <p className={`bg-gradient-to-r ${method.color} bg-clip-text text-transparent font-medium`}>
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
            <a
              href="https://www.google.com/maps/place/Gali+Number+5,+Pakwara,+Uttar+Pradesh+244102/@28.823301,78.6700634,17z/data=!3m1!4b1!4m6!3m5!1s0x390afd9330baccd9:0x5ed495376abf0c77!8m2!3d28.8232966!4d78.6724875!16s%2Fg%2F11h3gh4q6y?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Raza Building, Near Temptations, Delhi Road, Pakwara, Moradabad 244102
            </a>
          </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl shadow-2xl"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether it's a quick question or an exciting new project, we're here to collaborate and create something exceptional together.
          </p>
        </motion.div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nexus 3D. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
