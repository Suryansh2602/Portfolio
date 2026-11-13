import { useEffect, useState } from 'react';

import './App.css';

import Antigravity from './components/Antigravity';
import { ContactDock } from './components/ContactDock';
import { Footer } from './components/Footer';
import { Game } from './components/Game';
import { Navbar } from './components/Navbar';
import { Reveal } from './components/Reveal';

import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const savedTheme = window.localStorage.getItem('portfolio-theme');

    return savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : 'dark';
  });

  const [partyMode, setPartyMode] = useState(false);

  useEffect(() => {
    if (!partyMode) return;

    const timer = window.setTimeout(() => {
      setPartyMode(false);
    }, 7200);

    return () => window.clearTimeout(timer);
  }, [partyMode]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <main
      className={`page-shell min-h-screen ${
        theme === 'dark' ? 'theme-dark' : 'theme-light'
      } ${partyMode ? 'party-mode' : ''}`}
    >
      {/* =========================
          FULLSCREEN BACKGROUND
      ========================== */}

      <div className="antigravity-background">
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#845b93"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="sphere"
          fieldStrength={10}
        />
      </div>

      {/* =========================
          OPTIONAL OVERLAYS
      ========================== */}

      <div className="page-noise" />
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <div className="party-glow party-glow-one" />
      <div className="party-glow party-glow-two" />

      {/* =========================
          ALL WEBSITE CONTENT
      ========================== */}

      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === 'light' ? 'dark' : 'light'))
        }
      />

      <div className="page-content">
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Experience />

        <Game onCelebrate={() => setPartyMode(true)} />

        <Footer />

        <ContactDock />
      </div>
    </main>
  );
}

export default App;
