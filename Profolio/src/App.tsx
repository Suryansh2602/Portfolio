import { AnimatePresence, MotionConfig } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

import { ContactDock } from './components/ContactDock';
import { Cursor } from './components/Cursor';
import { Footer } from './components/Footer';
import { Game } from './components/Game';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { prefersReducedMotion } from './utils/motion';

import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Process } from './sections/Process';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';
import { Work } from './sections/Work';

type Theme = 'light' | 'dark';

const THEME_KEY = 'portfolio-theme';
const INTRO_KEY = 'portfolio-intro-seen';
const THEME_COLORS: Record<Theme, string> = { dark: '#0b0b0a', light: '#f1efe8' };

function App() {
  // index.html applies the saved theme before React loads; start from what it chose
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );

  // The intro plays once per browser session, and never for reduced-motion users
  const [loaded, setLoaded] = useState(
    () => sessionStorage.getItem(INTRO_KEY) === '1' || prefersReducedMotion(),
  );

  const finishIntro = useCallback(() => {
    sessionStorage.setItem(INTRO_KEY, '1');
    setLoaded(true);
  }, []);

  useSmoothScroll(loaded);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Hold the page still while the preloader is up
  useEffect(() => {
    if (loaded) return;

    const root = document.documentElement;
    root.style.overflow = 'hidden';

    return () => {
      root.style.overflow = '';
    };
  }, [loaded]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!loaded && <Preloader onDone={finishIntro} />}</AnimatePresence>

      <Cursor />
      <div className="grain" aria-hidden="true" />

      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
      />

      <main>
        <Hero ready={loaded} />
        <About />
        <Skills />
        <Services />
        <Work />
        <Contact />
        <Experience />
        <Process />
        <Game />
      </main>

      <Footer />
      <ContactDock />
    </MotionConfig>
  );
}

export default App;
