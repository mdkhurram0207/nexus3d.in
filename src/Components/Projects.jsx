// VideoComponent.jsx
import React, { useState } from "react";

const getYouTubeId = (url) => {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === "youtu.be") return urlObj.pathname.slice(1);
    if (urlObj.hostname.includes("youtube.com")) return urlObj.searchParams.get("v");
  } catch (e) {
    console.error("Invalid YouTube URL:", url);
  }
  return null;
};

const getThumbnail = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
};

const VideoComponent = ({ videos, title }) => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <div>
      <h3 className="text-3xl font-bold text-blue-300 text-center mb-10 tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {videos.map((video, index) => {
          const videoId = getYouTubeId(video);
          if (!videoId) return null;

          return (
            <div key={index} className="w-full sm:w-96 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative aspect-video">
                {playingIndex === index ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                    title={`video-${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={getThumbnail(video)}
                      alt={`video-${index}`}
                      className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                      onClick={() => setPlayingIndex(index)}
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
                      onClick={() => setPlayingIndex(index)}
                    >
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4">
                <p className="text-center text-blue-200 font-light">Walkthrough {index + 1}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoComponent;
