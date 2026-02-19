import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getBlogList } from '../services/blogService';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);



  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Fetch only published blogs
        const posts = await getBlogList(true);

        const formattedPosts = posts.map(data => ({
          id: data.id,
          title: data.title || '',
          slug: data.slug || '',
          author: data.author || 'Nexus 3D Team',
          date: data.createdAt?.seconds
            ? new Date(data.createdAt.seconds * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            : data.date || '',
          excerpt: data.excerpt || '',
          content: data.content || '',
          timestamp: data.createdAt
        }));

        setBlogPosts(formattedPosts);
      } catch (error) {
        console.error("Error loading blogs:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white px-4 sm:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleBackClick}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            <FaArrowRight className="rotate-180" />
            <span>Back to Blog</span>
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUser className="text-sm" />
                <span className="text-sm">{selectedPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-sm" />
                <span className="text-sm">{selectedPost.date}</span>
              </div>
            </div>

            <div className="w-24 h-px bg-gray-900 mb-12"></div>

            <div className="prose prose-lg max-w-none">
              {selectedPost.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900 tracking-tight">
            Blog
          </h1>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Stories, insights, and lessons learned from our journey in 3D visualization
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">Error loading posts: {error}</p>
            <p className="text-gray-500 text-sm">If this is an index error, check the console for a link.</p>
          </div>
        )}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 font-light">
              No blog posts found. Check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              // Removed onClick={() => handlePostClick(post)}
              >
                <div className="h-full p-8 bg-white border-2 border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 flex flex-col">
                  {/* Added Link component to cover the entire card */}
                  <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10" />
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-xs" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-xs" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 leading-tight group-hover:text-gray-900 transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-base text-gray-600 leading-relaxed mb-6 flex-grow font-light">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                    <span className="text-sm uppercase tracking-widest">Read More</span>
                    <FaArrowRight className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

