import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 md:px-8 bg-black border-t border-white/10 text-[#E1E0CC]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <span className="font-serif italic text-2xl text-[#DEDBC8] block mb-2">Vance.</span>
          <p className="text-xs text-gray-500 max-w-sm font-light">
            Medium-format landscape, desert expeditions, and fine art monographs. Unmanipulated optical fidelity.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-light">
          <a href="#hero" className="hover:text-[#DEDBC8] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#DEDBC8] transition-colors">Our Story</a>
          <a href="#features" className="hover:text-[#DEDBC8] transition-colors">Monographs</a>
          <a href="#gallery" className="hover:text-[#DEDBC8] transition-colors">Gallery</a>
          <a href="#prints" className="hover:text-[#DEDBC8] transition-colors">Fine Art Prints</a>
          <a href="#contact" className="hover:text-[#DEDBC8] transition-colors">Inquiries</a>
        </div>

        <div className="text-xs text-gray-500 font-mono">
          &copy; 2026 Aurelia Vance Studio
        </div>
      </div>
    </footer>
  );
};
