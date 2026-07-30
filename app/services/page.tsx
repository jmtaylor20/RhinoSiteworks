import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Land & Sitework Services',
  description: 'Explore Rhino Siteworks land clearing, forestry mulching, grading, drainage, driveway, and property reclamation services.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-forest py-20 text-white sm:py-28">
        <Image src="/images/project-hero.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-forest/90 to-brand-forest/50" />
        <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="eyebrow text-brand-gold">Capabilities</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-tight sm:text-7xl">Land shaped around what comes next</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Practical equipment solutions for property owners, builders, farms, and rural sites across East Alabama.</p>
          </div>
          <Image src="/images/rhino-badge.png" alt="Rhino Siteworks" width={1254} height={914} className="hidden w-full max-w-sm justify-self-end object-contain lg:block" />
        </div>
      </section>
      <section className="section-space bg-brand-cream">
        <div className="container-shell">
          <div className="mb-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <p className="eyebrow text-brand-green">Choose the outcome—not a box</p>
            <p className="text-lg leading-8 text-slate-600">Most projects use more than one capability. We start with the property problem, then combine the right clearing, grading, drainage, and access work into one sensible plan.</p>
          </div>
          <div className="divide-y divide-brand-forest/15 border-y border-brand-forest/15">
          {services.map((service) => (
            <article key={service.slug} className="group grid gap-5 py-8 transition md:grid-cols-[.8fr_1.2fr_auto] md:items-center">
              <h2 className="text-3xl font-black uppercase transition group-hover:text-brand-green">{service.title}</h2>
              <div>
                <p className="leading-7 text-slate-600">{service.shortDescription}</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-brand-green">
                {service.benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}
              </ul>
              </div>
              <Link href={`/services/${service.slug}`} className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-green text-2xl font-black text-brand-green transition group-hover:bg-brand-green group-hover:text-white" aria-label={`Learn more about ${service.title}`}>→</Link>
            </article>
          ))}
          </div>
          <ButtonLink href="/contact" className="mt-10">Request an estimate</ButtonLink>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-green">Work in the field</p>
            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">Different sites. One practical approach.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">These are separate Rhino Siteworks projects showing clearing, dirt work, grading, and equipment in action—not a staged before-and-after comparison.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <figure className="project-frame"><Image src="/images/project-18.webp" alt="Roadside grading project" width={1200} height={900} className="h-[430px] w-full object-cover" /><figcaption className="image-label">Roadside grading</figcaption></figure>
            <figure className="project-frame"><Image src="/images/project-19.webp" alt="Dozer on prepared building site" width={1200} height={900} className="h-[430px] w-full object-cover" /><figcaption className="image-label bg-brand-gold text-brand-ink">Site preparation</figcaption></figure>
            <figure className="project-frame"><Image src="/images/project-hero.webp" alt="Dozer shaping a hillside property" width={1200} height={900} className="h-[430px] w-full object-cover" /><figcaption className="image-label">Dirt work</figcaption></figure>
          </div>
        </div>
      </section>
    </>
  );
}
