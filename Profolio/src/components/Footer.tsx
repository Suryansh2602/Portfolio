import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../config/data';
import { useLocalTime } from '../hooks/useLocalTime';
import { EASE } from '../utils/motion';
import { openWhatsApp } from '../utils/whatsapp';

export const Footer = () => {
  const time = useLocalTime();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line pt-16">
      <div className="container-x grid grid-cols-2 gap-10 pb-16 md:grid-cols-4">
        <div>
          <p className="label">Contact</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={SOCIAL_LINKS.email.url} className="link-draw">
                Email
              </a>
            </li>
            <li>
              <button type="button" onClick={() => openWhatsApp('Consultation')} className="link-draw">
                WhatsApp
              </button>
            </li>
          </ul>
        </div>

        <div>
          <p className="label">Social</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noopener noreferrer" className="link-draw">
                GitHub
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.linkedin.url} target="_blank" rel="noopener noreferrer" className="link-draw">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="label">Local time</p>
          <p className="mt-4 tabular-nums">{time} IST</p>
        </div>

        <div className="md:text-right">
          <p className="label">Navigation</p>
          <a href="#home" className="link-draw mt-4 inline-block">
            Back to top ↑
          </a>
        </div>
      </div>

      <div className="container-x overflow-hidden">
        <motion.p
          aria-hidden="true"
          initial={{ y: '60%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="select-none whitespace-nowrap pb-[0.12em] text-[11.4vw] font-semibold leading-[0.9] tracking-[-0.06em]"
        >
          Suryansh Pushpkar
        </motion.p>
      </div>

      <div className="container-x mt-6 flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:justify-between">
        <span className="label">© {year} Suryansh Pushpkar</span>
        <span className="label">All rights reserved</span>
      </div>
    </footer>
  );
};
