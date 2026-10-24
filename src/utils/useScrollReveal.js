import { useEffect } from 'react';

/**
 * Elegant scroll-reveal: fades/lifts section headers and staggers grid items.
 * - Uses IntersectionObserver (no layout thrash).
 * - Skipped entirely when the user prefers reduced motion.
 * - Elements only become hidden once observed, so content is never lost.
 */
const TARGETS = [
  'main section .section-header-compact',
  'main section .sunday-header',
  '.heritage-collage-pane',
  '.heritage-narrative-pane',
  '.heritage-draw-line-wrap',
  '.shahi-dish-grid > *',
  '.royal-products-grid > *',
  '.menu-card',
  '.why-card',
  '.catering-card',
  '.review-card',
  '.sunday-grid > *',
  '.sunday-promo',
  '.contact-grid > *',
  '.footer-scroll-divider',
  '.footer-top-grid > *',
];

export default function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(TARGETS.join(','));
    elements.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      const index = Math.max(0, siblings.indexOf(el));
      el.style.setProperty('--reveal-delay', `${Math.min(index % 8, 7) * 100}ms`);
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
