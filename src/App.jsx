import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Sidebar from "./Components/Sidebar";
import ContactUsButton from "./Components/ContactUsButton";

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Floating Contact Button */}
      <ContactUsButton />
    </div>
  );
};

export default App;
