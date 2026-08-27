import { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Package, Mail, Check } from 'lucide-react';
import { navigate } from '@/lib/navigation';

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

const BENEFITS = [
  'Dedicated trade pricing across all three labels',
  'Seasonal lookbooks and digital catalogues',
  'Flexible minimum order quantities',
  'Personal account manager for every partner',
];

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream-50">
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
          <span className="eyebrow">Wholesale</span>
          <h1 className="display-xl mt-4 text-[clamp(2.5rem,7vw,5rem)] text-ink-900">
            Stock the house <br />
            <span className="italic text-rust-500">in your store</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-600">
            APSARUS Wholesale partners with boutiques, concept stores and
            retailers who share our standard for craft. Open a trade account and
            carry our labels with confidence.
          </p>
        </div>
      </div>

      {/* Image + pillars */}
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-900 md:aspect-[5/6]">
            <img
              src={WHOLESALE_IMAGE}
              alt="Wholesale showroom"
              className="h-full w-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
          </div>

          {/* Pillars */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="border-t border-ink-900/15 pt-5">
                    <Icon size={20} strokeWidth={1.5} className="text-rust-500" />
                    <h3 className="mt-4 font-display text-xl font-light text-ink-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-600">
                      {pillar.body}
                    </p>
                  </div>
                );
              })}
            </div>

            <ul className="mt-12 flex flex-col gap-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center border border-rust-500/30">
                    <Check size={11} strokeWidth={2} className="text-rust-500" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Enquiry form */}
      <div className="bg-ink-900 py-20 text-cream-50 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — heading */}
            <div>
              <span className="eyebrow-light">Trade Enquiry</span>
              <h2 className="display-lg mt-4 text-[clamp(2rem,5vw,3.5rem)] text-cream-50">
                Open a trade <br />
                <span className="italic text-rust-400">account</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-100/70">
                Tell us about your store and the labels you are interested in.
                Our wholesale team will respond with next steps, catalogue
                access and trade pricing.
              </p>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="flex h-full flex-col items-start justify-center border border-cream-100/15 p-10">
                  <Check size={28} strokeWidth={1.5} className="text-rust-400" />
                  <h3 className="mt-6 font-display text-2xl font-light text-cream-50">
                    Enquiry received
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-100/60">
                    Thank you for your interest in APSARUS Wholesale. Our team
                    will be in touch shortly with next steps.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="eyebrow-light mt-8 link-underline hover:text-cream-50"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field label="Name" name="name" type="text" />
                    <Field label="Store / Business" name="store" type="text" />
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <label className="eyebrow-light mb-2 block">
                      Labels of interest
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['BUBEE', 'AKSITA', 'Honey Badger Outfits'].map((label) => (
                        <label
                          key={label}
                          className="flex cursor-pointer items-center gap-2 border border-cream-100/20 px-4 py-2 text-xs text-cream-100/70 transition-colors hover:border-cream-100/50"
                        >
                          <input type="checkbox" className="accent-rust-500" />
                          {label}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="eyebrow-light mb-2 block" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your store..."
                      className="w-full resize-none border-b border-cream-100/20 bg-transparent pb-3 text-sm text-cream-50 placeholder:text-cream-100/30 focus:border-cream-50 focus:outline-none"
                    />
                  </div>
                  <button type="submit" className="btn-ghost-light group w-fit">
                    Submit Enquiry
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) {
  return (
    <div>
      <label className="eyebrow-light mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full border-b border-cream-100/20 bg-transparent pb-3 text-sm text-cream-50 placeholder:text-cream-100/30 focus:border-cream-50 focus:outline-none"
      />
    </div>
  );
}
