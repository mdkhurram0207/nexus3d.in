import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogPostBySlug, getCategoryBySlug } from "../data/blogsData";
import SEOHead from "./SEO/SEOHead";

/**
 * BlogDetail Component
 * Dynamic blog post detail page with SEO optimization
 * URL format: /blog/:slug (e.g., /blog/how-3d-rendering-helps-architects)
 */
const BlogDetail = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const category = post ? getCategoryBySlug(post.category) : null;

  // If post not found, redirect to blog categories page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // SEO metadata - dynamically generated based on blog post data
  const canonicalUrl = `https://nexus3d.in/blog/${post.slug}`;

  return (
    <>
      {/* SEO Head Component - Dynamically updates meta tags for this blog post */}
      <SEOHead 
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.metaKeywords}
        canonicalUrl={canonicalUrl}
      />

      <div className="min-h-screen bg-zinc-50 px-4 sm:px-8 py-32">
        <div className="w-full max-w-4xl mx-auto">
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
            {category && (
              <>
                <span className="mx-2">/</span>
                <Link to={`/blog/category/${category.slug}`} className="hover:text-gray-900 transition-colors">
                  {category.name}
                </Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-gray-900">{post.title}</span>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Category Badge */}
            {category && (
              <Link
                to={`/blog/category/${category.slug}`}
                className="inline-block mb-4 text-sm text-gray-500 uppercase tracking-widest hover:text-gray-900 transition-colors"
              >
                {category.name}
              </Link>
            )}

            {/* H1 Title - Single H1 per page for SEO best practices */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-t border-b border-gray-200 py-4">
              <time>
                {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </motion.header>

          {/* Article Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light">
              {post.description}
            </p>
          </motion.div>

          {/* Article Content - Dynamically rendered HTML */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 content-html"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white border-2 border-gray-200 p-8 sm:p-12 text-center mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
              Interested in Our Services?
            </h2>
            <p className="text-gray-600 mb-8">
              Let us help bring your architectural vision to life
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-black text-white font-medium text-base tracking-widest transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl uppercase"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200"
          >
            {category && (
              <Link
                to={`/blog/category/${category.slug}`}
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span className="mr-2">←</span>
                <span>Back to {category.name} Articles</span>
              </Link>
            )}
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>View All Categories</span>
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

