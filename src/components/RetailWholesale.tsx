import { ArrowUpRight } from 'lucide-react';
import { navigate } from '@/lib/navigation';

const RETAIL_IMAGE =
  'https://images.pexels.com/photos/25194063/pexels-photo-25194063.jpeg?auto=compress&cs=tinysrgb&w=1200';
const WHOLESALE_IMAGE =
  'https://images.pexels.com/photos/9594684/pexels-photo-9594684.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function RetailWholesale() {
  return (
    <section id="retail" className="bg-cream-50">
      {/* Section header */}
      <div className="mx-auto max-w-[1600px] px-6 pt-20 md:px-10 md:pt-32 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">01 — Two Paths</span>
            <h2 className="display-lg mt-4 text-[clamp(2rem,5vw,3.5rem)] text-ink-900">
              Choose your <span className="italic">way in</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-600">
            Whether you are shopping for yourself or stocking your shelves,
            APSARUS opens two distinct doors into the house.
          </p>
        </div>
      </div>

      {/* Split entry — editorial, no card borders */}
      <div className="mx-auto mt-16 max-w-[1600px] md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Retail */}
          <button
            onClick={() => navigate('retail')}
            className="group relative block aspect-[4/5] w-full overflow-hidden bg-ink-900 text-left md:aspect-[3/4] lg:aspect-[4/5]"
          >
            <img
              src={RETAIL_IMAGE}
              alt="Retail collection"
              className="h-full w-full object-cover opacity-85 transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent transition-opacity duration-700 group-hover:from-ink-900/70" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <span className="eyebrow-light mb-4">For Individuals</span>
              <h3 className="display-lg text-[clamp(1.75rem,4vw,3rem)] text-cream-50">
                Retail
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/70">
                Explore our three labels — kidswear, womenswear and menswear —
                curated for the individual.
              </p>
              <span className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest-2 text-cream-50 transition-colors group-hover:text-rust-400">
                Discover the brands
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </div>
          </button>

          {/* Wholesale */}
          <button
            onClick={() => navigate('wholesale')}
            className="group relative block aspect-[4/5] w-full overflow-hidden bg-rust-600 text-left md:aspect-[3/4] lg:aspect-[4/5]"
          >
            <img
              src={WHOLESALE_IMAGE}
              alt="Wholesale showroom"
              className="h-full w-full object-cover opacity-65 mix-blend-multiply transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rust-700/90 via-rust-600/20 to-transparent transition-opacity duration-700 group-hover:from-rust-700/80" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <span className="eyebrow-light mb-4">For Partners</span>
              <h3 className="display-lg text-[clamp(1.75rem,4vw,3rem)] text-cream-50">
                Wholesale
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/70">
                Stock our labels in your store. Dedicated trade pricing,
                catalogues, and account support.
              </p>
              <span className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest-2 text-cream-50 transition-colors group-hover:text-cream-200">
                Apply for trade access
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
