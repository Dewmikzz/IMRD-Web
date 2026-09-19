import React from 'react';
import { motion } from 'framer-motion';
import { companyData } from '../data/content';

const CompanySection: React.FC = () => {
  return (
    <section id="company" className="py-24 md:py-32 px-6 lg:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-mid-grey mb-8">Who We Are</h2>
            <h3 className="text-4xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight max-w-4xl uppercase">
              Development<br />built on<br />
              <span className="text-mid-grey">discipline,</span><br />
              <span className="text-mid-grey">purpose &</span><br />
              accountability.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl"
          >
            <img
              src="/wisma-pahlawan.jpg"
              alt="Wisma Pahlawan Building Exterior - IMR Development Headquarters"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="border-t border-black/10 pt-6"
          >
            <p className="text-xs font-semibold text-mid-grey uppercase tracking-wider mb-2">Incorporated</p>
            <p className="text-2xl font-display font-medium">2013</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="border-t border-black/10 pt-6"
          >
            <p className="text-xs font-semibold text-mid-grey uppercase tracking-wider mb-2">Location</p>
            <p className="text-2xl font-display font-medium">Kuala Lumpur</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="border-t border-black/10 pt-6 lg:col-span-2"
          >
            <p className="text-xs font-semibold text-mid-grey uppercase tracking-wider mb-2">Wholly-Owned Subsidiary</p>
            <p className="text-2xl font-display font-medium"> AF Multi Group Berhad</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-16 max-w-3xl"
        >
          <p className="text-lg md:text-xl text-black/80 leading-relaxed font-body">
            {companyData.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanySection;
