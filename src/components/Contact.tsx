import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'editorial',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', type: 'editorial', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F7F5EE] dark:bg-black border-t border-neutral-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Card Wrapper */}
        <div className="rounded-2xl md:rounded-[2.5rem] bg-white dark:bg-[#101010] border border-neutral-200 dark:border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl dark:shadow-2xl">
          
          {/* Left Column (5 cols): Info */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-neutral-50 dark:bg-[#141414] border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-white/10 flex flex-col justify-between gap-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-[#DEDBC8] font-mono block mb-2 font-medium">
                Commence a Project
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-neutral-900 dark:text-[#E1E0CC] tracking-tight leading-tight">
                Let's preserve timeless light.
              </h2>
              <p className="text-neutral-500 dark:text-gray-400 text-xs sm:text-sm font-light leading-relaxed mt-4">
                Accepting editorial commissions, expedition assignments, and fine art print inquiries worldwide for 2026 &amp; 2027.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 dark:text-gray-500 block mb-1">
                  Direct Studio Email
                </span>
                <a
                  href="mailto:atelier@aureliavance.com"
                  className="text-sm sm:text-base font-medium text-neutral-900 dark:text-[#DEDBC8] hover:text-black dark:hover:text-white transition-colors"
                >
                  atelier@aureliavance.com
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 dark:text-gray-500 block mb-1">
                  Gallery Representation
                </span>
                <span className="text-sm sm:text-base font-light text-neutral-700 dark:text-gray-300">
                  Galerie Noir &amp; Blanc, Zurich
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 dark:text-gray-500 block mb-1">
                  Studio Bases
                </span>
                <span className="text-sm sm:text-base font-light text-neutral-700 dark:text-gray-300">
                  Zurich / Tokyo / Global Expeditions
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-200 dark:border-white/10">
              <span className="px-3 py-1.5 rounded-full bg-neutral-200/60 dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-[11px] font-mono text-neutral-700 dark:text-gray-300">
                Instagram / @aureliavance
              </span>
              <span className="px-3 py-1.5 rounded-full bg-neutral-200/60 dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-[11px] font-mono text-neutral-700 dark:text-gray-300">
                Behance / VanceOptics
              </span>
            </div>
          </div>

          {/* Right Column (7 cols): Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-white dark:bg-transparent">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-black dark:bg-[#DEDBC8] text-white dark:text-black flex items-center justify-center shadow-lg">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-medium text-neutral-900 dark:text-[#E1E0CC]">Inquiry Dispatched</h3>
                <p className="text-sm text-neutral-500 dark:text-gray-400 max-w-sm font-light">
                  Thank you. Your project brief has reached Aurelia Vance's atelier. Expect a personal response within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-[#DEDBC8]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-[#DEDBC8]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                    Assignment Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] focus:outline-none focus:border-black dark:focus:border-[#DEDBC8]"
                  >
                    <option value="editorial" className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">Editorial / Publication Commission</option>
                    <option value="commercial" className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">Commercial / Architectural Campaign</option>
                    <option value="print" className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">Fine Art Print Acquisition</option>
                    <option value="licensing" className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">Exhibition &amp; Image Licensing</option>
                    <option value="other" className="bg-white dark:bg-[#181818] text-neutral-900 dark:text-[#E1E0CC]">General Studio Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-gray-400">
                    Project Brief &amp; Timeline
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe location, scope, and aesthetic expectations..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#181818] border border-neutral-300 dark:border-white/10 text-xs sm:text-sm text-neutral-900 dark:text-[#E1E0CC] placeholder-neutral-400 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-[#DEDBC8] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 w-full py-3.5 rounded-full bg-black dark:bg-[#DEDBC8] text-white dark:text-black font-medium text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-white transition-all duration-300 shadow-lg"
                >
                  <span>Dispatch Inquiry</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
