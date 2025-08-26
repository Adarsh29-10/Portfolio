import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Play, Calendar, Eye, Download, ExternalLink, Instagram, Youtube } from 'lucide-react';

const VideoEditingPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample video projects data - replace with your actual projects
  const videoProjects = [
    {
      id: 1,
      title: "Junapani Waterfall - Indore",
      category: "social",
      thumbnail: "/Thumbnail/ThumbnailFilmFxAdarsh.jpg",
      videoUrl: "https://www.instagram.com/reel/DFLKIJqIdau/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      description: "A video recorded and edited my me, tried to give it a cinematic touch with emotions and memories.",
      duration: "0:23",
      date: "2024-01",
      tools: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Media Encoder"],
      client: "Personal Project"   
    },
    {
      id: 2,
      title: "Wedding Cinematics",
      category: "wedding",
      thumbnail: "/Thumbnail/ThumbnailFilmFxAdarsh.jpg",
      videoUrl: "/Videos/WeddingEntry1.mp4",
      description: "I only edited this video with a team and the shots was taken by Team Jay Photography and Sharma Photography, Ghatabillod",
      duration: "0:58",
      date: "2024-11",
      tools: ["Adobe Premiere Pro", "Adobe After Effects"],
      client: "Jay Photography"
    },
    {
      id: 3,
      title: "Shree Ganesha Cinematics",
      category: "cinematics",
      thumbnail: "/Thumbnail/ThumbnailFilmFxAdarsh.jpg",
      videoUrl: "https://youtu.be/EWWAQA2kTgk",
      description: " It was my first video that I edited in Premiere Pro. A cinematic sequences which was taken by my mobile phone 'Realme 8' and editing was done in Premiere Pro and After Effects.",
      duration: "0:29",
      date: "2023-09",
      tools: ["Adobe Premiere Pro"],
      client: "Personal Project"
    },
    {
        id: 4,
        title: "I could go back",
        category: "social",
        thumbnail: "/Thumbnail/ThumbnailFilmFxAdarsh.jpg",
        videoUrl: "/Videos/Mela.mp4",
        description: "This video was completly edited using AE.",
        duration: "0:16",
        date: "2025-03",
        tools: ["Adobe After Effects", "Adobe Media Encoder"],
        client: "Personal Project"
    },
    {
      id: 5,
      title: "Short Video on Ram Mandir",
      category: "social",
      thumbnail: "/Thumbnail/ThumbnailFilmFxAdarsh.jpg",
      videoUrl: "https://youtube.com/shorts/kdV2VbDHDfk?si=Z-Wc7dwtraSulWmF",
      description: "The first short video on youtube with maybe the first video in after effects touched 8k+ views on YOUTUBE.",
      duration: "1:15",
      date: "2024-04",
      tools: ["Adobe After Effects", "Adobe Media Encoder"],
      client: "Personal Project"
    },
    {
      id: 6,
      title: "Lotus Valley - Indore",
      category: "social",
      thumbnail: "/Thumbnail/ThumbnailFilmFxAdarsh.jpg",
      videoUrl: "/Videos/client-Sharad.mp4",
      description: "This video was also edited using AE and PP and also by using dynamic link feature of Adobe.",
      duration: "0:15",
      date: "2024-02",
      tools: ["Adobe After Effects","Adobe Premiere Pro", "Adobe Media Encoder"],
      client: "Sharad Tiwari"
    },
    {
      id: 7,
      title: "Cinematic - Dewas",
      category: "social",
      thumbnail: "/Thumbnail/ThumbnailFilmFxAdarsh.jpg",
      videoUrl: "/Videos/client-Yuvraj.mp4",
      description: "This video was edited using AE and color correction was also done in AE",
      duration: "0:26",
      date: "2024-05",
      tools: ["Adobe After Effects", "Adobe Media Encoder"],
      client: "Yuvraj Mandloi"
    },
    
    {
      id: 8,
      title: "Promo Video - Mobile Skins",
      category: "promo",
      thumbnail: "/Thumbnail/ThumbnailFilmFxAdarsh.jpg",
      videoUrl: "/Videos/client-Abhishek.mp4",
      description: "This video was edited using AE for Shree Ram Mobile Gallary - Ghatabillod",
      duration: "0:30",
      date: "2025-06",
      tools: ["Adobe After Effects", "Adobe Media Encoder"],
      client: "Shree Ram Mobile Gallary - Ghatabillod"
    },
    {
        id: 9,
        title: "Ram Navmi 2023 - Ghatabillod",
        category: "social",
        thumbnail: "/Thumbnail/ThumbnailFilmFxAdarsh.jpg",
        videoUrl: "https://www.instagram.com/reel/CqdHnrahLzo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        description: "A cinematic sequences which was taken by mobile phone 'Realme 8 and One Plus' and editing was done in Premiere Pro and After Effects.",
        duration: "1:00",
        date: "2023-03",
        tools: ["Capcut", "Alight Motion"],
        client: "Maa annpurna yuva group, Ghatabillod"
    },
    
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: videoProjects.length },
    { id: 'cinematics', name: 'Cinematics', count: videoProjects.filter(p => p.category === 'cinematics').length },
    { id: 'wedding', name: 'Wedding', count: videoProjects.filter(p => p.category === 'wedding').length },
    { id: 'social', name: 'Social Media', count: videoProjects.filter(p => p.category === 'social').length },
    { id: 'promo', name: 'Promotional Video', count: videoProjects.filter(p => p.category === 'promo').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? videoProjects 
    : videoProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio Selection</span>
          </Link>
          
          <h1 className='text-xl md:text-3xl font-semibold font-serif '>FilmFx Adarsh</h1>

          <Link 
            to="/professional" 
            className=" flex items-center space-x-2 bg-blue-600 text-white px-2 py-2 md:px-4 md:py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Code className="md:w-4 md:h-4 md:block hidden" />
            <span>Professional Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-r from-black to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Video Editing Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Bringing stories to life through creative video editing, motion graphics, and visual storytelling
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Adobe Premiere Pro</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">After Effects</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Capcut</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Alight Motion</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Media Encoder</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Thumbnail */}
              <div className="relative group">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => window.open(project.videoUrl, '_blank', 'noopener,noreferrer')}
                    className="bg-white/20 p-4 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                    title="Play video"
                  >
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {project.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600 font-medium capitalize">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Client:</p>
                  <p className="text-sm font-medium text-gray-900">{project.client}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Tools Used:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map(tool => (
                      <span key={tool} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => window.open(project.videoUrl, '_blank', 'noopener,noreferrer')}
                    className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </button>
                  <button 
                    onClick={() => window.open(project.videoUrl, '_blank', 'noopener,noreferrer')}
                    className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="bg-gradient-to-r from-blue-600 to-black py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See More of My Work
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Follow me on social media to see my latest video editing projects, behind-the-scenes content, and creative process
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/filmfx_adarsh" // Replace with your actual Instagram handle
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                <p className="text-white/80 text-sm mb-4">
                  Short reels, behind-the-scenes content, and quick editing tips
                </p>
                <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                  <span className="mr-2">@filmfx_adarsh</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>

            {/* YouTube Link */}
            <a
              href="https://www.youtube.com/@filmFxAdarsh" // Replace with your actual YouTube channel
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">YouTube</h3>
                <p className="text-white/80 text-sm mb-4">
                  Full-length videos, tutorials, and complete project showcases
                </p>
                <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                  <span className="mr-2">FilmFx Adarsh</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>

          {/* Additional Call to Action */}
          <div className="mt-12">
            <p className="text-white/80 text-lg mb-6">
              Don't miss out on my latest creations!
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/filmfx_adarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow on Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@filmFxAdarsh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center space-x-2"
              >
                <Youtube className="w-5 h-5" />
                <span>Subscribe on YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Video Editing Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Video Editing</h3>
              <p className="text-gray-600 text-sm">Professional video editing with seamless transitions and storytelling</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Motion Graphics</h3>
              <p className="text-gray-600 text-sm">Engaging animations and visual effects to enhance content</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Color Grading</h3>
              <p className="text-gray-600 text-sm">Professional color correction and grading for cinematic look</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Audio Design</h3>
              <p className="text-gray-600 text-sm">Sound design, mixing, and audio synchronization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to bring your vision to life? Let's discuss your video project.
          </p>
          <a 
            href="mailto:adarsh.raghuvanshi29@gmail.com"
            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            adarsh.raghuvanshi29@gmail.com
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoEditingPortfolio;
