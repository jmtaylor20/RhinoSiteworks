import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Land Clearing, Grading & Forestry Mulching Services',
  description: 'Explore Rhino Landworks land clearing, forestry mulching, grading, drainage, gravel driveway, and property reclamation services in East Alabama.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-forest py-20 text-white sm:py-28">
        <Image src="/media/dozer-land-clearing.webp" alt="Dozer clearing and preparing land in East Alabama" fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-forest/90 to-brand-forest/50" />
        <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="eyebrow text-brand-gold">Capabilities</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-tight sm:text-7xl">Land shaped around what comes next</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Practical equipment solutions for property owners, builders, farms, and rural sites across East Alabama.</p>
          </div>
          <Image src="/brand/rhino-stacked.png" alt="Rhino Landworks" width={1254} height={1254} className="hidden w-full max-w-xs justify-self-end bg-white/95 p-4 shadow-2xl lg:block" />
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
            <p className="mt-5 text-lg leading-8 text-slate-600">These are separate Rhino Landworks projects showing forestry mulching, drainage installation, and gravel driveway work in the field.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <figure className="project-frame"><Image src="/media/forestry-mulching-jobsite.webp" alt="Tracked forestry mulcher clearing vegetation from a wooded property" width={1920} height={1440} className="h-[430px] w-full object-cover" /><figcaption className="image-label">Forestry mulching</figcaption></figure>
            <figure className="project-frame"><Image src="/media/culvert-drainage-installation.webp" alt="Culvert pipe installation for property drainage" width={1920} height={1440} className="h-[430px] w-full object-cover" /><figcaption className="image-label bg-brand-gold text-brand-ink">Drainage installation</figcaption></figure>
            <figure className="project-frame"><Image src="/media/gravel-driveway-installation.webp" alt="Completed gravel driveway installation on a rural property" width={1920} height={1440} className="h-[430px] w-full object-cover" /><figcaption className="image-label">Gravel driveway</figcaption></figure>
          </div>
        </div>
      </section>
    </>
  );
}
