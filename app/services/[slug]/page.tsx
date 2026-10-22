import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/ButtonLink';
import { CallLink } from '@/components/CallLink';
import { EstimateForm } from '@/components/EstimateForm';
import { PageHero } from '@/components/PageHero';
import { ServiceFaqJsonLd } from '@/components/ServiceFaqJsonLd';
import { ServiceJsonLd } from '@/components/ServiceJsonLd';
import { TrustStrip } from '@/components/TrustStrip';
import { Photo } from '@/components/Photo';
import { siteConfig } from '@/config/site';
import { getService, services } from '@/data/services';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.title} in East Alabama`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} in East Alabama`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      ...(service.image ? { images: [{ url: service.image, alt: service.imageAlt || service.title }] } : {}),
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return (
    <>
      <ServiceJsonLd service={service} />
      {service.faqs && <ServiceFaqJsonLd service={service} />}

      <PageHero
        eyebrow="Rhino Landwork service"
        title={service.title}
        copy={service.shortDescription}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        {/* Paid traffic lands here. The phone and the form have to be reachable
            without a second click, so both are offered above the fold. */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CallLink className="inline-flex min-h-14 items-center justify-center gap-3 bg-brand-gold px-7 text-base font-black uppercase tracking-[0.1em] text-brand-ink transition hover:bg-white">
            Call {siteConfig.phone}
          </CallLink>
          <ButtonLink href="#estimate" variant="secondary" className="min-h-14">
            Get a free estimate
          </ButtonLink>
        </div>
        <p className="mt-4 text-sm font-bold uppercase tracking-wider text-white/60">
          Free estimates - Serving {siteConfig.serviceArea.slice(0, 3).join(', ')} and East Alabama
        </p>
      </PageHero>

      <TrustStrip />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <article>
            <h2 className="text-4xl font-black uppercase">A practical plan for your property</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{service.description}</p>

            <h3 className="mt-10 text-2xl font-black uppercase">Common project goals</h3>
            <ul className="mt-5 grid gap-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="border-l-4 border-brand-gold bg-brand-cream px-5 py-4 font-bold">{benefit}</li>
              ))}
            </ul>

            {service.sections?.map((section) => (
              <div key={section.heading} className="mt-12">
                <h3 className="text-2xl font-black uppercase text-brand-forest">{section.heading}</h3>
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-5 text-lg leading-8 text-slate-600">{paragraph}</p>
                ))}
              </div>
            ))}
          </article>

          <aside className="h-fit lg:sticky lg:top-32">
            <div className="bg-brand-forest p-8 text-white">
              <p className="eyebrow text-brand-gold">Talk to us today</p>
              <h2 className="mt-4 text-3xl font-black uppercase">Have a {service.title.toLowerCase()} project?</h2>
              <p className="mt-4 leading-7 text-white/70">
                Tell us the location, the acreage, access conditions, and any known site challenges.
              </p>
              <CallLink className="mt-7 flex min-h-16 items-center justify-center bg-brand-gold text-2xl font-black text-brand-ink transition hover:bg-white">
                {siteConfig.phone}
              </CallLink>
              <ButtonLink href="#estimate" variant="secondary" className="mt-3 w-full">
                Request an estimate
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      {service.gallery && (
        <section className="pb-20 sm:pb-24">
          <div className="container-shell">
            <p className="eyebrow text-brand-green">Real projects</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-brand-forest sm:text-4xl">Work on the ground.</h2>
            <div className={`mt-8 grid gap-4 ${service.gallery.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
              {service.gallery.map((shot) => (
                <figure key={shot.src} className="project-frame">
                  <Photo
                    src={shot.src}
                    alt={shot.alt}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="h-[320px] w-full object-cover"
                  />
                  <figcaption className="image-label">{shot.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faqs && (
        <section className="section-space bg-brand-cream">
          <div className="container-shell">
            <p className="eyebrow text-brand-green">{service.title} questions</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black uppercase text-brand-forest sm:text-5xl">
              What property owners ask us.
            </h2>
            <div className="mt-10 divide-y divide-brand-forest/15 border-y border-brand-forest/15">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="faq-item group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-black uppercase leading-7 text-brand-forest">
                    {faq.question}
                    <span className="faq-toggle mt-1 flex-none text-2xl font-black text-brand-gold" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl leading-8 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="estimate" className="section-space scroll-mt-28 bg-brand-green text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-brand-gold">Free estimate</p>
            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">
              Get a price on your {service.title.toLowerCase()}.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Send the details and we will follow up about the site, the scope, and timing. Prefer to talk it through?
            </p>
            <CallLink className="mt-6 inline-flex min-h-14 items-center bg-brand-gold px-7 text-xl font-black text-brand-ink transition hover:bg-white">
              Call {siteConfig.phone}
            </CallLink>
          </div>
          <EstimateForm defaultService={service.title} />
        </div>
      </section>
    </>
  );
}
