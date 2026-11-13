// Shared easing for every reveal so the whole site moves with one rhythm
export const EASE = [0.22, 1, 0.36, 1] as const;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
