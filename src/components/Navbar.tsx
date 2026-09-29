import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navItems = [
    { label: 'Our story', href: '#about' },
    { label: 'Monographs', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Atelier', href: '#gear' },
    { label: 'Prints', href: '#prints' },
    { label: 'Inquiries', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ['hero', 'about', 'features', 'gallery', 'gear', 'prints', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        {/* Animated Hanging Pill Navbar */}
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 px-4 py-2.5 sm:px-6 md:px-8 rounded-b-2xl md:rounded-b-3xl bg-black/90 dark:bg-black/90 dark:border-white/10 dark:text-[#E1E0CC] border-b border-x border-[#DEDBC8]/15 backdrop-blur-xl shadow-2xl transition-colors duration-500"
        >
          {/* Brand Monogram */}
          <a
            href="#hero"
            className="font-serif italic text-lg sm:text-xl text-[#DEDBC8] hover:text-white transition-colors tracking-wider mr-1 select-none"
          >
            Vance.
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const isHovered = hoveredNav === item.label;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className="relative px-3 py-1.5 text-[11px] sm:text-xs md:text-sm font-normal transition-colors text-[rgba(225,224,204,0.75)] hover:text-[#E1E0CC]"
                  style={{
                    color: isActive ? '#E1E0CC' : undefined,
                  }}
                >
                  {isHovered && (
                    <motion.div
                      layoutId="navHover"
                      className="absolute inset-0 bg-[#DEDBC8]/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="navActive"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#DEDBC8] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Theme Switcher Button (NO POPUPS) */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 dark:bg-white/10 hover:bg-[#DEDBC8]/20 text-[#DEDBC8] transition-colors"
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 text-[#DEDBC8]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-[#DEDBC8]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-[#E1E0CC] hover:text-[#DEDBC8]"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-16 z-40 p-6 rounded-2xl bg-black/95 border border-[#DEDBC8]/20 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 text-center md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base text-[rgba(225,224,204,0.85)] hover:text-[#E1E0CC] font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#DEDBC8]/10 flex justify-center">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block px-6 py-2.5 rounded-full bg-[#DEDBC8] text-black text-sm font-medium"
              >
                Book Session
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
