// src/sections/Skills.tsx
import { motion } from 'framer-motion';
import { SKILLS } from '../config/data';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 }
};

export const Skills = () => {
  return (
    <section className="py-20 px-4">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
      >
        {SKILLS.map((skill) => (
          <motion.span 
            key={skill}
            variants={item}
            className="px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-medium cursor-default hover:bg-blue-600 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};