'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CallLink } from '@/components/CallLink';
import { siteConfig } from '@/config/site';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-brand-gold bg-brand-forest text-white shadow-lg">
      <div className="container-shell flex h-[88px] items-center justify-between gap-4 sm:h-[112px]">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${siteConfig.name} home`}>
          <Image
            src="/brand/rhino-primary.png"
            alt="Rhino Landworks"
            width={1778}
            height={583}
            priority
            className="h-auto w-[218px] object-contain sm:w-[280px] xl:w-[305px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold hover:text-brand-gold">
              {item.label}
            </Link>
          ))}
          <CallLink className="rounded-sm bg-brand-gold px-5 py-3 text-sm font-black text-brand-ink hover:bg-white">
            Call {siteConfig.phone}
          </CallLink>
        </nav>

        <button
          type="button"
          className="relative z-10 min-h-11 rounded-sm border-2 border-brand-gold bg-brand-gold px-4 py-2 text-sm font-black uppercase tracking-widest text-brand-ink shadow-md lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-brand-gold/25 bg-brand-forest px-5 py-5 shadow-2xl lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-bold">
                {item.label}
              </Link>
            ))}
            <CallLink className="mt-5 bg-brand-gold px-5 py-4 text-center font-black text-brand-ink">
              Call {siteConfig.phone}
            </CallLink>
          </div>
        </nav>
      )}
    </header>
  );
}
