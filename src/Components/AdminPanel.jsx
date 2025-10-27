import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState({
    architecture: {
      images: [
        "https://res.cloudinary.com/dy31puega/image/upload/v1761579852/img001_ee2owt.webp",
        "https://res.cloudinary.com/dy31puega/image/upload/v1761579853/img02_ogmxgf.webp",
        "https://res.cloudinary.com/dy31puega/image/upload/v1761579852/img03_hqyjn5.webp",
        "https://res.cloudinary.com/dy31puega/image/upload/v1761579854/img04_oanhad.webp",
        "https://res.cloudinary.com/dy31puega/image/upload/v1761579856/img05_ycc7wx.webp",
      ],
    },
    walkthroughs: {
      videos: [
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      ],
    },
    cartoon: {
      videos: [
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      ],
    },
  });
  const [activeTab, setActiveTab] = useState("architecture");
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = sessionStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin-0713") {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuthenticated", "true");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuthenticated");
  };

  const addItem = () => {
    if (!newItem.trim()) return;

    const updatedProjects = { ...projects };
    if (activeTab === "architecture") {
      updatedProjects.architecture.images.push(newItem);
    } else if (activeTab === "walkthroughs") {
      updatedProjects.walkthroughs.videos.push(newItem);
    } else if (activeTab === "cartoon") {
      updatedProjects.cartoon.videos.push(newItem);
    }

    setProjects(updatedProjects);
    setNewItem("");
  };

  const deleteItem = (index) => {
    const updatedProjects = { ...projects };
    if (activeTab === "architecture") {
      updatedProjects.architecture.images.splice(index, 1);
    } else if (activeTab === "walkthroughs") {
      updatedProjects.walkthroughs.videos.splice(index, 1);
    } else if (activeTab === "cartoon") {
      updatedProjects.cartoon.videos.splice(index, 1);
    }

    setProjects(updatedProjects);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 mb-8"
        >
          <div className="flex space-x-2">
            {[
              { key: "architecture", label: "3D Renderings" },
              { key: "walkthroughs", label: "Walkthroughs" },
              { key: "cartoon", label: "Cartoon Animation" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-black text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Add New Item */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md border-2 border-gray-300 mb-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Add New Item</h3>
          <div className="flex gap-4">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder={
                activeTab === "architecture"
                  ? "Enter image URL..."
                  : "Enter video URL..."
              }
              className="flex-1 px-5 py-4 bg-white border-2 border-gray-400 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 shadow-sm"
            />
            <button
              onClick={addItem}
              className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              Add Item
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4 bg-blue-50 p-3 rounded border border-blue-200">
            💡 <strong>Tip:</strong> For images, use Cloudinary URLs. For videos, use YouTube URLs.
          </p>
        </motion.div>

        {/* Items List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-300"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {activeTab === "architecture" && "3D Renderings"}
            {activeTab === "walkthroughs" && "Walkthrough Videos"}
            {activeTab === "cartoon" && "Cartoon Animation Videos"}
          </h3>
          
          <div className="space-y-4">
            {activeTab === "architecture" &&
              projects.architecture.images.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex-1">
                    <img
                      src={item}
                      alt={`Project ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <p className="text-sm text-gray-600 mt-2 break-all">{item}</p>
                  </div>
                  <button
                    onClick={() => deleteItem(index)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 ml-4"
                  >
                    Delete
                  </button>
                </div>
              ))}

            {(activeTab === "walkthroughs" || activeTab === "cartoon") &&
              projects[activeTab].videos.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 break-all">{item}</p>
                  </div>
                  <button
                    onClick={() => deleteItem(index)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 ml-4"
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;
