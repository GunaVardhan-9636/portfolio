import React from 'react';
import { Brain, Calculator, TrendingUp, BookOpen, Sparkles, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Deep passion for artificial intelligence and machine learning applications",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Mathematical Foundations",
      description: "Strong interest in Linear Algebra, Calculus, and Probability & Statistics",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data Science",
      description: "Exploring data patterns and insights through analytical thinking",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Curiosity-driven learning style with hands-on project approach",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const mathTopics = [
    "Linear Algebra",
    "Calculus", 
    "Discrete Mathematics",
    "Probability & Statistics",
    "Permutations & Combinations"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 animate-pulse"></div>
        
        {/* Glassmorphism Floating Elements */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-white/20 backdrop-blur-xl rounded-full shadow-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Abstract SVG Patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="aboutPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <polygon points="5,5 15,5 10,15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#aboutPattern)" />
          </svg>
        </div>
        
        {/* Neumorphism Elements */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/30 backdrop-blur-sm rounded-2xl shadow-inner animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
            <h2 className="text-4xl font-bold text-gray-900">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-6 shadow-lg"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Passionate about transforming ideas into intelligent solutions through code and mathematics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Introduction Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">👋</div>
                <h3 className="text-2xl font-semibold text-gray-900">Hello there!</h3>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  I'm currently in my <span className="font-semibold text-blue-600">third semester</span> of B.Tech in Computer Science & Engineering at 
                  <span className="font-semibold text-purple-600"> Amrita Vishwa Vidyapeetham, Nagercoil</span>.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200/50">
                  <p className="text-gray-800">
                    I'm passionate about <span className="font-semibold text-purple-600">Machine Learning</span>, 
                    <span className="font-semibold text-blue-600"> Artificial Intelligence</span>, 
                    <span className="font-semibold text-indigo-600"> Deep Learning</span>, and 
                    <span className="font-semibold text-green-600"> Data Science</span> — with a strong focus on their mathematical foundations.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p>
                    I explore emerging technologies through hands-on projects, technical competitions, and research initiatives, 
                    driven by a <span className="font-semibold text-orange-600">strong analytical mindset</span> and 
                    <span className="font-semibold text-red-600"> curiosity-driven learning style</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Mathematical Foundations Card */}
            <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl p-8 border border-indigo-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg mr-4">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Mathematical Foundations</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mathTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/90 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                  >
                    <Zap className="w-4 h-4 text-indigo-500 group-hover:text-purple-600 transition-colors duration-200" />
                    <span className="text-gray-700 font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Interests Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/50 hover:bg-white/90 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-4 bg-gradient-to-r ${interest.gradient} text-white rounded-xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {interest.icon}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-200">
                  {interest.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                  {interest.description}
                </p>
                
                {/* Hover Effect Indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">3rd</div>
              <div className="text-gray-600 text-sm">Current Semester</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-200">5+</div>
              <div className="text-gray-600 text-sm">Tech Stacks</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-200">4</div>
              <div className="text-gray-600 text-sm">Major Awards</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-200">∞</div>
              <div className="text-gray-600 text-sm">Learning Spirit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;