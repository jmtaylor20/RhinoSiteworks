import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/ButtonLink';
import { PageHero } from '@/components/PageHero';
import { getService, services } from '@/data/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.shortDescription, url: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="Rhino Siteworks service" title={service.title} copy={service.shortDescription} />
      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <article>
            <h2 className="text-4xl font-black uppercase">A practical plan for your property</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{service.description}</p>
            <h3 className="mt-10 text-2xl font-black uppercase">Common project goals</h3>
            <ul className="mt-5 grid gap-3">
              {service.benefits.map((benefit) => <li key={benefit} className="border-l-4 border-brand-gold bg-brand-cream px-5 py-4 font-bold">{benefit}</li>)}
            </ul>
          </article>
          <aside className="h-fit bg-brand-forest p-8 text-white">
            <p className="eyebrow text-brand-gold">Start the conversation</p>
            <h2 className="mt-4 text-3xl font-black uppercase">Have a {service.title.toLowerCase()} project?</h2>
            <p className="mt-4 leading-7 text-white/70">Tell us the location, goal, access conditions, and any known site challenges.</p>
            <ButtonLink href="/contact" className="mt-7 w-full">Request an estimate</ButtonLink>
          </aside>
        </div>
      </section>
    </>
  );
}
