import { ButtonLink } from '@/components/ButtonLink';
import { seasonalSpotlight } from '@/data/seasonal';

/**
 * Timely "what we are booking now" band. The copy lives in data/seasonal.ts —
 * swap that file a few times a year rather than editing this layout.
 */
export function SeasonalBand() {
  const { season, eyebrow, headline, copy, points, ctaLabel, ctaHref } = seasonalSpotlight;

  return (
    <section className="seasonal-band bg-brand-green text-white">
      <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.15fr_.85fr] lg:items-center sm:py-20">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow text-brand-gold">{eyebrow}</p>
            <span className="border border-brand-gold/60 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-brand-gold">{season}</span>
          </div>
          <h2 className="mt-4 text-4xl font-black uppercase sm:text-5xl">{headline}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{copy}</p>
          <ButtonLink href={ctaHref} className="mt-8">{ctaLabel}</ButtonLink>
        </div>
        <ul className="grid gap-px bg-white/20">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-4 bg-brand-green px-6 py-5">
              <span className="h-3 w-3 flex-none rotate-45 border-2 border-brand-gold" aria-hidden="true" />
              <span className="text-sm font-black uppercase tracking-wider">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
