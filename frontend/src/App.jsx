import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Links from "./components/Links";

function App() {
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-fade');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 text-white font-sans overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Links />
      
      {/* Floating scroll indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col space-y-2">
          {['hero', 'about', 'skills', 'projects', 'contact'].map((section, index) => (
            <a
              key={section}
              href={`#${section}`}
              className="w-3 h-3 rounded-full bg-white/20 hover:bg-accent-500 transition-all duration-300 hover:scale-125"
              title={section.charAt(0).toUpperCase() + section.slice(1)}
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
