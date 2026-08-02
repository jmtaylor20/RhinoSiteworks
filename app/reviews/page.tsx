import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from '@/components/ButtonLink';
import { googleReviewProfile, testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: 'Read verified Google reviews from Rhino Landworks customers who hired the team for clearing, grading, property improvement, and site preparation in East Alabama.',
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-28">
        <Image src="/media/finished-site-grading.webp" alt="Finished grading work on an East Alabama property" fill priority sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/95 to-brand-forest/70" />
        <div className="container-shell relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-brand-gold">Customer experience</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.96] sm:text-7xl">The work matters.<br /><span className="text-brand-gold">So does the experience.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">Verified feedback from property owners who trusted Rhino Landworks with their land.</p>
          </div>
          <a href={googleReviewProfile} target="_blank" rel="noreferrer" className="review-score-card">
            <span className="text-brand-gold">★★★★★</span>
            <strong>5.0</strong>
            <small>31 Google reviews</small>
          </a>
        </div>
      </section>

      <section className="paper-texture section-space">
        <div className="container-shell">
          <div className="grid gap-6">
            {testimonials.map((review, index) => (
              <article key={review.name} className="review-story grid overflow-hidden bg-white shadow-lift lg:grid-cols-[220px_1fr]">
                <div className={`flex flex-col justify-between p-8 text-white ${index % 2 === 0 ? 'bg-brand-forest' : 'bg-brand-ink'}`}>
                  <div className="text-brand-gold" aria-label="5 out of 5 stars">★★★★★</div>
                  <div>
                    <strong className="block text-xl uppercase">{review.name}</strong>
                    <span className="mt-1 block text-xs uppercase tracking-wider text-white/55">Verified Google review</span>
                  </div>
                </div>
                <div className="p-8 sm:p-12">
                  <span className="text-6xl font-black leading-none text-brand-gold/35" aria-hidden="true">“</span>
                  <blockquote className="-mt-3 text-xl leading-9 text-slate-700">{review.fullQuote}</blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-forest py-16 text-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-brand-gold">The Rhino standard</p>
            <h2 className="mt-3 text-4xl font-black uppercase">Clear plans. Careful work. Useful results.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/68">The strongest reviews consistently mention planning, communication, equipment skill, efficiency, and care around the property.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Request an estimate</ButtonLink>
            <a href={googleReviewProfile} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 text-sm font-black uppercase tracking-wider hover:bg-white hover:text-brand-ink">View Google profile</a>
          </div>
        </div>
      </section>
    </>
  );
}
