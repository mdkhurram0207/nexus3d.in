import React, { useState } from "react";

const CartoonVideoComponent = ({ videoUrl }) => {
  const [hovered, setHovered] = useState(false);
  const videoId = videoUrl.split("youtu.be/")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

  return (
    <div className="mt-12 flex flex-col items-center w-full px-4">
      <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-6 text-center">
        2D/3D Cartoon Animation
      </h3>

      <div
        className="relative w-full max-w-4xl flex justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <iframe
          width="100%"
          height="auto"
          src={hovered ? embedUrl : `https://www.youtube.com/embed/${videoId}`}
          title="Cartoon Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg aspect-video"
        ></iframe>
      </div>
    </div>
  );
};

export default CartoonVideoComponent;
