/**
 * main.js
 * Builds the optical-rail tick scale on the left edge and keeps it,
 * plus the sidebar nav, in sync with whichever section is in view.
 * Works for both the DE and EN pages since it reads section ids
 * straight from the DOM instead of a hardcoded list.
 */
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('railTrack');
  const navLinks = document.querySelectorAll('#sideNav a');
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  // Build the tick scale
  if (track) {
    const totalTicks = 40;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i <= totalTicks; i++) {
      const tick = document.createElement('div');
      tick.className = 'rail-tick';
      tick.style.top = (i / totalTicks) * 100 + '%';
      if (i % 5 === 0) {
        tick.style.width = '18px';
      }
      fragment.appendChild(tick);
    }
    track.appendChild(fragment);
  }

  const ticks = track ? track.querySelectorAll('.rail-tick') : [];

  if (!('IntersectionObserver' in window) || sections.length === 0) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });

      const activeIndex = sections.findIndex((section) => section.id === id);
      if (activeIndex === -1 || ticks.length < 2) return;

      const ratio = activeIndex / (sections.length - 1);
      ticks.forEach((tick, i) => {
        const tickRatio = i / (ticks.length - 1);
        tick.classList.toggle('active', Math.abs(tickRatio - ratio) < 0.02);
      });
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach((section) => observer.observe(section));
});
