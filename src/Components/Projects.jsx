import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import { FaPlay, FaTimes, FaExpand } from "react-icons/fa";

// Import images
import img01 from "../assets/img001.webp";
import img02 from "../assets/img02.webp";
import img03 from "../assets/img03.webp";
import img04 from "../assets/img04.webp";
import img05 from "../assets/img05.webp";

// Updated YouTube links
const projectsData = {
  architecture: {
    images: [img01, img02, img03, img04, img05],
    videos: [
      "https://youtu.be/jYl_fKvGaYk?si=MS7a_7VcZ1ydvLZq",
      "https://youtu.be/W_uMtE21BFs?si=exATu0ormOqGKcNe",
      "https://youtu.be/44nZsF5fV3A?si=VeQlxCLrz-Vq0Uoz",
    ],
  },
  animation: {
    video: "https://youtu.be/vJTLelEsXLY?si=2F-tO6yuze_Xv5Jv",
  },
};

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("images");

  const ImageModal = ({ imageUrl, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        onClick={onClose}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all"
          onClick={onClose}
        >
          <FaTimes className="text-2xl" />
        </motion.button>
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          src={imageUrl}
          alt="Selected"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center px-4 sm:px-8 w-full overflow-hidden">
      <div className="w-full max-w-screen-xl py-20">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Projects
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of stunning 3D architectural visualizations and creative animations
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "images"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-white/10 text-gray-400 hover:bg-white/20"
            }`}
          >
            3D Renderings
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "videos"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-white/10 text-gray-400 hover:bg-white/20"
            }`}
          >
            Walkthroughs
          </button>
          <button
            onClick={() => setActiveTab("animation")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "animation"
                ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg"
                : "bg-white/10 text-gray-400 hover:bg-white/20"
            }`}
          >
            Cartoon Animation
          </button>
        </div>

        {/* 3D Architecture Images */}
        {activeTab === "images" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-300">
              3D Architectural Renderings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.architecture.images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer shadow-xl"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    className="w-full h-64 object-cover"
                    src={src}
                    alt={`Project ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <FaExpand className="text-white text-3xl mb-2 mx-auto" />
                      <p className="text-white font-semibold">View Full Size</p>
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
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-purple-300">
              3D Walkthrough Animations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.architecture.videos.map((url, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl"
                >
                  <div className="aspect-video">
                    <ReactPlayer
                      url={url}
                      width="100%"
                      height="100%"
                      controls
                      light={true}
                      playing={false}
                      playIcon={
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <FaPlay className="text-white text-xl ml-1" />
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
            className="w-full max-w-5xl mx-auto"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-pink-300">
              2D/3D Cartoon Animation
            </h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-video">
                <ReactPlayer
                  url={projectsData.animation.video}
                  width="100%"
                  height="100%"
                  controls
                  light={true}
                  playIcon={
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <FaPlay className="text-white text-2xl ml-1" />
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
          className="text-center mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Impressed by Our Work?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let us transform your vision into stunning 3D reality
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </a>
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
