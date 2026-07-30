export const siteConfig = {
  name: 'Rhino Siteworks',
  shortName: 'Rhino',
  description:
    'Land clearing, forestry mulching, grading, drainage, gravel driveways, and property reclamation in East Alabama.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rhinositeworks.netlify.app',
  email: 'WeGoRhino@gmail.com',
  phone: '334-707-7874',
  phoneHref: '+13347077874',
  address: {
    street: '108 Fletcher Segrest Road',
    city: 'Tuskegee',
    region: 'AL',
    postalCode: '36083',
    country: 'US',
  },
  serviceArea: ['Tuskegee', 'Auburn', 'Opelika', 'Macon County', 'Lee County'],
  social: {
    facebook: '',
    instagram: '',
  },
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/gallery' },
    { label: 'About', href: '/#about' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Estimate', href: '/contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
