import React from 'react';

const hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-50 to-white" id="hero">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700">Hi, I'm Sathvik</h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl">I'm a passionate web developer with a focus on building clean, responsive, and user-friendly web applications.</p>
      <a href="/projects" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">See My Work</a>
    </section>
  );
};

export default hero;
