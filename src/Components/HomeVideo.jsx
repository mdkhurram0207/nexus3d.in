import React from 'react';
import homevdo from '../assets/homevdo.mp4'; // Import the homevdo video from your assets folder

const HomeVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={homevdo} // Use the imported video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default HomeVideo;
