import type { Metadata } from 'next';
import { CallLink } from '@/components/CallLink';
import { EstimateForm } from '@/components/EstimateForm';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Request an Estimate',
  description: `Request an estimate from ${siteConfig.name} for land clearing, grading, drainage, gravel, or property improvement.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Free project estimate" title="Tell us about your property" copy="Share the project basics and we will follow up to discuss the site, timing, and the best next step." />
      <section className="section-space bg-brand-cream">
        <div className="container-shell grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <aside>
            <h2 className="text-3xl font-black uppercase">Prefer to talk?</h2>
            <div className="mt-6 grid gap-3 text-lg">
              <CallLink className="font-black text-brand-green">{siteConfig.phone}</CallLink>
              <a className="font-black text-brand-green" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <address className="mt-3 not-italic leading-7 text-slate-600">
                {siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
              </address>
            </div>
          </aside>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
