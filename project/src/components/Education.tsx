import React from 'react';
import { GraduationCap, Calendar, MapPin, Users, BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = {
    institution: "Amrita Vishwa Vidyapeetham, Nagercoil",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2024 – 2028",
    status: "Currently in 3rd Semester",
    location: "Nagercoil, Tamil Nadu"
  };

  const activities = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "IEEE Student Chapter",
      description: "Active member participating in technical workshops and innovation challenges"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "IEI Student Chapter", 
      description: "Engaged in engineering innovation programs and collaborative projects"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "AI/ML Community",
      description: "Active participant in artificial intelligence and machine learning initiatives"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Competitive Programming",
      description: "Regular participation in coding competitions and algorithmic challenges"
    }
  ];

  const subjects = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems", 
    "Computer Networks",
    "Operating Systems",
    "Software Engineering"
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-pink-400/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2s' }}></div>
        
        {/* SVG Pattern Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <defs>
            <pattern id="eduGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#eduGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Academic journey and continuous learning through formal education and extracurricular activities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Education Card */}
          <div className="relative">
            {/* Glassmorphism Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
              {/* Institution Header */}
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg mr-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{education.institution}</h3>
                  <p className="text-blue-300 font-medium">{education.degree}</p>
                </div>
              </div>

              {/* Education Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-green-300 font-medium">{education.status}</span>
                </div>
              </div>

              {/* Core Subjects */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Core Subjects</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                    >
                      <span className="text-gray-300 text-sm">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Neumorphism Accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Activities & Involvement */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
              Activities & Involvement
            </h3>
            
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg mr-4 flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{activity.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">3rd</div>
            <div className="text-gray-300 text-sm">Current Semester</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
            <div className="text-gray-300 text-sm">Active Memberships</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">CS&E</div>
            <div className="text-gray-300 text-sm">Specialization</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2028</div>
            <div className="text-gray-300 text-sm">Expected Graduation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;