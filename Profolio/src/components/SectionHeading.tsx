import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
}

export const SectionHeading = ({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
  </div>
);
