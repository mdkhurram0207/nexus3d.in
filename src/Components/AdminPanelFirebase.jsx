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
import {
  createBlog,
  updateBlog,
  deleteBlog,
  changeSlug,
  subscribeToAllBlogs
} from "../services/blogService";

const AdminPanelFirebase = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Projects state
  const [projects, setProjects] = useState({
    architecture: { images: [] },
    walkthroughs: { videos: [] },
    cartoon: { videos: [] }
  });
  const [newItem, setNewItem] = useState("");

  // Blog state
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    author: "",
    excerpt: "",
    content: "",
    status: "draft",
    slug: "" // Only for display/editing
  });
  const [isChangingSlug, setIsChangingSlug] = useState(false);
  const [newSlug, setNewSlug] = useState("");

  const [activeTab, setActiveTab] = useState("architecture");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid === ADMIN_UID) {
        setUser(user);
        setIsAuthenticated(true);
        loadProjects();
        // Subscribe to blogs using service
        const blogUnsub = subscribeToAllBlogs((blogData) => {
          setBlogs(blogData);
        });
        return () => blogUnsub();
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const loadProjects = () => {
    // Keep existing project loading logic
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
          const item = {
            id: doc.id,
            url: data.url,
            timestamp: data.timestamp
          };

          if (data.category === "architecture") {
            projectsData.architecture.images.push(item);
          } else {
            projectsData[data.category].videos.push(item);
          }
        }
      });
      setProjects(projectsData);
    });
    return unsubscribe;
  };

  // Auth Handlers
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

  // Project Handlers
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
      alert("Error adding item.");
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await deleteDoc(doc(db, "projects", itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting item.");
    }
  };

  // Blog Handlers
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
        status: blogForm.status
      };

      if (editingBlog) {
        await updateBlog(editingBlog.id, blogData);
        alert("Blog post updated successfully!");

        // Handle slug change if requested separately
        if (isChangingSlug && newSlug && newSlug !== editingBlog.slug) {
          await changeSlug(editingBlog.id, editingBlog.slug, newSlug);
          alert(`Slug changed and redirect created: ${editingBlog.slug} -> ${newSlug}`);
          setIsChangingSlug(false);
          setNewSlug("");
        }
      } else {
        await createBlog(blogData);
        alert("Blog post created successfully!");
      }

      resetBlogForm();
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Error saving blog post: " + error.message);
    }
  };

  const resetBlogForm = () => {
    setBlogForm({ title: "", author: "", excerpt: "", content: "", status: "draft", slug: "" });
    setEditingBlog(null);
    setIsChangingSlug(false);
    setNewSlug("");
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setBlogForm({
      title: blog.title || "",
      author: blog.author || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      status: blog.status || "draft",
      slug: blog.slug || ""
    });
    setNewSlug(blog.slug || "");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      return;
    }
    try {
      await deleteBlog(blogId);
      alert("Blog post deleted.");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Error deleting blog.");
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black transition-all"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Login"}
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
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-600 mt-1">
                user: {user?.email}
              </p>
              <p className="text-xs text-gray-400 font-mono mt-1">
                UID: {user?.uid}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
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
          <div className="flex flex-wrap gap-2">
            {[
              { key: "architecture", label: "3D Renderings" },
              { key: "walkthroughs", label: "Walkthroughs" },
              { key: "cartoon", label: "Cartoon Animation" },
              { key: "blogs", label: "Blog Posts" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.key
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={blogForm.title}
                    onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                    className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-400 rounded-lg placeholder-gray-500 focus:outline-none focus:border-black transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={blogForm.status}
                    onChange={(e) => setBlogForm({ ...blogForm, status: e.target.value })}
                    className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-black transition-all"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              {editingBlog && (
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Current Slug (URL Path):</p>
                      <code className="text-sm bg-gray-200 px-2 py-1 rounded">{blogForm.slug}</code>
                    </div>
                    {!isChangingSlug ? (
                      <button
                        type="button"
                        onClick={() => setIsChangingSlug(true)}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Change URL
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => { setIsChangingSlug(false); setNewSlug(blogForm.slug); }}
                        className="text-sm text-gray-500 hover:underline"
                      >
                        Cancel Change
                      </button>
                    )}
                  </div>

                  {isChangingSlug && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Slug (will create redirect from old one)</label>
                      <input
                        type="text"
                        value={newSlug}
                        onChange={(e) => setNewSlug(e.target.value)}
                        className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-black"
                        placeholder="new-url-slug"
                      />
                      <p className="text-xs text-red-600 mt-1">Warning: Changing the slug is rigorous. A redirect will be created.</p>
                    </div>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  value={blogForm.author}
                  onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                  placeholder="Nexus 3D Team"
                  className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-400 rounded-lg placeholder-gray-500 focus:outline-none focus:border-black transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  rows="2"
                  className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-400 rounded-lg placeholder-gray-500 focus:outline-none focus:border-black transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content * (Double enter to split paragraphs)</label>
                <textarea
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  rows="10"
                  className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-400 rounded-lg placeholder-gray-500 focus:outline-none focus:border-black transition-all font-mono text-sm"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  {editingBlog ? "Update Post" : "Create Post"}
                </button>
                {editingBlog && (
                  <button
                    type="button"
                    onClick={resetBlogForm}
                    className="bg-gray-500 text-white px-8 py-4 rounded-lg hover:bg-gray-600 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        )}

        {/* Blog List in Admin */}
        {activeTab === "blogs" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Manage Blog Posts</h3>
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-400 transition-all">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{blog.title}</h4>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                          {blog.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">/{blog.slug}</p>
                      <p className="text-sm text-gray-600 line-clamp-2">{blog.excerpt}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEditBlog(blog)} className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">Edit</button>
                      <button onClick={() => handleDeleteBlog(blog.id)} className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
              {blogs.length === 0 && <p className="text-center text-gray-500 py-8">No blogs found.</p>}
            </div>
          </motion.div>
        )}

        {/* Existing Projects List Logic... (Simplified for brevity, assuming we keep only blogs active if selected, but for production code I should include the project logic too if tabs switch) */}
        {activeTab !== "blogs" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-300"
          >
            {/* Project Add Form */}
            <div className="flex gap-4 mb-8">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder={activeTab === "architecture" ? "Image URL..." : "Video URL..."}
                className="flex-1 px-4 py-3 bg-white text-gray-900 border-2 border-gray-400 rounded-lg"
              />
              <button onClick={addItem} className="bg-black text-white px-6 py-3 rounded-lg">Add</button>
            </div>

            {/* Simple list for projects */}
            <div className="space-y-4">
              {activeTab === "architecture" ? projects.architecture.images.map(item => (
                <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded border">
                  <img src={item.url} alt="" className="w-16 h-16 object-cover rounded" />
                  <button onClick={() => deleteItem(item.id)} className="text-red-600">Delete</button>
                </div>
              )) : projects[activeTab].videos.map(item => (
                <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded border">
                  <p className="text-sm truncate w-2/3">{item.url}</p>
                  <button onClick={() => deleteItem(item.id)} className="text-red-600">Delete</button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default AdminPanelFirebase;
