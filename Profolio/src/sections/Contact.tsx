import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnetic } from '../components/Magnetic';
import { MaskLine } from '../components/MaskLine';
import { SectionLabel } from '../components/SectionLabel';
import { SOCIAL_LINKS } from '../config/data';
import { openWhatsApp } from '../utils/whatsapp';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL_LINKS.email.handle);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = SOCIAL_LINKS.email.url;
    }
  };

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="container-x">
        <SectionLabel index="04">Contact</SectionLabel>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:items-end">
          <h2 className="display-xl md:col-span-9">
            <MaskLine>Have a project</MaskLine>
            <MaskLine delay={0.08}>
              in <span className="serif-accent text-accent-ink">mind?</span>
            </MaskLine>
          </h2>

          <FadeIn className="flex md:col-span-3 md:justify-end">
            <Magnetic strength={0.4}>
              <button
                type="button"
                onClick={() => openWhatsApp('Consultation')}
                className="grid h-36 w-36 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-500 hover:scale-105 md:h-48 md:w-48"
              >
                <span className="flex items-center gap-1 text-lg font-semibold">
                  Let's talk <ArrowUpRight size={18} />
                </span>
              </button>
            </Magnetic>
          </FadeIn>
        </div>

        <FadeIn className="mt-16 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label">Email</p>
            <a
              href={SOCIAL_LINKS.email.url}
              className="link-draw mt-2 inline-block break-all text-2xl font-medium tracking-tight md:text-4xl"
            >
              {SOCIAL_LINKS.email.handle}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={copyEmail} className="btn-outline" aria-live="polite">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
            <button type="button" onClick={() => openWhatsApp('Consultation')} className="btn-outline">
              WhatsApp <ArrowUpRight size={16} />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
