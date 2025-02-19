import React from "react";
import ImageComponent from "../Components/ImageComponent";
import VideoComponent from "../Components/VideoComponent";
import CartoonVideoComponent from "../Components/CartoonVideoComponent"; // Ensure correct casing

// Import images
import img01 from "../assets/img001.webp";
import img02 from "../assets/img02.webp";
import img03 from "../assets/img03.webp";
import img04 from "../assets/img04.webp";
import img05 from "../assets/img05.webp";

// YouTube links
const projectsData = {
  architecture: {
    images: [img01, img02, img03, img04, img05],
    videos: [
      "https://youtu.be/enSSQQTzQHQ", // Project 02
      "https://youtu.be/7Q-lx7khCjo", // Project 03
      "https://youtu.be/90UFGpOwVhY", // Project 04
    ],
  },
  animation: {
    video: "https://youtu.be/W4CZkwYImJc", // Cartoon Video
  },
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-8 w-full overflow-hidden">
      <div className="w-full max-w-screen-xl py-8">
        {/* Page Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-300 text-center mb-12 font-bold uppercase tracking-wide">
          Our Projects
        </h2>

        {/* 3D Architecture Images */}
        <div className="w-full mb-16">
          <ImageComponent images={projectsData.architecture.images} />
        </div>

        {/* 3D Architecture Videos */}
        <div className="w-full mb-16">
          <VideoComponent videos={projectsData.architecture.videos} title="3D Architecture Walkthrough" />
        </div>

        {/* Cartoon Animation Video */}
        <div className="w-full">
          <CartoonVideoComponent videoUrl={projectsData.animation.video} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
