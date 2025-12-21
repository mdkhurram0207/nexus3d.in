import { useEffect } from 'react';

/**
 * SEOHead Component
 * Dynamically updates meta tags, title, and other SEO elements
 * This component ensures each page has unique, SEO-optimized metadata
 * 
 * @param {string} title - Page title (appears in browser tab and search results)
 * @param {string} description - Meta description (appears in search engine results)
 * @param {string} keywords - Meta keywords (comma-separated)
 * @param {string} canonicalUrl - Canonical URL for the page (prevents duplicate content issues)
 * @param {string} ogImage - Open Graph image URL for social media sharing
 */
const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = "https://nexus3d.in/assets/preview-image.jpg"
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    if (keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update or create canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    if (canonicalUrl) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update Open Graph tags for social media sharing
    const updateOGTag = (property, content) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      if (content) {
        ogTag.setAttribute('content', content);
      }
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:image', ogImage);
    updateOGTag('og:url', canonicalUrl);
    updateOGTag('og:type', 'website');

    // Update Twitter Card tags
    const updateTwitterTag = (name, content) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      if (content) {
        twitterTag.setAttribute('content', content);
      }
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', ogImage);

  }, [title, description, keywords, canonicalUrl, ogImage]);

  // This component doesn't render anything visible
  return null;
};

export default SEOHead;

