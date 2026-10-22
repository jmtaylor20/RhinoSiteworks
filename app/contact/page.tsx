import type { Metadata } from 'next';
import Link from 'next/link';
import { CallLink } from '@/components/CallLink';
import { EstimateForm } from '@/components/EstimateForm';
import { PageHero } from '@/components/PageHero';
import { TrustStrip } from '@/components/TrustStrip';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Request an Estimate',
  description: `Free estimates on land clearing, forestry mulching, bush hogging, grading, drainage, and gravel driveways across East Alabama. Call ${siteConfig.phone}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free project estimate"
        title="Tell us about your property"
        copy="Share the project basics and we will follow up to discuss the site, timing, and the best next step."
        image="/media/excavator-and-dozer-jobsite.webp"
        imageAlt="Excavator and dozer working an East Alabama jobsite"
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CallLink className="inline-flex min-h-14 items-center justify-center bg-brand-gold px-7 text-base font-black uppercase tracking-[0.1em] text-brand-ink transition hover:bg-white">
            Call {siteConfig.phone}
          </CallLink>
          <a
            href="#estimate"
            className="inline-flex min-h-14 items-center justify-center border border-white/50 bg-white/10 px-6 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-brand-ink"
          >
            Send project details
          </a>
        </div>
      </PageHero>

      <TrustStrip />

      {/* An ad can land here directly, so the page explains what we actually do
          rather than opening with a bare form. */}
      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-start">
          <div>
            <p className="eyebrow text-brand-green">What we can quote</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-brand-forest">
              Land work across East Alabama.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Rhino Landwork is a family owned land services company based in {siteConfig.address.city}. We clear,
              mulch, cut, grade, and drain rural acreage and established lots across Macon County, Lee County, and the
              surrounding area. Most projects use more than one of these, so tell us the problem and we will work out
              the right combination.
            </p>
            <ul className="mt-8 grid gap-px bg-brand-forest/15 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug} className="bg-white">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex min-h-14 items-center justify-between gap-3 px-5 py-4 text-sm font-black uppercase tracking-wider text-brand-forest transition hover:bg-brand-cream"
                  >
                    {service.title}
                    <span aria-hidden="true" className="text-brand-gold">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="bg-brand-forest p-8 text-white">
            <h2 className="text-3xl font-black uppercase">Prefer to talk?</h2>
            <p className="mt-4 leading-7 text-white/70">
              Call and you will reach us directly. Tell us the location and roughly what the property needs.
            </p>
            <CallLink className="mt-6 flex min-h-16 items-center justify-center bg-brand-gold text-2xl font-black text-brand-ink transition hover:bg-white">
              {siteConfig.phone}
            </CallLink>
            <div className="mt-6 grid gap-3 text-white/70">
              <a className="font-bold hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <address className="not-italic leading-7">
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
              </address>
            </div>
          </aside>
        </div>
      </section>

      <section id="estimate" className="section-space scroll-mt-28 bg-brand-green text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-brand-gold">Free estimate</p>
            <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">Send the project details.</h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              The more you can tell us about location, acreage, and access, the more useful the first conversation is.
            </p>
            <CallLink className="mt-6 inline-flex min-h-14 items-center bg-brand-gold px-7 text-xl font-black text-brand-ink transition hover:bg-white">
              Call {siteConfig.phone}
            </CallLink>
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
