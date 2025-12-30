import React from "react";

const Links = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/adityakushwaha",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      description: "Professional Network"
    },
    {
      name: "GitHub",
      url: "https://github.com/adityakushwaha",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      description: "Code Repository"
    },
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/adityakushwaha",
    //   icon: (
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    //     </svg>
    //   ),
    //   description: "Tech Updates"
    // },
    {
      name: "Instagram",
      url: "https://instagram.com/adityakushwaha",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.999.01 6.756.048 5.517.087 4.668.219 3.934.41a5.92 5.92 0 0 0-2.14 1.394A5.92 5.92 0 0 0 .41 3.934C.219 4.668.087 5.517.048 6.756.01 7.999 0 8.396 0 12.017c0 3.624.01 4.021.048 5.264.039 1.239.171 2.088.362 2.822.191.733.446 1.354.894 1.802.448.448 1.069.703 1.802.894.734.191 1.583.323 2.822.362C7.999 23.99 8.396 24 12.017 24c3.624 0 4.021-.01 5.264-.048 1.239-.039 2.088-.171 2.822-.362a5.92 5.92 0 0 0 1.802-.894c.448-.448.703-1.069.894-1.802.191-.734.323-1.583.362-2.822C23.99 16.038 24 15.641 24 12.017c0-3.621-.01-4.018-.048-5.261-.039-1.239-.171-2.088-.362-2.822a5.92 5.92 0 0 0-.894-1.802A5.92 5.92 0 0 0 20.894.41C20.16.219 19.311.087 18.072.048 16.829.01 16.432 0 12.808 0h-.791zm-.097 2.178c3.549 0 3.97.014 5.373.052 1.297.059 2.004.277 2.474.46.622.242 1.065.532 1.53.997.465.465.755.908.997 1.53.183.47.401 1.177.46 2.474.038 1.403.052 1.824.052 5.373 0 3.549-.014 3.97-.052 5.373-.059 1.297-.277 2.004-.46 2.474a4.133 4.133 0 0 1-.997 1.53c-.465.465-.908.755-1.53.997-.47.183-1.177.401-2.474.46-1.403.038-1.824.052-5.373.052-3.549 0-3.97-.014-5.373-.052-1.297-.059-2.004-.277-2.474-.46a4.133 4.133 0 0 1-1.53-.997 4.133 4.133 0 0 1-.997-1.53c-.183-.47-.401-1.177-.46-2.474C2.192 16.787 2.178 16.366 2.178 12.817c0-3.549.014-3.97.052-5.373.059-1.297.277-2.004.46-2.474.242-.622.532-1.065.997-1.53A4.133 4.133 0 0 1 5.217 2.64c.47-.183 1.177-.401 2.474-.46C9.094 2.192 9.515 2.178 12.917 2.178h-.1zm0 3.297c-3.723 0-6.742 3.019-6.742 6.742 0 3.723 3.019 6.742 6.742 6.742 3.723 0 6.742-3.019 6.742-6.742 0-3.723-3.019-6.742-6.742-6.742zM12.017 16c-2.206 0-3.992-1.786-3.992-3.992s1.786-3.992 3.992-3.992 3.992 1.786 3.992 3.992-1.786 3.992-3.992 3.992zM19.803 5.288a1.575 1.575 0 1 1-3.15 0 1.575 1.575 0 0 1 3.15 0z"/>
        </svg>
      ),
      description: "Personal Life"
    },
    {
      name: "Portfolio",
      url: "https://adityakushwaha.dev",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      ),
      description: "Official Website"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const resources = [
    { name: "Resume", href: "/resume.pdf", external: true },
    { name: "Blog", href: "https://blog.adityakushwaha.dev", external: true },
    { name: "Newsletter", href: "#newsletter", external: false },
    { name: "Testimonials", href: "#testimonials", external: false }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950/90 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent"></div>
      
      <div className="relative section-padding">
        <div className="container-responsive">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold gradient-text mb-4">
                  Aditya Kushwaha
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Full Stack Developer passionate about creating exceptional digital experiences. 
                  Specializing in modern web technologies and innovative solutions that drive business growth.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="glass p-6 rounded-2xl">
                <h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest updates on new projects, tech insights, and opportunities.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 input-field text-sm"
                  />
                  <button className="btn-primary px-4 py-2 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      target={resource.external ? "_blank" : undefined}
                      rel={resource.external ? "noopener noreferrer" : undefined}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 inline-flex items-center"
                    >
                      {resource.name}
                      {resource.external && (
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-12">
            <h4 className="font-semibold mb-6 text-white text-center">Connect With Me</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card text-center group min-w-[120px]"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-lg text-primary-300 group-hover:scale-110 transition-all duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-white group-hover:text-accent-400 transition-colors">
                        {social.name}
                      </h5>
                      <p className="text-xs text-gray-400">{social.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                <p>
                  © {new Date().getFullYear()} Aditya Kushwaha. 
                  <span className="ml-2">
                    Built with ❤️ using React & Node js 
                  </span>
                </p>
              </div>

              {/* Legal Links & Back to Top */}
              <div className="flex items-center space-x-6">
                <div className="flex space-x-4 text-sm">
                  <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                   Thank you for visting -  Aditya kushwaha
                  </a>
                </div>
                
                <button
                  onClick={scrollToTop}
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  title="Back to top"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transform group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">
                Available for new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Links;