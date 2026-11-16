import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import slideOne from '../assets/about-1.jpeg';
import slideTwo from '../assets/about-2.jpeg';
import slideThree from '../assets/about-3.jpeg';
import slideFour from '../assets/about-4.jpeg';
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons';
import { FadeIn } from '../components/FadeIn';
import { ScrollWords } from '../components/ScrollWords';
import { SectionLabel } from '../components/SectionLabel';
import { SOCIAL_LINKS } from '../config/data';
import { EASE } from '../utils/motion';

const slides = [
  { image: slideOne, caption: 'Professional journey highlights and real work moments' },
  { image: slideTwo, caption: 'Learning, building, and evolving as a developer' },
  { image: slideThree, caption: 'Projects that shaped technical depth and execution' },
  { image: slideFour, caption: 'From training to real-world delivery systems' },
];

const facts = [
  { label: 'Clients', value: 'US clients & US-based projects' },
  { label: 'Domains', value: 'US defence, banking, ERDS (Enterprise Ready Deployment System)' },
  { label: 'Focus', value: 'Backend architecture & microservices' },
  { label: 'Core stack', value: 'Java, Spring Boot, React' },
];

const INTRO =
  "I'm Suryansh, a backend and full-stack developer. I build the parts of a product people don't see: APIs, services, auth flows and data models, so the parts they do see feel fast and dependable. I've worked with US clients on US defence and banking projects, and on ERDS (Enterprise Ready Deployment System). Alongside that, I take on freelance builds for teams who value clean engineering and clear communication.";

export const About = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-14 md:py-20">
      <div className="container-x">
        <SectionLabel index="01">About</SectionLabel>
        {/* This section leads with a paragraph, so give it a heading for search engines and screen readers */}
        <h2 className="sr-only">About Suryansh Pushpkar</h2>

        <div className="mt-8 grid gap-12 md:mt-10 md:grid-cols-12 md:gap-8">
          <FadeIn className="md:col-span-5">
            {/* Photos are mixed landscape/square/portrait, so each keeps its own ratio inside a square frame */}
            <div className="relative grid aspect-square place-items-center overflow-hidden bg-bg-elevated p-3">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={slides[active].image}
                  alt={slides[active].caption}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="max-h-full max-w-full object-contain"
                />
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <p className="label min-h-8 max-w-[16rem] normal-case tracking-normal">{slides[active].caption}</p>
              <div className="flex gap-1.5 pt-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show photo ${index + 1}`}
                    aria-current={index === active}
                    onClick={() => setActive(index)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === active ? 'w-8 bg-accent' : 'w-4 bg-line'
                    }`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="md:col-span-7 md:pl-8">
            <ScrollWords
              className="text-2xl font-medium leading-[1.2] tracking-[-0.025em] md:text-[2rem]"
              text={INTRO}
            />

            <dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {facts.map((fact, index) => (
                <FadeIn key={fact.label} delay={index * 0.06} className="border-t border-line pt-4">
                  <dt className="label">{fact.label}</dt>
                  <dd className="mt-2 text-lg">{fact.value}</dd>
                </FadeIn>
              ))}
            </dl>

            <FadeIn className="mt-12 flex flex-wrap gap-3">
              <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <GitHubIcon size={16} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a href={SOCIAL_LINKS.linkedin.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <LinkedInIcon size={16} /> LinkedIn <ArrowUpRight size={14} />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
