// Projects.jsx
import React, { useState } from "react";
import img01 from "../assets/img001.webp";
import img02 from "../assets/img02.webp";
import img03 from "../assets/img03.webp";
import img04 from "../assets/img04.webp";
import img05 from "../assets/img05.webp";

// --- Helper Functions ---
const getYouTubeId = (url) => {
  let videoId = '';
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      videoId = urlObj.pathname.slice(1);
    } else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
      videoId = urlObj.searchParams.get('v');
    }
  } catch (e) {
    console.error("Invalid URL:", url);
    return null;
  }
  return videoId;
};

const getThumbnail = (url) => {
  const videoId = getYouTubeId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
};

// --- ImageComponent ---
const ImageComponent = ({ images }) => {
  return (
    <section>
      <h3 className="text-3xl font-bold text-blue-300 text-center mb-10 tracking-wider">
        3D Architectural Renders
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((imgSrc, index) => (
          <div key={index} className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src={imgSrc} 
              alt={`Architecture Project ${index + 1}`} 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Image+Load+Error'; }}
            />
            <div className="p-4">
              <p className="text-center text-blue-200 font-light">Project Render {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- VideoComponent ---
const VideoComponent = ({ videos, title }) => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section>
      <h3 className="text-3xl font-bold text-blue-300 text-center mb-10 tracking-wider">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((videoUrl, index) => {
          const videoId = getYouTubeId(videoUrl);
          if (!videoId) return null;

          return (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-w-16 aspect-h-9 relative group">
                {playingIndex === index ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                    title={`Architecture Walkthrough ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={getThumbnail(videoUrl)}
                      alt={`Thumbnail for video ${index + 1}`}
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                      onClick={() => setPlayingIndex(index)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={() => setPlayingIndex(index)}>
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
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
    </section>
  );
};

// --- CartoonVideoComponent ---
const CartoonVideoComponent = ({ videoUrl }) => {
  const [playing, setPlaying] = useState(false);
  const videoId = getYouTubeId(videoUrl);
  if (!videoId) return null;

  return (
    <section className="flex flex-col items-center">
      <h3 className="text-3xl font-bold text-blue-300 text-center mb-10 tracking-wider">
        Cartoon Animation
      </h3>
      <div className="w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1">
        <div className="aspect-w-16 aspect-h-9 relative group">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
              title="Cartoon Animation Showcase"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <>
              <img
                src={getThumbnail(videoUrl)}
                alt="Cartoon Animation Thumbnail"
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                onClick={() => setPlaying(true)}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={() => setPlaying(true)}>
                <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

// --- Main Projects Component ---
const Projects = () => {
  const projectsData = {
    architecture: {
      images: [img01, img02, img03, img04, img05],
      videos: [
        "https://www.youtube.com/watch?v=44nZsF5fV3A",
        "https://www.youtube.com/watch?v=jYl_fKvGaYk",
        "https://www.youtube.com/watch?v=W_uMtE21BFs",
      ],
    },
    animation: {
      video: "https://www.youtube.com/watch?v=vJTLelEsXLY",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-8 w-full overflow-x-hidden">
      <div className="w-full max-w-screen-xl py-16">
        <header className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-200 uppercase tracking-widest" style={{textShadow: '0 0 10px rgba(147, 197, 253, 0.4)'}}>
            Our Projects
          </h1>
        </header>

        <main className="space-y-24">
          <ImageComponent images={projectsData.architecture.images} />
          <VideoComponent videos={projectsData.architecture.videos} title="3D Architecture Walkthroughs" />
          <CartoonVideoComponent videoUrl={projectsData.animation.video} />
        </main>
      </div>
    </div>
  );
};

export default Projects;

