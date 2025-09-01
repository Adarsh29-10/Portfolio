import { Link } from 'react-router-dom';
import { Code, Video, ArrowRight } from 'lucide-react';

const PortfolioSelector = () => {
  return (
    <div className="min-h-screen bg-amber-10 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl  font-serif text-gray-900 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Choose the type of work you'd like to explore. I showcase both my professional development skills and creative video editing projects.
          </p>
        </div>

        {/* Portfolio Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Professional Portfolio */}
          <Link to="/professional" className="group">
            <div className="bg-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-gray-100 hover:border-black transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6 transition-colors">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Portfolio
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore my web development projects, technical skills, education, and professional experience. See the code behind my work and my journey as a developer.
                </p>
                <div className="flex items-center text-blue-800 font-semibold group-hover:text-blue-500 transition-colors">
                  <span>View Professional Work</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Video Editing Portfolio */}
          <Link to="/video-editing" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-gray-100 hover:border-black transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-black rounded-4xl flex items-center justify-center mb-6 transition-colors">
                  <Video className="w-10 h-10 text-white " />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Video Editing Portfolio
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover my creative side through video editing projects, motion graphics, and visual storytelling. See my work in action and my creative process.
                </p>
                <div className="flex items-center text-red-700 font-semibold group-hover:text-red-500 transition-colors">
                  <span>View Creative Work</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer Text */}
        <div className="mt-16">
          <p className="text-gray-500">
            Both portfolios showcase different aspects of my skills and creativity
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSelector;
