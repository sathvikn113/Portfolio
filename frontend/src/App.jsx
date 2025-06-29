import React from 'react';

import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import Contact from './sections/contact';
import Projects from './sections/projects';
import About from './sections/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
  <Footer/>
    </div>
  );
}

export default App;
