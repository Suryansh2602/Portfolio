import { FadeIn } from '../components/FadeIn';
import { MaskLine } from '../components/MaskLine';
import { SectionLabel } from '../components/SectionLabel';
import { PROCESS } from '../config/data';

export const Process = () => {
  return (
    <section id="process" className="py-14 md:py-20">
      <div className="container-x">
        <SectionLabel index="04">Process</SectionLabel>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-12">
          <h2 className="display-lg md:col-span-8">
            <MaskLine>How I</MaskLine>
            <MaskLine delay={0.08}>
              <span className="serif-accent">work</span>
            </MaskLine>
          </h2>
          <FadeIn className="md:col-span-4 md:self-end">
            <p className="max-w-sm leading-relaxed text-muted">
              I follow Agile and Scrum: work happens in short sprints, each ending with a demo and your feedback, so
              you're never left guessing where things stand.
            </p>
          </FadeIn>
        </div>

        {/* gap-px over a line-coloured background draws the hairline grid */}
        <ol className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <li key={step.title} className="bg-bg transition-colors duration-300 hover:bg-bg-elevated">
              {/* Delay is capped per row so the second row of steps doesn't wait for the first */}
              <FadeIn
                delay={(index % 4) * 0.08}
                className="flex h-full min-h-44 flex-col justify-between gap-6 p-6 md:min-h-52 md:p-8"
              >
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
