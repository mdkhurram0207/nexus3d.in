import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaImage, FaVideo, FaPlus, FaTrash, FaSignOutAlt, FaSync } from 'react-icons/fa';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db, ADMIN_UID } from '../firebase';

// Import default images
import img01 from "../assets/img001.webp";
import img02 from "../assets/img02.webp";
import img03 from "../assets/img03.webp";
import img04 from "../assets/img04.webp";
import img05 from "../assets/img05.webp";

const AdminPanelFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [syncing, setSyncing] = useState(false);

  // Default projects
  const defaultProjects = {
    images: [img01, img02, img03, img04, img05],
    videos: [
      'https://youtu.be/jYl_fKvGaYk?si=MS7a_7VcZ1ydvLZq',
      'https://youtu.be/W_uMtE21BFs?si=exATu0ormOqGKcNe',
      'https://youtu.be/44nZsF5fV3A?si=VeQlxCLrz-Vq0Uoz'
    ],
    cartoonVideo: 'https://youtu.be/vJTLelEsXLY?si=2F-tO6yuze_Xv5Jv'
  };

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Listen to Firestore changes in real-time
  useEffect(() => {
    if (!user) return;

    const docRef = doc(db, 'projects', 'main');
    
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setProjects(docSnap.data());
      } else {
        // Initialize with default data if document doesn't exist
        initializeFirestore();
      }
    }, (error) => {
      console.error('Error listening to Firestore:', error);
    });

    return () => unsubscribe();
  }, [user]);

  const initializeFirestore = async () => {
    try {
      const docRef = doc(db, 'projects', 'main');
      await setDoc(docRef, defaultProjects);
      console.log('Firestore initialized with default data');
    } catch (error) {
      console.error('Error initializing Firestore:', error);
      alert('Error initializing database. Please check your Firebase configuration.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Check if user is admin
      if (userCredential.user.uid !== ADMIN_UID) {
        await signOut(auth);
        setLoginError('Unauthorized: You do not have admin access.');
        return;
      }
      
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login error:', error);
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
        setLoginError('Invalid email or password');
      } else if (error.code === 'auth/user-not-found') {
        setLoginError('User not found');
      } else if (error.code === 'auth/too-many-requests') {
        setLoginError('Too many failed attempts. Please try again later.');
      } else {
        setLoginError('Login failed. Please try again.');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const saveProjects = async (updatedProjects) => {
    if (!user) {
      alert('You must be logged in to make changes');
      return;
    }

    try {
      setSyncing(true);
      const docRef = doc(db, 'projects', 'main');
      await setDoc(docRef, updatedProjects);
      setSyncing(false);
    } catch (error) {
      console.error('Error saving to Firestore:', error);
      alert('Error saving changes. Please try again.');
      setSyncing(false);
    }
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

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <FaSync className="w-12 h-12 animate-spin text-gray-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Login form
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-2xl border border-white/20 max-w-md w-full"
        >
          <h1 className="text-3xl font-serif font-light text-white mb-2 text-center">Admin Login</h1>
          <p className="text-gray-300 text-center mb-8">Nexus 3D Management Panel</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@nexus3d.in"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all"
                required
              />
            </div>

            {loginError && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
            >
              Login
            </button>
          </form>

          <p className="text-gray-400 text-xs text-center mt-6">
            Powered by Firebase Authentication
          </p>
        </motion.div>
      </div>
    );
  }

  // Admin Panel
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white px-4 sm:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif font-light text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-gray-600">Manage your 3D visualization projects</p>
            <p className="text-sm text-green-600 mt-1">✓ Connected to Firebase - Changes sync across all devices</p>
          </div>
          <div className="flex items-center gap-4">
            {syncing && (
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <FaSync className="animate-spin" />
                Syncing...
              </span>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:shadow-lg transition-all duration-300 font-medium"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
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
              disabled={syncing}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-300 font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <img 
                    src={img} 
                    alt={`Project ${index + 1}`} 
                    className="w-full h-64 object-cover rounded-lg border border-gray-200"
                  />
                  <button
                    onClick={() => handleDeleteItem(index)}
                    disabled={syncing}
                    className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-700 disabled:opacity-50"
                  >
                    <FaTrash />
                  </button>
                  <p className="mt-2 text-sm text-gray-600 truncate">{img}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    disabled={syncing}
                    className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-700 disabled:opacity-50"
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
              <p className="mt-4 text-sm text-gray-600 truncate text-center">{projects.cartoonVideo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanelFirebase;

