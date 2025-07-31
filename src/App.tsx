import React from 'react';
import GlobalBackground from './components/GlobalBackground';
import CenterLiquidBall from './components/CenterLiquidBall';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white">
      <GlobalBackground />
      <CenterLiquidBall />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;