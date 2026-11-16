import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

const TYPE_MS = 65;
const DELETE_MS = 35;
const HOLD_MS = 2000;
const GAP_MS = 350;

interface TypewriterProps {
  words: readonly string[];
  /** Starts cycling once true (e.g. after the preloader); the first word is shown in full until then. */
  play: boolean;
  className?: string;
}

/**
 * Types a word, holds it, backspaces it and moves on to the next one. Reduced-motion users get a plain
 * swap instead of the per-letter animation. Decorative, so the caller should give assistive tech the full list.
 */
export const Typewriter = ({ words, play, className = '' }: TypewriterProps) => {
  const [reduced] = useState(prefersReducedMotion);
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!play) return;

    const word = words[wordIndex];
    const nextIndex = (wordIndex + 1) % words.length;
    let delay: number;
    let step: () => void;

    if (reduced) {
      delay = HOLD_MS + 600;
      step = () => {
        setWordIndex(nextIndex);
        setLength(words[nextIndex].length);
      };
    } else if (!deleting && length === word.length) {
      delay = HOLD_MS;
      step = () => setDeleting(true);
    } else if (deleting && length === 0) {
      delay = GAP_MS;
      step = () => {
        setDeleting(false);
        setWordIndex(nextIndex);
      };
    } else {
      delay = deleting ? DELETE_MS : TYPE_MS;
      step = () => setLength(length + (deleting ? -1 : 1));
    }

    const id = window.setTimeout(step, delay);
    return () => window.clearTimeout(id);
  }, [play, words, wordIndex, length, deleting, reduced]);

  const text = words[wordIndex].slice(0, length);

  return (
    <span aria-hidden="true" className={`whitespace-nowrap ${className}`}>
      {/* Text comes from CSS content, like the ApiTicker, so crawlers don't read half-typed words in the h1 */}
      <span data-label={text} className="before:content-[attr(data-label)]" />
      {/* The caret always takes up space, so the line keeps its height even while the word is empty */}
      <span className="typewriter-caret ml-[0.06em] inline-block h-[0.78em] w-[0.05em] bg-current align-[-0.06em]" />
    </span>
  );
};
