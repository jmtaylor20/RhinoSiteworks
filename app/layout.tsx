import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LocalBusinessJsonLd } from '@/components/LocalBusinessJsonLd';
import { siteConfig } from '@/config/site';
import './globals.css';

const previewTitle = `${siteConfig.name} | Land Clearing & Dirt Work in East Alabama`;
const previewDescription = 'Clearing, mulching, grading, drainage, and gravel services for East Alabama properties.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: previewTitle, template: `%s | ${siteConfig.name}` },
  description: previewDescription,
  applicationName: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: previewTitle,
    description: previewDescription,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${siteConfig.name} social preview` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: previewTitle,
    description: previewDescription,
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
    'theme-color': '#243f27',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) — GA4 + Google Ads (Rhino Landwork, 497-803-2378) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8KS3TWJGK4" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8KS3TWJGK4');
              gtag('config', 'AW-16472265989');
              gtag('config', 'AW-16472265989/qYN-CM_l298cEIWqy649', {
                'phone_conversion_number': '${siteConfig.phone}'
              });
            `,
          }}
        />
      </head>
      <body>
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
