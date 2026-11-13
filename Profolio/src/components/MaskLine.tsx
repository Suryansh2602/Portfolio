import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE } from '../utils/motion';

interface MaskLineProps {
  children: ReactNode;
  delay?: number;
  /** Omit to reveal when scrolled into view; pass a boolean to reveal on demand (e.g. after the preloader). */
  play?: boolean;
  className?: string;
}

const hidden = { y: '110%' };
const shown = { y: '0%' };

// Slides a line of text up from behind a mask. The padding/negative margin pair keeps descenders unclipped.
export const MaskLine = ({ children, delay = 0, play, className = '' }: MaskLineProps) => {
  const trigger =
    play === undefined
      ? { whileInView: shown, viewport: { once: true, margin: '0px 0px -10% 0px' } }
      : { animate: play ? shown : hidden };

  return (
    <span className={`-mb-[0.1em] block overflow-hidden pb-[0.1em] ${className}`}>
      <motion.span
        className="block"
        initial={hidden}
        {...trigger}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
};
