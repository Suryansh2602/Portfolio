import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { MaskLine } from '../components/MaskLine';
import { SectionLabel } from '../components/SectionLabel';
import { PROJECTS, SOCIAL_LINKS, type Project } from '../config/data';

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
  const content = (
    <FadeIn className="grid gap-5 py-8 md:grid-cols-12 md:gap-6 md:py-10">
      <span className="label pt-2 md:col-span-1">{String(index + 1).padStart(2, '0')}</span>

      <div className="md:col-span-6">
        <h3 className="display-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
          {project.title}
        </h3>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">{project.description}</p>
      </div>

      <div className="md:col-span-4">
        <p className="label text-ink">{project.type}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] text-muted">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex md:col-span-1 md:justify-end">
        {project.github ? (
          <span className="grid h-12 w-12 place-items-center rounded-full border border-line transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
          </span>
        ) : (
          <span className="label pt-2">No public repo</span>
        )}
      </div>
    </FadeIn>
  );

  return (
    <li className="group border-b border-line">
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="Code"
          aria-label={`${project.title}: view source on GitHub`}
          className="block"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
};

export const Work = () => {
  return (
    <section id="work" className="py-14 md:py-20">
      <div className="container-x">
        <SectionLabel index="05" aside={`${String(PROJECTS.length).padStart(2, '0')} Projects`}>
          Selected work
        </SectionLabel>

        <h2 className="display-lg mt-8 md:mt-10">
          <MaskLine>Things I've</MaskLine>
          <MaskLine delay={0.08}>
            <span className="serif-accent">built</span>
          </MaskLine>
        </h2>

        <ul className="mt-10 border-t border-line md:mt-12">
          {PROJECTS.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </ul>

        <FadeIn className="mt-10">
          <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};
