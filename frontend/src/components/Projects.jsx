import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Email Sender with Blacklist Protection",
    category: "Backend",
    description: "Advanced email sending system with blacklist login implementation and comprehensive security features to prevent spam and unauthorized access.",
    longDescription: "Built with Node.js and Express, implementing secure authentication with blacklist functionality. Features include rate limiting, IP blocking, email validation, and comprehensive logging system. Currently optimizing for production deployment.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer", "Redis"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "https://github.com/AdityaKushwaha94",
    features: ["Blacklist Management", "Rate Limiting", "Secure Authentication", "Email Validation", "Logging System"],
    status: "Hosting Coming Soon",
    duration: "2 months",
    hasLiveDemo: false
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A comprehensive e-commerce solution with user authentication, shopping cart, payment integration, and admin dashboard.",
    longDescription: "Built with MERN stack featuring JWT authentication, Stripe payment integration, real-time inventory management, order tracking, and responsive design. Complete full-stack implementation with robust backend architecture.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "https://github.com/AdityaKushwaha94",
    features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Order Tracking", "Inventory Management"],
    status: "Not Hosted",
    duration: "3 months",
    hasLiveDemo: false
  },
  {
    id: 3,
    title: "OSCC Cancer Detection System",
    category: "AI/ML",
    description: "Advanced machine learning system for Oral Squamous Cell Carcinoma detection using computer vision and deep learning techniques.",
    longDescription: "Developed using TensorFlow and deep learning algorithms for early cancer detection. Implements convolutional neural networks for image analysis with high accuracy rates. Currently undergoing patent application process.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Keras", "NumPy", "Scikit-learn"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "https://github.com/AdityaKushwaha94",
    features: ["Image Analysis", "Deep Learning", "High Accuracy Detection", "Medical Imaging", "CNN Architecture"],
    status: "Patent Pending",
    duration: "1 year",
    hasLiveDemo: false
  },
  {
    id: 4,
    title: "Reaction Analyser",
    category: "Computer Vision",
    description: "Real-time facial expression and reaction analysis system using OpenCV and computer vision techniques for emotion detection.",
    longDescription: "Built with OpenCV and Python for real-time emotion detection and analysis. Implements facial recognition, expression classification, and sentiment analysis. Features include live video processing and detailed emotion metrics.",
    technologies: ["Python", "OpenCV", "Dlib", "NumPy", "MediaPipe"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://reaction-analyser-demo.vercel.app",
    githubUrl: "https://github.com/AdityaKushwaha94/Reaction-analyzer",
    features: ["Real-time Processing", "Emotion Detection", "Facial Recognition", "Expression Analysis", "Video Processing"],
    status: "Completed",
    duration: "2 months",
    hasLiveDemo: true
  },
  {
    id: 5,
    title: "Song Recommendation by Mood",
    category: "Machine Learning and AI",
    description: "ML-powered music recommendation system that suggests songs based on user's current mood and emotional state.",
    longDescription: "Developed using machine learning algorithms and music API integration. Analyzes user mood through various inputs and recommends personalized playlists. Implements collaborative filtering and content-based recommendation techniques.",
    technologies: ["Python", "Machine Learning", "Spotify API", "Pandas", "Scikit-learn", "Flask"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://song-mood-recommendation.herokuapp.com",
    githubUrl: "https://github.com/AdityaKushwaha94/song_on_mood",
    features: ["Mood Detection", "Personalized Recommendations",  "ML Algorithms"],
    status: "Completed",
    duration: "10 days ",
    hasLiveDemo: true
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    category: "Full Stack",
    description: "Modern chat application with REST API and WebSocket implementation for seamless real-time communication.",
    longDescription: "Built with Node.js, Express, and Socket.io for real-time messaging. Features include REST API endpoints for standard operations and WebSocket connections for instant messaging. Implements user authentication, chat rooms, and message history.",
    technologies: ["Node.js", "Express", "Socket.io", "MongoDB", "React.js", "JWT"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "https://github.com/AdityaKushwaha94",
    features: ["Real-time Messaging", "REST API", "WebSocket", "User Authentication", "Chat Rooms"],
    status: "Coming Soon",
    duration: "2 months",
    hasLiveDemo: false
  }
];

const ProjectCard = ({ project, onClick }) => (
  <div 
    className="glass-card group cursor-pointer h-full flex flex-col"
    onClick={() => onClick(project)}
  >
    {/* Project Image */}
    <div className="relative overflow-hidden rounded-t-2xl mb-4 h-48 bg-gradient-to-br from-primary-600/20 to-accent-600/20">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent z-10"></div>
      <div className="absolute top-4 left-4 z-20">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
        }`}>
          {project.status}
        </span>
      </div>
      <div className="absolute bottom-4 left-4 z-20">
        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-gray-300 border border-white/20">
          {project.category}
        </span>
      </div>
      {/* Placeholder for project image */}
      <div className="w-full h-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center text-6xl opacity-50">
        🚀
      </div>
    </div>

    {/* Project Content */}
    <div className="flex-1 flex flex-col">
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="px-2 py-1 bg-primary-600/20 text-primary-300 rounded text-xs font-medium border border-primary-600/30">
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded text-xs">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-4 border-t border-white/10">
        <div className="flex space-x-3">
          {project.hasLiveDemo && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-accent-400 hover:text-accent-300 transition-colors text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Live Demo</span>
            </a>
          )}
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Code</span>
          </a>
        </div>
        
        <span className="text-gray-500 text-xs">{project.duration}</span>
      </div>
    </div>
  </div>
);

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-sm">
                  {project.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-accent-400">Project Overview</h4>
              <p className="text-gray-300 leading-relaxed mb-6">{project.longDescription}</p>
              
              <h4 className="text-xl font-semibold mb-4 text-accent-400">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-gray-300">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-accent-400">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded border border-primary-600/30 text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                {project.hasLiveDemo && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full btn-primary text-center"
                  >
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Project
                  </a>
                )}
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full btn-secondary text-center"
                >
                  <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding bg-dark-900/30">
      <div className="container-responsive">
        
        {/* Section Header */}
        <div className="scroll-fade text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projectsData.map((project, index) => (
            <div key={project.id} className="scroll-fade" style={{animationDelay: `${index * 0.1}s`}}>
              <ProjectCard 
                project={project} 
                onClick={setSelectedProject}
              />
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mb-8">
          <p className="text-green-500 text-lg font-medium">
            You can see more projects on my{" "}
            <a
              href="https://github.com/AdityaKushwaha9494"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-400 transition-colors"
            >
              GitHub
            </a>{" "}
            profile.
          </p>
        </div>


        {/* CTA Section */}
        <div className="scroll-fade text-center">
          <div className="glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Interested in Working Together?</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Start a Project
              </button>
              <a
                href="https://github.com/AdityaKushwaha9494"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Previous Work
              </a>
            </div>
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
