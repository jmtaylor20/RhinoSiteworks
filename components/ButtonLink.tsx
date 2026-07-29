import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  className?: string;
};

export function ButtonLink({ href, children, variant = 'primary', className = '' }: Props) {
  const styles = {
    primary: 'bg-brand-gold text-brand-ink hover:bg-white',
    secondary: 'border border-white/50 bg-white/10 text-white hover:bg-white hover:text-brand-ink',
    light: 'bg-white text-brand-forest hover:bg-brand-gold hover:text-brand-ink',
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-sm px-6 py-3 text-sm font-black uppercase tracking-[0.14em] transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
