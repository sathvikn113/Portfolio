import React from 'react';

const navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Sathvik</h1>
        <div className="space-x-4">
          <a href="/about" className="text-gray-600 hover:text-blue-500">About</a>
          <a href="/projects" className="text-gray-600 hover:text-blue-500">Projects</a>
          <a href="/skills" className="text-gray-600 hover:text-blue-500">Skills</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
