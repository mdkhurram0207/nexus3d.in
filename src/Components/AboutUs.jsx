import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRegFileAlt, FaGlobeAmericas, FaUserFriends, FaRocket, FaAward, FaHeart } from 'react-icons/fa';

const AboutUs = () => {
  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);
  const [clients, setClients] = useState(0);

  const startCounting = (target, setter, interval = 50) => {
    let count = 0;
    const step = Math.ceil(target / 100);
    const timer = setInterval(() => {
      if (count >= target) {
        clearInterval(timer);
        setter(target);
      } else {
        count += step;
        setter(Math.min(count, target));
      }
    }, interval);
  };

  useEffect(() => {
    startCounting(120, setProjects);
    startCounting(5, setCountries);
    startCounting(40, setClients);
  }, []);

  const stats = [
    { icon: FaRegFileAlt, value: projects, label: 'Projects Completed' },
    { icon: FaUserFriends, value: clients, label: 'Happy Clients' },
    { icon: FaGlobeAmericas, value: countries, label: 'Countries Served' }
  ];

  const values = [
    { 
      icon: FaAward, 
      title: "We Don't Half-Ass Things", 
      description: "If we're going to do it, we're going to do it right. No shortcuts, no \"good enough.\" We'll tweak that lighting for the third time if it means getting it perfect."
    },
    { 
      icon: FaRocket, 
      title: "We Stay Curious", 
      description: "New tools? We try them. New techniques? We learn them. The industry moves fast, and so do we. Because the best way to stay good is to keep getting better."
    },
    { 
      icon: FaHeart, 
      title: "We Actually Like This Stuff", 
      description: "There's something satisfying about making something look real when it isn't. We geek out over good lighting. We get excited about perfect textures. It's weird, but it works."
    }
  ];

  const timeline = [
    { year: "2018", event: "We Started This Thing", description: "Two people, one computer, and a lot of coffee. That's how it began. We had no idea it would turn into this." },
    { year: "2020", event: "Clients Started Calling", description: "Word got around. Suddenly we were working with people in different countries. Still not sure how that happened, but we're not complaining." },
    { year: "2022", event: "Hit 100 Projects", description: "That was a good day. We celebrated with pizza. Because why not? A hundred projects is a big deal." },
    { year: "2025", event: "Still Going Strong", description: "Here we are. Still making renders, still learning, still trying to get better. The journey continues." }
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900 tracking-tight">
            About Us
          </h1>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            We're a bunch of people who got really good at making things look real on a computer. Started small, stayed focused, and somehow ended up working with clients all over the world. Not bad for a team that just wanted to make cool visuals.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300"
              >
                <Icon className="text-4xl text-gray-900 mx-auto mb-4" />
                <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-2">
                  {stat.value}+
                </div>
                <div className="text-sm sm:text-base text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 text-center mb-6 tracking-tight">
            Our Story
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-12"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto font-light text-center mb-6">
            Back in 2018, we started with a simple idea: what if we could show people exactly what their building would look like before they built it? Turns out, a lot of people wanted that. Architects, developers, interior designers — they all came knocking. And we kept getting better at it.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto font-light text-center">
            Fast forward to now, and we're working with clients in five different countries. But here's the thing — we still approach every project like it's our first. Because every project matters. Every detail counts. And honestly? We wouldn't have it any other way.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 text-center mb-6 tracking-tight">
            Our Core Values
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-gray-50 border border-gray-200 hover:border-gray-900 transition-all duration-300"
                >
                  <div className="w-16 h-16 border border-gray-900 flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-2xl text-gray-900" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-base text-gray-600 font-light">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 text-center mb-6 tracking-tight">
            Our Journey
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-12"></div>
          <div className="space-y-8 max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 border border-gray-900 flex items-center justify-center">
                  <span className="text-lg font-light text-gray-900">{item.year}</span>
          </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-light text-gray-900 mb-2">{item.event}</h4>
                  <p className="text-base text-gray-600 font-light">{item.description}</p>
          </div>
              </motion.div>
            ))}
        </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 p-12 border border-gray-200"
        >
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Let's Create Together
          </h3>
          <p className="text-base text-gray-600 mb-8 font-light">
            Got a project in mind? Let's talk. We're always up for a challenge, and honestly, we'd love to see what you're working on.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919756170713"
              className="px-8 py-3 bg-black text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 uppercase"
            >
              Contact Us
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-transparent text-gray-900 font-medium text-sm tracking-wide border border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white uppercase"
            >
              Get a Quote
            </a>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
