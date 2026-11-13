import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { PROJECTS } from '../config/data';

export const Projects = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <SectionHeading
            align="left"
            eyebrow="Selected Work"
            title="Projects built around backend depth"
            description="Backend-first builds focused on clean APIs, sound service boundaries, and systems that scale. Scroll sideways to see them all."
          />
        </div>

        <div className="carousel-shell">
          <div className="carousel-fade carousel-fade-left" />
          <div className="carousel-fade carousel-fade-right" />

          <div className="carousel-track">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                isFeatured={index === 0}
                variant={index % 3 === 1 ? 'amber' : index % 3 === 2 ? 'rose' : 'cyan'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
