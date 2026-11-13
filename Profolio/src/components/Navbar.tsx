import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <header className="site-nav">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="site-nav-mark">SP</span>
          <span className="hidden text-sm font-bold tracking-tight sm:inline">Suryansh Pushpkar</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="site-nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="site-nav-icon"
            aria-label={`Switch to ${nextTheme} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Visibility lives on wrappers: the unlayered .btn-* / .site-nav-icon display rules beat Tailwind's hidden */}
          <div className="hidden sm:block">
            <button type="button" onClick={() => openWhatsApp('Consultation')} className="btn-primary">
              Let's Talk
            </button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="site-nav-icon"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="site-nav-link block" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
