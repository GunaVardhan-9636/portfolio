import React from 'react';
import { Trophy, Award, Users, Target, Medal, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Medal className="w-8 h-8" />,
      title: "2nd Prize – Concept Canvas (IEEE)",
      date: "November 2024",
      description: "Secured second place in IEEE's prestigious innovation competition showcasing technical concepts",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "3rd Prize – Innovate to Elevate: The Ideathon Challenge (IEI)",
      date: "November 2024",
      description: "Achieved third place in IEI's ideathon challenge for innovative problem-solving approaches",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Participant – Tantrosatav Inter-University Web Design Competition",
      date: "2024",
      description: "Participated in competitive inter-university web design competition",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Participant – ICPC India Prelims 2024 (CodeChef)",
      date: "2024",
      description: "Participated in the prestigious International Collegiate Programming Contest preliminaries",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    }
  ];

  const memberships = [
    {
      organization: "IEEE Student Chapter",
      role: "Active Member",
      description: "Participating in technical workshops, projects, and innovation challenges",
      icon: <Users className="w-6 h-6" />
    },
    {
      organization: "IEI Student Chapter",
      role: "Active Member", 
      description: "Engaging in engineering innovation programs and collaborative projects",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Recognition for excellence in technical competitions and active participation in professional organizations
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,0 100,50 50,100 0,50" fill="currentColor" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 bg-gradient-to-r ${achievement.color} text-white rounded-xl shadow-lg`}>
                    {achievement.icon}
                  </div>
                  <span className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {achievement.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Memberships Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-200/50 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Memberships</h3>
            <p className="text-gray-600">Active participation in leading engineering and technology organizations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mr-4">
                    {membership.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{membership.organization}</h4>
                    <p className="text-blue-600 font-medium">{membership.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{membership.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
          <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-gray-600">Organizations</div>
          </div>
          <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-3xl font-bold text-green-600 mb-2">1</div>
            <div className="text-gray-600">ICPC Participation</div>
          </div>
          <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
            <div className="text-3xl font-bold text-orange-600 mb-2">Multiple</div>
            <div className="text-gray-600">Competitions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;