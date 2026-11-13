import { SKILLS } from '../config/data';

// Doubled list so the -50% marquee loop is seamless; the copy is hidden from screen readers.
const marqueeSkills = [...SKILLS, ...SKILLS];

export const Skills = () => {
  return (
    <section aria-label="Tech stack" className="overflow-hidden border-y border-line py-8 md:py-10">
      <ul className="marquee-track">
        {marqueeSkills.map((skill, index) => (
          <li
            key={`${skill}-${index}`}
            aria-hidden={index >= SKILLS.length}
            className="display-md flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 md:gap-12 md:pr-12"
          >
            <span className={index % 2 === 1 ? 'serif-accent text-muted' : ''}>{skill}</span>
            <span aria-hidden="true" className="text-[0.5em] text-accent-ink">
              ✦
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
