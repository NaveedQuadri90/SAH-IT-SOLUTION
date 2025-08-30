import React from 'react';
import { PARTNERS_DATA } from '../constants';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Partners
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            We collaborate with industry-leading brands to deliver the best solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {PARTNERS_DATA.map((partner) => (
            <div key={partner.name} className="text-center">
              <p className="text-2xl font-bold text-slate-400 tracking-wider transition-colors duration-300 hover:text-white">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;