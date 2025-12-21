import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogPostsByCategory, getCategoryBySlug } from "../data/blogsData";
import SEOHead from "./SEO/SEOHead";

/**
 * BlogList Component
 * Displays blog posts filtered by category with SEO optimization
 * URL format: /blog/category/:categorySlug (e.g., /blog/category/architecture)
 */
const BlogList = () => {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);
  const blogPosts = category ? getBlogPostsByCategory(category.id) : [];

  // If category not found, redirect to blog categories page
  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  // SEO metadata - dynamically generated based on category
  const canonicalUrl = `https://nexus3d.in/blog/category/${category.slug}`;

  return (
    <>
      {/* SEO Head Component - Dynamically updates meta tags for this category */}
      <SEOHead 
        title={category.metaTitle}
        description={category.metaDescription}
        keywords={category.metaKeywords}
        canonicalUrl={canonicalUrl}
      />

      <div className="min-h-screen bg-zinc-50 px-4 sm:px-8 py-32">
        <div className="w-full max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-sm text-gray-600"
          >
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{category.name}</span>
          </motion.div>

          {/* H1 Title - Single H1 per page for SEO */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 text-gray-900"
          >
            {category.name} <span className="italic">Articles</span>
          </motion.h1>

          {/* Category Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl"
          >
            {category.description}
          </motion.p>

          {/* Blog Posts List */}
          {blogPosts.length > 0 ? (
            <div className="space-y-8 mb-16">
              {blogPosts.map((post, index) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group bg-white border-2 border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300 p-8 sm:p-10"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <span className="text-sm text-gray-500 uppercase tracking-widest mb-2 sm:mb-0">
                        {category.name}
                      </span>
                      <time className="text-sm text-gray-500">
                        {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-medium text-gray-900 mb-4 group-hover:text-gray-900 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center text-gray-500 group-hover:text-gray-900 transition-colors">
                      <span className="text-sm uppercase tracking-widest">Read More</span>
                      <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <p className="text-lg text-gray-600">
                No blog posts found in this category yet. Check back soon!
              </p>
            </motion.div>
          )}

          {/* Back to Blog Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="mr-2">←</span>
              <span>Back to Blog Categories</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogList;

