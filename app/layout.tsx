import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LocalBusinessJsonLd } from '@/components/LocalBusinessJsonLd';
import { siteConfig } from '@/config/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Land Clearing & Dirt Work in East Alabama`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Land Clearing & Dirt Work in East Alabama`,
    description: siteConfig.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  keywords: [
    'land clearing East Alabama',
    'forestry mulching Auburn AL',
    'grading contractor Opelika AL',
    'dirt work Tuskegee AL',
    'gravel driveway installation East Alabama',
    'property drainage contractor',
    'brush clearing Macon County',
    'bush hogging East Alabama',
    'hunting land maintenance Alabama',
    'firebreak construction Alabama',
    'firelane maintenance East Alabama',
  ],
  category: 'Land clearing and site preparation contractor',
  other: {
    'theme-color': '#304830',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
