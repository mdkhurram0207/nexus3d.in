import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaUser, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import { getBlogBySlug } from '../services/blogService';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const { data, redirect } = await getBlogBySlug(slug);

                if (redirect) {
                    // Perform client-side redirect
                    navigate(`/blog/${redirect}`, { replace: true });
                    return;
                }

                if (data) {
                    setBlog(data);
                    setError(null);
                } else {
                    setError("Blog post not found.");
                }
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError("Failed to load blog post.");
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchBlog();
        }
    }, [slug, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-xl font-light text-gray-600 animate-pulse">Loading post...</div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen bg-white px-4 py-32 text-center">
                <h1 className="text-3xl font-light text-gray-900 mb-4">Post Not Found</h1>
                <p className="text-gray-600 mb-8">{error || "The post you're looking for doesn't exist."}</p>
                <Link to="/blog" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Back to Blog
                </Link>
            </div>
        );
    }

    const formattedDate = blog.createdAt?.seconds
        ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : "Date unavailable";

    // SEO Description: use excerpt or truncate content
    const metaDescription = blog.excerpt || (blog.content ? blog.content.substring(0, 160) + "..." : "Read our latest blog post.");
    const canonicalUrl = `https://nexus3d.in/blog/${slug}`;

    return (
        <div className="min-h-screen bg-white px-4 sm:px-8 py-24">
            <Helmet>
                <title>{blog.title} | Nexus 3D Blog</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph */}
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="article:published_time" content={blog.createdAt?.seconds ? new Date(blog.createdAt.seconds * 1000).toISOString() : ""} />
                <meta property="article:author" content={blog.author || "Nexus 3D Team"} />
            </Helmet>

            <div className="max-w-4xl mx-auto">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Blog</span>
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <header className="mb-12">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex items-center gap-6 text-gray-500 border-b border-gray-100 pb-8">
                            <div className="flex items-center gap-2">
                                <FaUser className="text-sm" />
                                <span className="text-sm font-medium">{blog.author || "Nexus 3D Team"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-sm" />
                                <span className="text-sm">{formattedDate}</span>
                            </div>
                            {blog.status === 'draft' && (
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                                    Draft Preview
                                </span>
                            )}
                        </div>
                    </header>

                    <div className="prose prose-lg prose-gray max-w-none">
                        {blog.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </motion.article>
            </div>
        </div>
    );
};

export default BlogPost;
