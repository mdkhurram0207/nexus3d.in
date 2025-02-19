import React, { useState } from 'react';

const ImageModal = ({ imageUrl, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4">
    <div className="relative bg-gray-900 rounded-lg shadow-2xl max-w-3xl w-full">
      <button
        className="absolute top-2 right-2 p-2 text-white text-xl hover:text-gray-400 transition"
        onClick={onClose}
      >
        ✖
      </button>
      <img className="w-full h-auto rounded-lg" src={imageUrl} alt="Selected" />
    </div>
  </div>
);

const ImageComponent = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mb-12">
      <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 uppercase">
        3D Architecture Rendering (Images)
      </h3>
      <div className="overflow-x-auto md:overflow-visible scrollbar-hide p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(src)}
            >
              <img className="w-full h-48 object-cover rounded-lg" src={src} alt={`Image ${index + 1}`} />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default ImageComponent;
