import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonical, ogImage }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Update title
    document.title = title || 'Nexus 3D - 3D Architectural Rendering & Visualization Studio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Professional 3D architectural rendering, visualization, and animation services in Moradabad. Transform your concepts into photorealistic visuals.');
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || '3D rendering, architectural visualization, 3D animation, walkthrough animation, interior design rendering, exterior rendering');
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical || `https://nexus3d.in${location.pathname}`);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title || 'Nexus 3D - 3D Architectural Rendering & Visualization Studio');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description || 'Professional 3D architectural rendering, visualization, and animation services in Moradabad.');
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://nexus3d.in${location.pathname}`);
    }
    
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag && ogImage) {
      ogImageTag.setAttribute('content', ogImage);
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title || 'Nexus 3D - 3D Architectural Rendering & Visualization Studio');
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description || 'Professional 3D architectural rendering, visualization, and animation services in Moradabad.');
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage && ogImage) {
      twitterImage.setAttribute('content', ogImage);
    }
  }, [title, description, keywords, canonical, ogImage, location]);
  
  return null;
};

export default SEO;

