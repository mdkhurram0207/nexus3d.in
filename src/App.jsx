import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/ProjectsFirebase";
import Services from "./Components/Services";
import ServiceDetail from "./Components/ServiceDetail";
import BlogCategories from "./Components/BlogCategories";
import BlogList from "./Components/BlogList";
import BlogDetail from "./Components/BlogDetail";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import AdminPanel from "./Components/AdminPanelFirebase";
import Sidebar from "./Components/Sidebar";
import ContactUsButton from "./Components/ContactUsButton";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const location = useLocation();
  const isAdminPanel = location.pathname === "/admin-panel";

  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Sidebar Navigation - Hide on admin panel */}
      {!isAdminPanel && <Sidebar />}

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Services Routes */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<BlogCategories />} />
        <Route path="/blog/category/:categorySlug" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        
        {/* Other Routes */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>

      {/* Floating Contact Button - Hide on admin panel */}
      {!isAdminPanel && <ContactUsButton />}

      {/* Footer - Hide on admin panel */}
      {!isAdminPanel && <Footer />}
    </div>
  );
};

export default App;
