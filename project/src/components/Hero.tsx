import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 overflow-hidden -mt-1.5">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-600/10 via-purple-600/10 to-blue-600/10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="heroGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#heroGrid)" />
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>

        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-white/5 backdrop-blur-sm rounded-full shadow-inner animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-white/5 backdrop-blur-sm rounded-full shadow-inner animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl w-full mx-auto">
        <div className="mt-16 mb-8 sm:mt-24">
          <div className="relative inline-block">
            <div className="w-32 sm:w-40 h-32 sm:h-40 mx-auto mt-6 mb-6 rounded-full overflow-hidden shadow-2xl relative border-4 border-white/20">
              <img
  src="/image.jpg"
  alt="Guna Vardhan Naidu"
  className="w-full h-full object-cover"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

              <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg animate-bounce">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Code className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 -mt-10">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Guna Vardhan
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Naidu
            </span>
          </h1>
        </div>

        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
              <span className="text-blue-400 font-semibold">AI/ML & Data Science Enthusiast</span> |{' '}
              <span className="text-purple-400 font-semibold">Java & Python Developer</span> |{' '}
              <span className="text-indigo-400 font-semibold">Web & IoT Innovator</span>
            </p>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                Passionate About <span className="text-yellow-400 font-medium">Smart Systems</span>, 
                <span className="text-green-400 font-medium"> Deep Learning</span> & 
                <span className="text-pink-400 font-medium"> Applied Mathematics</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3"
          >
            <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            View My Projects
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3"
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
            Let's Connect
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: <Github size={24} />, href: 'https://github.com/GunaVardhan-9636', color: 'hover:text-gray-300' },
            { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/guna-vardhan-naidu-628280322', color: 'hover:text-blue-400' },
            { icon: <Mail size={24} />, href: 'mailto:vardhannaidupara@gmail.com', color: 'hover:text-red-400' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`p-4 bg-white/10 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 text-gray-300 ${social.color} border border-white/20 hover:border-white/40`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="group flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Discover More
          </span>
          <div className="p-2 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300">
            <ChevronDown size={24} className="animate-bounce" />
          </div>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
    </section>
  );
};

export default Hero;
