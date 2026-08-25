import { ButtonLink } from '@/components/ButtonLink';
import { faqs } from '@/data/faqs';
import { siteConfig } from '@/config/site';

/**
 * Homepage FAQ block. Renders the questions as native <details> accordions so
 * the answers are in the HTML for crawlers with no client JavaScript, and
 * emits FAQPage structured data.
 *
 * Keep FAQPage schema on this one page only — duplicating it across routes
 * dilutes the markup.
 */
export function FaqSection() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section id="faq" className="section-space bg-brand-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-36">
          <p className="eyebrow text-brand-green">Common questions</p>
          <h2 className="mt-4 text-4xl font-black uppercase text-brand-forest sm:text-5xl">Straight answers before you call.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The questions property owners ask us most. If yours is not here, ask it on the estimate form or over the phone.
          </p>
          <ButtonLink href="/contact" className="mt-8">Ask about your property</ButtonLink>
        </div>
        <div className="divide-y divide-brand-forest/15 border-y border-brand-forest/15">
          {faqs.map((faq) => (
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
  );
}
