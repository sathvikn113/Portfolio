import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        {/* Logo + Brand Name */}
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold text-white">Sathvik</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <a href="/about" className="text-white hover:text-blue-400 transition-colors">About</a>
          <a href="/projects" className="text-pink-400 hover:text-blue-400 transition-colors">Projects</a>
          <a href="/skills" className="text-white hover:text-blue-400 transition-colors">Skills</a>
          <a
            href="/contact"
            className="bg-amber-200 text-black px-4 py-2 rounded-2xl hover:scale-105 transition-transform duration-200 shadow-md"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;







