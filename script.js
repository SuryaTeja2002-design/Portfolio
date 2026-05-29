/* ============================================================
   SURYATEJA GORTHI PORTFOLIO — Interactive JS
   UI Interactions & Animations only — no external API calls
   ============================================================ */

// NAV ACTIVE STATE ON SCROLL
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--accent)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });

sections.forEach(s => observer.observe(s));

// STAGGER REVEAL ON SCROLL
const revealEls = document.querySelectorAll(
  '.highlight-card, .project-item, .tl-item, .skill-group, .contact-card'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, 80 * (entry.target.dataset.delay || 0));
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -80px 0px' });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  el.dataset.delay = i % 4;
  revealObserver.observe(el);
});

// TERMINAL TYPEWRITER
const terminalBody = document.getElementById('terminalBody');
if (terminalBody) {
  const lines = terminalBody.querySelectorAll('.t-line, .t-output');
  lines.forEach((line, i) => {
    line.style.opacity = '0';
    setTimeout(() => {
      line.style.transition = 'opacity 0.3s';
      line.style.opacity = '1';
    }, 300 + i * 220);
  });
}

// ── DEMO TAB SWITCHER ──
function switchDemo(name) {
  const panels = ['grc', 'weather', 'phishing'];
  panels.forEach(p => {
    const panel = document.getElementById('panel-' + p);
    const tab = document.getElementById('tab-' + p);
    if (panel) panel.style.display = p === name ? 'block' : 'none';
    if (tab) {
      if (p === name) {
        tab.style.background = 'rgba(0,240,170,0.1)';
        tab.style.color = 'var(--accent)';
        tab.style.borderColor = 'rgba(0,240,170,0.35)';
        tab.style.borderBottom = '2px solid var(--bg3)';
      } else {
        tab.style.background = 'transparent';
        tab.style.color = 'var(--text-dim)';
        tab.style.borderColor = 'rgba(0,240,170,0.12)';
        tab.style.borderBottom = '1px solid rgba(0,240,170,0.35)';
      }
    }
  });
}
