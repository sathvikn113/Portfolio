import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import pic from '../assets/my_pic.svg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen px-6 py-16 bg-gray-900 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={pic}
          alt="Sathvik"
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-600 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Hi, I'm <span className="text-blue-500">Sathvik</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-xl leading-relaxed">
            A passionate web developer crafting clean, responsive, and user-friendly web applications using modern web technologies.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/projects"
            className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105"
          >
            See My Work
          </a>
          <a
            href="/resume"
            className="px-6 py-2 bg-gray-800 text-white border border-blue-600 rounded-xl hover:bg-blue-600 transition-all duration-200 hover:scale-105"
          >
            See Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-white text-2xl mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-blue-400 transition-colors duration-200" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-blue-400 transition-colors duration-200" />
          </a>
          <a
            href="mailto:youremail@example.com"
            aria-label="Email"
          >
            <FaEnvelope className="hover:text-blue-400 transition-colors duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


