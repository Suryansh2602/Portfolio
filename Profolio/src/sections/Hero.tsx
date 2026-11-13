import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import profilePhoto from '../assets/removebg-preview.png';
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
    <section id="home" ref={ref} className="relative flex min-h-svh flex-col justify-end overflow-hidden pb-10 pt-28">
      <motion.div style={{ y, opacity }} className="container-x">
        <motion.div {...fadeIn(0.5)} className="mb-10 grid grid-cols-2 gap-4 md:mb-14 md:grid-cols-4">
          <p className="label">Suryansh Pushpkar</p>
          <p className="label">
            Software Developer
            <br />@ Webkorps
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
          <MaskLine play={ready} delay={0.1}>
            Backend engineer
          </MaskLine>
          <MaskLine play={ready} delay={0.2}>
            building{' '}
            <motion.span
              aria-hidden="true"
              initial={{ width: 0 }}
              animate={{ width: ready ? '1.5em' : 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.9 }}
              className="inline-block h-[0.72em] overflow-hidden rounded-full bg-accent align-[-0.04em]"
            >
              <img src={profilePhoto} alt="" className="h-full w-[1.5em] max-w-none object-cover object-[50%_30%]" />
            </motion.span>{' '}
            <span className="serif-accent text-accent-ink">Spring Boot</span>
          </MaskLine>
          <MaskLine play={ready} delay={0.3}>
            systems that hold up.
          </MaskLine>
        </h1>

        <motion.div
          {...fadeIn(0.8)}
          className="mt-12 grid gap-8 border-t border-line pt-6 md:mt-16 md:grid-cols-12 md:items-end"
        >
          <p className="flex items-center gap-3 md:col-span-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="label text-ink">Available for freelance work</span>
          </p>

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
