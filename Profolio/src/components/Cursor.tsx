import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

type CursorMode = 'default' | 'hover' | 'label';

const SIZES: Record<CursorMode, number> = { default: 10, hover: 44, label: 88 };

/**
 * Dot that trails the mouse and grows over links. Elements with data-cursor="Text"
 * turn it into a labelled accent disc. Only enabled for precise pointers.
 */
export const Cursor = () => {
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion(),
  );
  const [mode, setMode] = useState<CursorMode>('default');
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 700, damping: 50, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 700, damping: 50, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const labelled = target?.closest<HTMLElement>('[data-cursor]');

      if (labelled) {
        setMode('label');
        setLabel(labelled.dataset.cursor ?? '');
      } else if (target?.closest('a, button')) {
        setMode('hover');
      } else {
        setMode('default');
      }
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerover', handleOver);
    root.addEventListener('mouseleave', handleLeave);

    return () => {
      root.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerover', handleOver);
      root.removeEventListener('mouseleave', handleLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const isLabel = mode === 'label';

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[100] ${isLabel ? '' : 'mix-blend-difference'}`}
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{ width: SIZES[mode], height: SIZES[mode] }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${
          isLabel ? 'bg-accent' : 'bg-white'
        }`}
      >
        {isLabel && <span className="label text-on-accent">{label}</span>}
      </motion.div>
    </motion.div>
  );
};
