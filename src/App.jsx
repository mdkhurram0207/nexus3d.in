import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import ContactUsButton from "./Components/ContactUsButton"; // Import the new component
import logoimg from "./assets/logoimg.png"; // Import the logo correctly

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Sidebar, Header, and Logo */}
      <div className="absolute top-0 w-full flex items-center justify-between z-10 px-4">
        <Sidebar />
        <Header />
        <div className="absolute top-2 right-4">
          <img 
            src={logoimg} 
            alt="Agency Logo" 
            className="w-12 h-12 sm:w-20 sm:h-20" // Smaller on mobile, normal on larger screens
          />
        </div>
      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Separate Contact Us Button Component */}
      <ContactUsButton />
    </div>
  );
};

export default App;
