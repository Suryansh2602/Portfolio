import { motion, AnimatePresence } from 'framer-motion';
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
    blurb:
      'Public code, backend systems, architecture experiments, and production builds.',
    tint: 'from-slate-950 via-slate-800 to-slate-700',
    pills: ['Repositories', 'Backend', 'Java', 'Spring Boot'],
  },
  {
    name: 'LinkedIn',
    handle: 'suryansh-pushpkar',
    url: 'https://linkedin.com/in/suryansh-pushpkar',
    blurb:
      'Professional experience, freelance delivery, and real-world collaboration.',
    tint: 'from-cyan-700 via-sky-600 to-blue-500',
    pills: ['Experience', 'Freelance', 'Delivery', 'Networking'],
  },
];

const slides = [
  { image: slideOne, caption: 'Professional journey highlights and real work moments' },
  { image: slideTwo, caption: 'Learning, building, and evolving as a developer' },
  { image: slideThree, caption: 'Projects that shaped technical depth and execution' },
  { image: slideFour, caption: 'From training to real-world delivery systems' },
];

export const About = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(t);
  }, []);

  return (
    <section className="relative px-4 py-24 overflow-hidden">

      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-400/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl relative">

        {/* heading */}
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-600/80">
            About Me
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-black text-slate-900">
            Developer Profile with <span className="text-cyan-500">Real Impact</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-slate-600">
            Full-stack engineering experience with freelance delivery and production-grade backend systems.
          </p>
        </div>

        {/* SLIDESHOW */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">

          {/* IMAGE (NO ASPECT RATIO CHANGE) */}
          <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl shadow-inner flex items-center justify-center p-3">

            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={slides[active].image}
                alt={slides[active].caption}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}

                // IMPORTANT: preserves original aspect ratio
                className="max-w-full max-h-[420px] w-auto h-auto object-contain rounded-2xl"
              />
            </AnimatePresence>

            {/* soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none" />
          </div>

          {/* TEXT SIDE */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Showcase
            </p>

            <h3 className="mt-3 text-2xl font-black text-slate-900">
              Visual journey of growth
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 min-h-[60px]">
              {slides[active].caption}
            </p>

            <div className="mt-5 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === active
                      ? 'bg-cyan-500 scale-125'
                      : 'bg-slate-300/70'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* PROFILE CARDS */}
        <div className="grid lg:grid-cols-2 gap-6">

          {profiles.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl shadow-inner group"
            >

              <div className={`h-28 bg-gradient-to-r ${p.tint}`} />

              <div className="p-6">

                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                      {p.name}
                    </p>

                    <h3 className="text-xl font-black text-slate-900 mt-1">
                      {p.handle}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-6">
                      {p.blurb}
                    </p>
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-xs px-3 py-1 rounded-full bg-white/30 backdrop-blur-md text-slate-700 shadow-inner"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-600 hover:text-cyan-800"
                >
                  Visit {p.name} →
                </a>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};