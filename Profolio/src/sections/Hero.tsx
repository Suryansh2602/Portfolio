import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import avatar from '../assets/avatar.webp';
import { ApiTicker } from '../components/ApiTicker';
import { Magnetic } from '../components/Magnetic';
import { MaskLine } from '../components/MaskLine';
import { EASE } from '../utils/motion';
import { openWhatsApp } from '../utils/whatsapp';

export const Hero = ({ ready }: { ready: boolean }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: ready ? 1 : 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pb-10 pt-24 md:pt-28">
      <motion.div style={{ y, opacity }} className="container-x">
        <motion.div {...fadeIn(0.5)} className="mb-8 grid grid-cols-2 gap-4 md:mb-10 md:grid-cols-4">
          <p className="label">
            Backend &amp;
            <br />
            Full-Stack Developer
          </p>
          <p className="label">
            Delivering for
            <br />
            US clients
          </p>
          <p className="label hidden md:block">
            Java · Spring Boot
            <br />
            Microservices · React
          </p>
          <p className="label hidden text-right md:block">
            Portfolio
            <br />©{new Date().getFullYear()}
          </p>
        </motion.div>

        <h1 className="display-xl">
          {/* Name for search engines and screen readers; the visible headline stays as designed */}
          <span className="sr-only">Suryansh Pushpkar, Backend &amp; Full-Stack Developer: </span>
          <MaskLine play={ready} delay={0.1}>
            Backend engineer
          </MaskLine>
          <MaskLine play={ready} delay={0.2}>
            building <ApiTicker play={ready} /> <span className="serif-accent text-accent-ink">Spring Boot</span>
          </MaskLine>
          <MaskLine play={ready} delay={0.3}>
            systems that hold up.
          </MaskLine>
        </h1>

        <motion.div
          {...fadeIn(0.8)}
          className="mt-10 grid gap-8 border-t border-line pt-6 md:mt-12 md:grid-cols-12 md:items-center"
        >
          <div className="flex items-center gap-4 md:col-span-3">
            <img
              src={avatar}
              alt="Suryansh Pushpkar"
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-line"
            />
            <div className="space-y-1.5">
              <p className="text-sm font-semibold">Suryansh Pushpkar</p>
              <p className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="label text-ink">Available for freelance</span>
              </p>
            </div>
          </div>

          <p className="max-w-md leading-relaxed text-muted md:col-span-5">
            I build backend-heavy products, full-stack applications and scalable systems with Java, Spring Boot and
            React, for teams who want clean engineering and confident delivery.
          </p>

          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Magnetic>
              <button type="button" onClick={() => openWhatsApp('Consultation')} className="btn-accent">
                Book a consultation <ArrowUpRight size={16} />
              </button>
            </Magnetic>
            <a href="#work" className="btn-outline">
              View work
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
