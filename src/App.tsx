import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { GearAtelier } from './components/GearAtelier';
import { PrintConfigurator } from './components/PrintConfigurator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('vance_theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('vance_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('vance_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE] dark:bg-black text-[#141310] dark:text-[#E1E0CC] selection:bg-[#DEDBC8] selection:text-black transition-colors duration-500">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <GearAtelier />
        <PrintConfigurator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
