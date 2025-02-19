import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768); // Keep open on large screens, closed on small screens
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-6 z-20 p-2 rounded-full shadow-md"
      >
        {isOpen ? (
          <img src="/assets/crs.png" alt="Close" className="w-6 h-6" />
        ) : (
          <img src="/assets/menu.png" alt="Open" className="w-7 h-7" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-30 sm:w-58`} // Adjusted responsive width here
      >
        {/* Sidebar Navigation */}
        <ul className="flex flex-col mt-16 p-4 space-y-6 list-none">
          {['/', '/Projects', '/Services', '/About', '/Contact'].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className="block p-3 text-lg sm:text-2xl hover:scale-110 hover:border-b-2 hover:border-white"
              >
                {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
