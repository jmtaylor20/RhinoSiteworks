import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { EstimateForm } from '@/components/EstimateForm';
import { MovingHero } from '@/components/MovingHero';
import { ReviewTicker } from '@/components/ReviewTicker';
import { services } from '@/data/services';
import { googleReviewProfile, testimonials } from '@/data/testimonials';

const serviceCodes: Record<string, string> = {
  'land-clearing': 'LC',
  'forestry-mulching': 'FM',
  'grading-dirt-work': 'DG',
  drainage: 'DR',
  'gravel-driveways': 'GD',
  'property-reclamation': 'PR',
};

const trustPoints = [
  ['Family owned', 'Local service and accountability'],
  ['Property focused', 'A plan shaped around your land'],
  ['Free estimates', 'Clear scope before work begins'],
  ['East Alabama', 'Tuskegee, Auburn, Opelika and beyond'],
];

const equipment = [
  ['Forestry mulchers', '/images/project-18.webp'],
  ['Excavators', '/images/project-19.webp'],
  ['Grading equipment', '/images/project-20.webp'],
  ['Tracked machines', '/images/project-hero.webp'],
];

export default function HomePage() {
  return (
    <>
      <ReviewTicker />

      <section className="industrial-hero relative isolate min-h-[690px] overflow-hidden bg-brand-forest text-white">
        <MovingHero />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,11,.98)_0%,rgba(7,31,23,.86)_46%,rgba(7,31,23,.18)_100%)]" />
        <div className="container-shell relative flex min-h-[690px] items-center py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-gold">Land management across East Alabama</p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.94] sm:text-7xl lg:text-[5.6rem]">
              Land work<br /><span className="text-brand-gold">done right.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-black uppercase leading-8 tracking-[0.08em] text-white/85 sm:text-lg">
              Forestry mulching <span className="text-brand-gold">•</span> grading <span className="text-brand-gold">•</span> site preparation <span className="text-brand-gold">•</span> property improvement
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Get a free estimate</ButtonLink>
              <ButtonLink href="/gallery" variant="secondary">View our work</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-forest text-white">
        <div className="container-shell grid divide-y divide-white/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {trustPoints.map(([title, copy]) => (
            <div key={title} className="flex gap-4 px-5 py-6 first:pl-0 last:pr-0">
              <span className="mt-1 h-3 w-3 flex-none rotate-45 border-2 border-brand-gold" aria-hidden="true" />
              <div><strong className="block text-sm uppercase tracking-wider">{title}</strong><span className="mt-1 block text-xs leading-5 text-white/60">{copy}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="paper-texture section-space">
        <div className="container-shell text-center">
          <p className="eyebrow text-brand-gold">What we do</p>
          <h2 className="mt-3 text-4xl font-black uppercase text-brand-forest sm:text-5xl">Complete land solutions</h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-brand-forest/15 bg-brand-forest/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((service) => (
              <article key={service.slug} className="service-tile group flex min-h-80 flex-col bg-white p-6 text-left">
                <span className="service-glyph" aria-hidden="true">{serviceCodes[service.slug]}</span>
                <h3 className="mt-6 text-xl font-black uppercase text-brand-forest">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
                <Link href={`/services/${service.slug}`} className="mt-auto pt-6 text-sm font-black uppercase tracking-wider text-brand-green">Learn more →</Link>
              </article>
            ))}
          </div>
          <ButtonLink href="/services" className="mt-10">View all services</ButtonLink>
        </div>
      </section>

      <section id="about" className="grid bg-brand-forest text-white lg:grid-cols-2">
        <div className="flex items-center px-5 py-20 sm:px-10 lg:px-[max(2.5rem,calc((100vw-80rem)/2))]">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-gold">About Rhino</p>
            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">Built on hard work.<br />Trusted across Alabama.</h2>
            <div className="mt-6 grid gap-5 text-lg leading-8 text-white/72">
              <p>Rhino Siteworks is a local land-service company specializing in clearing, forestry mulching, dirt work, drainage, access, and site preparation.</p>
              <p>Every project starts with the property itself: its terrain, access, water flow, and what you need the land to become.</p>
            </div>
            <ButtonLink href="/contact" className="mt-8">Talk about your property</ButtonLink>
          </div>
        </div>
        <div className="relative min-h-[520px]">
          <Image src="/images/project-19.webp" alt="Rhino Siteworks equipment on an East Alabama project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <section className="equipment-band bg-brand-ink py-16 text-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="eyebrow text-brand-gold">The right equipment</p>
              <h2 className="mt-3 text-4xl font-black uppercase">Professional equipment.<br />Professional results.</h2>
              <p className="mt-5 max-w-xl leading-7 text-white/65">The machine matters, but experience and a good site plan are what turn equipment hours into a finished property.</p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/15 sm:grid-cols-4">
              {equipment.map(([name, src]) => (
                <figure key={name} className="group bg-brand-ink">
                  <div className="relative h-36 overflow-hidden">
                    <Image src={src} alt="" fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                  </div>
                  <figcaption className="border-t border-brand-gold/35 px-3 py-4 text-center text-xs font-black uppercase tracking-wider">{name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-forest text-white">
        <div className="container-shell grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {['Clearing', 'Mulching', 'Grading', 'Drainage'].map((item) => (
            <div key={item} className="bg-brand-forest px-6 py-8 text-center">
              <span className="text-3xl font-black text-brand-gold">✓</span>
              <strong className="mt-2 block text-lg uppercase tracking-wider">{item}</strong>
              <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-white/55">One coordinated site plan</span>
            </div>
          ))}
        </div>
      </section>

      <section className="paper-texture section-space">
        <div className="container-shell">
          <div className="text-center">
            <p className="eyebrow text-brand-gold">Recent work</p>
            <h2 className="mt-3 text-4xl font-black uppercase text-brand-forest sm:text-5xl">Property transformed</h2>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            <figure className="project-frame">
              <Image src="/images/project-18.webp" alt="Property before Rhino Siteworks land improvement" width={1200} height={800} className="h-[430px] w-full object-cover" />
              <figcaption className="image-label">Before</figcaption>
            </figure>
            <figure className="project-frame">
              <Image src="/images/project-20.webp" alt="Property after Rhino Siteworks land improvement" width={1200} height={800} className="h-[430px] w-full object-cover" />
              <figcaption className="image-label bg-brand-gold text-brand-ink">After</figcaption>
            </figure>
          </div>
          <div className="mt-9 text-center"><ButtonLink href="/gallery">View more projects</ButtonLink></div>
        </div>
      </section>

      <section id="testimonials" className="review-panel section-space bg-brand-ink text-white">
        <div className="container-shell">
          <div className="text-center">
            <p className="eyebrow text-brand-gold">What customers say</p>
            <h2 className="mt-3 text-4xl font-black uppercase sm:text-5xl">Real reviews. Real results.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((review) => (
              <figure key={review.name} className="bg-black/25 p-7 text-center ring-1 ring-white/5">
                <div className="text-lg tracking-[0.2em] text-brand-gold" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="mt-5 leading-7 text-white/75">“{review.quote}”</blockquote>
                <figcaption className="mt-6 text-sm font-black uppercase tracking-wider">— {review.name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={googleReviewProfile} target="_blank" rel="noreferrer" className="text-sm font-black uppercase tracking-wider text-brand-gold hover:text-white">See all 31 Google reviews →</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-gold py-12 text-brand-ink">
        <div className="container-shell grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
          <Image src="/images/rhino-badge.png" alt="" width={1254} height={914} className="hidden h-24 w-36 object-contain lg:block" />
          <div>
            <h2 className="text-4xl font-black uppercase">Ready to improve your land?</h2>
            <p className="mt-2 font-semibold">Tell us what the property needs and get a clear next step.</p>
          </div>
          <ButtonLink href="/contact" className="bg-brand-forest text-white hover:bg-brand-ink">Get a free estimate</ButtonLink>
        </div>
      </section>

      <section className="section-space bg-brand-green text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-brand-gold">Start your project</p>
            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">Tell us about the property.</h2>
            <p className="mt-5 text-lg leading-8 text-white/70">Share the location, the problem, and the result you want. Rhino Siteworks will follow up about access, scope, and timing.</p>
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
