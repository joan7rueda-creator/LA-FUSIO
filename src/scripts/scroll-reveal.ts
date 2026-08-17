// Sistema de animación al hacer scroll para toda la web LAFUSIO.
// Dos mecanismos, ambos basados solo en transform/opacity (rendimiento) y
// respetando prefers-reduced-motion:
//
// 1. [data-reveal] — aparición vía IntersectionObserver + clase .is-visible
//    (ver keyframes en global.css). [data-reveal-delay="120"] añade stagger.
// 2. [data-parallax] — desplazamiento/escala muy sutil ligado al scroll,
//    con velocidad configurable vía [data-parallax-speed] (por defecto 0.15).

function initReveal(): void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduced || items.length === 0) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const delay = el.dataset.revealDelay;
        if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    },
    // threshold: 0 es deliberado — algunas variantes de reveal (p.ej. "mask") parten
    // de un clip-path que recorta el 100% del elemento, y Chromium calcula
    // intersectionRatio sobre el área ya recortada (siempre 0). isIntersecting con
    // threshold 0 usa en cambio un test geométrico simple, así que dispara igual.
    // rootMargin controla el punto real de disparo (poco antes de entrar del todo).
    { threshold: 0, rootMargin: '0px 0px -10% 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

function initParallax(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const layers = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (layers.length === 0) return;

  let ticking = false;

  function update(): void {
    ticking = false;
    for (const layer of layers) {
      const speed = Number(layer.dataset.parallaxSpeed ?? 0.15);
      const zoom = layer.dataset.parallaxZoom === 'true';
      const section = layer.closest<HTMLElement>('[data-parallax-scope]') ?? layer.parentElement;
      if (!section) continue;

      const rect = section.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const progress = Math.min(Math.max(1 - rect.bottom / total, 0), 1);
      const travel = (progress - 0.5) * 2 * speed * 100; // recorrido en px, centrado
      const scale = zoom ? 1.12 + progress * 0.06 : 1;
      layer.style.transform = `translate3d(0, ${travel.toFixed(2)}px, 0) scale(${scale})`;
    }
  }

  function onScroll(): void {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

function init(): void {
  initReveal();
  initParallax();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
