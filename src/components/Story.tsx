const STORY_IMAGE =
  'https://images.pexels.com/photos/7998234/pexels-photo-7998234.jpeg?auto=compress&cs=tinysrgb&w=1400';
const DETAIL_IMAGE =
  'https://images.pexels.com/photos/6276056/pexels-photo-6276056.jpeg?auto=compress&cs=tinysrgb&w=800';

const PILLARS = [
  {
    title: 'Craft',
    body: 'Every garment begins with the fabric — sourced, tested and cut with intention.',
  },
  {
    title: 'Vision',
    body: 'Three labels, each with a distinct point of view, united under a single standard.',
  },
  {
    title: 'Partnership',
    body: 'From individual customers to retail partners, we build relationships that last.',
  },
];

export default function Story() {
  return (
    <section id="story" className="bg-cream-50 py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow">04 — The House</span>
          <h2 className="display-lg mt-4 text-[clamp(2rem,5vw,3.5rem)] text-ink-900">
            A house built on <span className="italic">standards</span>, not trends
          </h2>
        </div>

        {/* Two-image editorial layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          <div className="relative aspect-[4/3] overflow-hidden bg-ink-900 md:col-span-8 md:aspect-[16/10]">
            <img
              src={STORY_IMAGE}
              alt="Atelier craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-sand-300 md:col-span-4 md:aspect-auto">
            <img
              src={DETAIL_IMAGE}
              alt="Fabric detail"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="border-t border-ink-900/15 pt-6">
              <span className="font-mono text-[11px] text-ink-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-2xl font-light text-ink-900">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
