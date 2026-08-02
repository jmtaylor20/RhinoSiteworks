import { siteConfig } from '@/config/site';
import type { Service } from '@/data/services';

export function ServiceJsonLd({ service }: { service: Service }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${siteConfig.url}/services/${service.slug}/#service`,
        name: service.title,
        description: service.description,
        url: `${siteConfig.url}/services/${service.slug}`,
        image: `${siteConfig.url}${service.image}`,
        provider: { '@id': `${siteConfig.url}/#business` },
        areaServed: siteConfig.serviceArea.map((name) => ({
          '@type': name.includes('County') ? 'AdministrativeArea' : 'City',
          name,
        })),
        serviceType: service.title,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: `${siteConfig.url}/services/${service.slug}` },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />;
}
