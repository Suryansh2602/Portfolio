import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import slideOne from '../assets/WhatsApp Image 2026-05-06 at 2.02.54 AM.jpeg';
import slideTwo from '../assets/WhatsApp Image 2026-05-06 at 2.02.55 AM (1).jpeg';
import slideThree from '../assets/WhatsApp Image 2026-05-06 at 2.02.56 AM (2).jpeg';
import slideFour from '../assets/WhatsApp Image 2026-05-06 at 2.02.57 AM.jpeg';

const profiles = [
  {
    name: 'GitHub',
    handle: '@Suryansh2602',
    url: 'https://github.com/Suryansh2602',
    blurb: 'Public code, backend builds, architecture experiments, and technical project work.',
    tint: 'from-slate-950 via-slate-800 to-slate-700',
    pills: ['Repositories', 'Pinned Work', 'Java', 'Spring Boot'],
  },
  {
    name: 'LinkedIn',
    handle: 'suryansh-pushpkar',
    url: 'https://linkedin.com/in/suryansh-pushpkar',
    blurb: 'Professional experience, freelance delivery background, and client-facing credibility.',
    tint: 'from-cyan-700 via-sky-600 to-blue-500',
    pills: ['Experience', 'Freelance Work', 'Professional Profile', 'Network'],
  },
];

const showcaseSlides = [
  { image: slideOne, caption: 'Professional moments and project journey highlights' },
  { image: slideTwo, caption: 'A more personal showcase around work, learning, and growth' },
  { image: slideThree, caption: 'Snapshots that support the developer story behind the portfolio' },
  { image: slideFour, caption: 'Visual proof of the path from training to delivery and real projects' },
];

export const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % showcaseSlides.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">About</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">A developer profile with freelance delivery experience</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            I have worked in full-time roles, trained in strong engineering environments, and delivered
            projects for different freelance clients with a practical shipping mindset.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="about-slideshow mb-8"
        >
          <div className="about-slideshow-frame">
            {showcaseSlides.map((slide, index) => (
              <img
                key={slide.caption}
                src={slide.image}
                alt={slide.caption}
                className={`about-slide ${index === activeSlide ? 'about-slide-active' : ''}`}
              />
            ))}
          </div>

          <div className="about-slideshow-copy">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Showcase</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">Training, delivery, and real work moments</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{showcaseSlides[activeSlide].caption}</p>

            <div className="mt-5 flex gap-2">
              {showcaseSlides.map((slide, index) => (
                <button
                  key={slide.caption}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`about-slide-dot ${index === activeSlide ? 'about-slide-dot-active' : ''}`}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {profiles.map((profile, index) => (
            <motion.article
              key={profile.name}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="overflow-hidden rounded-2rem border border-white/60 bg-white/80 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm"
            >
              <div className={`bg-linear-to-r ${profile.tint} p-6 text-white`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">{profile.name}</p>
                    <h3 className="mt-2 text-2xl font-black">{profile.handle}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/85">{profile.blurb}</p>
                  </div>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/25 bg-white/10 p-3 text-white transition hover:bg-white/20"
                    aria-label={`Open ${profile.name} profile`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.08 }}
                    className="rounded-1.5rem border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">Why this profile matters</p>
                    <p className="mt-3 text-base leading-7 text-slate-700">
                      {profile.name === 'GitHub'
                        ? 'Use this to review code quality, project choices, backend thinking, and the kind of systems I like building.'
                        : 'Use this to understand my career story, work style, professional background, training exposure, and delivery credibility.'}
                    </p>
                  </motion.div>

                  <div className="flex flex-wrap gap-2">
                    {profile.pills.map((pill) => (
                      <motion.span
                        key={pill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm"
                      >
                        {pill}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.12 }}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-700"
                  >
                    Visit {profile.name}
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
