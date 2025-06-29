import React, { useState } from 'react';

const About = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleCommand = (e) => {
    e.preventDefault();

    let response = '';

    switch (input.toLowerCase()) {
      case 'education':
        response = 'B.E. in Electronics & Communication | XYZ University | 2021 - 2025';
        break;
      case 'projects':
        response = 'Check out /projects to view my work!';
        break;
      case 'contact':
        response = 'Email: you@example.com | LinkedIn: /in/yourprofile';
        break;
      default:
        response = `Command not found: ${input}`;
    }

    setHistory([...history, { command: input, response }]);
    setInput('');
  };

  return (
    <section className="min-h-screen bg-black text-green-500 font-mono px-6 py-10">
      <h2 className="text-2xl md:text-3xl mb-6">~ Welcome to Sathvik's Terminal</h2>

      <div className="bg-gray-900 rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
        <div className="h-[400px] overflow-y-auto space-y-4 mb-4">
          {history.map((item, index) => (
            <div key={index}>
              <p><span className="text-blue-400">visitor@portfolio</span>:~$ {item.command}</p>
              <p>{item.response}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleCommand} className="flex items-center space-x-2">
          <span className="text-blue-400">visitor@portfolio</span>:~$
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-black border-none outline-none w-full text-green-400 px-2"
            autoFocus
          />
        </form>
      </div>
    </section>
  );
};

export default About;
