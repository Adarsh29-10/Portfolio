import { User, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "Full Stack Developer",
      description: "Experienced in MERN stack development with a passion for creating user-friendly applications"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Skilled at analyzing complex problems and developing efficient, scalable solutions"
    },
    {
      icon: Award,
      title: "Creative Professional",
      description: "Freelance video editor with 20+ projects, bringing creativity to both code and content"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer and creative professional currently pursuing my B.Tech in Information Technology. 
            I love building innovative solutions and have experience in both web development and video editing.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate Developer & Creative Professional
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm currently pursuing my Bachelor of Technology in Information Technology at Indore Institute 
              of Science and Technology. With a strong foundation in modern web technologies, I specialize in 
              building full-stack applications using the MERN stack.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My journey in technology is complemented by my creative background as a freelance video editor, 
              where I've successfully delivered 20+ projects. This unique combination allows me to approach 
              development with both technical precision and creative vision.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'm always eager to learn new technologies and take on challenging projects that push the 
              boundaries of what's possible in web development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-sm text-gray-600">Video Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-sm text-gray-600">Web Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
