import React from 'react';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 lg:px-12 bg-off-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="col-span-1 md:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-mid-grey"
            >
              Vision
            </motion.p>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '80px' }}
              viewport={{ once: true }}
              className="w-[1px] bg-black/20 mt-6 hidden md:block"
            />
          </div>

          <div className="col-span-1 md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tight"
            >
              Trusted Bumiputera property developer.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 text-mid-grey max-w-2xl text-lg md:text-xl font-serif italic"
            >
              An icon on its own
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
