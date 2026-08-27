import { ArrowUpRight } from 'lucide-react';
import { navigate } from '@/lib/navigation';

type Brand = {
  name: string;
  fullName: string;
  tagline: string;
  category: string;
  description: string;
  image: string;
  accent: 'rust' | 'olive' | 'ink';
};

const BRANDS: Brand[] = [
  {
    name: 'BUBEE',
    fullName: 'BUBEE',
    tagline: 'Little worlds, big imagination',
    category: 'Kidswear',
    description:
      'Playful, comfortable clothing crafted for the everyday adventures of childhood.',
    image:
      'https://images.pexels.com/photos/35078823/pexels-photo-35078823.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'olive',
  },
  {
    name: 'AKSITA',
    fullName: 'AKSITA',
    tagline: 'Quiet confidence, considered design',
    category: "Women's Wear",
    description:
      'Elegant silhouettes and refined fabrics for the modern woman.',
    image:
      'https://images.pexels.com/photos/17228223/pexels-photo-17228223.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'rust',
  },
  {
    name: 'HONEY BADGER',
    fullName: 'HONEY BADGER OUTFITS',
    tagline: 'Built for the bold',
    category: "Men's Wear",
    description:
      'Tailored, durable essentials with a contemporary edge for the modern man.',
    image:
      'https://images.pexels.com/photos/6765639/pexels-photo-6765639.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: 'ink',
  },
];

const accentClasses: Record<Brand['accent'], string> = {
  rust: 'text-rust-500',
  olive: 'text-olive-500',
  ink: 'text-ink-700',
};

export default function Brands() {
  return (
    <section id="brands" className="bg-cream-100 py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">02 — The Labels</span>
            <h2 className="display-lg mt-4 text-[clamp(2rem,5vw,3.5rem)] text-ink-900">
              Three brands, <span className="italic">one house</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-600">
            Each label carries its own voice and vision, yet all are bound by a
            shared commitment to craft.
          </p>
        </div>

        {/* Three brand cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {BRANDS.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  return (
    <button
      onClick={() => navigate('retail')}
      className="group flex flex-col text-left"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-ink-900">
        <img
          src={brand.image}
          alt={brand.fullName}
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink-900/10 transition-opacity duration-700 group-hover:bg-ink-900/0" />
        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest-2 text-cream-50 mix-blend-difference">
          {String(index + 1).padStart(2, '0')} / 03
        </span>
      </div>

      {/* Text */}
      <div className="pt-6">
        <span className={`eyebrow ${accentClasses[brand.accent]}`}>
          {brand.category}
        </span>
        <h3 className="mt-3 font-display text-2xl font-light leading-tight text-ink-900 md:text-3xl">
          {brand.fullName}
        </h3>
        <p className="mt-2 font-display text-lg italic font-light text-ink-600">
          {brand.tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink-600">
          {brand.description}
        </p>
        <span className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest-2 text-ink-900 transition-colors group-hover:text-rust-500">
          Explore {brand.name}
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </span>
      </div>
    </button>
  );
}
