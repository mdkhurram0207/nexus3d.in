import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
          className="absolute top-6 right-6 p-3 bg-white text-black hover:bg-gray-100 transition-all"
          onClick={onClose}
        >
          <FaTimes className="text-2xl" />
        </motion.button>
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="max-w-full max-h-[90vh] shadow-2xl"
          src={imageUrl}
          alt="Selected"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 w-full">
      <div className="w-full max-w-7xl mx-auto py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900 tracking-tight">
          Our Projects
          </h1>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Explore our portfolio of stunning 3D architectural visualizations and creative animations
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-8 py-3 font-medium text-sm tracking-wide uppercase transition-all duration-300 ${
              activeTab === "images"
                ? "bg-black text-white"
                : "bg-white text-gray-900 border border-gray-200 hover:border-gray-900"
            }`}
          >
            3D Renderings
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-8 py-3 font-medium text-sm tracking-wide uppercase transition-all duration-300 ${
              activeTab === "videos"
                ? "bg-black text-white"
                : "bg-white text-gray-900 border border-gray-200 hover:border-gray-900"
            }`}
          >
            Walkthroughs
          </button>
          <button
            onClick={() => setActiveTab("animation")}
            className={`px-8 py-3 font-medium text-sm tracking-wide uppercase transition-all duration-300 ${
              activeTab === "animation"
                ? "bg-black text-white"
                : "bg-white text-gray-900 border border-gray-200 hover:border-gray-900"
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
            <h3 className="text-2xl sm:text-3xl font-light text-center mb-12 text-gray-900">
              3D Architectural Renderings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.architecture.images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden cursor-pointer border border-gray-200 hover:border-gray-900 transition-all duration-300"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    className="w-full h-64 object-cover"
                    src={src}
                    alt={`Project ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center text-white">
                      <FaExpand className="text-3xl mb-2 mx-auto" />
                      <p className="font-light text-sm uppercase tracking-wide">View Full Size</p>
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
            <h3 className="text-2xl sm:text-3xl font-light text-center mb-12 text-gray-900">
              3D Walkthrough Animations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.architecture.videos.map((url, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
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
                      playIcon={
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
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
            <h3 className="text-2xl sm:text-3xl font-light text-center mb-12 text-gray-900">
              2D/3D Cartoon Animation
            </h3>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative border border-gray-200 overflow-hidden"
            >
              <div className="aspect-video bg-gray-100">
                <ReactPlayer
                  url={projectsData.animation.video}
                  width="100%"
                  height="100%"
                  controls
                  light={true}
                  playIcon={
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
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
          className="text-center mt-24"
        >
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 tracking-tight">
            Impressed by Our Work?
          </h3>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Let us transform your vision into stunning 3D reality
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-black text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 uppercase"
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
