// src/components/ContactDock.tsx
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

// Floating WhatsApp shortcut. Hidden over the hero and footer, which have their own contact CTAs.
export const ContactDock = () => {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setVisible(progress > 0.08 && progress < 0.92);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-5 right-5 z-50 h-24 w-24"
        >
          <motion.svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          >
            <defs>
              <path id="dock-text-path" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-ink font-mono text-[8.5px] uppercase tracking-[0.2em]">
              <textPath href="#dock-text-path">• Let's talk • Chat on WhatsApp </textPath>
            </text>
          </motion.svg>

          <button
            type="button"
            onClick={() => openWhatsApp('Direct Query')}
            aria-label="Chat on WhatsApp"
            className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-on-accent transition-transform hover:scale-110"
          >
            <MessageCircle size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
