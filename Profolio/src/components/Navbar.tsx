import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { SOCIAL_LINKS } from '../config/data';
import { useLocalTime } from '../hooks/useLocalTime';
import { EASE } from '../utils/motion';
import { MaskLine } from './MaskLine';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const time = useLocalTime();
  const { scrollY } = useScroll();

  // Tuck the bar away while scrolling down, bring it back on any scroll up
  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(current > previous && current > 160);
    setScrolled(current > 24);
  });

  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !menuOpen ? '-110%' : '0%' }}
        transition={{ duration: 0.4, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-[70] border-b transition-colors duration-300 ${
          scrolled || menuOpen ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent'
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between gap-6">
          <a href="#home" onClick={closeMenu} className="flex items-baseline gap-2 font-semibold tracking-tight">
            Suryansh Pushpkar
            <span className="label hidden sm:inline">©{new Date().getFullYear()}</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-draw text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <span className="label hidden lg:inline">IST {time}</span>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${nextTheme} mode`}
              className="grid h-10 w-10 place-items-center rounded-full border border-line transition-colors hover:border-ink"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <a href="#contact" className="btn-accent hidden py-2.5 sm:inline-flex">
              Let's talk
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="label h-10 rounded-full border border-line px-4 text-ink md:hidden"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[65] flex flex-col justify-between bg-bg pb-8 pt-24 md:hidden"
          >
            <ul className="container-x">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href} className="border-b border-line py-3">
                  <a href={link.href} onClick={closeMenu} className="flex items-baseline gap-4">
                    <span className="label text-accent-ink">0{index + 1}</span>
                    <span className="display-lg">
                      <MaskLine play delay={0.15 + index * 0.05}>
                        {link.label}
                      </MaskLine>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="container-x flex flex-wrap gap-x-6 gap-y-2">
              <a href={SOCIAL_LINKS.email.url} className="label text-ink">
                Email
              </a>
              <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noopener noreferrer" className="label text-ink">
                GitHub
              </a>
              <a href={SOCIAL_LINKS.linkedin.url} target="_blank" rel="noopener noreferrer" className="label text-ink">
                LinkedIn
              </a>
              <span className="label ml-auto">IST {time}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
