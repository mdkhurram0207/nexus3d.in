// Projects.jsx
import React from "react";
import ImageComponent from "../Components/ImageComponent";

// Video Components
const VideoComponent = ({ videos, title }) => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl text-blue-400 font-semibold mb-4">{title}</h3>
      {videos.map((video, index) => (
        <div key={index} className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={video}
            title={`video-${index}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

const CartoonVideoComponent = ({ videoUrl }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl text-blue-400 font-semibold mb-4 text-center">
        3D Cartoon Animation
      </h3>
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="cartoon-video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

// Import images
import img01 from "../assets/img001.webp";
import img02 from "../assets/img02.webp";
import img03 from "../assets/img03.webp";
import img04 from "../assets/img04.webp";
import img05 from "../assets/img05.webp";

// YouTube embed links
const projectsData = {
  architecture: {
    images: [img01, img02, img03, img04, img05],
    videos: [
      "https://www.youtube.com/embed/44nZsF5fV3A",
      "https://www.youtube.com/embed/jYl_fKvGaYk",
      "https://www.youtube.com/embed/W_uMtE21BFs",
    ],
  },
  animation: {
    video: "https://www.youtube.com/embed/vJTLelEsXLY",
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
          <VideoComponent
            videos={projectsData.architecture.videos}
            title="3D Architecture Walkthrough"
          />
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

