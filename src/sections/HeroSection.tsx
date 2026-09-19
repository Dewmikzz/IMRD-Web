import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Background Video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          muted
          playsInline
          onEnded={() => setIsVideoEnded(true)}
          className="w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Reveal Image at end of video with split animation */}
      <motion.div
        initial={{ clipPath: "inset(0 50% 0 50%)" }}
        animate={isVideoEnded ? { clipPath: "inset(0 0% 0 0%)" } : { clipPath: "inset(0 50% 0 50%)" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img src="/wisma-pahlawan.jpg" alt="Wisma Pahlawan Building Exterior - IMR Development Headquarters" className="w-full h-full object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 z-10 pointer-events-none"></div>

      <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-12 w-full max-w-7xl mx-auto pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[6rem] lg:text-[8rem] leading-[0.9] font-display font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right,#f87171,#fb923c,#facc15,#4ade80,#60a5fa,#818cf8,#c084fc)] tracking-tighter"
          >
            My Home<br />My Paradise.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-display italic text-white/90 mt-2 md:mt-4"
          >
            "Rumahku syurgaku"
          </motion.h2>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#approach"
              className="bg-white text-black px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white/90 hover:scale-105 transition-all shadow-lg"
            >
              Explore IMR
            </a>
            <a
              href="#company"
              className="border border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
            >
              Our Approach
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
