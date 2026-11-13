import { FadeIn } from '../components/FadeIn';
import { MaskLine } from '../components/MaskLine';
import { SectionLabel } from '../components/SectionLabel';
import { SERVICES } from '../config/data';

export const Services = () => {
  return (
    <section id="services" className="py-14 md:py-20">
      <div className="container-x">
        <SectionLabel index="03">Services</SectionLabel>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-12">
          <h2 className="display-lg md:col-span-8">
            <MaskLine>What I can</MaskLine>
            <MaskLine delay={0.08}>
              <span className="serif-accent">help</span> you with
            </MaskLine>
          </h2>
          <FadeIn className="md:col-span-4 md:self-end">
            <p className="max-w-sm leading-relaxed text-muted">
              Practical engineering support, product-focused implementation, and delivery you can ship with.
            </p>
          </FadeIn>
        </div>

        <ul className="mt-10 border-t border-line md:mt-12">
          {SERVICES.map((service, index) => (
            <li key={service.title} className="group relative overflow-hidden border-b border-line">
              {/* Accent wash that rises from the bottom on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
              />
              <FadeIn
                delay={index * 0.05}
                className="relative grid gap-3 px-1 py-6 transition-colors duration-500 group-hover:text-on-accent md:grid-cols-12 md:items-center md:px-4 md:py-8"
              >
                <span className="label transition-colors duration-500 group-hover:text-on-accent md:col-span-1">
                  0{index + 1}
                </span>
                <h3 className="display-md transition-transform duration-500 group-hover:translate-x-3 md:col-span-6">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-muted transition-colors duration-500 group-hover:text-on-accent md:col-span-5">
                  {service.detail}
                </p>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
