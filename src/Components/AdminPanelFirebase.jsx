import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy 
} from "firebase/firestore";
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { db, auth, ADMIN_UID } from "../firebase";

const AdminPanelFirebase = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState({
    architecture: { images: [] },
    walkthroughs: { videos: [] },
    cartoon: { videos: [] }
  });
  const [activeTab, setActiveTab] = useState("architecture");
  const [newItem, setNewItem] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid === ADMIN_UID) {
        setUser(user);
        setIsAuthenticated(true);
        loadProjects();
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const loadProjects = () => {
    // Listen for real-time updates from Firestore
    const projectsRef = collection(db, "projects");
    const q = query(projectsRef, orderBy("timestamp", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = {
        architecture: { images: [] },
        walkthroughs: { videos: [] },
        cartoon: { videos: [] }
      };

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.category && projectsData[data.category]) {
          if (data.category === "architecture") {
            projectsData.architecture.images.push({
              id: doc.id,
              url: data.url,
              timestamp: data.timestamp
            });
          } else {
            projectsData[data.category].videos.push({
              id: doc.id,
              url: data.url,
              timestamp: data.timestamp
            });
          }
        }
      });

      setProjects(projectsData);
    });

    return unsubscribe;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Invalid credentials: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const addItem = async () => {
    if (!newItem.trim()) return;

    try {
      await addDoc(collection(db, "projects"), {
        category: activeTab,
        url: newItem,
        timestamp: new Date()
      });
      setNewItem("");
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Error adding item. Please try again.");
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await deleteDoc(doc(db, "projects", itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting item. Please try again.");
    }
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
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              disabled={loading}
              className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4 text-center">
            🔥 Connected to Firebase Firestore
          </p>
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
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-600 mt-1">
                🔥 Connected to Firebase Firestore | User: {user?.email}
              </p>
            </div>
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
            💡 <strong>Tip:</strong> For images, use Cloudinary URLs. For videos, use YouTube URLs. Changes sync across all devices instantly!
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
              projects.architecture.images.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex-1">
                    <img
                      src={item.url}
                      alt={`Project ${item.id}`}
                      className="w-20 h-20 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <p className="text-sm text-gray-600 mt-2 break-all">{item.url}</p>
                    <p className="text-xs text-gray-400">
                      Added: {new Date(item.timestamp?.seconds * 1000).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 ml-4"
                  >
                    Delete
                  </button>
                </div>
              ))}

            {(activeTab === "walkthroughs" || activeTab === "cartoon") &&
              projects[activeTab].videos.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 break-all">{item.url}</p>
                    <p className="text-xs text-gray-400">
                      Added: {new Date(item.timestamp?.seconds * 1000).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 ml-4"
                  >
                    Delete
                  </button>
                </div>
              ))}

            {((activeTab === "architecture" && projects.architecture.images.length === 0) ||
              (activeTab === "walkthroughs" && projects.walkthroughs.videos.length === 0) ||
              (activeTab === "cartoon" && projects.cartoon.videos.length === 0)) && (
              <div className="text-center py-8 text-gray-500">
                <p>No items found. Add some content to get started!</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanelFirebase;
