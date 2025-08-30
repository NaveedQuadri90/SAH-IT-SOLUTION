import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Sultan Al Hasnani</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              SAH is an IT Network service company founded by enthusiastic technocrats with a base in Dubai. We are dedicated to shaping the future of technology and connectivity. As a leading IT and networking solutions provider, we offer a comprehensive suite of services designed to empower businesses and individuals with cutting-edge solutions.
            </p>
            <p className="text-lg text-slate-300 mb-6">
              Our commitment to innovation, security, and reliability has made us a trusted partner for a wide range of technology needs. We understand the importance of technology in today's world, and our mission is to empower businesses and individuals with the tools they need to thrive in the digital age.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-pink-600 to-purple-700 rounded-lg blur-lg opacity-25"></div>
            <img 
              src="https://picsum.photos/seed/it-team-collaboration/800/600" 
              alt="Team working on network infrastructure" 
              className="relative rounded-lg shadow-xl border-2 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;