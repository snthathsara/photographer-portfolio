import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ArtworkOption {
  id: string;
  name: string;
  location: string;
  img: string;
}

const ARTWORKS: ArtworkOption[] = [
  {
    id: 'monolith',
    name: 'Monolith at Sunbreak',
    location: 'AlUla Valley, Arabia',
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'footprints',
    name: 'Footprints in Wind',
    location: "Rub' al Khali, Empty Quarter",
    img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'caravan',
    name: 'Golden Hour Crossing',
    location: 'Wadi Rum, Jordan',
    img: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'mist',
    name: 'Morning Veil on Cedar',
    location: 'Pacific Northwest',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop',
  },
];

export const PrintConfigurator: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkOption>(ARTWORKS[0]);
  const [selectedSize, setSelectedSize] = useState<{ id: string; label: string; price: number }>({
    id: 'medium',
    label: 'Medium / 40 × 50 cm',
    price: 380,
  });
  const [selectedFrame, setSelectedFrame] = useState<{ id: string; label: string; price: number }>({
    id: 'oak',
    label: 'Smoked Natural Oak',
    price: 120,
  });

  const sizes = [
    { id: 'medium', label: 'Medium / 40 × 50 cm', price: 380 },
    { id: 'large', label: 'Large / 60 × 80 cm', price: 590 },
    { id: 'collector', label: 'Exhibition / 90 × 120 cm', price: 950 },
  ];

  const frames = [
    { id: 'oak', label: 'Smoked Natural Oak', price: 120 },
    { id: 'black', label: 'Matte Obsidian Aluminium', price: 120 },
    { id: 'unframed', label: 'Print Only (Archival Tube)', price: 0 },
  ];

  const totalPrice = selectedSize.price + selectedFrame.price;

  return (
    <section id="prints" className="py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F7F5EE] dark:bg-black border-t border-neutral-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-[#DEDBC8] font-mono font-medium">
            Limited Editions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 dark:text-[#E1E0CC] tracking-tight">
            Museum-Grade Fine Art Prints
          </h2>
          <p className="text-neutral-500 dark:text-gray-400 text-xs sm:text-sm md:text-base font-light leading-relaxed">
            Printed on 310gsm 100% cotton rag paper with archival pigment inks rated for 200+ years. Each photograph is individually numbered, hand-signed, and accompanied by a certificate of authenticity.
          </p>
        </div>

        {/* 2-Column Configurator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Mockup Frame with smooth layout animations */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`w-full max-w-lg p-5 sm:p-7 rounded-2xl shadow-xl dark:shadow-2xl transition-colors duration-500 ${
                selectedFrame.id === 'oak'
                  ? 'bg-[#e2d5c5] dark:bg-[#2a221b] border-4 border-[#c5b19c] dark:border-[#3d3126]'
                  : selectedFrame.id === 'black'
                  ? 'bg-neutral-800 dark:bg-[#181818] border-4 border-neutral-900 dark:border-[#2b2b2b]'
                  : 'bg-transparent border border-neutral-300 dark:border-white/20'
              }`}
            >
              <div className="bg-[#FAF8F5] p-6 sm:p-8 shadow-inner rounded-sm overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedArtwork.id}
                    src={selectedArtwork.img}
                    alt={selectedArtwork.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full aspect-[4/3] object-cover rounded-sm shadow-md"
                  />
                </AnimatePresence>
              </div>
            </motion.div>

            <div className="mt-6 text-center">
              <span className="block text-sm sm:text-base font-medium text-neutral-900 dark:text-[#E1E0CC]">
                "{selectedArtwork.name}" — Edition of 25
              </span>
              <span className="text-xs text-neutral-500 dark:text-gray-400 font-mono">
                {selectedSize.label} / {selectedFrame.label}
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Configurator Form */}
          <div className="lg:col-span-5 rounded-2xl md:rounded-3xl bg-white dark:bg-[#141414] border border-neutral-200 dark:border-white/10 p-6 sm:p-8 flex flex-col gap-6 shadow-xl dark:shadow-2xl">
            <div>
              <h3 className="text-xl font-medium text-neutral-900 dark:text-[#E1E0CC]">Configure Your Edition</h3>
              <p className="text-xs text-neutral-500 dark:text-gray-400 mt-1">Select photographic work, frame finish, and museum dimensions.</p>
            </div>

            {/* Artwork Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                Select Artwork
              </label>
              <select
                value={selectedArtwork.id}
                onChange={(e) => {
                  const match = ARTWORKS.find((a) => a.id === e.target.value);
                  if (match) setSelectedArtwork(match);
                }}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#1d1d1d] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] focus:outline-none focus:border-black dark:focus:border-[#DEDBC8] transition-colors"
              >
                {ARTWORKS.map((a) => (
                  <option key={a.id} value={a.id} className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">
                    {a.name} ({a.location})
                  </option>
                ))}
              </select>
            </div>

            {/* Size Options */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                Print Dimension
              </label>
              <div className="flex flex-col gap-2">
                {sizes.map((s) => (
                  <motion.button
                    key={s.id}
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedSize(s)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-colors ${
                      selectedSize.id === s.id
                        ? 'bg-neutral-100 dark:bg-[#DEDBC8]/15 border-black dark:border-[#DEDBC8] text-neutral-950 dark:text-[#E1E0CC]'
                        : 'bg-neutral-50 dark:bg-[#1a1a1a] border-neutral-200 dark:border-white/5 text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/15'
                    }`}
                  >
                    <span>{s.label}</span>
                    <span className="font-mono text-xs">€{s.price}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Frame Options */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                Framing &amp; Mounting
              </label>
              <div className="flex flex-col gap-2">
                {frames.map((f) => (
                  <motion.button
                    key={f.id}
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedFrame(f)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-colors ${
                      selectedFrame.id === f.id
                        ? 'bg-neutral-100 dark:bg-[#DEDBC8]/15 border-black dark:border-[#DEDBC8] text-neutral-950 dark:text-[#E1E0CC]'
                        : 'bg-neutral-50 dark:bg-[#1a1a1a] border-neutral-200 dark:border-white/5 text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/15'
                    }`}
                  >
                    <span>{f.label}</span>
                    <span className="font-mono text-xs">{f.price > 0 ? `+€${f.price}` : 'Included'}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 dark:text-gray-400 block">
                  Estimated Investment
                </span>
                <span className="text-2xl font-bold text-neutral-900 dark:text-[#E1E0CC]">€{totalPrice}</span>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-full bg-black dark:bg-[#DEDBC8] text-white dark:text-black font-medium text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-white transition-all shadow-md"
              >
                Inquire Acquisition
              </motion.a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
