import React, { useState } from "react";

const VideoComponent = ({ videos, title }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="mb-12">
      <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 uppercase">
        {title}
      </h3>
      
      <div className="overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal scrollbar-hide p-4">
        <div className="flex md:grid md:grid-cols-3 gap-6">
          {videos.map((videoUrl, index) => {
            const videoId = videoUrl.split("youtu.be/")[1];
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
            const defaultUrl = `https://www.youtube.com/embed/${videoId}`;

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 flex-none w-72 md:w-auto"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ aspectRatio: "16/9" }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={hoveredIndex === index ? embedUrl : defaultUrl}
                  title={`Project Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                  style={{ aspectRatio: "16/9" }}
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
