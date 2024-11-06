import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Carousel />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
