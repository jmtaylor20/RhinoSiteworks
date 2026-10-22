import { siteConfig } from '@/config/site';
import { googleReviewProfile } from '@/data/testimonials';

const points = ['Free written estimates', 'Family owned, local crew'];

/**
 * Proof row for paid-traffic landing pages. Google's landing page experience
 * rating leans on trust signals being visible without hunting for them.
 */
export function TrustStrip() {
  return (
    <section className="border-b border-brand-forest/10 bg-brand-ink text-white">
      <div className="container-shell grid gap-px sm:grid-cols-2 lg:grid-cols-4">
        <a
          href={googleReviewProfile}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-5 py-5 transition hover:bg-white/5"
        >
          <span className="text-brand-gold" aria-hidden="true">★★★★★</span>
          <span className="text-sm font-black uppercase tracking-wider">5.0 from 31 Google reviews</span>
        </a>
        {points.map((point) => (
          <div key={point} className="flex items-center gap-3 px-5 py-5">
            <span className="h-3 w-3 flex-none rotate-45 border-2 border-brand-gold" aria-hidden="true" />
            <span className="text-sm font-black uppercase tracking-wider">{point}</span>
          </div>
        ))}
        <div className="flex items-center gap-3 px-5 py-5">
          <span className="h-3 w-3 flex-none rotate-45 border-2 border-brand-gold" aria-hidden="true" />
          <span className="text-sm font-black uppercase tracking-wider">
            Based in {siteConfig.address.city}, serving East Alabama
          </span>
        </div>
      </div>
    </section>
  );
}
