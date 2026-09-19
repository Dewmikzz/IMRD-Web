import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { companyData } from '../data/content';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', company: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-40 bg-black text-white overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
          alt="Kuala Lumpur City Skyline - IMR Development Contact Background" 
          className="w-full h-full object-cover opacity-20 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-12">
                LET'S<br />BUILD<br />WHAT'S<br />NEXT.
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mt-16 md:mt-24"
            >
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-6">Headquarters</h3>
              <address className="not-italic text-lg md:text-xl font-display font-medium leading-relaxed mb-10">
                {companyData.name}<br />
                {companyData.address.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </address>
              
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-6">Email</h3>
              <a href="mailto:i@imrdsb.com.my" className="text-lg md:text-xl font-display font-medium leading-relaxed hover:text-warm-yellow transition-colors block">
                i@imrdsb.com.my
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-display font-bold mb-8">Get in Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold tracking-wider text-white/50 uppercase">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 focus:border-warm-yellow outline-none py-2 text-white transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-semibold tracking-wider text-white/50 uppercase">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 focus:border-warm-yellow outline-none py-2 text-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold tracking-wider text-white/50 uppercase">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 focus:border-warm-yellow outline-none py-2 text-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold tracking-wider text-white/50 uppercase">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 focus:border-warm-yellow outline-none py-2 text-white transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  aria-label="Submit contact form"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  ) : isSuccess ? (
                    "Message Sent"
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
