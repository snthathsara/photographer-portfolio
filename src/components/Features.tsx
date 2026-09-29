import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

export const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '0px' });

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: custom * 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section id="features" className="relative min-h-screen py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F7F5EE] dark:bg-black transition-colors duration-500">
      {/* Subtle noise overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-14">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center gap-2">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Studio-grade optical workflows for visionary collectors.',
                className: 'text-neutral-900 dark:text-[#DEDBC8] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal',
              },
            ]}
          />
          <span className="text-neutral-500 dark:text-gray-400 text-lg sm:text-xl md:text-2xl font-light">
            Built for pure vision. Powered by optical art.
          </span>
        </div>

        {/* 4-Column Card Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-3 lg:h-[490px]"
        >
          {/* Card 1: Video Background Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[420px] lg:h-full border border-neutral-300 dark:border-white/10 group shadow-xl dark:shadow-2xl"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-[1.02] transition-transform duration-700 group-hover:scale-105"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="text-xs uppercase tracking-widest text-[#DEDBC8]/90 font-mono block mb-1">
                Visual Canvas
              </span>
              <h3 className="text-xl sm:text-2xl text-white font-normal">
                Your creative horizon.
              </h3>
            </div>
          </motion.div>

          {/* Card 2: Project Monograph (01) */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="rounded-2xl md:rounded-3xl bg-white dark:bg-[#212121] border border-neutral-200 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between h-[420px] lg:h-full group hover:border-black/30 dark:hover:border-[#DEDBC8]/40 transition-colors shadow-xl dark:shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-xs font-mono text-neutral-900 dark:text-[#DEDBC8]">
                  01
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-gray-400 font-mono">
                  Expedition
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-[#E1E0CC]">Project Storyboard.</h3>
                <p className="text-xs text-neutral-500 dark:text-gray-400 mt-1">Multi-season terrain documentation.</p>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-2.5 mt-2">
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-black dark:text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>Pre-dawn celestial tracking</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-black dark:text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>Topographic weather forecasting</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-black dark:text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>GPS geo-referenced monographs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-black dark:text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>Complete raw spectrum archives</span>
                </div>
              </div>
            </div>

            <a
              href="#gallery"
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-900 dark:text-[#DEDBC8] hover:text-black dark:hover:text-white transition-colors pt-4 border-t border-neutral-100 dark:border-white/5"
            >
              <span>Explore projects</span>
              <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Card 3: Optical Precision (02) */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="rounded-2xl md:rounded-3xl bg-white dark:bg-[#212121] border border-neutral-200 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between h-[420px] lg:h-full group hover:border-black/30 dark:hover:border-[#DEDBC8]/40 transition-colors shadow-xl dark:shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-xs font-mono text-neutral-900 dark:text-[#DEDBC8]">
                  02
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-gray-400 font-mono">
                  Optical
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-[#E1E0CC]">Optical Mastery.</h3>
                <p className="text-xs text-neutral-500 dark:text-gray-400 mt-1">Medium-format sensor science.</p>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-2.5 mt-2">
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-black dark:text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>16-bit Hasselblad color calibration</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-black dark:text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>Leica apochromatic optics</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-black dark:text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>15 stops of optical dynamic range</span>
                </div>
              </div>
            </div>

            <a
              href="#gear"
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-900 dark:text-[#DEDBC8] hover:text-black dark:hover:text-white transition-colors pt-4 border-t border-neutral-100 dark:border-white/5"
            >
              <span>Inspect gear</span>
              <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Card 4: Immersion Capsule (03) */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="rounded-2xl md:rounded-3xl bg-white dark:bg-[#212121] border border-neutral-200 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between h-[420px] lg:h-full group hover:border-black/30 dark:hover:border-[#DEDBC8]/40 transition-colors shadow-xl dark:shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-xs font-mono text-neutral-900 dark:text-[#DEDBC8]">
                  03
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-gray-400 font-mono">
                  Atelier
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-[#E1E0CC]">Immersion Capsule.</h3>
                <p className="text-xs text-neutral-500 dark:text-gray-400 mt-1">Archival printmaking craft.</p>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-2.5 mt-2">
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-black dark:text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>310gsm 100% cotton rag paper</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-black dark:text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>Pigment ink permanence (200+ years)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-black dark:text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>Hand-signed certificates &amp; seals</span>
                </div>
              </div>
            </div>

            <a
              href="#prints"
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-900 dark:text-[#DEDBC8] hover:text-black dark:hover:text-white transition-colors pt-4 border-t border-neutral-100 dark:border-white/5"
            >
              <span>Configure prints</span>
              <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
