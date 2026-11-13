import Lenis from 'lenis';
import { useEffect } from 'react';
import { prefersReducedMotion } from '../utils/motion';

// Lenis inertia scrolling; also takes over in-page #anchor links.
export const useSmoothScroll = (enabled: boolean) => {
  useEffect(() => {
    if (!enabled || prefersReducedMotion()) return;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: true });

    return () => lenis.destroy();
  }, [enabled]);
};
