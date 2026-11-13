import { ArrowRight, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../config/data';
import { openWhatsApp } from '../utils/whatsapp';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export const Footer = () => {
  return (
    <footer id="contact" className="relative px-4 pb-32 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="contact-card">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Whether it's a new backend, a full-stack build, or a system that needs fixing, I'm happy to talk it
              through.
            </p>
            <a
              href={SOCIAL_LINKS.email.url}
              className="mt-4 inline-block text-sm font-semibold text-cyan-600 underline-offset-4 hover:underline"
            >
              {SOCIAL_LINKS.email.handle}
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <button type="button" onClick={() => openWhatsApp('Consultation')} className="btn-primary">
              Chat on WhatsApp <ArrowRight size={16} />
            </button>
            <a href={SOCIAL_LINKS.email.url} className="btn-secondary">
              <Mail size={16} /> Email me
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Suryansh Pushpkar. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a
              href={SOCIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav-icon"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav-icon"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href={SOCIAL_LINKS.email.url} className="site-nav-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
