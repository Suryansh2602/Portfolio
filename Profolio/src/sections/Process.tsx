import { FadeIn } from '../components/FadeIn';
import { MaskLine } from '../components/MaskLine';
import { SectionLabel } from '../components/SectionLabel';
import { PROCESS } from '../config/data';

export const Process = () => {
  return (
    <section id="process" className="py-28 md:py-40">
      <div className="container-x">
        <SectionLabel index="06">Process</SectionLabel>

        <h2 className="display-lg mt-12 md:mt-16">
          <MaskLine>How I</MaskLine>
          <MaskLine delay={0.08}>
            <span className="serif-accent">work</span>
          </MaskLine>
        </h2>

        {/* gap-px over a line-coloured background draws the hairline grid */}
        <ol className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <li key={step.title} className="bg-bg transition-colors duration-300 hover:bg-bg-elevated">
              <FadeIn delay={index * 0.08} className="flex h-full min-h-64 flex-col justify-between gap-10 p-6 md:p-8">
                <span className="label text-accent-ink">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.detail}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
