// src/components/ProjectCard.tsx
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';


interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  isFeatured?: boolean;
  variant?: 'cyan' | 'amber' | 'rose';
}

export const ProjectCard = ({ title, description, tags, isFeatured, variant = 'cyan' }: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`project-card project-card-${variant} group relative flex min-h-[24rem] w-[20rem] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[2rem] border border-white/55 p-6  md:w-[24rem] ${
        isFeatured
          ? 'project-card-featured bg-linear-to-br from-cyan-100 via-white to-amber-50 md:w-[30rem]'
          : 'bg-white/78 backdrop-blur-sm'
      }`}
    >
      <div className="project-card-overlay absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="project-card-orb absolute -right-12 top-8 h-28 w-28 rounded-full blur-2xl" />

      <div>
        <div className="mb-6">
          <div className="rounded-2xl bg-slate-950 p-3 text-white shadow-lg">
            <Code size={20} />
          </div>
        </div>
        <p className="project-card-kicker mb-3 text-xs font-semibold uppercase tracking-[0.3em]">
          {isFeatured ? 'Featured Build' : 'Project Snapshot'}
        </p>
        <h3 className="mb-3 text-2xl font-black text-slate-900">{title}</h3>
        <p className="mb-6 text-sm leading-7 text-slate-600">{description}</p>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200/80 bg-white/75 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
