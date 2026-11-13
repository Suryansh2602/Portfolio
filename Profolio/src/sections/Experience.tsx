import { FadeIn } from '../components/FadeIn';
import { MaskLine } from '../components/MaskLine';
import { SectionLabel } from '../components/SectionLabel';
import { EXPERIENCE } from '../config/data';

export function Experience() {
  return (
    <section id="experience" className="py-28 md:py-40">
      <div className="container-x">
        <SectionLabel index="05">Experience</SectionLabel>

        <h2 className="display-lg mt-12 md:mt-16">
          <MaskLine>Where I've</MaskLine>
          <MaskLine delay={0.08}>
            <span className="serif-accent">worked</span>
          </MaskLine>
        </h2>

        <ol className="mt-16 border-t border-line md:mt-20">
          {EXPERIENCE.map((item, index) => (
            <li key={`${item.company}-${item.role}`} className="border-b border-line">
              <FadeIn delay={index * 0.04} className="grid gap-3 py-8 md:grid-cols-12 md:gap-6 md:py-10">
                <p className="label pt-1.5 md:col-span-3">{item.duration}</p>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-medium tracking-tight">{item.role}</h3>
                  <p className="mt-1 text-muted">{item.company}</p>
                </div>
                <p className="leading-relaxed text-muted md:col-span-5">{item.details}</p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
