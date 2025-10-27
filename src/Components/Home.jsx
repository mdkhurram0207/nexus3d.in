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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
          {/* Decorative grid overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-white/10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-white/10"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            {/* Decorative top line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"
            ></motion.div>

            {/* Welcome Text */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-400 text-xs sm:text-sm font-light tracking-[0.3em] uppercase mb-6 relative inline-block"
            >
              <span className="relative">
                Welcome to
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
              </span>
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light mb-8 text-white leading-tight"
            >
              Where Architecture <br/>
              <span className="italic relative inline-block">
                Meets
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent origin-left"
                ></motion.span>
              </span> Imagination
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We bring your architectural dreams to life with stunning 3D visuals, walkthroughs, and animations — designed to inspire and impress.
            </motion.p>

            {/* Decorative middle line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-12"
            ></motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToNext}
                className="group px-12 py-4 bg-white text-black font-light text-sm tracking-[0.2em] transition-all duration-500 hover:bg-black hover:text-white border border-white uppercase relative overflow-hidden"
              >
                <span className="relative z-10">Explore More</span>
              </motion.button>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-block px-12 py-4 bg-transparent text-white font-light text-sm tracking-[0.2em] border border-white/50 transition-all duration-500 hover:border-white hover:bg-white/10 backdrop-blur-sm uppercase"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
      </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/70 text-2xl group-hover:text-white transition-colors duration-300"
          >
            <FaChevronDown />
          </motion.div>
          <p className="text-white/50 text-xs tracking-[0.2em] mt-2 uppercase">Scroll</p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full filter blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Small decorative line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-8"
            ></motion.div>
            
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-10 leading-tight">
              Transforming Concepts<br/>
              <span className="italic relative inline-block">
                into
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent origin-center"
                ></motion.span>
              </span> Reality
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-px bg-gray-900 mx-auto mb-12"
            ></motion.div>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8 font-light">
              At Nexus 3D, we specialize in crafting photorealistic architectural renders and immersive animations that help clients visualize spaces before they're built. From detailed interior designs to large-scale exterior developments, our visuals communicate your vision clearly and beautifully.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
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
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-default"
              >
                <div className="relative p-6">
                  {/* Decorative corner */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gray-200 group-hover:border-gray-900 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gray-200 group-hover:border-gray-900 transition-colors duration-500"></div>
                  
                  <div className="text-5xl sm:text-6xl font-serif font-light text-gray-900 mb-3">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-[0.2em] font-light">{stat.label}</div>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-12 h-px bg-gray-900 mx-auto mt-4"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-16 sm:py-20 bg-gray-50/50 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-8"
            ></motion.div>
            
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900">
              What We <span className="italic">Do</span>
            </h3>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-px bg-gray-900 mx-auto"
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-default"
              >
                <div className="bg-white p-10 border border-gray-200 hover:border-gray-900 shadow-sm hover:shadow-xl transition-all duration-500 h-full relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="mb-6 flex items-center gap-3">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-12 h-px bg-gray-900 origin-left"
                    ></motion.div>
                    <span className="text-xs text-gray-400 font-light tracking-[0.2em] uppercase">0{index + 1}</span>
                  </div>
                  
                  <h4 className="font-serif text-2xl sm:text-3xl font-light mb-6 text-gray-900">{service.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                  <p className="text-sm text-gray-500 italic font-light">
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
