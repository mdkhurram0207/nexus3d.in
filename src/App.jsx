import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/ProjectsFirebase";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import AdminPanel from "./Components/AdminPanelFirebase";
import Sidebar from "./Components/Sidebar";
import ContactUsButton from "./Components/ContactUsButton";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import { HelmetProvider } from "react-helmet-async";
import BlogPost from "./Components/BlogPost";

const App = () => {
  const location = useLocation();
  const isAdminPanel = location.pathname === "/admin-panel";

  return (
    <HelmetProvider>
      <div className="bg-black min-h-screen text-white relative">
        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Sidebar Navigation - Hide on admin panel */}
        {!isAdminPanel && <Sidebar />}

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>

        {/* Floating Contact Button - Hide on admin panel */}
        {!isAdminPanel && <ContactUsButton />}

        {/* Footer - Hide on admin panel */}
        {!isAdminPanel && <Footer />}
      </div>
    </HelmetProvider>
  );
};

export default App;
