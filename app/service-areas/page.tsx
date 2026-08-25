import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { CallLink } from '@/components/CallLink';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';
import { serviceAreaGroups, serviceAreaTowns } from '@/data/serviceAreas';

export const metadata: Metadata = {
  title: 'Service Areas in East Alabama',
  description:
    'Rhino Landwork provides land clearing, forestry mulching, bush hogging, grading, drainage, and gravel driveway services across Macon County, Lee County, and the surrounding East Alabama communities.',
  alternates: { canonical: '/service-areas' },
};

function AreaJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/service-areas/#page`,
        url: `${siteConfig.url}/service-areas`,
        name: 'Service Areas in East Alabama',
        about: { '@id': `${siteConfig.url}/#business` },
        mainEntity: {
          '@type': 'ItemList',
          name: `${siteConfig.name} service areas`,
          itemListElement: serviceAreaTowns.map((town, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: { '@type': 'City', name: `${town}, AL` },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${siteConfig.url}/service-areas` },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />;
}

export default function ServiceAreasPage() {
  return (
    <>
      <AreaJsonLd />
      <PageHero
        eyebrow="Where we work"
        title="Land work across East Alabama"
        copy="Rhino Landwork runs out of Tuskegee and works the counties around it — from established lots in Auburn and Opelika to hunting tracts and rural acreage well off the pavement."
        image="/media/dozer-land-clearing.webp"
        imageAlt="Dozer clearing land on an East Alabama property"
      />

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <p className="eyebrow text-brand-green">Counties and communities</p>
            <p className="text-lg leading-8 text-slate-600">
              Macon and Lee County are home turf and get the fastest turnaround. We regularly travel beyond them for
              clearing, mulching, and site work — if your property is near the edge of this list, call and ask.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-brand-forest/15 md:grid-cols-2">
            {serviceAreaGroups.map((group) => (
              <article key={group.county} className="flex flex-col bg-white p-8">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-black uppercase text-brand-forest">{group.county}</h2>
                  {group.primary && (
                    <span className="bg-brand-gold px-2 py-1 text-[0.6rem] font-black uppercase tracking-[0.16em] text-brand-ink">
                      Home turf
                    </span>
                  )}
                </div>
                <p className="mt-4 leading-7 text-slate-600">{group.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.towns.map((town) => (
                    <li key={town} className="border border-brand-forest/20 bg-brand-cream px-3 py-1.5 text-sm font-bold text-brand-forest">
                      {town}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-forest text-white">
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-[.85fr_1.15fr] sm:py-20">
          <div>
            <p className="eyebrow text-brand-gold">What we bring</p>
            <h2 className="mt-4 text-4xl font-black uppercase">Every service, anywhere we work.</h2>
            <p className="mt-5 max-w-xl leading-7 text-white/70">
              The equipment travels with us. Whichever county your property sits in, the full range of Rhino Landwork
              capabilities is available for it.
            </p>
          </div>
          <ul className="grid gap-px self-start bg-white/20 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} className="bg-brand-forest">
                <Link href={`/services/${service.slug}`} className="flex min-h-16 items-center justify-between gap-4 px-6 py-4 text-sm font-black uppercase tracking-wider hover:bg-brand-green">
                  {service.title}
                  <span aria-hidden="true" className="text-brand-gold">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space bg-brand-cream">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-brand-green">Not sure if you are in range?</p>
            <h2 className="mt-3 text-4xl font-black uppercase text-brand-forest">Just ask.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Tell us where the property is and what it needs. If it is a fit, we will walk it and put a free estimate
              together. If it is not, we will tell you that straight.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" className="bg-brand-forest text-white hover:bg-brand-ink">Request an estimate</ButtonLink>
            <CallLink className="inline-flex min-h-12 items-center justify-center border-2 border-brand-forest px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-brand-forest transition hover:bg-brand-forest hover:text-white">
              Call {siteConfig.phone}
            </CallLink>
          </div>
        </div>
      </section>
    </>
  );
}
