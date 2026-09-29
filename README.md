# Aurelia Vance — Botanical & Fine Art Photography Portfolio

A bespoke, editorial portfolio website for fine art, botanical, and landscape photographers.

Designed with inspiration from the reference imagery:
1. **Botanical Dark & Light Color Palettes** (Inspired by Image 3 — "Enjoy the taste of botanical"):
   - **Dark Mode (Default)**: Deep midnight forest (`#0a130e`), organic moss green (`#101c15`, `#16261d`), luminous emerald accents (`#438e63`, `#5db383`), and soft off-white typography (`#f4f7f2`).
   - **Light Mode**: Earthy linen and fresh sage (`#f3f6f1`, `#ffffff`), rich botanical spruce green headers (`#0e1b13`), and moss borders.
   - Built-in instant **Light/Dark Mode variation switcher** in the header with persistent user state (`localStorage`).
2. **Editorial Asymmetrical Gallery Grid** (Inspired by Image 2 — AlUla / Desert Gallery):
   - Curated photo gallery with category filter tabs: *All Works*, *Botanical & Flora*, *Desert & Dunes*, *Cinematic Portrait*, *Wild Landscapes*.
   - Interactive Lightbox with keyboard navigation (`Left`, `Right`, `Escape`), optical gear EXIF readout (Camera, Lens, Aperture, Shutter Speed, ISO), and direct print inquiry action.
3. **Artist Bio & Optical Equipment Stack** (Inspired by Image 1 — Bold Portfolio Layout):
   - Photographer biography, philosophy, and global exhibition credentials.
   - Comprehensive optical hardware breakdown: Hasselblad X2D 100C Medium Format, Leica M11 Rangefinder, Zeiss & Summicron prime lenses, and color-managed workflow.
4. **Strict Negative Constraint Adherence**:
   - Clean, sophisticated editorial typography throughout.
   - **No circled text areas with dots in front of text anywhere** on the site. All badges and kickers use refined letter-spacing, uppercase tracking, or subtle borders without bullet dots or pseudo-element dots.
5. **Interactive Fine Art Print Configurator & Atelier**:
   - Interactive wood frame and museum mat mockup.
   - Live pricing calculation based on dimension and framing selection (Smoked Oak, Matte Obsidian Aluminium, Archival Tube).
   - Direct quote pre-population into the inquiry form.
6. **Synthesized Optical Shutter SFX**:
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

---

## 🎨 File Structure

- `index.html` — Semantic HTML5 markup, accessible landmarks, editorial gallery grid, print configurator, and inquiry form.
- `styles.css` — Modern responsive styling, CSS custom properties for Botanical Dark & Light palettes, glassmorphism, fluid typography, and transitions.
- `app.js` — Dark/Light theme manager, synthesized Web Audio camera shutter sound, category filtering, keyboard-driven lightbox, and live print pricing calculation.
- `package.json` — Quick start scripts and metadata.
