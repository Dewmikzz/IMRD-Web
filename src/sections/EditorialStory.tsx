import React from 'react';
import { motion } from 'framer-motion';

const EditorialStory: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-6 lg:px-12 bg-white text-black min-h-[80vh] flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Top Section - Main Headline */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight leading-[1.1] uppercase">
              We don't just<br />
              <span className="text-mid-grey">create spaces.</span>
            </h2>
          </motion.div>
          
          {/* Minimal Graphic Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:flex mt-4 items-center justify-center w-16 h-16 rounded-full border border-light-grey"
          >
            <svg 
              className="w-6 h-6 text-black animate-[spin_10s_linear_infinite]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
          </motion.div>
        </div>

        {/* Bottom Section - Structured Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-t border-light-grey pt-12"
        >
          {/* Statement 01 */}
          <div className="md:col-span-5 flex flex-col">
            <span className="text-sm uppercase tracking-widest text-mid-grey mb-6 font-body font-medium">01</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium uppercase leading-[1.15] tracking-tight">
              We create places <br className="hidden lg:block"/>
              <span className="text-mid-grey">from empty land to future development.</span>
            </h3>
          </div>
          
          {/* Center Divider / Spacer */}
          <div className="hidden md:flex md:col-span-2 justify-center">
            <div className="w-[1px] h-full bg-light-grey" />
          </div>

          {/* Statement 02 */}
          <div className="md:col-span-5 flex flex-col">
            <span className="text-sm uppercase tracking-widest text-mid-grey mb-6 font-body font-medium">02</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium uppercase leading-[1.15] tracking-tight">
              We create places <br className="hidden lg:block"/>
              <span className="text-mid-grey">for humanity and community living healthy lifestyle for developments.</span>
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EditorialStory;
