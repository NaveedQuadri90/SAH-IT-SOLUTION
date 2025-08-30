import React from 'react';

const MissionValues: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20">
            <h3 className="text-pink-500 text-4xl font-bold mb-4">MISSION</h3>
            <p className="text-slate-300 text-lg mb-4">
              Connect and empower individuals and businesses through innovative IT and networking solutions.
            </p>
            <p className="text-slate-300 text-lg">
              We are committed to enhancing security, communication, and automation while ensuring the highest standards of quality and reliability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20">
            <h3 className="text-pink-500 text-4xl font-bold mb-4">VALUES</h3>
            <p className="text-slate-300 text-lg mb-4">
              Our customers are at the core of everything we do, and we prioritize their satisfaction and success.
            </p>
            <p className="text-slate-300 text-lg">
              We take pride in delivering excellence, and we never compromise on the quality of our products and services.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionValues;