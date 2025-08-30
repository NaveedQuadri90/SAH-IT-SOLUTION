import React from 'react';
import { RECENT_WORK_DATA } from '../constants';

const RecentWork: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-28 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Recent Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            A glimpse into our successfully completed network and infrastructure projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECENT_WORK_DATA.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={item.imageUrl} 
                alt={item.caption} 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;