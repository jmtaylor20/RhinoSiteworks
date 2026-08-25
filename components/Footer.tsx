import Image from 'next/image';
import Link from 'next/link';
import { CallLink } from '@/components/CallLink';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';
import { serviceAreaTowns } from '@/data/serviceAreas';

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Image src="/brand/rhino-primary-white.png" alt={siteConfig.name} width={1820} height={510} className="h-auto w-72" />
          <p className="mt-5 max-w-sm text-white/65">{siteConfig.description}</p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-brand-gold">Services</h2>
          <div className="mt-5 grid gap-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="text-white/70 hover:text-white">{service.title}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-brand-gold">Contact</h2>
          <div className="mt-5 grid gap-3 text-white/70">
            <CallLink className="hover:text-white">{siteConfig.phone}</CallLink>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            <address className="not-italic">
              {siteConfig.address.street}<br />
              {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-8">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-brand-gold">
            <Link href="/service-areas" className="hover:text-white">Service areas →</Link>
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/55">
            {serviceAreaTowns.join(' · ')}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/service-areas">Service areas</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
            <Link href="/contact">Request an estimate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
