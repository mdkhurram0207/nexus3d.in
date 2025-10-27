import React from 'react';
import HomeVideo from './HomeVideo';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaCheckCircle, FaAward, FaUsers, FaClock, FaChevronDown } from 'react-icons/fa';
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            {/* Welcome Text */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-300 text-xs sm:text-sm font-medium tracking-ultra-wide uppercase mb-6"
            >
              Welcome to
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium mb-8 text-white leading-tight"
            >
              Where Architecture <br/>
              <span className="italic">Meets</span> Imagination
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
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
                className="group px-10 py-4 bg-white text-black font-medium text-base tracking-wide transition-all duration-300 hover:bg-gray-100 uppercase relative overflow-hidden"
              >
                <span className="relative z-10">Explore More</span>
                <div className="absolute inset-0 bg-gray-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  Explore More
                </span>
              </button>
              <Link
                to="/contact"
                className="px-10 py-4 bg-transparent text-white font-medium text-base tracking-wide border-2 border-white transition-all duration-300 hover:bg-white hover:text-black uppercase"
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
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-3xl"
          >
            <FaChevronDown />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-gray-900 mb-10 leading-tight">
              Transforming Concepts<br/>
              <span className="italic">into</span> Reality
            </h2>
            <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-12"></div>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              At Nexus 3D, we specialize in crafting photorealistic architectural renders and immersive animations that help clients visualize spaces before they're built. From detailed interior designs to large-scale exterior developments, our visuals communicate your vision clearly and beautifully.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We blend creativity, technology, and precision to deliver renders that capture every detail — lighting, texture, and depth — making your designs truly come alive.
            </p>
          </motion.div>

          {/* Stats Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {[
              { number: '7+', label: 'Years of Experience' },
              { number: '120+', label: 'Projects Completed' },
              { number: '40+', label: 'Clients Worldwide' },
              { number: '5+', label: 'Countries Served' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl sm:text-6xl font-serif font-medium text-gray-900 mb-3">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-500 uppercase tracking-widest">{stat.label}</div>
                <div className="w-12 h-0.5 bg-gray-900 mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 text-gray-900">
              What We <span className="italic">Do</span>
            </h3>
            <div className="w-24 h-0.5 bg-gray-900 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="mb-6">
                    <div className="w-12 h-0.5 bg-gray-900 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl font-medium mb-6 text-gray-900">{service.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    {service.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-gray-900 mb-8">
              Why Choose <span className="italic">Nexus 3D</span>
            </h2>
            <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that precision, passion, and performance can make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
  return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gray-50 p-10 border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 border-2 border-gray-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-900 transition-colors duration-500">
                        <Icon className="text-gray-900 group-hover:text-white text-2xl transition-colors duration-500" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
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
            <p className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed italic">
              From initial concept to final visualization, Nexus 3D ensures that your ideas are represented with clarity, precision, and artistic excellence.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
