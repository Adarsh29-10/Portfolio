import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      institution: "Indore Institute of Science and Technology",
      affiliation: "Affiliated to RGPV",
      period: "Expected Graduation: August 2026",
      status: "current",
      description: "Comprehensive program covering software development, data structures, algorithms, and modern web technologies."
    },
    {
      degree: "Higher Secondary Education",
      institution: "South Valley International School, Betma",
      period: "2022",
      status: "completed",
      description: "Completed with focus on Science and Mathematics, building strong analytical and problem-solving foundations."
    },
    {
      degree: "High School Education",
      institution: "South Valley International School, Betma",
      period: "2020",
      status: "completed",
      description: "Strong academic foundation with excellent performance in Mathematics and Science subjects."
    }
  ];

  const activities = [
    {
      title: "Freelance Video Editor",
      description: "Delivered 20+ projects for clients, honing project management and client requirement analysis skills transferable to software development.",
      icon: "🎬"
    },
    {
      title: "IIST Photography & Filmmaking Club",
      description: "Active member contributing to creative projects and developing visual storytelling skills.",
      icon: "📸"
    },
    {
      title: "Hackathon Participant",
      description: "Participated in various hackathons including 24hr Internal Hackathon 2024, developing rapid prototyping skills.",
      icon: "💻"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & Activities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My educational journey and extracurricular activities that have shaped my technical skills 
            and creative mindset in software development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== education.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-300"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    edu.status === 'current' ? 'bg-blue-600' : 'bg-gray-400'
                  }`}>
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {edu.degree}
                        </h4>
                        {edu.field && (
                          <p className="text-blue-600 font-medium">{edu.field}</p>
                        )}
                      </div>
                      <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-700 mb-3">
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.institution}</span>
                      {edu.affiliation && (
                        <span className="ml-2 text-sm text-gray-500">({edu.affiliation})</span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {edu.status === 'current' && (
                      <div className="mt-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Currently Pursuing
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Extracurricular Activities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{activity.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {activity.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Key Achievements & Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="text-white" size={24} />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">4+</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-bold">H</span>
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">1+</div>
              <div className="text-sm text-gray-600">Hackathons</div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg font-bold">V</span>
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">20+</div>
              <div className="text-sm text-gray-600">Video Projects</div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">2026</div>
              <div className="text-sm text-gray-600">Expected Grad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
