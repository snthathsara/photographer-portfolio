/**
 * AURELIA VANCE — PHOTOGRAPHY ATELIER
 * Interactive Controller: Light/Dark Mode, Gallery Filtering, Lightbox, Audio FX & Print Configurator
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initAudioShutterFX();
  initGalleryAndLightbox();
  initPrintConfigurator();
  initInquiryForm();
  initMobileNavigation();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. THEME SWITCHER (Botanical Dark & Botanical Light)
   -------------------------------------------------------------------------- */
function initThemeManager() {
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  const footerThemeStatus = document.getElementById('footerThemeStatus');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('av_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Botanical Dark' : 'Botanical Light'} theme`);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('av_theme', theme);

    const isDark = theme === 'dark';
    if (themeLabel) {
      themeLabel.textContent = isDark ? 'Dark Theme' : 'Light Theme';
    }
    if (footerThemeStatus) {
      footerThemeStatus.textContent = isDark ? 'Botanical Dark Mode' : 'Botanical Light Mode';
    }
  }
}

/* --------------------------------------------------------------------------
   2. SYNTHESIZED CAMERA SHUTTER SOUND (Zero External Latency)
   -------------------------------------------------------------------------- */
let audioCtx = null;
let soundEnabled = true;

function initAudioShutterFX() {
  const soundBtn = document.getElementById('shutterSoundBtn');
  const lbSoundBtn = document.getElementById('lbSoundBtn');

  function toggleSound() {
    soundEnabled = !soundEnabled;
    if (soundBtn) soundBtn.classList.toggle('active', soundEnabled);
    showToast(soundEnabled ? 'Camera audio enabled' : 'Camera audio muted');
    if (soundEnabled) playShutterSound();
  }

  if (soundBtn) {
    soundBtn.classList.add('active');
    soundBtn.addEventListener('click', toggleSound);
  }

  if (lbSoundBtn) {
    lbSoundBtn.addEventListener('click', () => {
      playShutterSound();
    });
  }
}

function playShutterSound() {
  if (!soundEnabled) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Dual mechanical click simulation of a focal-plane shutter
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    filter.type = 'highpass';
    filter.frequency.value = 1200;

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(800, now);
    osc1.frequency.exponentialRampToValueAtTime(120, now + 0.04);

    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc1.connect(filter);
    filter.connect(gain1);
    gain1.connect(audioCtx.destination);

    osc1.start(now);
    osc1.stop(now + 0.045);

    // Second curtain snap 45ms later
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();

    osc2.type = 'square';
    osc2.frequency.setValueAtTime(600, now + 0.045);
    osc2.frequency.exponentialRampToValueAtTime(90, now + 0.09);

    gain2.gain.setValueAtTime(0.2, now + 0.045);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc2.connect(filter);
    gain2.connect(audioCtx.destination);

    osc2.start(now + 0.045);
    osc2.stop(now + 0.095);
  } catch (err) {
    console.warn('Audio synthesis not permitted or supported yet:', err);
  }
}

/* --------------------------------------------------------------------------
   3. GALLERY FILTERING & LIGHTBOX VIEWER
   -------------------------------------------------------------------------- */
function initGalleryAndLightbox() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

  const galleryGrid = document.getElementById('galleryGrid');

  // Filtering
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      if (galleryGrid) {
        if (filter === 'all') {
          galleryGrid.classList.remove('is-filtered');
        } else {
          galleryGrid.classList.add('is-filtered');
        }
      }

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.classList.remove('hidden-item');
        } else {
          item.classList.add('hidden-item');
        }
      });
    });
  });

  // Series card buttons link directly to filtering gallery
  const seriesButtons = document.querySelectorAll('[data-gallery-target]');
  seriesButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = btn.getAttribute('data-gallery-target');
      const matchingTab = document.querySelector(`.filter-tab[data-filter="${targetCat}"]`);
      if (matchingTab) {
        matchingTab.click();
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Lightbox Modal Elements
  const modal = document.getElementById('lightboxModal');
  const lbCloseBtn = document.getElementById('lbCloseBtn');
  const lbBackdrop = modal ? modal.querySelector('.lightbox-backdrop') : null;
  const lbPrevBtn = document.getElementById('lbPrevBtn');
  const lbNextBtn = document.getElementById('lbNextBtn');

  const lbMainImg = document.getElementById('lbMainImage');
  const lbTitle = document.getElementById('lbTitle');
  const lbLocation = document.getElementById('lbLocation');
  const lbCamera = document.getElementById('lbCamera');
  const lbExif = document.getElementById('lbExif');

  let currentActiveIndex = 0;

  function openLightbox(index) {
    const visibleItems = galleryItems.filter(item => !item.classList.contains('hidden-item'));
    if (!visibleItems.length) return;

    if (index < 0) index = visibleItems.length - 1;
    if (index >= visibleItems.length) index = 0;

    currentActiveIndex = index;
    const targetItem = visibleItems[index];

    const fullSrc = targetItem.getAttribute('data-full');
    const title = targetItem.getAttribute('data-title');
    const loc = targetItem.getAttribute('data-location');
    const camera = targetItem.getAttribute('data-camera');
    const exif = targetItem.getAttribute('data-exif');

    if (lbMainImg) {
      lbMainImg.style.opacity = '0.3';
      lbMainImg.src = fullSrc;
      lbMainImg.onload = () => {
        lbMainImg.style.opacity = '1';
      };
    }

    if (lbTitle) lbTitle.textContent = title;
    if (lbLocation) lbLocation.textContent = loc;
    if (lbCamera) lbCamera.innerHTML = camera;
    if (lbExif) lbExif.innerHTML = exif;

    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    playShutterSound();
  }

  function closeLightbox() {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  function stepLightbox(direction) {
    const visibleItems = galleryItems.filter(item => !item.classList.contains('hidden-item'));
    if (!visibleItems.length) return;
    let nextIndex = currentActiveIndex + direction;
    openLightbox(nextIndex);
  }

  // Bind clicks on gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const visibleItems = galleryItems.filter(i => !i.classList.contains('hidden-item'));
      const index = visibleItems.indexOf(item);
      openLightbox(index !== -1 ? index : 0);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
  if (lbPrevBtn) lbPrevBtn.addEventListener('click', () => stepLightbox(-1));
  if (lbNextBtn) lbNextBtn.addEventListener('click', () => stepLightbox(1));

  // Keyboard controls
  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });
}

/* --------------------------------------------------------------------------
   4. FINE ART PRINT CONFIGURATOR
   -------------------------------------------------------------------------- */
function initPrintConfigurator() {
  const artworkSelect = document.getElementById('artworkSelect');
  const printPreviewImg = document.getElementById('printPreviewImg');
  const printPreviewTitle = document.getElementById('printPreviewTitle');
  const printPreviewDimensions = document.getElementById('printPreviewDimensions');
  const calculatedPrice = document.getElementById('calculatedPrice');
  const inquirePrintBtn = document.getElementById('inquirePrintBtn');

  const sizeRadios = document.querySelectorAll('input[name="printSize"]');
  const frameRadios = document.querySelectorAll('input[name="framing"]');

  function updatePrintConfig() {
    // Selected artwork
    const selectedOption = artworkSelect.options[artworkSelect.selectedIndex];
    const imgSrc = selectedOption.getAttribute('data-img');
    const artworkName = selectedOption.textContent.split('(')[0].trim();

    if (printPreviewImg && imgSrc) {
      printPreviewImg.src = imgSrc;
    }

    // Selected size
    let sizePrice = 380;
    let sizeLabel = '40 × 50 cm';
    sizeRadios.forEach(radio => {
      const parentLabel = radio.closest('.pill-radio');
      if (radio.checked) {
        sizePrice = parseInt(radio.getAttribute('data-price'), 10) || 380;
        if (radio.value === 'medium') sizeLabel = '40 × 50 cm';
        if (radio.value === 'large') sizeLabel = '60 × 80 cm';
        if (radio.value === 'collector') sizeLabel = '90 × 120 cm';
        if (parentLabel) parentLabel.classList.add('active');
      } else {
        if (parentLabel) parentLabel.classList.remove('active');
      }
    });

    // Selected framing
    let framePrice = 120;
    let frameLabel = 'Smoked Natural Oak';
    frameRadios.forEach(radio => {
      const parentLabel = radio.closest('.pill-radio');
      if (radio.checked) {
        framePrice = parseInt(radio.getAttribute('data-frame-price'), 10) || 0;
        if (radio.value === 'oak') frameLabel = 'Smoked Natural Oak';
        if (radio.value === 'black') frameLabel = 'Matte Obsidian Aluminium';
        if (radio.value === 'unframed') frameLabel = 'Print Only (Archival Tube)';
        if (parentLabel) parentLabel.classList.add('active');
      } else {
        if (parentLabel) parentLabel.classList.remove('active');
      }
    });

    const total = sizePrice + framePrice;
    if (calculatedPrice) {
      calculatedPrice.textContent = `€${total}`;
    }

    if (printPreviewTitle) {
      printPreviewTitle.textContent = `"${artworkName}" — Edition of 25`;
    }

    if (printPreviewDimensions) {
      printPreviewDimensions.innerHTML = `${sizeLabel} / ${frameLabel}`;
    }
  }

  if (artworkSelect) artworkSelect.addEventListener('change', updatePrintConfig);
  sizeRadios.forEach(r => r.addEventListener('change', updatePrintConfig));
  frameRadios.forEach(r => r.addEventListener('change', updatePrintConfig));

  if (inquirePrintBtn) {
    inquirePrintBtn.addEventListener('click', () => {
      const selectedOption = artworkSelect.options[artworkSelect.selectedIndex].text;
      const price = calculatedPrice ? calculatedPrice.textContent : '';
      
      const contactSection = document.getElementById('contact');
      const contactMsg = document.getElementById('contactMessage');
      const inquiryType = document.getElementById('inquiryType');

      if (inquiryType) inquiryType.value = 'print';
      if (contactMsg) {
        contactMsg.value = `I am interested in acquiring the fine art print: ${selectedOption} (${price}). Please let me know current edition availability and transit timeframe to my region.`;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(`Selected "${selectedOption}". Inquire below to reserve your edition.`);
    });
  }

  // Initial calculation
  updatePrintConfig();
}

/* --------------------------------------------------------------------------
   5. INQUIRIES & CONTACT FORM
   -------------------------------------------------------------------------- */
function initInquiryForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showToast('Please fulfill all required fields before dispatching.', 'warning');
      return;
    }

    const submitBtn = document.getElementById('submitInquiryBtn');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = `Dispatched — Thank You`;
    submitBtn.disabled = true;

    playShutterSound();
    showToast(`Thank you, ${name}. Your commission brief has reached Aurelia Vance's atelier.`);

    setTimeout(() => {
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 4000);
  });
}

/* --------------------------------------------------------------------------
   6. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    } else {
      drawer.classList.add('open');
      menuBtn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    }
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    });
  });
}

/* --------------------------------------------------------------------------
   7. SMOOTH SCROLL & ACTIVE LINK HIGHLIGHTING
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. TOAST NOTIFICATION UTILITY
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}
