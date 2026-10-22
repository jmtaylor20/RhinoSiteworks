import { siteConfig } from '@/config/site';
import type { Service } from '@/data/services';

/**
 * FAQPage schema for a service landing page.
 *
 * The homepage carries its own general FAQ. This is fine alongside it because
 * the questions are service-specific and appear on exactly one page each.
 * What dilutes the markup is repeating the SAME questions across routes.
 */
export function ServiceFaqJsonLd({ service }: { service: Service }) {
  if (!service.faqs?.length) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/services/${service.slug}/#faq`,
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />;
}
