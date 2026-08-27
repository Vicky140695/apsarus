import { ArrowUpRight, ArrowLeft } from 'lucide-react';
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
      'Playful, comfortable clothing crafted for the everyday adventures of childhood. Soft fabrics, thoughtful cuts and a palette that feels warm and alive.',
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
      'Elegant silhouettes and refined fabrics for the modern woman. Pieces designed to move with ease and hold their form season after season.',
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
      'Tailored, durable essentials with a contemporary edge for the modern man. Garments that carry weight, structure and a quiet kind of confidence.',
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

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header spacer */}
      <div className="h-20" />

      {/* Page header */}
      <div className="mx-auto max-w-[1600px] px-6 pt-12 md:px-10 lg:px-16">
        <button
          onClick={() => navigate('home')}
          className="eyebrow flex items-center gap-2 text-ink-600 transition-colors hover:text-ink-900"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to home
        </button>

        <div className="mt-10 max-w-3xl">
          <span className="eyebrow">Retail</span>
          <h1 className="display-xl mt-4 text-[clamp(2.5rem,7vw,5rem)] text-ink-900">
            Three labels, <span className="italic">one wardrobe</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-600">
            Explore the APSARUS retail family — kidswear, womenswear and
            menswear, each with its own distinct voice. Full collections and
            shopping experiences are coming soon.
          </p>
        </div>
      </div>

      {/* Brand showcase — alternating editorial rows */}
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="flex flex-col gap-20 md:gap-28">
          {BRANDS.map((brand, i) => (
            <BrandRow key={brand.name} brand={brand} index={i} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-ink-900/10 bg-cream-100">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center md:px-10 lg:px-16">
          <div>
            <h2 className="display-lg text-[clamp(1.75rem,4vw,3rem)] text-ink-900">
              Interested in stocking these?
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-600">
              Explore our wholesale division for trade pricing and catalogues.
            </p>
          </div>
          <button onClick={() => navigate('wholesale')} className="btn-ghost group">
            Wholesale Division
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function BrandRow({ brand, index }: { brand: Brand; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <article className="group grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
      {/* Image */}
      <div className={`relative ${isReversed ? 'md:order-2 md:col-span-7' : 'md:col-span-7'}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-ink-900 md:aspect-[5/4]">
          <img
            src={brand.image}
            alt={brand.fullName}
            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink-900/10 transition-opacity duration-700 group-hover:bg-ink-900/0" />
        </div>
        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest-2 text-cream-50 mix-blend-difference">
          {String(index + 1).padStart(2, '0')} / 03
        </span>
      </div>

      {/* Text */}
      <div
        className={
          isReversed
            ? 'md:order-1 md:col-span-5 md:pr-8'
            : 'md:col-span-5 md:pl-4'
        }
      >
        <span className={`eyebrow ${accentClasses[brand.accent]}`}>
          {brand.category}
        </span>
        <h3 className="display-lg mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-ink-900">
          {brand.fullName}
        </h3>
        <p className="mt-3 font-display text-xl italic font-light text-ink-600">
          {brand.tagline}
        </p>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-600">
          {brand.description}
        </p>
        <span className="eyebrow mt-8 flex items-center gap-2 text-ink-900">
          Collection coming soon
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </span>
      </div>
    </article>
  );
}
