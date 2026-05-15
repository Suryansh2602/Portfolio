import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCE } from '../config/data';
import { Reveal } from '../components/Reveal';

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 85%", "end 20%"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={containerRef}
            className="relative px-4 py-28 overflow-hidden"
        >


            <div className="mx-auto max-w-5xl relative">

                {/* HEADER */}
                <div className="mb-20 text-center">
                    <Reveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-500/80">
                            Career Timeline
                        </p>
                    </Reveal>

                    <Reveal>
                        <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
                            Experience that builds products
                        </h2>
                    </Reveal>

                    <Reveal>
                        <p className="mt-4 text-sm text-slate-500 max-w-xl mx-auto">
                            A smooth scroll journey through my engineering experience.
                        </p>
                    </Reveal>
                </div>

                {/* TIMELINE WRAPPER */}
                <div className="relative">

                    {/* static line */}
                    <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/5" />

                    {/* animated line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-4 md:left-1/2 top-0 w-[2px] -translate-x-1/2 origin-top
                       bg-gradient-to-b from-cyan-400 via-blue-500 to-fuchsia-500
                       shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                    />

                    <div className="space-y-24">

                        {EXPERIENCE.map((item, index) => (
                            <motion.div
                                key={`${item.company}-${item.role}`}

                                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.35 }}

                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: index * 0.06
                                }}

                                className="relative"
                            >

                                {/* DOT */}
                                <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-20">
                                    <div className="h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                                </div>

                                {/* CARD */}
                                <article
                                    className={`
                    relative group
                    w-[calc(100%-2rem)] md:w-[44%]
                    ml-8 md:ml-0
                    ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}

                    rounded-3xl p-6 md:p-8

                    bg-white/5 backdrop-blur-2xl

                    /* ONLY inner depth */
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]

                    overflow-hidden
                    transition-all duration-300
                    hover:-translate-y-2
                  `}
                                >

                                    {/* internal glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                                        <div className="absolute -top-12 -left-12 h-52 w-52 bg-cyan-400/10 blur-3xl rounded-full" />
                                        <div className="absolute bottom-0 right-0 h-52 w-52 bg-pink-400/10 blur-3xl rounded-full" />
                                    </div>

                                    {/* content */}
                                    <div className="relative flex flex-col gap-4">

                                        {/* top row */}
                                        <div className="flex items-start justify-between gap-4">

                                            <div>
                                                <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-cyan-500 transition-colors">
                                                    {item.role}
                                                </h3>

                                                <p className="text-sm font-semibold text-slate-500 mt-1">
                                                    {item.company}
                                                </p>
                                            </div>

                                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-600 bg-white/10 px-3 py-1 rounded-full">
                                                {item.duration}
                                            </span>

                                        </div>

                                        {/* description */}
                                        <p className="text-sm leading-7 text-slate-600">
                                            {item.details}
                                        </p>

                                    </div>

                                </article>

                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}