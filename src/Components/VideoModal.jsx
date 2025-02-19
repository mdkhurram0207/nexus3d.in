// src/Components/VideoModal.jsx
import React from "react";

const VideoModal = ({ videoUrl, onClose }) => {
  const getYouTubeEmbed = (url) => {
    const videoId = url.split("v=")[1] || url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="relative bg-gray-900 rounded-lg p-6 shadow-2xl max-w-4xl w-full">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 text-white text-2xl hover:text-gray-400 transition-colors"
          onClick={onClose}
        >
          ✖
        </button>

        {/* YouTube Video Embed */}
        <iframe
          className="w-full h-96 rounded-lg"
          src={getYouTubeEmbed(videoUrl)}
          title="YouTube Video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
