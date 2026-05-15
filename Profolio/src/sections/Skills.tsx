import { Code2, Database, Layers3, ShieldCheck, Waypoints, Workflow } from 'lucide-react';
import { SKILLS } from '../config/data';

const skillIcons = [
  Code2,
  Workflow,
  Waypoints,
  Layers3,
  Database,
  ShieldCheck,
];

const marqueeSkills = [...SKILLS, ...SKILLS];

export const Skills = () => {
  return (
    <section className="py-10">
      <div className="skills-marquee-shell bg-black/10">
        <div className="skills-marquee-track">
          {marqueeSkills.map((skill, index) => {
            const Icon = skillIcons[index % skillIcons.length];

            return (
              <div key={`${skill}-${index}`} className="skills-marquee-item">
                <span className="skills-marquee-icon">
                  <Icon size={18} />
                </span>
                <span>{skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
