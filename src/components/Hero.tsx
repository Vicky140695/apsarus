import { ArrowDown } from 'lucide-react';
import { navigate } from '@/lib/navigation';

const HERO_IMAGE =
  'https://images.pexels.com/photos/1066171/pexels-photo-1066171.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Editorial fashion portrait"
          className="h-full w-full object-cover object-center opacity-75 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/20 to-ink-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 pb-10 pt-28 md:px-10 lg:px-16">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <span
            className="eyebrow-light animate-fade-in"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            A House of Brands
          </span>
          <span
            className="eyebrow-light hidden animate-fade-in md:block"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            Editorial / Collection
          </span>
        </div>

        {/* Center headline */}
        <div className="max-w-5xl">
          <h1
            className="display-xl text-[clamp(2.5rem,8vw,7rem)] text-cream-50 animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            A house of
            <br />
            <span className="italic text-rust-400">distinct</span> voices.
          </h1>
          <p
            className="mt-8 max-w-md text-sm leading-relaxed text-cream-100/70 animate-fade-up"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            APSARUS is a multi-brand fashion house — three labels under one
            vision, serving both the individual and the trade.
          </p>
        </div>

        {/* Bottom row — two entry points */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <button
            onClick={() => navigate('home')}
            className="eyebrow-light flex items-center gap-2 animate-fade-in hover:text-cream-50"
            style={{ animationDelay: '0.9s', opacity: 0 }}
          >
            <ArrowDown size={14} strokeWidth={1.5} className="animate-bounce" />
            Scroll to explore
          </button>

          <div
            className="flex items-center gap-6 animate-fade-in"
            style={{ animationDelay: '1s', opacity: 0 }}
          >
            <button
              onClick={() => navigate('retail')}
              className="group flex items-center gap-3"
            >
              <span className="eyebrow-light group-hover:text-cream-50">Retail</span>
              <span className="h-px w-8 bg-cream-100/30 transition-all duration-500 group-hover:w-12 group-hover:bg-cream-50" />
            </button>
            <button
              onClick={() => navigate('wholesale')}
              className="group flex items-center gap-3"
            >
              <span className="h-px w-8 bg-cream-100/30 transition-all duration-500 group-hover:w-12 group-hover:bg-cream-50" />
              <span className="eyebrow-light group-hover:text-cream-50">Wholesale</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
