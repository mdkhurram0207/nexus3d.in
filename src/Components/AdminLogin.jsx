import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUser } from 'react-icons/fa';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple authentication - you can make this more secure with backend
    if (credentials.username === 'admin' && credentials.password === 'admin-0713') {
      localStorage.setItem('adminAuth', 'true');
      onLogin();
    } else {
      setError('Invalid credentials. Please try again.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
              <FaLock className="text-4xl text-white" />
            </div>
            <h1 className="text-3xl font-serif font-light text-white mb-2">Admin Panel</h1>
            <p className="text-gray-400 text-sm">Nexus 3D Management</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 uppercase tracking-wide"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-6">
            Authorized access only
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;

