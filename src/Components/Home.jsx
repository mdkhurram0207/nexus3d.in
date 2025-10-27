import React from 'react';
import HomeVideo from './HomeVideo';
import { FaPhoneAlt, FaWhatsapp, FaArrowRight, FaCheckCircle, FaAward, FaUsers, FaClock, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const whyChooseUs = [
    { 
      icon: FaAward, 
      title: 'High-Quality Visuals', 
      description: 'We focus on realism and artistic depth. Every render is meticulously crafted to highlight accurate materials, lighting, and perspectives, ensuring a lifelike experience that reflects the true essence of your design.'
    },
    { 
      icon: FaClock, 
      title: 'Fast Turnaround Time', 
      description: 'We understand deadlines matter. Our streamlined workflow allows us to deliver top-quality results quickly — without ever compromising detail or quality.'
    },
    { 
      icon: FaUsers, 
      title: 'Experienced & Skilled Team', 
      description: 'With over seven years in the industry, our team brings together expertise in architecture, 3D modeling, and visual effects to produce exceptional results for clients across multiple domains.'
    },
    { 
      icon: FaCheckCircle, 
      title: 'Client-Centered Approach', 
      description: 'Your satisfaction is our priority. We collaborate closely with every client to ensure that each project meets their expectations and conveys the desired vision — every single time.'
    }
  ];

  const services = [
    {
      title: '3D Rendering',
      description: 'Transform your architectural designs into photorealistic images that showcase every detail with stunning precision and clarity.',
      note: 'Perfect for presentations, marketing materials, and client approvals.'
    },
    {
      title: 'Walkthrough Videos',
      description: 'Immersive 3D walkthrough animations that allow clients to experience and explore spaces before construction begins.',
      note: 'Bring your projects to life with cinematic quality animations.'
    },
    {
      title: '3D Modeling',
      description: 'Detailed and accurate 3D models crafted with precision, ideal for architectural visualization and product design.',
      note: 'High-quality models optimized for any rendering engine.'
    }
  ];

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Video Background */}
        <div className="absolute inset-0">
          <HomeVideo />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-5xl mx-auto">
            {/* Welcome Text */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-300 text-sm sm:text-base font-light tracking-widest uppercase mb-4"
            >
              Welcome to Nexus 3D
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 text-white leading-tight tracking-tight"
            >
              Where Architecture Meets Imagination
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We bring your architectural dreams to life with stunning 3D visuals, walkthroughs, and animations — designed to inspire and impress.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button
                onClick={scrollToNext}
                className="px-8 py-3 bg-white text-black font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-100 uppercase"
              >
                Explore More
              </button>
              <Link
                to="/contact"
                className="px-8 py-3 bg-transparent text-white font-medium text-sm tracking-wide border border-white transition-all duration-300 hover:bg-white hover:text-black uppercase"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white text-2xl"
          >
            <FaChevronDown />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight">
              Transforming Concepts into Reality
            </h2>
            <div className="w-16 h-px bg-gray-900 mx-auto mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6 font-light">
              At Nexus 3D, we specialize in crafting photorealistic architectural renders and immersive animations that help clients visualize spaces before they're built. From detailed interior designs to large-scale exterior developments, our visuals communicate your vision clearly and beautifully.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              We blend creativity, technology, and precision to deliver renders that capture every detail — lighting, texture, and depth — making your designs truly come alive.
            </p>
          </motion.div>

          {/* Stats Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            <div className="text-center p-6 border border-gray-200">
              <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-2">7+</div>
              <div className="text-sm sm:text-base text-gray-500 uppercase tracking-wide">Years of Experience</div>
            </div>
            <div className="text-center p-6 border border-gray-200">
              <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-2">120+</div>
              <div className="text-sm sm:text-base text-gray-500 uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="text-center p-6 border border-gray-200">
              <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-2">40+</div>
              <div className="text-sm sm:text-base text-gray-500 uppercase tracking-wide">Clients Worldwide</div>
            </div>
            <div className="text-center p-6 border border-gray-200">
              <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-2">5+</div>
              <div className="text-sm sm:text-base text-gray-500 uppercase tracking-wide">Countries Served</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              What We Do
            </h3>
            <div className="w-16 h-px bg-gray-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">{service.title}</h4>
                <p className="text-base text-gray-600 leading-relaxed mb-4 font-light">
                  {service.description}
                </p>
                <p className="text-sm text-gray-500 font-light italic">
                  {service.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Why Choose Nexus 3D
            </h2>
            <div className="w-16 h-px bg-gray-900 mx-auto mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Experience the difference that precision, passion, and performance can make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-gray-900 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-gray-900 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-base text-gray-600 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
      </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              From initial concept to final visualization, Nexus 3D ensures that your ideas are represented with clarity, precision, and artistic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-8 tracking-tight">
              Ready to Start Your Project?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
        <a
          href="tel:+919756170713"
                className="px-8 py-3 bg-white text-black font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-100 uppercase"
        >
                +91 9756170713
        </a>
        <a
          href="https://wa.me/+919756170713"
          target="_blank"
          rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent text-white font-medium text-sm tracking-wide border border-white transition-all duration-300 hover:bg-white hover:text-black uppercase"
        >
                WhatsApp
        </a>
      </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
