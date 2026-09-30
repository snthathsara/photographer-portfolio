import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
    <section id="hero" className="relative h-screen min-h-[640px] md:min-h-[760px] p-3 sm:p-4 md:p-6 flex flex-col justify-end">
      {/* Inset Container with Rounded Borders */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16 border border-[#DEDBC8]/15 shadow-2xl bg-black">
        
        {/* Exact Frame 0 High-Res Poster (Identical to video first frame: zero flash, zero jump) */}
        <img
          src="/images/hero_poster.webp"
          alt="Atmospheric Alpine Ridge"
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover scale-[1.03] transition-opacity duration-1000 ${
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
          className={`absolute inset-0 w-full h-full object-cover scale-[1.03] transition-opacity duration-700 ${
            isVideoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/videos/hero_1080p.mp4" type="video/mp4" />
          <source src="/videos/hero_720p.mp4" type="video/mp4" />
        </video>

        {/* Noise Overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.5] mix-blend-overlay pointer-events-none" />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />

        {/* Content (Bottom-aligned) */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-24">
          
          {/* Left Column (8 cols): Giant Title */}
          <div className="lg:col-span-8 flex flex-col justify-end">
            <div className="mb-2">
              <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#DEDBC8]/90 font-medium">
                Atelier of Optical Light / Monograph '26
              </span>
            </div>
            
            <WordsPullUp
              text="Vance"
              showAsterisk={true}
              className="text-[#E1E0CC] font-medium leading-[0.82] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[20vw] lg:text-[18vw] xl:text-[17vw] select-none"
            />
          </div>

          {/* Right Column (4 cols): Description & CTA Button */}
          <div className="lg:col-span-4 flex flex-col justify-end gap-6 pb-2 sm:pb-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#DEDBC8]/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-md font-light"
            >
              Aurelia Vance is an international landscape director and medium-format photographer bound not by trend or artificial synthesis, but by the relentless discipline to capture raw light and silent earth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#gallery"
                className="group inline-flex items-center gap-2 hover:gap-4 pl-6 pr-2 py-2 rounded-full bg-[#DEDBC8] text-black font-medium text-xs sm:text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-[#DEDBC8]/20"
              >
                <span>Explore monographs</span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center text-[#DEDBC8] transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </a>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
