import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Company', href: '#company' },
    { name: 'Business', href: '#business' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // For smooth scrolling to sections
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500 pointer-events-none',
          isScrolled 
            ? 'pt-8 pb-4 md:py-4 md:bg-white/80 md:backdrop-blur-md md:border-b md:border-gray-100/50 md:shadow-sm' 
            : 'py-6 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center pointer-events-auto">
          {/* Logo */}
          <a href="/" aria-label="IMR Development Home" className={cn(
            "items-center gap-3 z-50 group transition-all duration-300",
            (isScrolled && !isMobileMenuOpen) ? "hidden md:flex opacity-0 md:opacity-100" : "flex"
          )}>
            <img 
              src="/hero-logo.png" 
              alt="IMR Development Sdn. Bhd. Official Corporate Logo" 
              className={cn(
                "h-8 md:h-10 w-auto object-contain transition-all duration-300",
                (!isScrolled || isMobileMenuOpen) ? "opacity-90" : ""
              )}
            />
            <div className="flex flex-col leading-none">
              <span className={cn("font-display font-bold tracking-tight transition-colors duration-300 text-xl", isMobileMenuOpen ? "text-white" : (isScrolled ? "text-black" : "text-white"))}>
                IMR
              </span>
              <span className={cn("text-[0.65rem] font-medium tracking-[0.2em] transition-colors duration-300", isMobileMenuOpen ? "text-white/80" : (isScrolled ? "text-gray-500" : "text-white/70"))}>
                DEVELOPMENT SDN. BHD.
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className={cn(
            "hidden md:flex items-center backdrop-blur-sm rounded-full px-6 py-2 border transition-colors duration-500",
            isScrolled ? "bg-black/5 border-black/5" : "bg-white/10 border-white/20"
          )}>
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={cn(
                      "text-sm font-medium transition-colors relative group",
                      isScrolled ? "text-black/70 hover:text-black" : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full",
                      isScrolled ? "bg-black" : "bg-white"
                    )}></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2",
                isScrolled ? "bg-black text-white hover:bg-black/80" : "bg-white text-black hover:bg-white/90"
              )}
            >
              Get in Touch
              <span className="w-1.5 h-1.5 rounded-full bg-warm-yellow"></span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden z-50 ml-auto rounded-full transition-all duration-300 flex items-center justify-center",
              (isScrolled && !isMobileMenuOpen) ? "p-3 bg-white shadow-lg border border-gray-100 mt-1" : "p-2 -mr-2"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className={cn("w-6 h-6 transition-colors", (isScrolled && !isMobileMenuOpen) ? "text-black" : "text-white")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-deep-navy flex flex-col justify-center px-6"
          >
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-4xl font-display font-medium text-white hover:text-warm-yellow transition-colors block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-12 border-t border-white/10"
            >
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-white text-deep-navy px-8 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-colors inline-block"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
