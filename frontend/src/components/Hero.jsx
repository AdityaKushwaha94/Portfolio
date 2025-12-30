import React, { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "cFull Stack Developer",
    "cMERN Stack Specialist", 
    "cBackend Developer",
    "cProblem Solver",
    "cjava Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayText("");
    let i = 0;
    const typing = setInterval(() => {
      if (i < roles[currentIndex].length) {
        setDisplayText((prev) => prev + roles[currentIndex].charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [currentIndex]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding">
      <div className="container-responsive text-center">
        {/* Profile image with glow effect */}
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 animate-glow">
            <img 
              src="/profile.jpg" 
              alt="Aditya Kushwaha - Full Stack Developer"
              className="w-full h-full rounded-full object-cover bg-gradient-to-br from-gray-700 to-gray-900"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-4xl md:text-5xl font-bold text-white" style={{display: 'none'}}>
              AK
            </div>
          </div>
        </div>

        {/* Main heading with gradient text */}
        <div className="scroll-fade">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-shadow">
            <span className="block text-gray-300 mb-2">Hello, I'm</span>
            <span className="gradient-text">Aditya Kushwaha</span>
          </h1>
        </div>

        {/* Dynamic role display */}
        <div className="scroll-fade">
          <div className="mb-8 h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-300 font-medium">
              <span className="text-gray-400">I'm a </span>
              <span className="text-accent-400 font-semibold border-r-2 border-accent-400 animate-pulse">
                {displayText}
              </span>
            </p>
          </div>
        </div>

        {/* Professional description */}
        <div className="scroll-fade">
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Passionate Full Stack Developer with expertise in modern web technologies. 
            I specialize in creating scalable, high-performance applications using the MERN stack. 
            <span className="block mt-2 text-primary-300 font-medium">
              Turning innovative ideas into elegant digital solutions.
            </span>
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="scroll-fade">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              <span>View My Work</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary group"
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tech stack showcase */}
        <div className="scroll-fade">
          <div className="glass p-6 max-w-4xl mx-auto">
            <p className="text-gray-400 mb-4 font-medium">Specialized in:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript"].map((tech, index) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/30 rounded-full text-sm font-medium text-primary-300 hover:from-primary-600/30 hover:to-accent-600/30 transition-all duration-300 hover:scale-105"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
