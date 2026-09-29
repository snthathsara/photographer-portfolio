import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  category: 'desert' | 'landscape' | 'cinematic' | 'architecture';
  categoryLabel: string;
  location: string;
  camera: string;
  exif: string;
  thumb: string;
  full: string;
  colSpan: string;
  heightClass: string;
}

const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'monolith',
    title: 'Monolith at Sunbreak',
    category: 'desert',
    categoryLabel: 'Desert & Dunes',
    location: 'AlUla Valley, Saudi Arabia',
    camera: 'Leica M11 / Summicron-M 35mm f/2 ASPH',
    exif: 'f/8.0 / 1/800s / ISO 100',
    thumb: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2200&auto=format&fit=crop',
    colSpan: 'lg:col-span-7',
    heightClass: 'h-[360px] md:h-[400px]',
  },
  {
    id: 'footprints',
    title: 'Footprints in Wind',
    category: 'desert',
    categoryLabel: 'Desert & Dunes',
    location: "Rub' al Khali, Empty Quarter",
    camera: 'Sony α7R V / FE 24-70mm f/2.8 GM II',
    exif: 'f/5.6 / 1/1000s / ISO 100',
    thumb: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-5',
    heightClass: 'h-[360px] md:h-[400px]',
  },
  {
    id: 'caravan',
    title: 'Golden Hour Crossing',
    category: 'desert',
    categoryLabel: 'Desert & Dunes',
    location: 'Wadi Rum Protected Area, Jordan',
    camera: 'Hasselblad X2D 100C / XCD 90mm f/2.5',
    exif: 'f/4.5 / 1/640s / ISO 100',
    thumb: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
  {
    id: 'linen-portrait',
    title: 'Echoes in Crimson Linen',
    category: 'cinematic',
    categoryLabel: 'Cinematic Portrait',
    location: 'Sahara Borderlands',
    camera: 'Leica M11 / Noctilux-M 50mm f/0.95',
    exif: 'f/1.2 / 1/2000s / ISO 50',
    thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
  {
    id: 'slot-canyon',
    title: 'Chamber of Amber Light',
    category: 'landscape',
    categoryLabel: 'Wild Landscapes',
    location: 'Page, Arizona Sandstone',
    camera: 'Sony α7R V / FE 16-35mm f/2.8 GM',
    exif: 'f/9.0 / 1/60s / ISO 200',
    thumb: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
  {
    id: 'emerald-dawn',
    title: 'Emerald Ridge at Dawn',
    category: 'landscape',
    categoryLabel: 'Wild Landscapes',
    location: 'Yakushima Ancient Highlands, Japan',
    camera: 'Hasselblad X2D 100C / XCD 55mm f/2.5',
    exif: 'f/2.8 / 1/250s / ISO 64',
    thumb: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2200&auto=format&fit=crop',
    colSpan: 'lg:col-span-6',
    heightClass: 'h-[240px] md:h-[270px]',
  },
  {
    id: 'morning-veil',
    title: 'Morning Veil on Cedar',
    category: 'landscape',
    categoryLabel: 'Wild Landscapes',
    location: 'Pacific Northwest Basin',
    camera: 'Sony α7R V / FE 70-200mm f/2.8 GM II',
    exif: 'f/5.6 / 1/320s / ISO 250',
    thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-6',
    heightClass: 'h-[240px] md:h-[270px]',
  },
  {
    id: 'brutalism',
    title: 'Shadow & Geometry',
    category: 'architecture',
    categoryLabel: 'Architecture & Form',
    location: 'Glasshouse Pavilion, Prague',
    camera: 'Hasselblad X2D 100C / XCD 120mm f/3.5 Macro',
    exif: 'f/4.0 / 1/160s / ISO 100',
    thumb: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
  {
    id: 'zen-temple',
    title: 'Zen Courtyard in Rain',
    category: 'architecture',
    categoryLabel: 'Architecture & Form',
    location: 'Ryoan-ji Temple, Kyoto',
    camera: 'Leica M11 / Summicron-M 35mm f/2 ASPH',
    exif: 'f/2.8 / 1/125s / ISO 200',
    thumb: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
  {
    id: 'glacial',
    title: 'Glacial Stillness',
    category: 'landscape',
    categoryLabel: 'Wild Landscapes',
    location: 'Alpine Hoh Basin',
    camera: 'Leica M11 / APO-Summicron-M 50mm f/2',
    exif: 'f/2.8 / 1/200s / ISO 160',
    thumb: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000&auto=format&fit=crop',
    full: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] md:h-[350px]',
  },
];

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'desert', label: 'Desert & Dunes' },
    { id: 'landscape', label: 'Wild Landscapes' },
    { id: 'cinematic', label: 'Cinematic Portrait' },
    { id: 'architecture', label: 'Architecture & Form' },
  ];

  const filteredPhotos =
    selectedFilter === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedFilter);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filteredPhotos.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex < filteredPhotos.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header Row (Inspired by Image 2) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#DEDBC8] font-mono block mb-2 font-medium">
              Curated Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#E1E0CC] tracking-tight">
              Photo Gallery
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-md font-light leading-relaxed">
            Captured moments from our desert expeditions, mountain trails, and architectural surveys worldwide.
          </p>
        </div>

        {/* Clean Filter Pills (NO DOTS!) */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#DEDBC8] text-black shadow-lg shadow-[#DEDBC8]/10'
                    : 'bg-[#181818] text-gray-300 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 12-Column Editorial Grid (Image 2 style) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => {
              const isFiltered = selectedFilter !== 'all';
              const colClass = isFiltered ? 'lg:col-span-4' : photo.colSpan;
              const heightClass = isFiltered ? 'h-[340px]' : photo.heightClass;

              return (
                <motion.figure
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-[#121212] ${colClass} ${heightClass} shadow-xl`}
                >
                  <img
                    src={photo.thumb}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Editorial Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#E1E0CC]">
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-wider text-[#DEDBC8] font-mono">
                          {photo.categoryLabel}
                        </span>
                        <h4 className="text-lg font-medium text-white">{photo.title}</h4>
                        <span className="text-xs text-gray-300">{photo.location}</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-transform group-hover:scale-110">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[90vh] rounded-2xl md:rounded-3xl bg-[#141414] border border-white/15 overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-[#E1E0CC]">
                    {activePhoto.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono">{activePhoto.location}</span>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Viewport */}
              <div className="relative flex-1 flex items-center justify-center p-4 overflow-hidden">
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-10 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 text-white flex items-center justify-center transition-transform hover:scale-105"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <img
                  src={activePhoto.full}
                  alt={activePhoto.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />

                <button
                  onClick={handleNext}
                  className="absolute right-4 z-10 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 text-white flex items-center justify-center transition-transform hover:scale-105"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom EXIF Strip */}
              <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">
                      Optical System
                    </span>
                    <span className="text-xs font-medium text-[#E1E0CC]">
                      {activePhoto.camera}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">
                      Exposure
                    </span>
                    <span className="text-xs font-medium text-[#E1E0CC]">{activePhoto.exif}</span>
                  </div>
                </div>

                <a
                  href="#prints"
                  onClick={() => setLightboxIndex(null)}
                  className="px-4 py-2 rounded-full bg-[#DEDBC8] text-black text-xs font-medium hover:bg-white transition-colors"
                >
                  Acquire Fine Art Print
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
