import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

export const Hero: React.FC = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoReady(true);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[100dvh] min-h-[560px] sm:min-h-[620px] md:min-h-[760px] p-2 sm:p-4 md:p-6 flex flex-col justify-end overflow-hidden"
    >
      {/* Inset Container with Rounded Borders */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col justify-end p-4 sm:p-6 md:p-10 lg:p-14 border border-[#DEDBC8]/15 shadow-2xl bg-black">
        
        {/* Subtle Ken Burns Ambient Wrapper for Ultra-Smooth Motion */}
        <motion.div
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full transform-gpu"
        >
          {/* Exact Frame 0 High-Res Poster */}
          <img
            src="/images/hero_poster.webp"
            alt="Atmospheric Alpine Ridge"
            fetchPriority="high"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isVideoReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          />

          {/* High-Bitrate Cinematic 1080p Video with Faststart */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onPlay={() => setIsVideoReady(true)}
            onPlaying={() => setIsVideoReady(true)}
            onLoadedData={() => setIsVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isVideoReady ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="/videos/hero_1080p.mp4" type="video/mp4" />
            <source src="/videos/hero_720p.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Noise Overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.45] mix-blend-overlay pointer-events-none" />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />

        {/* Content (Bottom-aligned) */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-end pt-16 sm:pt-20 md:pt-24 pb-1 sm:pb-2">
          
          {/* Left Column (8 cols): Giant Title */}
          <div className="lg:col-span-8 flex flex-col justify-end">
            {/* Animated Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-1.5 sm:mb-2.5"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 24 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="h-[1px] bg-[#DEDBC8]/60 inline-block"
              />
              <span className="text-[9px] sm:text-xs tracking-[0.2em] uppercase text-[#DEDBC8]/90 font-medium">
                Atelier of Optical Light / Monograph '26
              </span>
            </motion.div>
            
            {/* Responsive Scaled Title */}
            <WordsPullUp
              text="Vance"
              showAsterisk={true}
              className="text-[#E1E0CC] font-medium leading-[0.85] tracking-[-0.07em] text-[16vw] sm:text-[18vw] md:text-[17vw] lg:text-[16vw] xl:text-[15vw] select-none"
            />
          </div>

          {/* Right Column (4 cols): Description & CTA Button */}
          <div className="lg:col-span-4 flex flex-col justify-end gap-3 sm:gap-4 md:gap-6 pb-1 sm:pb-2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#DEDBC8]/90 text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed max-w-md font-light line-clamp-3 sm:line-clamp-none"
            >
              Aurelia Vance is an international landscape director and medium-format photographer bound not by trend or artificial synthesis, but by the relentless discipline to capture raw light and silent earth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 sm:gap-3 pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full bg-[#DEDBC8] text-black font-medium text-xs sm:text-sm md:text-base transition-shadow duration-300 shadow-lg hover:shadow-[#DEDBC8]/25"
              >
                <span>Explore monographs</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-black flex items-center justify-center text-[#DEDBC8] transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </motion.a>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
