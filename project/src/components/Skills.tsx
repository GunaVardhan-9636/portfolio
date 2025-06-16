import React from 'react';
import { Code, Globe, Database, Cpu, GitBranch, BarChart3 } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "React", "Vercel"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Foundations",
      skills: ["Object-Oriented Programming", "DBMS", "Data Structures & Algorithms"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Other Technologies",
      skills: ["IoT", "Responsive Design", "Git", "Analytical Thinking"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const techLogos = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "SQL", level: 80 }
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning programming languages, web technologies, and analytical foundations
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-lg mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Proficiency Bars */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-200/50 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {techLogos.map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{tech.name}</span>
                  <span className="text-sm text-gray-500">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-12 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h4 className="text-lg font-semibold text-gray-700 mb-6">Also Working With</h4>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            <div className="p-4 bg-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200">
              <GitBranch className="w-6 h-6 text-gray-700" />
            </div>
            <div className="p-4 bg-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200">
              <BarChart3 className="w-6 h-6 text-gray-700" />
            </div>
            <div className="p-4 bg-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-200">
              <Database className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;