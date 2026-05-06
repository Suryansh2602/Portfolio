import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import './App.css';
import { ContactDock } from './components/ContactDock';
import { Game } from './components/Game';
import { ProjectCard } from './components/ProjectCard';
import { Reveal } from './components/Reveal';
import { EXPERIENCE, PROJECTS } from './config/data';
import { About } from './sections/About';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  });
  const [partyMode, setPartyMode] = useState(false);

  useEffect(() => {
    if (!partyMode) return;

    const timer = window.setTimeout(() => setPartyMode(false), 7200);
    return () => window.clearTimeout(timer);
  }, [partyMode]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <main className={`page-shell min-h-screen ${theme === 'dark' ? 'theme-dark' : 'theme-light'} ${partyMode ? 'party-mode' : ''}`}>
      <div className="page-noise" />
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />
      <div className="party-glow party-glow-one" />
      <div className="party-glow party-glow-two" />

      <button
        type="button"
        onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
        className="theme-toggle"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      </button>

      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <section className="relative px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
                Core Stack
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Tools I use to ship reliable products</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                The stack below keeps moving like a live queue, showing the technologies I use across backend,
                frontend, security, and scalable system design.
              </p>
            </div>
            <Skills />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
                  Selected Work
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Projects built around backend depth</h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-600">
                Swipe through the workbench. These are product ideas and backend-first builds shaped around scale, APIs, and clean developer flows.
              </p>
            </div>

            <div className="carousel-shell">
              <div className="carousel-fade carousel-fade-left" />
              <div className="carousel-fade carousel-fade-right" />

              <div className="carousel-track">
              {PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  isFeatured={index === 0}
                  variant={index % 3 === 1 ? 'amber' : index % 3 === 2 ? 'rose' : 'cyan'}
                />
              ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
                Experience
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Full-time work and freelance delivery</h2>
            </div>

            <div className="space-y-6">
              {EXPERIENCE.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="rounded-[2rem] border border-white/50 bg-white/75 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                      <p className="text-sm font-medium text-slate-600">{item.company}</p>
                    </div>
                    <p className="text-sm font-semibold text-cyan-700">{item.duration}</p>
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">{item.details}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Game onCelebrate={() => setPartyMode(true)} />
      <ContactDock />
    </main>
  );
}

export default App;
