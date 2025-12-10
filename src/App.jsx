import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import MeanderingBackground from './components/MeanderingBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gray-50 dark:bg-dark min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <MeanderingBackground />
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Certificates />
            <Resume />
            <Contact />
            <Footer />
          </div>
          <ScrollToTop />
          <Chatbot />
        </>
      )}
    </div>
  );
}

export default App;
