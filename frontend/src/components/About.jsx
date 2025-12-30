import React from "react";

const About = () => {
  const highlights = [
    {
      icon: "🚀",
      title: "Performance Focused",
      description: "Optimized applications with 95%+ performance scores and fast loading times"
    },
    {
      icon: "💡",
      title: "Problem Solver",
      description: "Analytical thinking to break down complex problems into manageable solutions"
    },
    {
      icon: "🎯",
      title: "Detail Oriented",
      description: "Meticulous attention to code quality, user experience, and project requirements"
    },
    {
      icon: "🌟",
      title: "Innovation Driven",
      description: "Always exploring cutting-edge technologies to deliver modern solutions"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience in development" },
    { number: "9.69", label: "CGPA" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="section-padding bg-dark-900/30">
      <div className="container-responsive">
        
        {/* Section Header */}
        <div className="scroll-fade text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column - Professional Story */}
          <div className="scroll-fade">
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6 text-primary-300">My Professional Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
    Hi, I’m <strong className="text-white">Aditya Kushwaha</strong> — a 
    detail-oriented and innovative <strong className="text-accent-400">Node.js Backend Developer</strong> 
    with strong computer science fundamentals and hands-on experience building scalable backend systems, 
    RESTful APIs, and real-time applications.
  </p>

  <p>
    I specialize in <strong className="text-white">Node.js, Express.js, and MongoDB</strong>, and enjoy 
    designing efficient architectures, writing clean and tested code, and collaborating with 
    cross-functional teams to deliver production-ready solutions. I’ve worked on SaaS platforms, 
    full-stack applications, and performance optimizations involving caching and database tuning.
  </p>

  <p>
    Currently pursuing a <strong className="text-white">B.Tech in Computer Science</strong> at 
    Bharati Vidyapeeth (Pune), I’m particularly passionate about 
    <strong className="text-primary-400"> AI-driven</strong> and 
    <strong className="text-accent-400"> data-centric applications</strong>. 
    I continuously explore cloud technologies and modern backend practices to build intelligent, 
    scalable systems that create real-world impact.
  </p>
              </div>
              
              {/* Call to Action */}
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Key Highlights */}
          <div className="scroll-fade">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="glass-card text-center group cursor-pointer"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="scroll-fade">
          <div className="glass p-8 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Values */}
        <div className="scroll-fade mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Core Values & Approach</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glass-card">
                <h4 className="font-semibold mb-3 text-primary-300">Clean Code</h4>
                <p className="text-gray-400 text-sm">Writing maintainable, scalable, and well-documented code following industry best practices</p>
              </div>
              <div className="glass-card">
                <h4 className="font-semibold mb-3 text-accent-300">User-Centric Design</h4>
                <p className="text-gray-400 text-sm">Prioritizing user experience and accessibility in every project for maximum engagement</p>
              </div>
              <div className="glass-card">
                <h4 className="font-semibold mb-3 text-primary-300">Continuous Learning</h4>
                <p className="text-gray-400 text-sm">Staying updated with latest technologies and trends to deliver cutting-edge solutions</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
