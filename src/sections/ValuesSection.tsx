import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coreValues } from '../data/content';
import { cn } from '../utils/cn';

const ValuesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-off-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-mid-grey mb-4">How We Work</h2>
          <h3 className="text-2xl md:text-3xl font-serif text-mid-grey max-w-2xl italic">
            The principles that guide our decisions, relationships and delivery.
          </h3>
        </motion.div>

        {/* Desktop Interactive Layout */}
        <div className="hidden md:flex gap-4 h-[500px]">
          {coreValues.map((value, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={value.id}
                onMouseEnter={() => setActiveIndex(index)}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className={cn(
                  "relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-black/10",
                  isActive ? "flex-[3]" : "flex-[1]"
                )}
              >
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className={cn(
                    "text-5xl font-display font-bold transition-colors duration-500",
                    isActive ? "text-white/50" : "text-white/20"
                  )}>
                    {value.id}
                  </div>
                  
                  <div className="mt-auto text-white">
                    <h4 className={cn(
                      "font-display font-bold mb-4 whitespace-nowrap transition-all duration-500 origin-left",
                      isActive ? "text-2xl opacity-100" : "text-xl opacity-60"
                    )}>
                      {value.title}
                    </h4>
                    
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white/80 text-base"
                        >
                          {value.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Image background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={(value as any).image} 
                    alt={`${value.title} - IMR Development Core Value`} 
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive ? "filter brightness-[0.5] grayscale-[20%]" : "filter brightness-[0.2] grayscale-[80%]"
                    )} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {coreValues.map((value, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={value.id}
                onClick={() => setActiveIndex(isActive ? -1 : index)}
                className="relative rounded-2xl border border-black/10 p-6 cursor-pointer overflow-hidden transition-all duration-500"
              >
                {/* Mobile Image Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={(value as any).image} 
                    alt={`${value.title} - IMR Development Core Value`} 
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive ? "filter brightness-[0.5] grayscale-[20%]" : "filter brightness-[0.3] grayscale-[80%]"
                    )} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                </div>

                <div className="relative z-10 text-white">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "font-display font-bold transition-colors duration-500",
                        isActive ? "text-white/50" : "text-white/30"
                      )}>{value.id}</span>
                      <h4 className={cn(
                        "font-display font-bold transition-all duration-500",
                        isActive ? "text-lg opacity-100" : "text-base opacity-70"
                      )}>{value.title}</h4>
                    </div>
                    <div className={cn("transform transition-transform duration-300", isActive ? "rotate-45" : "")}>
                      +
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/80 pt-4 text-sm">
                          {value.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
