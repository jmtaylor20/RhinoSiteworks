import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rhino Siteworks | Land Clearing, Grading & Drainage',
  description: 'Rhino Siteworks provides land clearing, forestry mulching, dirt work, grading, drainage solutions, gravel driveways, and property reclamation in East Alabama.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
