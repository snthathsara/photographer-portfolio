import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { AnimatedLetter } from './AnimatedLetter';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const statementText =
    "Over the last fourteen years, I have led remote optical expeditions across thirty-two countries, partnering with architectural monographs, museum curators, and fine art collectors in Zurich, Paris, and Tokyo. Together, we preserve the unmanipulated stillness and atmospheric dignity of our living earth.";

  const characters = statementText.split('');

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F7F5EE] dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Inner Card */}
        <div
          ref={containerRef}
          className="relative rounded-2xl md:rounded-[2.5rem] bg-white dark:bg-[#101010] border border-neutral-200 dark:border-white/10 p-8 sm:p-12 md:p-16 lg:p-20 text-center flex flex-col items-center shadow-xl dark:shadow-2xl overflow-hidden transition-colors duration-500"
        >
          {/* Subtle noise backdrop */}
          <div className="bg-noise absolute inset-0 opacity-[0.12] pointer-events-none" />

          {/* Top Label */}
          <span className="relative z-10 text-[10px] sm:text-xs tracking-[0.22em] uppercase text-neutral-500 dark:text-[#DEDBC8] font-medium mb-8">
            Visual Director &amp; Naturalist
          </span>

          {/* Multi-Style Pull-Up Heading */}
          <div className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto text-neutral-900 dark:text-[#E1E0CC] font-normal leading-[1.05] sm:leading-[0.96] mb-12">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'I am Aurelia Vance,', className: 'text-neutral-900 dark:text-[#E1E0CC] font-normal' },
                { text: 'a self-taught optical director.', className: 'font-serif italic text-neutral-950 dark:text-[#DEDBC8] px-2' },
                {
                  text: 'I capture medium-format stillness, vanishing horizons, and unmanipulated light.',
                  className: 'text-neutral-900 dark:text-[#E1E0CC] font-normal',
                },
              ]}
            />
          </div>

          {/* Scroll-Linked Progressive Character Opacity Reveal */}
          <div className="relative z-10 max-w-2xl mx-auto text-neutral-600 dark:text-[#DEDBC8] text-sm sm:text-base md:text-lg leading-relaxed font-light mb-12">
            {characters.map((char, index) => (
              <AnimatedLetter
                key={index}
                char={char}
                index={index}
                totalChars={characters.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          {/* Credentials Strip (Clean typography, NO dots!) */}
          <div className="relative z-10 w-full pt-10 border-t border-neutral-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-neutral-900 dark:text-[#E1E0CC]">14+</span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-neutral-500 dark:text-gray-400 font-light">Years in Field</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-neutral-900 dark:text-[#E1E0CC]">32</span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-neutral-500 dark:text-gray-400 font-light">Countries Surveyed</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-neutral-900 dark:text-[#E1E0CC]">100MP</span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-neutral-500 dark:text-gray-400 font-light">Medium Format BSI</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-neutral-900 dark:text-[#E1E0CC]">100%</span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-neutral-500 dark:text-gray-400 font-light">Optical / Zero AI</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
