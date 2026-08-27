import { ArrowUpRight } from 'lucide-react';
import { type Route, navigate, scrollToSection } from '@/lib/navigation';

type FooterLink = {
  label: string;
  route?: Route;
  section?: string;
};

type FooterSection = {
  heading: string;
  links: FooterLink[];
};

const FOOTER_SECTIONS: FooterSection[] = [
  {
    heading: 'Retail',
    links: [
      { label: 'BUBEE — Kidswear', route: 'retail' },
      { label: 'AKSITA — Womenswear', route: 'retail' },
      { label: 'Honey Badger — Menswear', route: 'retail' },
    ],
  },
  {
    heading: 'Wholesale',
    links: [
      { label: 'Trade Access', route: 'wholesale' },
      { label: 'Catalogue', route: 'wholesale' },
      { label: 'Partner Support', route: 'wholesale' },
    ],
  },
  {
    heading: 'House',
    links: [
      { label: 'Our Story', section: 'story' },
      { label: 'The Brands', section: 'brands' },
      { label: 'Contact', section: 'story' },
    ],
  },
];

export default function Footer() {
  const handleLink = (link: FooterLink) => {
    if (link.route) {
      navigate(link.route);
    } else if (link.section) {
      scrollToSection(link.section);
    }
  };

  return (
    <footer className="bg-ink-900 text-cream-100">
      {/* Top CTA band */}
      <div className="border-b border-cream-100/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center md:px-10 lg:px-16">
          <h2 className="display-lg text-[clamp(1.75rem,4vw,3rem)] text-cream-50">
            Step into the house.
          </h2>
          <button
            onClick={() => navigate('retail')}
            className="btn-ghost-light group"
          >
            Explore Retail
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <button
              onClick={() => navigate('home')}
              className="font-display text-2xl tracking-[0.25em] text-cream-50"
            >
              APSARUS
            </button>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/50">
              A multi-brand fashion house. Three labels, two paths — retail and
              wholesale — one standard of craft.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.heading} className="md:col-span-2">
              <h4 className="eyebrow-light mb-5">{section.heading}</h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLink(link)}
                      className="link-underline text-left text-sm text-cream-100/60 transition-colors hover:text-cream-50"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="eyebrow-light mb-5">Newsletter</h4>
            <p className="mb-4 text-sm leading-relaxed text-cream-100/50">
              Seasonal updates from the house.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="border-b border-cream-100/20 bg-transparent pb-2 text-sm text-cream-50 placeholder:text-cream-100/30 focus:border-cream-50 focus:outline-none"
              />
              <button
                type="submit"
                className="eyebrow-light w-fit text-cream-50 transition-colors hover:text-rust-400"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream-100/10 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-widest-2 text-cream-100/40">
            © {new Date().getFullYear()} APSARUS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-[11px] uppercase tracking-widest-2 text-cream-100/40 transition-colors hover:text-cream-50">
              Privacy
            </a>
            <a href="#" className="font-mono text-[11px] uppercase tracking-widest-2 text-cream-100/40 transition-colors hover:text-cream-50">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
