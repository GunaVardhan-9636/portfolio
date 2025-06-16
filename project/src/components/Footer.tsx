import React from 'react';
import { Heart, Github, Linkedin, Mail, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/GunaVardhan-9636',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/guna-vardhan-naidu-628280322',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      href: 'mailto:vardhannaidupara@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-red-400'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-indigo-900/10 animate-pulse"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="footerGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#footerGrid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  Guna Vardhan Naidu
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  AI/ML & Data Science Enthusiast passionate about building intelligent systems 
                  and exploring the mathematical foundations of artificial intelligence.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-400">
                  <Code className="w-4 h-4 mr-2" />
                  <span className="text-sm">Built with React & TypeScript</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-400">
                <Coffee className="w-4 h-4 mr-2" />
                <span className="text-sm">Fueled by curiosity and coffee</span>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-400 text-sm mb-4">Connect with me:</p>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`p-3 bg-white/5 backdrop-blur-sm rounded-lg text-gray-400 ${link.color} transform hover:scale-110 transition-all duration-200 border border-white/10 hover:border-white/20`}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Current Focus</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Machine Learning Projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <span>IoT Innovations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Data Science Research</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Web Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center text-gray-400 text-sm">
                <span>© {currentYear} Guna Vardhan Naidu. Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
                <span>and lots of</span>
                <Coffee className="w-4 h-4 mx-1 text-brown-500" />
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>B.Tech CSE '28</span>
                <span>•</span>
                <span>Amrita Vishwa Vidyapeetham</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
      </div>
    </footer>
  );
};

export default Footer;