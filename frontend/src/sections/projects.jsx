import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      image: 'https://via.placeholder.com/400x200', // Replace with your image URL or import
      github: 'https://github.com/yourusername/project1',
      live: 'https://yourproject1.live',
    },
    {
      id: 2,
      title: 'Project Two',
      image: 'https://via.placeholder.com/400x200',
      github: 'https://github.com/yourusername/project2',
      live: 'https://yourproject2.live',
    },
    {
      id: 3,
      title: 'Project Three',
      image: 'https://via.placeholder.com/400x200',
      github: 'https://github.com/yourusername/project3',
      live: 'https://yourproject3.live',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
