import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { CallLink } from '@/components/CallLink';
import { EstimateForm } from '@/components/EstimateForm';
import { Photo } from '@/components/Photo';
import { TrustStrip } from '@/components/TrustStrip';
import { siteConfig } from '@/config/site';
import { heroVariant } from '@/lib/heroVariant';

export const metadata: Metadata = {
  title: 'Hunting Land Clearing in East Alabama',
  description:
    'Hunting land clearing around Tuskegee, Auburn, and Opelika. Shooting lanes, food plots, trails, and access roads opened up before season. Free quotes.',
  alternates: { canonical: '/hunting-land-clearing' },
  openGraph: {
    title: 'Hunting Land Clearing in East Alabama',
    description:
      'Shooting lanes, food plots, trails, and access roads cleared before season by Rhino Landwork.',
    url: '/hunting-land-clearing',
    images: [{ url: '/media/dozer-road-grading.webp', alt: 'Dozer cutting an access road through wooded hunting land' }],
  },
};

const whatWeDo = [
  {
    title: 'Shooting lanes',
    copy: 'Clear sight lines from stands and blinds, so you get clean, safe shots without wrecking the cover that holds game.',
  },
  {
    title: 'Food plots',
    copy: 'Clear and prep ground for planting, from small kill plots to larger fields. Stumps, brush and rough ground are cleared so the plot is ready to work.',
  },
  {
    title: 'Hunting trails and access roads',
    copy: 'Cut trails that get you in and out quietly, and rough in access for ATVs and trucks.',
  },
  {
    title: 'Overgrown property',
    copy: 'Reclaim hunting land that has grown up and turn it back into usable ground.',
  },
];

const whyRhino = [
  'Local crew that knows Alabama land, soil and terrain.',
  'The right equipment for the job, from light brush to heavy timber.',
  'Clear pricing: you get a real number before we start.',
  'Work scheduled so your land is ready ahead of season.',
];

const howItWorks = [
  ['01', 'Tell us what you want done and where the property is.'],
  ['02', 'We look over the land and give you a quote.'],
  ['03', 'We schedule the work and get it done.'],
];

const projects = [
  { src: '/media/dozer-road-grading.webp', alt: 'Dozer cutting an access road through wooded land', label: 'Access road' },
  { src: '/media/forestry-mulching-jobsite.webp', alt: 'Open ground and pine tree line cleared for planting', label: 'Open ground' },
  { src: '/media/brush-clearing-excavator.webp', alt: 'Excavator clearing brush from overgrown property', label: 'Brush cleared' },
];

function HuntingLandJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${siteConfig.url}/hunting-land-clearing/#service`,
        name: 'Hunting Land Clearing',
        description:
          'Shooting lanes, food plot preparation, hunting trails, access roads, and overgrown property reclamation for hunting land across East Alabama.',
        url: `${siteConfig.url}/hunting-land-clearing`,
        image: `${siteConfig.url}/media/dozer-road-grading.webp`,
        provider: { '@id': `${siteConfig.url}/#business` },
        areaServed: siteConfig.serviceArea.map((name) => ({
          '@type': name.includes('County') ? 'AdministrativeArea' : 'City',
          name,
        })),
        serviceType: 'Hunting land clearing',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Hunting land clearing',
          itemListElement: whatWeDo.map((item) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: item.title, description: item.copy },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Hunting Land Clearing', item: `${siteConfig.url}/hunting-land-clearing` },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />;
}

export default function HuntingLandClearingPage() {
  return (
    <>
      <HuntingLandJsonLd />

      <section className="relative isolate overflow-hidden bg-brand-forest py-20 text-white sm:py-28">
        <Photo
          src={heroVariant('/media/dozer-road-grading.webp')}
          alt="Dozer cutting an access road through wooded hunting land in East Alabama"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-forest via-brand-forest/95 to-brand-forest/45" />
        <div className="container-shell relative">
          <p className="eyebrow text-brand-gold">Before season</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[1.05] sm:text-6xl">
            Hunting Land Clearing:{' '}
            <span className="text-brand-gold">Shooting Lanes, Food Plots &amp; Trails</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Get your land ready before season. Rhino Landwork clears and preps hunting property across the Tuskegee and
            Auburn area.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallLink className="inline-flex min-h-14 items-center justify-center bg-brand-gold px-7 text-base font-black uppercase tracking-[0.1em] text-brand-ink transition hover:bg-white">
              Call {siteConfig.phone}
            </CallLink>
            <ButtonLink href="#quote" variant="secondary" className="min-h-14">
              Request a free quote
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm font-bold uppercase tracking-wider text-white/60">
            Serving Tuskegee, Auburn, Opelika and surrounding Alabama communities
          </p>
        </div>
      </section>

      <TrustStrip />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <article>
            <p className="text-lg leading-8 text-slate-600">
              Good hunting ground takes work before the season starts. Rhino Landwork brings heavy equipment and an
              experienced local crew to open up shooting lanes, prepare food plots and cut trails so you can spend your
              time hunting instead of clearing.
            </p>

            <h2 className="mt-12 text-3xl font-black uppercase text-brand-forest sm:text-4xl">What we do</h2>
            <div className="mt-8 grid gap-px bg-brand-forest/15">
              {whatWeDo.map((item) => (
                <div key={item.title} className="bg-white p-6 sm:p-7">
                  <h3 className="text-xl font-black uppercase text-brand-forest">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.copy}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-14 text-3xl font-black uppercase text-brand-forest sm:text-4xl">Why Rhino</h2>
            <ul className="mt-6 grid gap-3">
              {whyRhino.map((reason) => (
                <li key={reason} className="border-l-4 border-brand-gold bg-brand-cream px-5 py-4 font-bold">{reason}</li>
              ))}
            </ul>
          </article>

          <aside className="h-fit lg:sticky lg:top-32">
            <div className="bg-brand-forest p-8 text-white">
              <p className="eyebrow text-brand-gold">Talk to us today</p>
              <h2 className="mt-4 text-3xl font-black uppercase">Getting your land season-ready?</h2>
              <p className="mt-4 leading-7 text-white/70">
                Tell us where the property is and what you want opened up. The estimate is free.
              </p>
              <CallLink className="mt-7 flex min-h-16 items-center justify-center bg-brand-gold text-2xl font-black text-brand-ink transition hover:bg-white">
                {siteConfig.phone}
              </CallLink>
              <ButtonLink href="#quote" variant="secondary" className="mt-3 w-full">
                Request a free quote
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-shell">
          <p className="eyebrow text-brand-green">Real projects</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-brand-forest sm:text-4xl">Work on the ground.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <figure key={project.src} className="project-frame">
                <Photo
                  src={project.src}
                  alt={project.alt}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="h-[320px] w-full object-cover"
                />
                <figcaption className="image-label">{project.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-ink py-16 text-white sm:py-20">
        <div className="container-shell">
          <p className="eyebrow text-brand-gold">How it works</p>
          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Three steps.</h2>
          <ol className="mt-10 grid gap-px bg-white/15 md:grid-cols-3">
            {howItWorks.map(([number, copy]) => (
              <li key={number} className="flex flex-col bg-brand-ink p-7">
                <span className="text-5xl font-black leading-none text-brand-gold">{number}</span>
                <p className="mt-5 text-lg leading-7 text-white/80">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="quote" className="section-space scroll-mt-28 bg-brand-green text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-brand-gold">Free quote</p>
            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
              Ready to get your hunting land season-ready?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Call {siteConfig.phone} or request a free quote below.
            </p>
            <CallLink className="mt-6 inline-flex min-h-14 items-center bg-brand-gold px-7 text-xl font-black text-brand-ink transition hover:bg-white">
              Call {siteConfig.phone}
            </CallLink>
            <p className="mt-8 text-sm leading-7 text-white/60">
              Serving Tuskegee, Auburn, Opelika and surrounding Alabama communities. For year-round upkeep once the
              ground is opened up, see{' '}
              <Link href="/services/hunting-land-maintenance" className="font-bold text-brand-gold underline hover:text-white">
                hunting land maintenance
              </Link>
              .
            </p>
          </div>
          <EstimateForm defaultService="Hunting Land Maintenance" pageSource="hunting-land-clearing" />
        </div>
      </section>
    </>
  );
}
