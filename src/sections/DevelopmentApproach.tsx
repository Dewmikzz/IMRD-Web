import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { developmentApproach } from '../data/content';
import { cn } from '../utils/cn';

const DevelopmentApproach: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="approach" className="py-24 md:py-40 bg-off-white text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Left Column: Sticky Title */}
          <div className="lg:w-1/3">
            <div className="sticky top-40">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-mid-grey mb-6">Development Approach</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-[1.1] mb-12">
                  See our value clearly
                </h3>
                
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-[#e0e0e0] z-10"
                    initial={{ height: "100%" }}
                    whileInView={{ height: "0%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  />
                  <motion.img
                    src="/pahalwan-championship.jpeg"
                    alt="Architectural Blueprint and Planning - IMR Development Approach"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3 border-b border-black/10">
            {developmentApproach.map((approach, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div key={approach.id} className="border-t border-black/10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  >
                    <div 
                      onClick={() => toggle(index)} 
                      className="flex items-center justify-between py-6 md:py-8 cursor-pointer group"
                    >
                      <div className="flex items-baseline gap-6 md:gap-10">
                        <span className="text-base md:text-lg font-display font-medium text-black/30 shrink-0">
                          {approach.id}
                        </span>
                        <span className={cn(
                          "text-xl md:text-2xl lg:text-3xl font-display font-semibold transition-colors duration-500",
                          isActive ? "text-black" : "text-black/60 group-hover:text-black/80"
                        )}>
                          {approach.title}
                        </span>
                      </div>
                      
                      {/* Plus / Minus Icon */}
                      <div className="relative w-5 h-5 shrink-0 flex items-center justify-center ml-4">
                        <div className="absolute w-full h-[1.5px] bg-black/40 group-hover:bg-black transition-colors duration-500" />
                        <motion.div 
                          animate={{ rotate: isActive ? 90 : 0 }} 
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute w-[1.5px] h-full bg-black/40 group-hover:bg-black transition-colors duration-500" 
                        />
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-12 md:pl-16">
                            <p className="text-base md:text-lg text-mid-grey font-serif italic max-w-xl leading-relaxed">
                              {approach.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DevelopmentApproach;
