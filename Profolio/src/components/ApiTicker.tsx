import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { EASE } from '../utils/motion';

const REQUESTS = [
  { method: 'GET', path: '/orders', status: 200 },
  { method: 'POST', path: '/auth', status: 201 },
  { method: 'PUT', path: '/users', status: 200 },
  { method: 'GET', path: '/health', status: 200 },
];

/**
 * Pill sized in the parent's em so it sits inline in a headline, cycling through
 * mock API calls. Purely decorative, so it is hidden from assistive tech.
 */
export const ApiTicker = ({ play }: { play: boolean }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((current) => (current + 1) % REQUESTS.length), 2200);
    return () => window.clearInterval(id);
  }, []);

  const request = REQUESTS[index];

  return (
    // Width is fixed (with a floor for small screens) and revealed by a wipe, so the headline never reflows
    <motion.span
      aria-hidden="true"
      initial={{ clipPath: 'inset(0 100% 0 0 round 999px)' }}
      animate={{ clipPath: play ? 'inset(0 0% 0 0 round 999px)' : 'inset(0 100% 0 0 round 999px)' }}
      transition={{ duration: 1, ease: EASE, delay: 0.9 }}
      className="inline-block h-[0.72em] w-[max(2.1em,7.5rem)] select-none overflow-hidden rounded-full bg-accent align-[-0.04em] text-on-accent"
    >
      <span className="flex h-full w-full items-center justify-center">
        <span className="flex items-center gap-[0.6em] font-mono text-[length:max(0.15em,9px)] font-medium leading-none tracking-normal">
          <span className="relative flex h-[0.7em] w-[0.7em]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-on-accent opacity-40" />
            <span className="relative inline-flex h-full w-full rounded-full bg-on-accent" />
          </span>

          <span className="relative inline-flex h-[1.2em] w-[6.8em] items-center overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={index}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-110%' }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute left-0 whitespace-nowrap"
              >
                {request.method} {request.path}
              </motion.span>
            </AnimatePresence>
          </span>

          <span className="rounded-full bg-on-accent px-[0.55em] py-[0.3em] text-accent">{request.status}</span>
        </span>
      </span>
    </motion.span>
  );
};
