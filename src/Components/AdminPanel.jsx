import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaImage, FaVideo, FaPlus, FaTrash, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import AdminLogin from './AdminLogin';

// Import default images
import img01 from "../assets/img001.webp";
import img02 from "../assets/img02.webp";
import img03 from "../assets/img03.webp";
import img04 from "../assets/img04.webp";
import img05 from "../assets/img05.webp";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('images');
  const [projects, setProjects] = useState({
    images: [],
    videos: [],
    cartoonVideo: ''
  });

  const [newItem, setNewItem] = useState({
    type: 'image',
    url: ''
  });

  useEffect(() => {
    // Check if user is already logged in
    const authStatus = localStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    // Load projects from localStorage
    const savedProjects = localStorage.getItem('nexus3d_projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Initialize with default projects using imported images
      const defaultProjects = {
        images: [img01, img02, img03, img04, img05],
        videos: [
          'https://youtu.be/jYl_fKvGaYk?si=MS7a_7VcZ1ydvLZq',
          'https://youtu.be/W_uMtE21BFs?si=exATu0ormOqGKcNe',
          'https://youtu.be/44nZsF5fV3A?si=VeQlxCLrz-Vq0Uoz'
        ],
        cartoonVideo: 'https://youtu.be/vJTLelEsXLY?si=2F-tO6yuze_Xv5Jv'
      };
      setProjects(defaultProjects);
      localStorage.setItem('nexus3d_projects', JSON.stringify(defaultProjects));
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
  };

  const saveProjects = (updatedProjects) => {
    localStorage.setItem('nexus3d_projects', JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
  };

  const handleAddItem = () => {
    if (!newItem.url.trim()) {
      alert('Please enter a URL');
      return;
    }

    let updatedProjects = { ...projects };

    if (activeTab === 'images') {
      updatedProjects.images = [...updatedProjects.images, newItem.url];
    } else if (activeTab === 'videos') {
      updatedProjects.videos = [...updatedProjects.videos, newItem.url];
    } else if (activeTab === 'cartoon') {
      updatedProjects.cartoonVideo = newItem.url;
    }

    saveProjects(updatedProjects);
    setNewItem({ ...newItem, url: '' });
  };

  const handleDeleteItem = (index) => {
    if (!confirm('Are you sure you want to delete this item?')) {
      return;
    }

    let updatedProjects = { ...projects };

    if (activeTab === 'images') {
      updatedProjects.images = updatedProjects.images.filter((_, i) => i !== index);
    } else if (activeTab === 'videos') {
      updatedProjects.videos = updatedProjects.videos.filter((_, i) => i !== index);
    }

    saveProjects(updatedProjects);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white px-4 sm:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif font-light text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-gray-600">Manage your 3D visualization projects</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:shadow-lg transition-all duration-300 font-medium"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('images')}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 rounded-lg ${
                activeTab === 'images'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaImage />
              <span className="hidden sm:inline">3D Renderings</span>
              <span className="sm:hidden">Renderings</span>
              <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{projects.images.length}</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 rounded-lg ${
                activeTab === 'videos'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaVideo />
              <span className="hidden sm:inline">Walkthroughs</span>
              <span className="sm:hidden">Videos</span>
              <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{projects.videos.length}</span>
            </button>
            <button
              onClick={() => setActiveTab('cartoon')}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 rounded-lg ${
                activeTab === 'cartoon'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FaVideo />
              <span className="hidden sm:inline">Cartoon Animation</span>
              <span className="sm:hidden">Cartoon</span>
            </button>
          </div>
        </div>

        {/* Add New Item */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md border-2 border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Add New {activeTab === 'images' ? 'Image' : 'Video'}</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={newItem.url}
              onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
              placeholder={
                activeTab === 'images'
                  ? 'Paste your image URL here... (e.g., https://i.imgur.com/example.jpg)'
                  : 'Paste YouTube URL here... (e.g., https://youtu.be/...)'
              }
              className="flex-1 px-5 py-4 bg-white border-2 border-gray-400 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 shadow-sm"
            />
            <button
              onClick={handleAddItem}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-300 font-medium whitespace-nowrap"
            >
              <FaPlus />
              Add
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4 bg-blue-50 p-3 rounded border border-blue-200">
            {activeTab === 'images' 
              ? '💡 Tip: Use full image URLs from services like Imgur, ImgBB, or Cloudinary (e.g., https://i.imgur.com/example.jpg)'
              : '💡 Tip: Use YouTube share URL format (youtu.be) for best compatibility'}
          </p>
        </div>

        {/* Items List */}
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-300">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b-2 border-gray-200 pb-4">
            Current {activeTab === 'images' ? 'Images' : activeTab === 'videos' ? 'Videos' : 'Cartoon Video'}
          </h2>
          
          {activeTab === 'images' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative group"
                >
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src={img}
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                      }}
                    />
                  </div>
                  <button
                    onClick={() => handleDeleteItem(index)}
                    className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-700"
                  >
                    <FaTrash />
                  </button>
                  <p className="mt-2 text-sm text-gray-600 truncate">{img}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative group"
                >
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.split('/').pop().split('?')[0]}`}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <button
                    onClick={() => handleDeleteItem(index)}
                    className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-700"
                  >
                    <FaTrash />
                  </button>
                  <p className="mt-2 text-sm text-gray-600 truncate">{video}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'cartoon' && (
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                {projects.cartoonVideo && (
                  <iframe
                    src={`https://www.youtube.com/embed/${projects.cartoonVideo.split('/').pop().split('?')[0]}`}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <p className="mt-4 text-sm text-gray-600">{projects.cartoonVideo}</p>
            </div>
          )}

          {activeTab === 'images' && projects.images.length === 0 && (
            <p className="text-center text-gray-500 py-12">No images added yet</p>
          )}
          {activeTab === 'videos' && projects.videos.length === 0 && (
            <p className="text-center text-gray-500 py-12">No videos added yet</p>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-medium text-blue-900 mb-2">📝 Instructions</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• All changes are saved automatically to browser's local storage</li>
            <li>• For images: Upload to /src/assets/ folder and use the path (e.g., /src/assets/newimage.webp)</li>
            <li>• For videos: Use YouTube share URL format (https://youtu.be/...)</li>
            <li>• Changes will reflect on the Projects page immediately</li>
            <li>• To access admin panel: navigate to /admin-panel</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

