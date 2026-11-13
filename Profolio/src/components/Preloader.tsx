import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { EASE } from '../utils/motion';

const DURATION_MS = 1400;

// Counts to 100, then the parent removes it and the panel slides away (exit animation).
export const Preloader = ({ onDone }: { onDone: () => void }) => {
  const [count, setCount] = useState(0);
  const doneTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        doneTimer.current = window.setTimeout(onDone, 250);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(doneTimer.current);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[95] flex flex-col justify-between bg-bg text-ink"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: EASE }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="container-x flex justify-between pt-6">
        <span className="label">Suryansh Pushpkar</span>
        <span className="label">Portfolio ©{new Date().getFullYear()}</span>
      </div>

      <div className="container-x flex items-end justify-between pb-6">
        <span className="label">Backend &amp; Full-Stack Developer</span>
        <span className="display-xl tabular-nums">{String(count).padStart(3, '0')}</span>
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 origin-left bg-accent"
        style={{ width: `${count}%` }}
      />
    </motion.div>
  );
};
