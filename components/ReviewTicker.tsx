import { googleReviewProfile, testimonials } from '@/data/testimonials';

export function ReviewTicker() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="review-ticker border-y border-brand-gold/30 bg-brand-ink text-white" aria-label="Google customer reviews">
      <a href={googleReviewProfile} target="_blank" rel="noreferrer" className="review-ticker-label">
        <span className="text-brand-gold">★★★★★</span>
        <strong>5.0 on Google</strong>
        <span className="text-white/60">31 reviews</span>
      </a>
      <div className="review-ticker-window">
        <div className="review-ticker-track">
          {items.map((review, index) => (
            <blockquote key={`${review.name}-${index}`} className="review-ticker-item">
              <span>“{review.quote}”</span>
              <cite>— {review.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
