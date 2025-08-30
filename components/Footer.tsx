import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 text-slate-400 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="font-semibold text-white">Sultan Al Hasnani IT Network Services</p>
          <p className="text-sm mt-2">Your trusted partner for seamless connectivity and security.</p>
          <p className="text-sm text-slate-500 mt-4">
            &copy; {currentYear} Sultan Al Hasnani IT Network Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;