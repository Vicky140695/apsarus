import { ArrowRight, BookOpen, Package, Mail } from 'lucide-react';

const WHOLESALE_IMAGE =
  'https://images.pexels.com/photos/11911863/pexels-photo-11911863.jpeg?auto=compress&cs=tinysrgb&w=1400';

const PILLARS = [
  {
    icon: BookOpen,
    title: 'Catalogue',
    body: 'Seasonal lookbooks and digital catalogues across all three labels — BUBEE, AKSITA and Honey Badger Outfits.',
  },
  {
    icon: Package,
    title: 'MOQ',
    body: 'Flexible minimum order quantities designed for boutiques and concept stores of every scale.',
  },
  {
    icon: Mail,
    title: 'Enquiry',
    body: 'A dedicated account manager guides every partner through onboarding, ordering and delivery.',
  },
];

export default function Wholesale() {
  return (
    <section id="wholesale" className="relative overflow-hidden bg-ink-900 py-20 text-cream-50 md:py-32">
      {/* Subtle decorative circles */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full border border-cream-100" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full border border-cream-100" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — image */}
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <img
              src={WHOLESALE_IMAGE}
              alt="Wholesale showroom"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="eyebrow-light">03 — Trade Division</span>
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col justify-center">
            <span className="eyebrow-light">For Partners</span>
            <h2 className="display-lg mt-4 text-[clamp(2rem,5vw,3.75rem)] text-cream-50">
              Stock the house <br />
              <span className="italic text-rust-400">in your store</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-100/70">
              APSARUS Wholesale partners with boutiques, concept stores and
              retailers who share our standard for craft. Open a trade account
              and carry our labels with confidence.
            </p>

            {/* Three pillars — Catalogue, MOQ, Enquiry */}
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="border-t border-cream-100/15 pt-5">
                    <Icon size={20} strokeWidth={1.5} className="text-rust-400" />
                    <h3 className="mt-4 font-display text-xl font-light text-cream-50">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-cream-100/60">
                      {pillar.body}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#wholesale" className="btn-ghost-light group">
                Apply for Trade Access
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </a>
              <a href="#story" className="eyebrow-light link-underline hover:text-cream-50">
                Learn about the house
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
