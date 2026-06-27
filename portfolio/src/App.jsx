import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsTicker from './components/MetricsTicker';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  // Intersection Observer — triggers .animate-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all elements with class "observe"
    const targets = document.querySelectorAll('.observe');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <MetricsTicker />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
