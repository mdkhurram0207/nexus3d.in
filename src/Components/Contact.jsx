import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex items-center justify-center p-6 sm:p-12">
      <div className="max-w-3xl w-full bg-gray-950 bg-opacity-90 p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-800">
        
        {/* Heading Section */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
            Let's Connect
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mt-4">
            Have a project in mind? Let's bring it to life together.
          </p>
        </section>

        {/* Contact Details */}
        <section className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200">
            Reach Out to Us
          </h3>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-8 space-y-6 sm:space-y-0">
            
            {/* Phone */}
            <div className="flex flex-col items-center group transition-all duration-300">
              <FaPhoneAlt className="text-3xl sm:text-4xl text-blue-400 group-hover:text-blue-500 transition" />
              <a href="tel:+919756170713" className="mt-2 text-lg text-gray-300 group-hover:text-white transition">
                +91 9756170713
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center group transition-all duration-300">
              <FaEnvelope className="text-3xl sm:text-4xl text-blue-400 group-hover:text-blue-500 transition" />
              <a href="mailto:contact@nexus3d.in" className="mt-2 text-lg text-gray-300 group-hover:text-white transition">
                contact@nexus3d.in
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center group transition-all duration-300">
              <FaWhatsapp className="text-3xl sm:text-4xl text-green-400 group-hover:text-green-500 transition" />
              <a
                href="https://wa.me/+919756170713"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-lg text-gray-300 group-hover:text-white transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Address Section with Google Maps Link */}
        <section className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200">Our Location</h3>
          <div className="flex flex-col items-center mt-4 group">
            <FaMapMarkerAlt className="text-3xl sm:text-4xl text-red-400 group-hover:text-red-500 transition" />
            <a
              href="https://www.google.com/maps/place/Gali+Number+5,+Pakwara,+Uttar+Pradesh+244102/@28.823301,78.6700634,17z/data=!3m1!4b1!4m6!3m5!1s0x390afd9330baccd9:0x5ed495376abf0c77!8m2!3d28.8232966!4d78.6724875!16s%2Fg%2F11h3gh4q6y?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-lg text-blue-400 group-hover:text-white transition"
            >
              Raza Building, Near Temptations, Delhi Road, Pakwara, Moradabad 244102
            </a>
          </div>
        </section>

        {/* Closing Message */}
        <section className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-teal-300">
            Let's Build Something Exceptional!
          </h3>
          <p className="text-lg text-gray-300 mt-4">
            Whether it’s a quick question or an exciting new project, we’re here to collaborate.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
