// src/components/ProjectCard.tsx
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  isFeatured?: boolean;
}

export const ProjectCard = ({ title, description, tags, isFeatured }: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between transition-all hover:shadow-xl ${
        isFeatured ? 'md:col-span-2 md:row-span-2 bg-linear-to-br from-blue-50 to-white' : ''
      }`}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-blue-600 rounded-2xl text-white">
            <Github size={20} />
          </div>
          <ExternalLink size={20} className="text-slate-400 hover:text-blue-600 cursor-pointer" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};