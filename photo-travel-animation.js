/**
 * Scroll-scrubbed 3D photo carousel for future projects.
 *
 * Expected structure: a tall scroll section containing a sticky stage, photo
 * cards positioned at its center, and an optional caption element.
 * The caller supplies the section and card elements; this module adds no DOM.
 */
(function (global) {
function attachPhotoTravel({
  section,
  photos,
  caption = null,
  spacingDesktop = 0.29,
  spacingMobile = 0.4,
  mobileBreakpoint = 700,
  captionReveal = 0.42,
}) {
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame = 0;

  function render() {
    frame = 0;
    const rect = section.getBoundingClientRect();
    const progress = reduceMotion ? 0 : clamp(-rect.top / (rect.height - innerHeight), 0, 1);
    const isMobile = innerWidth < mobileBreakpoint;
    const step = progress * (photos.length - 1);
    const reveal = clamp(progress / captionReveal, 0, 1);
    const spacing = innerWidth * (isMobile ? spacingMobile : spacingDesktop);

    photos.forEach((photo, index) => {
      const relative = ((index - step + 2.5 + photos.length) % photos.length + photos.length) % photos.length - 2.5;
      const distance = Math.abs(relative);
      const x = relative * spacing;
      const y = distance * (isMobile ? 12 : 20);
      const scale = Math.max(0.48, 1 - distance * 0.2);
      const rotation = relative * (isMobile ? 5 : 7);
      photo.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) translateZ(${-distance * 90}px) rotate(${rotation}deg) scale(${scale})`;
      photo.style.opacity = String(clamp(1 - distance * 0.18, 0.46, 1));
      photo.style.setProperty('--art-dim', (Math.min(0.56, distance * 0.14 + reveal * 0.3)).toFixed(2));
      photo.style.zIndex = String(100 - Math.round(distance * 10));
    });

    if (caption) caption.style.opacity = String(reveal);
  }

  function scheduleRender() {
    if (!frame) frame = requestAnimationFrame(render);
  }

  if (!reduceMotion) window.addEventListener('scroll', scheduleRender, { passive: true });
  window.addEventListener('resize', scheduleRender);
  render();

  return () => {
    if (!reduceMotion) window.removeEventListener('scroll', scheduleRender);
    window.removeEventListener('resize', scheduleRender);
    if (frame) cancelAnimationFrame(frame);
  };
}

global.attachPhotoTravel = attachPhotoTravel;
})(window);
