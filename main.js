/* ============================================================
   PORTFOLIO — main.js
   Sections:
   01. Scroll Reveal (IntersectionObserver)
   02. Nav — border on scroll
   03. Nav — active link highlight
   04. Nav — mobile hamburger menu
============================================================ */

/* ─── 01. SCROLL REVEAL ─── */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger each visible element slightly
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

reveals.forEach(el => revealObserver.observe(el));


/* ─── 02. NAV — BORDER ON SCROLL ─── */
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 40
    ? 'rgba(0,255,180,0.2)'
    : 'rgba(0,255,180,0.12)';
}, { passive: true });


/* ─── 03. NAV — ACTIVE LINK HIGHLIGHT ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
}, { passive: true });


/* ─── 04. NAV — MOBILE HAMBURGER ─── */
function toggleMenu(btn) {
  btn.classList.toggle('open');
  const links = document.querySelector('.nav-links');
  const isOpen = btn.classList.contains('open');

  if (isOpen) {
    // Inject mobile styles inline so no extra CSS class needed
    links.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 0;
      position: fixed;
      top: 64px;
      left: 0;
      right: 0;
      background: rgba(8,11,16,0.97);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(0,255,180,0.12);
      padding: 24px 20px;
      z-index: 99;
    `;
    links.querySelectorAll('a').forEach(a => {
      a.style.cssText = `
        display: block;
        padding: 14px 0;
        font-size: 0.9rem;
        border-bottom: 1px solid rgba(0,255,180,0.06);
      `;
    });
  } else {
    links.style.cssText = 'display: none';
  }

  // Animate the three bars into an X
  const bars = btn.children;
  bars[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)'  : '';
  bars[1].style.opacity   = isOpen ? '0'                                   : '1';
  bars[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
}

// Close mobile menu when a nav link is tapped
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger.classList.contains('open')) {
      toggleMenu(hamburger);
    }
  });
});
