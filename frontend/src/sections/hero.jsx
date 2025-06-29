import React from 'react';
import logo from '../assets/logo.svg'
const hero = () => {
  return (
   <section
  id="hero"
  className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 px-6 bg-gray-900"
>
 
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={logo} 
      alt="Sathvik"
      className="w-60 h-60 object-cover rounded-full shadow-lg"
    />
  </div>

  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
      Hi, I'm Sathvik
    </h2>
    <p className="text-lg md:text-xl text-gray-300 max-w-xl">
      I'm a passionate web developer with a focus on building clean,
      responsive, and user-friendly web applications.
    </p>
    <a
      href="/projects"
      className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-transform duration-200 hover:scale-105"
    >
      See My Work
    </a>
  </div>
</section>

  );
};

export default hero;
