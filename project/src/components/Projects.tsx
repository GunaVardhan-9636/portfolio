import React from 'react';
import { ExternalLink, Github, Globe, Code, Layers, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const featuredProject = {
    title: "Program Pulse",
    description: "A developer-focused blog platform designed for exploring modern IT concepts. Built with React, TypeScript, and modern web technologies.",
    longDescription: "Program Pulse features articles on software architecture, debugging, microservices, AI in tech with a responsive UI, fast performance, and tagged content system. Designed for scalability and future content expansion.",
    technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vercel"],
    liveUrl: "https://program-pulse.vercel.app",
    githubUrl: "https://github.com/GunaVardhan-9636",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Articles on software architecture and debugging",
      "Modern microservices content",
      "AI in tech insights",
      "Responsive and fast UI",
      "Tagged content system",
      "Scalable architecture"
    ]
  };

  const otherProjects = [
    {
      title: "IoT-Based Smart Crop Disease Detection and Alert System",
      description: "An IoT-enabled system that captures real-time crop images and environmental data, applies ML/DL algorithms to detect early signs of crop diseases, and instantly alerts farmers via mobile or web notifications for timely intervention.",
      technologies: ["IoT", "Machine Learning", "Deep Learning", "Python", "Computer Vision"],
      status: "Model Developing"
    },
    {
      title: "Early Diagnosis of Cancer Using Genomic and Clinical Data",
      description: "Research journal focusing on leveraging genomic data and clinical information for early cancer detection using advanced data analysis techniques.",
      technologies: ["Data Science", "Genomics", "Machine Learning", "Research"],
      status: "Writing Journal"
    },
    {
      title: "IoT Smart Home System",
      description: "Connected home automation system with sensor integration for intelligent home management and control.",
      technologies: ["IoT", "Python", "Hardware Integration", "Sensors"],
      status: "Prototype"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="projectGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#projectGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Showcasing my passion for AI/ML, Data Science, Web Development, and IoT innovations
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/90 backdrop-blur-sm">
                    <Globe className="w-4 h-4 mr-1" />
                    Live Project
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">{featuredProject.title}</h3>
                  <div className="flex space-x-3">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {featuredProject.longDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featuredProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <Zap className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Visit Live Site
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700'
                      : project.status === 'Model Developing'
                      ? 'bg-blue-100 text-blue-700'
                      : project.status === 'Writing Journal'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;