import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/ProjectsFirebase";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import AdminPanel from "./Components/AdminPanelFirebase";
import Sidebar from "./Components/Sidebar";
import ContactUsButton from "./Components/ContactUsButton";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Main Content */}
      <Routes>
        <Route path="/" element={
          <>
            <Sidebar />
            <Home />
            <ContactUsButton />
            <Footer />
          </>
        } />
        <Route path="/services" element={
          <>
            <Sidebar />
            <Services />
            <ContactUsButton />
            <Footer />
          </>
        } />
        <Route path="/projects" element={
          <>
            <Sidebar />
            <Projects />
            <ContactUsButton />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Sidebar />
            <AboutUs />
            <ContactUsButton />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Sidebar />
            <Contact />
            <ContactUsButton />
            <Footer />
          </>
        } />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </div>
  );
};

export default App;
