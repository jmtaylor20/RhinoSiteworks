import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { PageHero } from '@/components/PageHero';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Land & Sitework Services',
  description: 'Explore Rhino Siteworks land clearing, forestry mulching, grading, drainage, driveway, and property reclamation services.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Capabilities" title="Land and sitework services" copy="Practical equipment solutions for property owners, builders, farms, and rural sites across East Alabama." />
      <section className="section-space">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="border border-slate-200 p-8">
              <h2 className="text-3xl font-black uppercase">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{service.shortDescription}</p>
              <ul className="mt-6 grid gap-2 text-sm font-bold text-brand-green">
                {service.benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}
              </ul>
              <Link href={`/services/${service.slug}`} className="mt-7 inline-block font-black text-brand-green">Learn more →</Link>
            </article>
          ))}
        </div>
        <ButtonLink href="/contact" className="mt-10">Request an estimate</ButtonLink>
      </section>
    </>
  );
}
