import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { type Route, navigate, scrollToSection } from '@/lib/navigation';

type NavItem = {
  label: string;
  route?: Route;
  section?: string;
};

const NAV_LINKS: NavItem[] = [
  { label: 'Retail', route: 'retail' },
  { label: 'Wholesale', route: 'wholesale' },
  { label: 'Our Brands', section: 'brands' },
  { label: 'The House', section: 'story' },
];

type Props = {
  route: Route;
};

export default function Navbar({ route }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // On home route, hero is dark so text starts light; on sub-pages, starts dark
  const onHome = route === 'home';
  const useLight = onHome && !scrolled;

  const handleNav = (item: NavItem) => {
    setOpen(false);
    if (item.route) {
      navigate(item.route);
    } else if (item.section) {
      scrollToSection(item.section);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-cream-50/90 backdrop-blur-md border-b border-ink-900/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          <button
            onClick={() => handleNav({ label: 'APSARUS', route: 'home' })}
            className={`font-display text-xl tracking-[0.25em] transition-colors duration-500 ${
              useLight ? 'text-cream-50' : 'text-ink-900'
            }`}
          >
            APSARUS
          </button>

          <div className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link)}
                className={`link-underline font-mono text-[11px] uppercase tracking-widest-2 transition-colors duration-500 ${
                  useLight
                    ? 'text-cream-100/80 hover:text-cream-50'
                    : 'text-ink-700 hover:text-ink-900'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav({ label: 'Trade Access', route: 'wholesale' })}
              className={`inline-flex items-center gap-3 border px-8 py-4 font-mono text-[11px] uppercase tracking-widest-2 transition-all duration-500 ${
                useLight
                  ? 'border-cream-100/30 text-cream-50 hover:bg-cream-50 hover:text-ink-900'
                  : 'border-ink-900/20 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50'
              }`}
            >
              Trade Access
            </button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden transition-colors duration-500 ${
              useLight ? 'text-cream-50' : 'text-ink-900'
            }`}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink-900 transition-opacity duration-500 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <button
            onClick={() => handleNav({ label: 'APSARUS', route: 'home' })}
            className="font-display text-xl tracking-[0.25em] text-cream-50"
          >
            APSARUS
          </button>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-cream-50">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-12 flex flex-col gap-2 px-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className="border-b border-cream-100/10 py-5 text-left font-display text-3xl font-light text-cream-50 transition-colors hover:text-rust-400"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav({ label: 'Trade Access', route: 'wholesale' })}
            className="mt-8 inline-flex w-fit items-center border border-cream-100/30 px-8 py-4 font-mono text-[11px] uppercase tracking-widest-2 text-cream-50"
          >
            Trade Access
          </button>
        </div>
      </div>
    </>
  );
}
