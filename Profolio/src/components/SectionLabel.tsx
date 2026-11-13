import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE } from '../utils/motion';

interface SectionLabelProps {
  index: string;
  children: ReactNode;
  aside?: ReactNode;
}

// Numbered section marker with a hairline that draws across as it enters view.
export const SectionLabel = ({ index, children, aside }: SectionLabelProps) => (
  <div className="relative flex items-center justify-between gap-4 pt-5">
    <motion.span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-px origin-left bg-line"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: EASE }}
    />
    <p className="flex items-center gap-4">
      <span className="label text-accent-ink">({index})</span>
      <span className="label">{children}</span>
    </p>
    {aside && <span className="label">{aside}</span>}
  </div>
);
