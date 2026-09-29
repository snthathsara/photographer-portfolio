# Aurelia Vance — Fine Art, Landscape & Editorial Photography Portfolio

A bespoke, editorial portfolio website for fine art, landscape, and expedition photographers.

Designed with inspiration from the reference imagery:
1. **Light Mode (Default) & Botanical Dark Mode Palette** (Inspired by Image 3):
   - **Light Mode (Default)**: Crisp museum-grade linen and warm stone (`#f5f8f3`, `#ffffff`), deep spruce forest green text (`#0c1a12`), and subtle olive borders (`rgba(28, 56, 39, 0.12)`).
   - **Dark Mode**: Deep midnight forest (`#0a130e`), organic moss green (`#101c15`), luminous emerald accents (`#438e63`, `#5db383`), and soft off-white typography (`#f4f7f2`).
   - Built-in instant **Light/Dark Mode variation switcher** in the header with persistent user state (`localStorage`).
2. **Fluid Animations & Scroll-Triggered Reveals**:
   - Page-load hero entrance with staggered typography slide-ins (`@keyframes heroFadeUp`) and atmospheric image scale (`@keyframes heroScale`).
   - Scroll-triggered reveal animations powered by `IntersectionObserver` across all cards, series, and sections.
   - Micro-interactions on buttons, interactive card hover elevations, and smooth lightbox modal transitions.
3. **Pure Photography-Centric Storytelling & Curation**:
   - Focus on optical fidelity, medium-format detail (100MP Hasselblad X2D, Leica M11), desert expeditions (AlUla, Empty Quarter), wild landscapes, and architectural geometry.
   - Elimination of irrelevant botanical/gardening copy in favor of authentic photographic monographs, EXIF optical readouts, and printing atelier workflows.
4. **Editorial Asymmetrical Gallery Grid** (Inspired by Image 2):
   - Curated photo gallery with category filter tabs: *All Works*, *Desert & Dunes*, *Wild Landscapes*, *Cinematic Portrait*, *Architecture & Form*.
   - Proportional, bounded image dimensions preventing oversized cropping.
   - Interactive Lightbox with keyboard navigation (`Left`, `Right`, `Escape`), optical gear EXIF readout (Camera, Lens, Aperture, Shutter Speed, ISO), and direct print inquiry action.
5. **Artist Profile & Optical Hardware Stack** (Inspired by Image 1):
   - Photographer biography, solo exhibition credentials, and philosophy.
   - Comprehensive optical hardware breakdown: Hasselblad X2D 100C, Leica M11 Rangefinder, prime lens arsenal, and color-managed workflow.
6. **Strict Negative Constraint Adherence**:
   - Clean, sophisticated editorial typography throughout.
   - **No circled text areas with dots in front of text anywhere** on the site. All badges and kickers use refined letter-spacing, uppercase tracking, or subtle borders without bullet dots or pseudo-element dots.
7. **Interactive Fine Art Print Configurator & Atelier**:
   - Interactive wood frame and museum mat mockup.
   - Live pricing calculation based on dimension and framing selection (Smoked Oak, Matte Obsidian Aluminium, Archival Tube).
   - Direct quote pre-population into the inquiry form.
8. **Synthesized Optical Shutter SFX**:
   - Integrated zero-latency Web Audio API mechanical camera shutter sound when opening photos or clicking the audio toggle.

---

## 🚀 Quick Start

You can open the website immediately in any web browser without installing anything:
- Simply double-click `index.html` to open it in your browser.

Or run a local server:
```bash
# Using npx serve
npx serve . -l 3000

# Or using Python
python -m http.server 3000
```
Then visit `http://localhost:3000`.
