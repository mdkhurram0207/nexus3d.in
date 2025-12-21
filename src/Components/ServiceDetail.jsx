import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getServiceBySlug } from "../data/servicesData";
import SEOHead from "./SEO/SEOHead";

/**
 * ServiceDetail Component
 * Dynamic service detail page with SEO optimization
 * URL format: /services/:slug (e.g., /services/3d-architecture-rendering)
 */
const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // If service not found, redirect to services listing
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // SEO metadata - dynamically generated based on service data
  const canonicalUrl = `https://nexus3d.in/services/${service.slug}`;

  return (
    <>
      {/* SEO Head Component - Dynamically updates meta tags for this service */}
      <SEOHead 
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.metaKeywords}
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
            <Link to="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{service.title}</span>
          </motion.div>

          {/* H1 Title - Single H1 per page for SEO best practices */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 text-gray-900"
          >
            {service.title}
          </motion.h1>

          {/* Service Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>

          {/* Service Content - Dynamically rendered HTML */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 content-html"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white border-2 border-gray-200 p-8 sm:p-12 text-center"
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss your {service.title.toLowerCase()} project
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-black text-white font-medium text-base tracking-widest transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl uppercase"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          {/* Back to Services Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="mr-2">←</span>
              <span>Back to All Services</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;

