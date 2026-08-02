import { siteConfig } from '@/config/site';

export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    logo: `${siteConfig.url}/brand/rhino-primary.png`,
    image: [
      `${siteConfig.url}/media/hero-land-clearing-poster.webp`,
      `${siteConfig.url}/media/gravel-driveway-installation.webp`,
      `${siteConfig.url}/media/excavator-land-clearing.webp`,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.serviceArea.map((name) => ({ '@type': name.includes('County') ? 'AdministrativeArea' : 'City', name })),
    sameAs: [siteConfig.googleBusinessUrl],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '31',
      bestRating: '5',
    },
    knowsAbout: [
      'Land clearing',
      'Forestry mulching',
      'Grading and dirt work',
      'Drainage solutions',
      'Gravel driveways',
      'Property reclamation',
    ],
    priceRange: '$$',
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />;
}
