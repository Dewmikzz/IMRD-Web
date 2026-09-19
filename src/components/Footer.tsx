import React from 'react';
import { companyData } from '../data/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black pt-24 pb-8 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 leading-tight">
              Let's build<br />what's next.
            </h2>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-black/80 transition-colors"
            >
              Get in Touch
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div>
            <h3 className="text-black/50 text-xs font-semibold tracking-widest uppercase mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#company" className="hover:text-warm-yellow transition-colors">Company</a></li>
              <li><a href="#business" className="hover:text-warm-yellow transition-colors">Business</a></li>
              <li><a href="#approach" className="hover:text-warm-yellow transition-colors">Approach</a></li>
              <li><a href="#contact" className="hover:text-warm-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-black/50 text-xs font-semibold tracking-widest uppercase mb-6">Company Information</h3>
            <div className="space-y-2 text-sm text-black/80">
              <p className="font-semibold text-black">{companyData.name}</p>
              <p>Reg: {companyData.registrationNo}</p>
              <p>{companyData.location}</p>
            </div>
          </div>
        </div>

        {/* Massive Logo at Bottom */}
        <div className="border-t border-black/10 pt-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="w-full">
            <h1 className="text-[15vw] leading-none font-display font-bold tracking-tighter opacity-10 select-none text-black">
              IMR
            </h1>
          </div>
          
          <div className="w-full md:w-auto flex flex-col md:items-end gap-4 shrink-0">
            <p className="text-xs text-black/50 md:text-right leading-relaxed">
              All rights reserved &copy; 2026 IMR Development Sdn. Bhd. <br className="hidden md:block" />
              Developed by <a href="https://pshycolab.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-warm-yellow transition-colors font-medium">PshycoLab&trade;</a>
            </p>
            <div className="flex gap-4 text-xs text-black/50">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
