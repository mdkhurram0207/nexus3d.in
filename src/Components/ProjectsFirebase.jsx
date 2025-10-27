import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import ReactPlayer from "react-player";
import { FaPlay, FaTimes } from "react-icons/fa";

const ProjectsFirebase = () => {
  const [activeTab, setActiveTab] = useState("architecture");
  const [projects, setProjects] = useState({
    architecture: { images: [] },
    walkthroughs: { videos: [] },
    cartoon: { videos: [] }
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Default Cloudinary images as fallback
    const defaultImages = [
      "https://res.cloudinary.com/dy31puega/image/upload/v1761579852/img001_ee2owt.webp",
      "https://res.cloudinary.com/dy31puega/image/upload/v1761579853/img02_ogmxgf.webp",
      "https://res.cloudinary.com/dy31puega/image/upload/v1761579852/img03_hqyjn5.webp",
      "https://res.cloudinary.com/dy31puega/image/upload/v1761579854/img04_oanhad.webp",
      "https://res.cloudinary.com/dy31puega/image/upload/v1761579856/img05_ycc7wx.webp",
    ];

    // Default videos as fallback - Empty arrays, videos will be added via admin panel
    const defaultWalkthroughs = [];
    const defaultCartoonVideos = [];

    // Listen for real-time updates from Firestore
    const projectsRef = collection(db, "projects");
    const q = query(projectsRef, orderBy("timestamp", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = {
        architecture: { images: [] },
        walkthroughs: { videos: [] },
        cartoon: { videos: [] }
      };

      // Add Firebase images
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.category && projectsData[data.category]) {
          if (data.category === "architecture") {
            projectsData.architecture.images.push({
              id: doc.id,
              url: data.url,
              timestamp: data.timestamp
            });
          } else {
            projectsData[data.category].videos.push({
              id: doc.id,
              url: data.url,
              timestamp: data.timestamp
            });
          }
        }
      });

      // If no Firebase images exist, use default images
      if (projectsData.architecture.images.length === 0) {
        projectsData.architecture.images = defaultImages.map((url, index) => ({
          id: `default-${index}`,
          url: url,
          timestamp: new Date()
        }));
      } else {
        // Always include default images alongside Firebase images
        const defaultImageObjects = defaultImages.map((url, index) => ({
          id: `default-${index}`,
          url: url,
          timestamp: new Date()
        }));
        
        // Combine Firebase images with default images, avoiding duplicates
        const allImages = [...projectsData.architecture.images];
        defaultImageObjects.forEach(defaultImg => {
          if (!allImages.some(img => img.url === defaultImg.url)) {
            allImages.push(defaultImg);
          }
        });
        
        projectsData.architecture.images = allImages;
      }

      // Videos will only come from Firebase admin panel - no hardcoded defaults

      setProjects(projectsData);
    });

    return () => unsubscribe();
  }, []);

  const tabs = [
    { key: "architecture", label: "3D Renderings", shortLabel: "Renderings" },
    { key: "walkthroughs", label: "Walkthroughs", shortLabel: "Walkthroughs" },
    { key: "cartoon", label: "Cartoon Animation", shortLabel: "Animation" },
  ];

  const ImageModal = useMemo(() => {
    if (!selectedImage) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={() => setSelectedImage(null)}
      >
        <div className="relative max-w-4xl max-h-full">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
          >
            <FaTimes className="text-xl sm:text-2xl" />
          </button>
          <img
            src={selectedImage}
            alt="Project"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </motion.div>
    );
  }, [selectedImage]);

  const VideoModal = useMemo(() => {
    if (!selectedVideo) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={() => setSelectedVideo(null)}
      >
        <div className="relative max-w-4xl max-h-full w-full">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition-all duration-300"
          >
            <FaTimes className="text-xl sm:text-2xl" />
          </button>
          <div className="aspect-video w-full">
            <ReactPlayer
              url={selectedVideo}
              width="100%"
              height="100%"
              controls
              config={{
                youtube: {
                  playerVars: { modestbranding: 1, rel: 0 }
                }
              }}
            />
          </div>
        </div>
      </motion.div>
    );
  }, [selectedVideo]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-4 sm:mb-6">
              Our <span className="italic text-gray-700">Portfolio</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4 leading-relaxed font-light">
              Explore our collection of 3D visualizations, architectural walkthroughs, and creative animations that bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${
                  activeTab === tab.key
                    ? "bg-black text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          {/* 3D Renderings */}
          {activeTab === "architecture" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {projects.architecture.images.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item.url)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <img
                      src={item.url}
                      alt={`Project ${index + 1}`}
                      className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <FaPlay className="text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {projects.architecture.images.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500">
                  <p className="text-lg">No 3D renderings available yet.</p>
                  <p className="text-sm mt-2">Check back soon for new projects!</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Walkthroughs */}
          {activeTab === "walkthroughs" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            >
              {projects.walkthroughs.videos.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(item.url)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <FaPlay className="text-white text-base sm:text-xl ml-1" />
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">
                          Walkthrough Video
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {projects.walkthroughs.videos.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500">
                  <p className="text-lg">No walkthrough videos available yet.</p>
                  <p className="text-sm mt-2">Check back soon for new projects!</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Cartoon Animation */}
          {activeTab === "cartoon" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            >
              {projects.cartoon.videos.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(item.url)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <FaPlay className="text-white text-base sm:text-xl ml-1" />
                        </div>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">
                          Cartoon Animation
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {projects.cartoon.videos.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500">
                  <p className="text-lg">No cartoon animations available yet.</p>
                  <p className="text-sm mt-2">Check back soon for new projects!</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-gray-900 mb-4 sm:mb-6">
              Ready to Bring Your <span className="italic text-gray-700">Vision</span> to Life?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 font-light">
              Let's create something extraordinary together. Contact us to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                Get Started
              </a>
              <a
                href="tel:+919876543210"
                className="bg-white text-black border border-gray-300 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      {ImageModal}
      {VideoModal}
    </div>
  );
};

export default ProjectsFirebase;
