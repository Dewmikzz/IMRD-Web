import React from 'react';
import { motion } from 'framer-motion';
import { companyData } from '../data/content';

const CompanyInfoSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-white text-black border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-mid-grey mb-4">Company at a Glance</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tight">
              {companyData.name}
            </h3>
            <p className="text-lg md:text-2xl font-serif text-mid-grey italic mb-12">
              {companyData.structure}
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-black/10 pb-4"
            >
              <span className="w-40 text-xs font-semibold tracking-wider text-mid-grey uppercase shrink-0">Registration</span>
              <span className="text-xl md:text-2xl font-display font-medium">{companyData.registrationNo}</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-black/10 pb-4"
            >
              <span className="w-40 text-xs font-semibold tracking-wider text-mid-grey uppercase shrink-0">Incorporated</span>
              <span className="text-xl md:text-2xl font-display font-medium">{companyData.incorporated}</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-black/10 pb-4"
            >
              <span className="w-40 text-xs font-semibold tracking-wider text-mid-grey uppercase shrink-0">Location</span>
              <span className="text-xl md:text-2xl font-display font-medium">{companyData.location}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
