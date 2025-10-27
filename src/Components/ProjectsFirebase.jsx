import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { FaPlay, FaTimes, FaExpand } from "react-icons/fa";
import SEO from './SEO';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

// Import default images
import img01 from "../assets/img001.webp";
import img02 from "../assets/img02.webp";
import img03 from "../assets/img03.webp";
import img04 from "../assets/img04.webp";
import img05 from "../assets/img05.webp";

// Default projects
const defaultProjects = {
  images: [img01, img02, img03, img04, img05],
  videos: [
    "https://youtu.be/jYl_fKvGaYk?si=MS7a_7VcZ1ydvLZq",
    "https://youtu.be/W_uMtE21BFs?si=exATu0ormOqGKcNe",
    "https://youtu.be/44nZsF5fV3A?si=VeQlxCLrz-Vq0Uoz",
  ],
  cartoonVideo: "https://youtu.be/vJTLelEsXLY?si=2F-tO6yuze_Xv5Jv",
};

const ProjectsFirebase = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("images");
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(true);

  // Listen to Firestore changes in real-time
  useEffect(() => {
    const docRef = doc(db, 'projects', 'main');
    
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setProjects(docSnap.data());
      } else {
        // Use default projects if Firestore document doesn't exist yet
        setProjects(defaultProjects);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error loading projects from Firebase:', error);
      // Fallback to default projects on error
      setProjects(defaultProjects);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Memoize ImageModal to prevent unnecessary re-renders
  const ImageModal = useMemo(() => ({ imageUrl, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-10"
        >
          <FaTimes className="w-6 h-6 text-white" />
        </button>
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          src={imageUrl}
          alt="Full size"
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  ), []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Our Projects - 3D Renderings & Walkthroughs | Nexus 3D"
        description="Explore our portfolio of stunning 3D architectural renderings, immersive walkthroughs, and cartoon animations. See why clients in Moradabad choose Nexus 3D for visualization."
        keywords="3D renderings portfolio, architectural walkthrough videos, 3D animation examples, Nexus 3D projects, visualization portfolio Moradabad"
        canonical="https://nexus3d.in/projects"
      />
      
      <div className="min-h-screen bg-white py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-4 sm:mb-6">
              Our <span className="italic">Projects</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Explore our portfolio of stunning 3D visualizations, from photorealistic renders to immersive architectural walkthroughs
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap gap-2 sm:gap-4 bg-gray-100 p-2 rounded-lg">
              <button
                onClick={() => setActiveTab("images")}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${
                  activeTab === "images"
                    ? "bg-black text-white shadow-lg"
                    : "bg-transparent text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span className="hidden sm:inline">3D Renderings</span>
                <span className="sm:hidden">Renderings</span>
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${
                  activeTab === "videos"
                    ? "bg-black text-white shadow-lg"
                    : "bg-transparent text-gray-600 hover:bg-gray-200"
                }`}
              >
                Walkthroughs
              </button>
              <button
                onClick={() => setActiveTab("cartoon")}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${
                  activeTab === "cartoon"
                    ? "bg-black text-white shadow-lg"
                    : "bg-transparent text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span className="hidden sm:inline">Cartoon Animation</span>
                <span className="sm:hidden">Animation</span>
              </button>
            </div>
          </div>

          {/* 3D Renderings */}
          {activeTab === "images" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-gray-900 mb-8 text-center">
                3D <span className="italic">Renderings</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={image}
                        alt={`Project ${index + 1}`}
                        loading="lazy"
                        className="w-full h-48 sm:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-base sm:text-xl" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Walkthroughs */}
          {activeTab === "videos" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-gray-900 mb-8 text-center">
                Architectural <span className="italic">Walkthroughs</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects.videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="aspect-video">
                      <ReactPlayer
                        url={video}
                        width="100%"
                        height="100%"
                        controls
                        light
                        playing={false}
                        playIcon={
                          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full hover:bg-white transition-all duration-300 shadow-lg">
                            <FaPlay className="text-black ml-1 text-base sm:text-xl" />
                          </div>
                        }
                        config={{
                          youtube: {
                            playerVars: { modestbranding: 1, rel: 0 },
                          },
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Cartoon Animation */}
          {activeTab === "cartoon" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-gray-900 mb-8 text-center">
                Cartoon <span className="italic">Animation</span>
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <ReactPlayer
                  url={projects.cartoonVideo}
                  width="100%"
                  height="100%"
                  controls
                  light
                  playing={false}
                  playIcon={
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full hover:bg-white transition-all duration-300 shadow-lg">
                      <FaPlay className="text-black ml-1 text-base sm:text-xl" />
                    </div>
                  }
                  config={{
                    youtube: {
                      playerVars: { modestbranding: 1, rel: 0 },
                    },
                  }}
                />
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 text-center bg-gray-50 p-8 sm:p-12 rounded-lg"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-gray-900 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with stunning 3D visualizations
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </div>
    </>
  );
};

export default ProjectsFirebase;

