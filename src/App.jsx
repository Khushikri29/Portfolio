import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (showWelcome) return;

    const observerOptions = { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          entry.target.classList.add('slide-left-visible');
          entry.target.classList.add('scale-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Support multiple entrance types: reveal (translateY), slide-left (translateX), and scale
    const animatedEls = document.querySelectorAll('.reveal-hidden, .slide-left-hidden, .scale-hidden');
    animatedEls.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [showWelcome]);

  return (
    <>
      {showWelcome && <WelcomeScreen onFinish={() => setShowWelcome(false)} />}
      
      {!showWelcome && (
        <div className="fade-in-content">
          <Navbar />
          <main>
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
      
      <style>{`
        .fade-in-content {
          animation: fadeIn 1.2s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default App;
