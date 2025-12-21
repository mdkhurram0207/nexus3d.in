import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAllCategories } from "../data/blogsData";
import SEOHead from "./SEO/SEOHead";

/**
 * BlogCategories Component
 * Displays all blog categories with SEO optimization
 * URL: /blog
 */
const BlogCategories = () => {
  const categories = getAllCategories();

  // SEO metadata for blog categories page
  const seoData = {
    title: "Blog | Nexus 3D - Architecture & Animation Insights",
    description: "Explore our blog featuring insights on 3D architectural visualization, rendering techniques, animation trends, and industry best practices.",
    keywords: "architecture blog, 3D rendering blog, animation blog, architectural visualization insights, Nexus 3D blog",
    canonicalUrl: "https://nexus3d.in/blog"
  };

  return (
    <>
      {/* SEO Head Component */}
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
      />

      <div className="min-h-screen bg-zinc-50 px-4 sm:px-8 py-32">
        <div className="w-full max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            {/* H1 Title - Single H1 per page for SEO */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium mb-8 text-gray-900">
              Our <span className="italic">Blog</span>
            </h1>
            <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-10"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Insights, trends, and best practices in 3D architectural visualization and animation
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
            {categories.map((category, index) => (
              <Link to={`/blog/category/${category.slug}`} key={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group h-full"
                >
                  <div className="p-12 bg-white border-2 border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                    <div className="w-12 h-0.5 bg-gray-900 mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4 text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                      {category.name}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                      <span className="text-sm uppercase tracking-widest">Explore</span>
                      <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="font-serif text-3xl sm:text-4xl font-medium text-gray-900 mb-10">
              Have Questions About Our <span className="italic">Services?</span>
            </h3>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-black text-white font-medium text-base tracking-widest transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl uppercase"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogCategories;

