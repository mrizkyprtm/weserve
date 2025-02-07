import Lenis from 'lenis';
import { onMounted, onUnmounted } from 'vue';

export default function useLenis() {
  onMounted(() => {
    const lenis = new Lenis({
      lerp: 0.5, // Lower values = smoother, slower scroll
      // duration: 1.2,
      smooth: true,
      direction: 'vertical', // 'horizontal' or 'vertical'
      gestureDirection: 'both', // Scroll direction with touch/wheel
      touchMultiplier: 2,
      infinite: false,
    })

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Handle anchor clicks
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
        const header = document.querySelector('header');
        const headerHeight = header?.offsetHeight || 0;

        if (target) {
          lenis.scrollTo(target, { offset: -headerHeight })
            .then(() => {
              window.history.pushState({}, '', targetId);
            });
        }
      }
    };

    // Handle back/forward navigation
    const handlePopState = () => {
      const targetId = window.location.hash;
      const target = document.querySelector(targetId);
      if (target) lenis.scrollTo(target);
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('popstate', handlePopState);

    onUnmounted(() => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('popstate', handlePopState);
    });
  });
}
