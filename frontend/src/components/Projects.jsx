import { ExternalLink, Github, DollarSign, Users, Clock, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EasyRenting",
      subtitle: "Rental & Bill-Sharing Web App",
      description: "A comprehensive property and room rental platform built with the MERN stack, featuring property listing, utility management, and secure payment integration.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
      features: [
        "Property listing and management",
        "Utility and bill management system",
        "Tenant tracking with user-friendly dashboard",
        "Integrated Razorpay for secure payments",
        "Reduced rental coordination time by 35%"
      ],
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "StudyVerse",
      subtitle: "Decentralized Study Group Finder",
      description: "A full-stack platform connecting students to find and join study groups based on their interests and location with real-time updates.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "User authentication and profiles",
        "Location-based group matching",
        "Interest-based group recommendations",
        "Real-time updates and notifications",
        "Responsive UI for mobile and desktop"
      ],
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Village Portal",
      subtitle: "Complaint Management System",
      description: "A lightweight web platform enabling villagers to report local issues and complaints, focusing on accessibility and simplicity.",
      technologies: ["JavaScript", "Express.js", "HTML", "CSS"],
      features: [
        "Simple complaint submission form",
        "Issue categorization and tracking",
        "Admin dashboard for management",
        "Accessible design for all users",
        "Lightweight and fast performance"
      ],
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development 
            and problem-solving abilities. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br ${project.color} p-1`}>
                  <div className="bg-white rounded-lg p-8 text-center">
                    <div className="text-6xl mb-4">{index === 0 ? '🏠' : index === 1 ? '📚' : '🏛️'}</div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="text-gray-600">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Project Stats */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Project Impact & Achievements
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">35%</div>
              <div className="text-sm text-gray-600">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-sm text-gray-600">User Testing</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <DollarSign className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">Payment Success</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
