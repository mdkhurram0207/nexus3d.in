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
  
  // Blog management state
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    author: "",
    excerpt: "",
    content: ""
  });

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid === ADMIN_UID) {
        setUser(user);
        setIsAuthenticated(true);
        loadProjects();
        loadBlogs();
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

  const loadBlogs = () => {
    const blogsRef = collection(db, "blogs");
    const q = query(blogsRef, orderBy("timestamp", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogsData = [];
      snapshot.forEach((doc) => {
        blogsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setBlogs(blogsData);
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

  // Blog management functions
  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    if (!blogForm.title.trim() || !blogForm.content.trim()) {
      alert("Please fill in title and content fields.");
      return;
    }

    try {
      const blogData = {
        title: blogForm.title,
        author: blogForm.author || "Nexus 3D Team",
        excerpt: blogForm.excerpt || blogForm.content.substring(0, 200) + "...",
        content: blogForm.content,
        timestamp: editingBlog ? editingBlog.timestamp : new Date()
      };

      if (editingBlog) {
        await updateDoc(doc(db, "blogs", editingBlog.id), blogData);
        alert("Blog post updated successfully!");
      } else {
        await addDoc(collection(db, "blogs"), blogData);
        alert("Blog post added successfully!");
      }

      setBlogForm({ title: "", author: "", excerpt: "", content: "" });
      setEditingBlog(null);
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog post. Please try again.");
    }
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setBlogForm({
      title: blog.title || "",
      author: blog.author || "",
      excerpt: blog.excerpt || "",
      content: blog.content || ""
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingBlog(null);
    setBlogForm({ title: "", author: "", excerpt: "", content: "" });
  };

  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "blogs", blogId));
      alert("Blog post deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Error deleting blog post. Please try again.");
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
                className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
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
                className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300"
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
          <div className="flex flex-wrap space-x-2 space-y-2">
            {[
              { key: "architecture", label: "3D Renderings" },
              { key: "walkthroughs", label: "Walkthroughs" },
              { key: "cartoon", label: "Cartoon Animation" },
              { key: "blogs", label: "Blog Posts" },
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

        {/* Blog Post Form */}
        {activeTab === "blogs" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md border-2 border-gray-300 mb-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {editingBlog ? "Edit Blog Post" : "Add New Blog Post"}
            </h3>
            <form onSubmit={handleBlogSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  placeholder="Enter blog post title..."
                  className="w-full px-5 py-4 bg-white text-gray-900 border-2 border-gray-400 rounded-lg placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={blogForm.author}
                  onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                  placeholder="Enter author name (default: Nexus 3D Team)"
                  className="w-full px-5 py-4 bg-white text-gray-900 border-2 border-gray-400 rounded-lg placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  placeholder="Enter a short excerpt (or leave blank to auto-generate from content)..."
                  rows="3"
                  className="w-full px-5 py-4 bg-white text-gray-900 border-2 border-gray-400 rounded-lg placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 shadow-sm resize-y"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  placeholder="Enter blog post content... (Use double line breaks for paragraphs)"
                  rows="12"
                  className="w-full px-5 py-4 bg-white text-gray-900 border-2 border-gray-400 rounded-lg placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 shadow-sm resize-y font-mono text-sm"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
                >
                  {editingBlog ? "Update Post" : "Add Post"}
                </button>
                {editingBlog && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="bg-gray-500 text-white px-8 py-4 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-medium"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
            <p className="text-sm text-gray-600 mt-4 bg-blue-50 p-3 rounded border border-blue-200">
              💡 <strong>Tip:</strong> Use double line breaks (press Enter twice) to create paragraphs. The excerpt will be auto-generated from the first 200 characters if left blank.
            </p>
          </motion.div>
        )}

        {/* Add New Item (for Projects) */}
        {activeTab !== "blogs" && (
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
                className="flex-1 px-5 py-4 bg-white text-gray-900 border-2 border-gray-400 rounded-lg placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition-all duration-300 shadow-sm"
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
        )}

        {/* Blog Posts List */}
        {activeTab === "blogs" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Blog Posts</h3>
            
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Author:</span> {blog.author || "Nexus 3D Team"}
                      </p>
                      <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                        {blog.excerpt || blog.content?.substring(0, 150) + "..."}
                      </p>
                      <p className="text-xs text-gray-400">
                        {blog.timestamp?.seconds
                          ? new Date(blog.timestamp.seconds * 1000).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })
                          : 'Date not available'}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditBlog(blog)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {blogs.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No blog posts found. Add your first blog post above!</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Items List (for Projects) */}
        {activeTab !== "blogs" && (
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
        )}
      </div>
    </div>
  );
};

export default AdminPanelFirebase;
