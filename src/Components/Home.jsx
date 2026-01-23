import React from 'react';
import HomeVideo from './HomeVideo';

import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaCheckCircle, FaAward, FaUsers, FaClock, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {

  const whyChooseUs = [
    { 
      icon: FaAward, 
      title: "We Actually Care About Quality", 
      description: "Look, there are plenty of places that'll churn out renders. We're not one of them. We'll spend hours tweaking that one light source because it matters. We'll redo materials until they look real enough to touch. Why? Because when your client sees it, they should believe it."
    },
    { 
      icon: FaClock, 
      title: "We Get It Done Fast", 
      description: "Deadlines are real. We know that. So we've built our process to be efficient without cutting corners. You need it yesterday? We've been there. We'll hustle, but we won't give you something that looks rushed."
    },
    { 
      icon: FaUsers, 
      title: "We Know What We're Doing", 
      description: "Seven years might not sound like forever, but in this industry, it's enough to learn what works and what doesn't. We've worked with architects, developers, interior designers — you name it. We've seen the mistakes, learned from them, and now we avoid them."
    },
    { 
      icon: FaCheckCircle, 
      title: "We Listen (Seriously)", 
      description: "Your project isn't our project to design. It's yours. So we listen. Really listen. When you say \"make it warmer\" or \"I don't like that angle,\" we hear you. We'll tweak, adjust, and refine until you're happy. Because your vision is what matters here."
    }
  ];

  const services = [
    {
      title: "3D Rendering",
      description: "You know those images that make you stop scrolling? That's what we make. We take your designs and turn them into visuals so real, people will ask if we took a photo. Every texture, every shadow, every reflection — we obsess over it all.",
      note: "Great for when you need to show clients what they're buying before they buy it."
    },
    {
      title: "Walkthrough Videos",
      description: "Remember that feeling of walking through a space for the first time? We recreate that, but in video form. Clients can literally walk through your design before a single brick is laid. It's pretty cool, honestly.",
      note: "Nothing sells a space like letting people experience it themselves."
    },
    {
      title: "3D Modeling",
      description: "Before we can make it look pretty, we need to build it. That's where modeling comes in. We create every wall, every window, every detail exactly as it should be. No shortcuts, no \"that's close enough.\"",
      note: "The foundation of everything we do. Get this right, and the rest follows."
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
                Hey there
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
              We Make Buildings <br/>
              <span className="italic relative inline-block">
                Look Real
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent origin-left"
                ></motion.span>
              </span> Before They're Built
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              You've got sketches, plans, maybe even a rough idea. We take all that and turn it into something you can actually show people. Something that makes them stop and say "wait, this isn't a photo?" Yeah, we're pretty good at this.
            </motion.p>

            {/* Decorative middle line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"
            ></motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-20"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/projects"
                  className="inline-block px-12 py-4 bg-white text-black font-light text-sm tracking-[0.2em] transition-all duration-500 hover:bg-black hover:text-white border border-white uppercase relative overflow-hidden group"
                >
                  <span className="relative z-10">Portfolio</span>
                </Link>
              </motion.div>
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group flex flex-col items-center"
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
              Your Ideas, <br/>
              <span className="italic relative inline-block">
                Our Magic
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent origin-center"
                ></motion.span>
              </span> (Well, Skills Actually)
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-px bg-gray-900 mx-auto mb-12"
            ></motion.div>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8 font-light">
              Look, we've been at this since 2018. That's seven years of making buildings look real before they exist. Seven years of figuring out how to make light bounce just right, how to make materials look touchable, how to make spaces feel lived-in even when they're just pixels on a screen.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              You know what's funny? Every project starts the same way. Someone shows us a drawing or a plan and says "can you make this look real?" And we're like "yeah, we got you." Then we spend way too much time on details nobody will notice, but that's what makes the difference. That's what makes people believe what they're seeing.
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
              Here's What We <span className="italic">Actually Do</span>
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
      <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gray-50 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gray-50 rounded-full filter blur-3xl opacity-40"></div>
        
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
            
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-8">
              Why Work With <span className="italic">Us?</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-px bg-gray-900 mx-auto mb-10"
            ></motion.div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Honestly? Because we care. Not in that fake corporate way, but actually. We'll stay up late fixing that one light that's bugging you. We'll redo something three times if it's not right. Because your project is important, and we want you to be happy with it.
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
                  whileHover={{ y: -4 }}
                  className="group cursor-default"
                >
                  <div className="relative bg-white p-10 border border-gray-200 hover:border-gray-900 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Number indicator */}
                    <div className="absolute top-4 right-4 text-6xl font-serif font-light text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                      0{index + 1}
                    </div>
                    
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-16 h-16 border border-gray-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-900 transition-all duration-500">
                        <Icon className="text-gray-900 group-hover:text-white text-2xl transition-colors duration-500" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-light text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-base text-gray-600 leading-relaxed font-light">{item.description}</p>
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
              At the end of the day, we're just people who got really good at making fake things look real. And if that helps you sell your vision, get your project approved, or just show people what you're dreaming up — then we're doing our job right.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;

