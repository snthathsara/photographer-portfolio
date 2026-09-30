import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Eye, Disc, Cpu } from 'lucide-react';

export const GearAtelier: React.FC = () => {
  const tools = [
    {
      icon: Camera,
      title: 'Hasselblad X2D 100C',
      type: '100MP Medium Format BSI CMOS',
      desc: '16-bit color depth delivering 281 trillion colors and 15 stops of dynamic range for architectural exhibitions.',
    },
    {
      icon: Eye,
      title: 'Leica M11 Rangefinder',
      type: '60MP Full-Frame / Noctilux Glass',
      desc: 'Silent focal plane shutter and discreet manual focus for intimate desert caravans and atmospheric encounters.',
    },
    {
      icon: Disc,
      title: 'Apochromatic Prime Arsenal',
      type: 'Summicron 35mm / XCD 55mm & 90mm',
      desc: 'German precision glass elements maintaining corner-to-corner micro-contrast and zero optical distortion.',
    },
    {
      icon: Cpu,
      title: 'Color Calibration Atelier',
      type: 'Capture One Pro / EIZO ColorEdge',
      desc: 'Rigorous color-managed workflow calibrated to Fogra39 and Adobe RGB 1998 museum standards.',
    },
  ];

  return (
    <section id="gear" className="py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F7F5EE] dark:bg-black border-t border-neutral-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-neutral-200 dark:border-white/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-[#DEDBC8] font-mono block mb-2 font-medium">
              Optical Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 dark:text-[#E1E0CC] tracking-tight">
              The Optical Arsenal
            </h2>
          </div>
          <p className="text-neutral-500 dark:text-gray-400 text-xs sm:text-sm md:text-base max-w-md font-light leading-relaxed">
            Uncompromising medium-format digital backs and German prime glass configured for extreme field reliability.
          </p>
        </div>

        {/* 4 Cards Grid with Smooth Staggered Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {tools.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 hover:border-black/30 dark:hover:border-[#DEDBC8]/40 transition-colors flex gap-5 group shadow-lg dark:shadow-2xl transform-gpu cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-900 dark:text-[#DEDBC8] shrink-0 group-hover:bg-black dark:group-hover:bg-[#DEDBC8] group-hover:text-white dark:group-hover:text-black transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-[#E1E0CC]">{item.title}</h3>
                  <span className="text-xs font-mono text-neutral-600 dark:text-[#DEDBC8] tracking-wider">{item.type}</span>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-gray-400 font-light mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
