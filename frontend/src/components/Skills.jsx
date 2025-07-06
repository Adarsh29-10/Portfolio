import { Code, Database, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C++", "Java", "JavaScript (ES6)"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "Node.js", "Express.js", "Mongoose"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Settings,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Adobe After Effects", "Adobe Premiere Pro"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const certifications = [
    "AWS Academy Graduate – AWS Academy Cloud Foundations",
    "SQL and Relational Databases 101 (IBM)",
    "Introduction to Web Development with HTML5, CSS3, and JavaScript",
    "24hr Internal Hackathon, 2024"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build robust, 
            scalable applications and create engaging digital content.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Video Editing", "Project Management", "Client Relations", "Problem Solving", "Team Collaboration"].map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
