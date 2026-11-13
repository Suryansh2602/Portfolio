import {
  AppWindow,
  Atom,
  BookOpen,
  Boxes,
  Coffee,
  Database,
  FileCode,
  FlaskConical,
  GitBranch,
  KeyRound,
  Leaf,
  Palette,
  Send,
  ShieldCheck,
  Waypoints,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SKILLS } from '../config/data';

const skillIcons: Record<string, LucideIcon> = {
  Java: Coffee,
  'Spring Boot': Leaf,
  Microservices: Boxes,
  React: Atom,
  Git: GitBranch,
  'Spring Security': ShieldCheck,
  Thymeleaf: FileCode,
  MySQL: Database,
  'Java Swing': AppWindow,
  'Spring Data JPA': Database,
  TypeScript: FileCode,
  PostgreSQL: Database,
  'Tailwind CSS': Palette,
  'JWT/OAuth': KeyRound,
  'RESTful APIs': Waypoints,
  'Testing Frameworks (JUnit, Mockito)': FlaskConical,
  Swagger: BookOpen,
  POSTMAN: Send,
};

const marqueeSkills = [...SKILLS, ...SKILLS];

export const Skills = () => {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Tools I use to ship reliable products"
            description="The technologies I work with across backend services, frontend interfaces, security, and testing."
          />
        </div>

        <div className="skills-marquee-shell bg-black/10">
          <div className="skills-marquee-track">
            {marqueeSkills.map((skill, index) => {
              const Icon = skillIcons[skill] ?? FileCode;

              return (
                <div
                  key={`${skill}-${index}`}
                  className="skills-marquee-item"
                  aria-hidden={index >= SKILLS.length}
                >
                  <span className="skills-marquee-icon">
                    <Icon size={18} />
                  </span>
                  <span>{skill}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
