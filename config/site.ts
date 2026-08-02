export const siteConfig = {
  name: 'Rhino Landworks',
  shortName: 'Rhino',
  description:
    'East Alabama land clearing, forestry mulching, grading, drainage, gravel driveway, and property reclamation services serving Tuskegee, Auburn, Opelika, Macon County, and Lee County.',
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
  googleBusinessUrl: 'https://share.google/xYidc8Sl3xOAVr23v',
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
