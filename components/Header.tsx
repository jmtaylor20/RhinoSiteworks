'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-forest/95 text-white backdrop-blur">
      <div className="container-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <Image src="/images/rhino-logo.svg" alt="" width={62} height={50} priority className="h-12 w-auto" />
          <span className="hidden leading-none sm:block">
            <strong className="block text-lg tracking-[0.18em]">RHINO</strong>
            <small className="block text-[0.63rem] font-bold tracking-[0.35em] text-brand-gold">SITEWORKS</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold hover:text-brand-gold">
              {item.label}
            </Link>
          ))}
          <a className="rounded-sm bg-brand-gold px-5 py-3 text-sm font-black text-brand-ink hover:bg-white" href={`tel:${siteConfig.phoneHref}`}>
            Call {siteConfig.phone}
          </a>
        </nav>

        <button
          type="button"
          className="rounded-sm border border-white/30 px-4 py-2 text-sm font-black uppercase tracking-widest lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-white/10 bg-brand-forest px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-bold">
                {item.label}
              </Link>
            ))}
            <a className="mt-5 bg-brand-gold px-5 py-4 text-center font-black text-brand-ink" href={`tel:${siteConfig.phoneHref}`}>
              Call {siteConfig.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
