import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { FaPlay, FaTimes, FaExpand } from "react-icons/fa";

// Empty projects data - all content comes from Firebase admin panel
const projectsData = {
  architecture: {
    images: [],
    videos: [],
  },
  animation: {
    video: "",
  },
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("images");

  // ImageModal component
  const ImageModal = ({ imageUrl, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-sm flex justify-center items-center z-50 p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 bg-white text-black hover:bg-gray-100 transition-all z-10"
          onClick={onClose}
        >
          <FaTimes className="text-xl sm:text-2xl" />
        </motion.button>
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="max-w-full max-h-[90vh] shadow-2xl object-contain"
          src={imageUrl}
          alt="Selected"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 w-full">
      <div className="w-full max-w-7xl mx-auto py-16 sm:py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
          Our Projects
          </h1>
          <div className="w-12 sm:w-16 h-px bg-gray-900 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto font-light px-4">
            Explore our portfolio of stunning 3D architectural visualizations and creative animations
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-2">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-4 sm:px-8 py-3 font-medium text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 ${
              activeTab === "images"
                ? "bg-black text-white"
                : "bg-white text-gray-900 border border-gray-200 hover:border-gray-900"
            }`}
          >
            <span className="hidden sm:inline">3D Renderings</span>
            <span className="sm:hidden">Renderings</span>
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-4 sm:px-8 py-3 font-medium text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 ${
              activeTab === "videos"
                ? "bg-black text-white"
                : "bg-white text-gray-900 border border-gray-200 hover:border-gray-900"
            }`}
          >
            Walkthroughs
          </button>
          <button
            onClick={() => setActiveTab("animation")}
            className={`px-4 sm:px-8 py-3 font-medium text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 ${
              activeTab === "animation"
                ? "bg-black text-white"
                : "bg-white text-gray-900 border border-gray-200 hover:border-gray-900"
            }`}
          >
            <span className="hidden sm:inline">Cartoon Animation</span>
            <span className="sm:hidden">Animation</span>
          </button>
        </div>

        {/* 3D Architecture Images */}
        {activeTab === "images" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-center mb-8 sm:mb-12 text-gray-900 px-4">
              3D Architectural Renderings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projectsData.architecture.images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden cursor-pointer border border-gray-200 hover:border-gray-900 transition-all duration-300"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                    src={src}
                    alt={`Project ${index + 1}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center text-white">
                      <FaExpand className="text-2xl sm:text-3xl mb-2 mx-auto" />
                      <p className="font-light text-xs sm:text-sm uppercase tracking-wide">View Full Size</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 3D Architecture Videos */}
        {activeTab === "videos" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-center mb-8 sm:mb-12 text-gray-900 px-4">
              3D Walkthrough Animations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {projectsData.architecture.videos.map((url, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative border border-gray-200 overflow-hidden"
                >
                  <div className="aspect-video bg-gray-100">
                    <ReactPlayer
                      url={url}
                      width="100%"
                      height="100%"
                      controls
                      light={true}
                      playing={false}
                      config={{
                        youtube: {
                          playerVars: { modestbranding: 1, rel: 0 }
                        }
                      }}
                      playIcon={
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center">
                          <FaPlay className="text-white text-base sm:text-xl ml-1" />
                        </div>
                      }
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Cartoon Animation Video */}
        {activeTab === "animation" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl mx-auto px-2 sm:px-0"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-center mb-8 sm:mb-12 text-gray-900 px-4">
              2D/3D Cartoon Animation
            </h3>
            <motion.div
              className="relative border border-gray-200 overflow-hidden"
            >
              <div className="aspect-video bg-gray-100">
                <ReactPlayer
                  url={projectsData.animation.video}
                  width="100%"
                  height="100%"
                  controls
                  light={true}
                  config={{
                    youtube: {
                      playerVars: { modestbranding: 1, rel: 0 }
                    }
                  }}
                  playIcon={
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center">
                      <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                    </div>
                  }
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 sm:mt-24 px-4"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Impressed by Our Work?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto font-light">
            Let us transform your vision into stunning 3D reality
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 sm:px-8 py-3 bg-black text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 uppercase"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Projects;
