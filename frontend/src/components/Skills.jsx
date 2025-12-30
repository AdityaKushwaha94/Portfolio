import React, { useState, useEffect, useRef } from "react";

const skillsData = {
  frontend: [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "JavaScript (ES6+)", level: 92, icon: "🟨" },
    { name: "TypeScript", level: 88, icon: "🔷" },
    { name: "HTML5 & CSS3", level: 96, icon: "🎨" },
    { name: "Tailwind CSS", level: 90, icon: "💨" },
    { name: "Next.js", level: 85, icon: "▲" }
  ],
  backend: [
    { name: "Node.js", level: 93, icon: "🟩" },
    { name: "Express.js", level: 91, icon: "🚄" },
    { name: "MongoDB", level: 89, icon: "🍃" },
    { name: "PostgreSQL", level: 82, icon: "🐘" },
    { name: "RESTful APIs", level: 94, icon: "🔗" },
    { name: "GraphQL", level: 78, icon: "🔺" }
  ],
  tools: [
    { name: "Git & GitHub", level: 94, icon: "📝" },
    { name: "Docker", level: 80, icon: "🐳" },
    { name: "MongoDB Atlas", level: 75, icon: "☁️" },
    { name: "MySQL", level: 86, icon: "🗄️" },
    { name: "Webpack", level: 83, icon: "📦" },
    { name: "VS Code", level: 97, icon: "💻" }
  ]
};

const SkillBar = ({ skill, index, isVisible }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-medium text-white">{skill.name}</span>
        </div>
        <span className="text-accent-400 font-semibold">{progress}%</span>
      </div>
      
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out shadow-lg"
          style={{ width: `${progress}%` }}
        >
          <div className="h-full bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, icon, isVisible }) => (
  <div className="glass-card">
    <div className="text-center mb-8">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillBar 
          key={skill.name} 
          skill={skill} 
          index={index}
          isVisible={isVisible}
        />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    "MongoDB Developer Associate",
    "Meta React Developer",
    "Google Analytics Certified"
  ];
  const Hackathons=
  [
    "Tech Expression 2024-Top 10",
    "Hack with INDIA",
    "Smart India Hackathon 2023",
  ]
  return (
    <section id="skills" className="section-padding" ref={sectionRef}>
      <div className="container-responsive">
        
        {/* Section Header */}
        <div className="scroll-fade text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proficient in modern web technologies with hands-on experience in full-stack development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="scroll-fade">
            <SkillCategory 
              title="Frontend Development"
              skills={skillsData.frontend}
              icon="🎨"
              isVisible={isVisible}
            />
          </div>
          
          <div className="scroll-fade">
            <SkillCategory 
              title="Backend Development"
              skills={skillsData.backend}
              icon="⚙️"
              isVisible={isVisible}
            />
          </div>
          
          <div className="scroll-fade">
            <SkillCategory 
              title="Tools & Technologies"
              skills={skillsData.tools}
              icon="🛠️"
              isVisible={isVisible}
            />
          </div>
        </div>

        {/* Additional Skills & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Soft Skills */}
          <div className="scroll-fade">
            <div className="glass-card text-center">
              <h3 className="text-xl font-bold mb-6 text-primary-300">Professional Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Project Management",
                  "Team Leadership", 
                  "Problem Solving",
                  "Communication",
                  "Agile/Scrum",
                  "Code Reviews",
                  "Mentoring",
                  "Client Relations"
                ].map((skill, index) => (
                  <div 
                    key={skill}
                    className="p-3 bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-500/20 rounded-lg hover:from-primary-600/20 hover:to-accent-600/20 transition-all duration-300"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <span className="text-sm font-medium text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="scroll-fade">
            <div className="glass-card text-center">
              <h3 className="text-xl font-bold mb-6 text-accent-300">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert}
                    className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{cert}</span>
                    <div className="ml-auto">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Summary */}
        <div className="scroll-fade mt-16">
          <div className="glass p-8 text-center">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Preferred Technology Stack</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
              {[
                { name: "React", color: "from-blue-400 to-light-blue-600" },
                { name: "Node.js", color: "from-green-400 to-dark-green-600" },
                { name: "MongoDB", color: "from-green-500 to-green-700" },
                { name: "Express", color: "from-gray-400 to-gray-600" },
                { name: "Machine Learning", color: "from-cyan-400 to-cyan-600" },
                { name: "TypeScript", color: "from-blue-500 to-blue-700" },
                { name: "Java", color: "from-blue-600 to-blue-800" },
                { name: "python", color: "from-yellow-400 to-yellow-600" } ,
                { name: "Sql", color: "from-blue-400 to-blue-600" },

              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className={`px-6 py-3 bg-gradient-to-r ${tech.color} rounded-full text-white font-semibold shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
