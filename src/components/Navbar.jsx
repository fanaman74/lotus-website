import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { key: 'nav.home', href: '#accueil' },
  { key: 'nav.menu', href: '#menu' },
  { key: 'nav.events', href: '#evenements' },
  { key: 'nav.info', href: '#informations' },
  { key: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-[400ms] ease-in-out ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#accueil"
          className="font-display uppercase tracking-[0.2em] text-xl text-text no-underline"
        >
          LOTUS
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
            >
              {t(link.key)}
            </a>
          ))}

          {/* Language toggle */}
          <div className="flex items-center gap-1 ml-4">
            {['fr', 'nl', 'en'].map((lng, idx) => (
              <span key={lng} className="flex items-center">
                {idx > 0 && <span className="text-text-muted mx-1">|</span>}
                <button
                  onClick={() => i18n.changeLanguage(lng)}
                  className={`text-xs uppercase tracking-wider transition-colors ${
                    i18n.language === lng ? 'text-accent' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {lng}
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-text transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-text transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg/98 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-display italic text-text hover:text-accent transition-colors"
            >
              {t(link.key)}
            </a>
          ))}

          <div className="flex items-center gap-3 mt-4">
            {['fr', 'nl', 'en'].map((lng) => (
              <button
                key={lng}
                onClick={() => { i18n.changeLanguage(lng); closeMenu(); }}
                className={`text-sm uppercase tracking-wider px-3 py-1 border ${
                  i18n.language === lng
                    ? 'border-accent text-accent'
                    : 'border-border text-text-muted'
                }`}
              >
                {lng}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
