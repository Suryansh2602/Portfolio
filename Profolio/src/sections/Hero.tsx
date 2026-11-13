import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import profilePhoto from '../assets/removebg-preview.png';
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons';
import { SOCIAL_LINKS } from '../config/data';
import { openWhatsApp } from '../utils/whatsapp';

const services = [
  {
    title: 'Backend Architecture',
    detail: 'Spring Boot APIs, modular services, auth flows, database design, and scalable foundations.',
  },
  {
    title: 'Full-Stack Product Development',
    detail: 'React frontends paired with clean backend systems so the product feels fast and reliable.',
  },
  {
    title: 'Freelance Delivery',
    detail: 'Delivered solutions for different clients, from planning and development to final handoff.',
  },
  {
    title: 'Consulting and Debugging',
    detail: 'Architecture reviews, cleanup plans, performance fixes, and practical technical guidance.',
  },

  // {
  //   title: 'Technical Mentorship',
  //   detail: 'Guidance on backend best practices, system design, and building production-ready products.',
  // }
];

export const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-24 pt-32">
      <motion.div
        animate={{ x: [0, 20, -10, 0], y: [0, -24, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-16 top-12 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <div className="hero-status mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Software Developer at Webkorps · Open to freelance
          </div>

          <p className="mb-3 font-mono text-sm uppercase tracking-[0.4em] text-cyan-600">Hi, my name is</p>
          <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl md:text-7xl">
            Suryansh Pushpkar
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-700 md:text-2xl">
            Backend &amp; Full-Stack Developer
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0">
            I build backend-heavy products, full-stack applications, and scalable systems with Java, Spring Boot,
            and React, for teams and clients who want clean engineering and confident delivery.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button type="button" onClick={() => openWhatsApp('Consultation')} className="btn-primary">
              Book a Consultation <ArrowRight size={16} />
            </button>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
            <a
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav-icon"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav-icon"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href={SOCIAL_LINKS.email.url} className="site-nav-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hero-services-panel"
        >
          <div className="hero-grid-motion hero-grid-motion-one" />
          <div className="hero-grid-motion hero-grid-motion-two" />
          <div className="hero-grid-lines" />

          <div className="hero-services-head">
            <img
              src={profilePhoto}
              alt="Portrait of Suryansh Pushpkar"
              className="hero-portrait hero-portrait-large"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">What I Can Help With</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Services that teams actually need
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Practical engineering support, product-focused implementation, and delivery you can ship with.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                className="hero-service-card"
              >
                <h3 className="text-lg font-bold text-slate-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{service.detail}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
