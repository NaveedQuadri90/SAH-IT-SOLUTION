import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/tech-dubai/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="text-center py-24 sm:py-32 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
            <span className="block">Shaping the Future of</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Technology & Connectivity</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-200 drop-shadow-md">
            Your trusted partner in Dubai for innovative IT and networking solutions, from structured cabling to home automation and beyond.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="inline-block bg-gradient-to-br from-pink-500 to-purple-600 text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:shadow-pink-500/40 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Our Services
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-block bg-white/10 backdrop-blur-md text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;