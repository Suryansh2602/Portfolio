import { motion } from 'framer-motion';
import profilePhoto from '../assets/{2E6CF1C9-643E-4572-9B0E-280814498F85}.png';
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
];

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 py-24">
      <motion.div
        animate={{ x: [0, 20, -10, 0], y: [0, -24, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left--8rem top-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right--4rem top-12 h-96 w-96 rounded-full bg-amber-200/35 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <div className="mb-6 inline-flex rounded-full border border-cyan-950/10 bg-white/75 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm backdrop-blur-sm">
            Freelance + full-time software delivery
          </div>

          <p className="mb-3 font-mono text-sm uppercase tracking-[0.35em] text-cyan-700">Hi, my name is</p>
          <h1 className="text-6xl font-black tracking-tight text-slate-950 md:text-8xl">
            Suryansh
          </h1>
          <h2 className="mt-1 text-4xl font-black tracking-tight text-slate-700 md:text-6xl">
            Pushpkar
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:mx-0">
            I build backend-heavy products, full-stack applications, and scalable systems for teams
            and clients who want clean engineering and confident delivery.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openWhatsApp('Development')}
              className="group relative rounded-full bg-white px-10 py-4 text-sm font-black uppercase tracking-widest text-slate-950 transition-all hover:bg-cyan-400"
            >
              Book Consultancy
            </motion.button>

            <div className="relative max-w-xs text-center sm:text-left">
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                <strong className="text-slate-900 dark:text-white">Expertise in</strong> Backend architecture,
                freelance builds, and product consulting.
              </p>
              {/* Subtle accent line */}
              <div className="absolute -left-4 top-0 hidden h-full w-1px  from-transparent  via-cyan-500 to-transparent lg:block" />
            </div>
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
              <h3 className="mt-2 text-3xl font-black text-slate-950">Services that teams actually need</h3>
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
                <p className="text-lg font-bold text-slate-950">{service.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{service.detail}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
