import React from "react";
import ImageComponent from "../Components/ImageComponent";
import ReactPlayer from "react-player";
import CartoonVideoComponent from "../Components/CartoonVideoComponent";

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
        <div className="w-full mb-16 flex flex-wrap justify-center gap-8">
          {projectsData.architecture.videos.map((url, index) => (
            <div key={index} className="w-full sm:w-[45%] lg:w-[30%]">
              <ReactPlayer
                url={url}
                width="100%"
                height="200px"
                controls
                light={true} // Shows YouTube thumbnail
              />
            </div>
          ))}
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
