'use client';

import { siteConfig } from '@/config/site';

type CallLinkProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Phone link that reports a Google Ads "Calls from Website" conversion.
 * Conversion: AW-16472265989/qYN-CM_l298cEIWqy649
 *
 * The event is fired but navigation is never blocked — if gtag is missing,
 * blocked by an ad blocker, or slow, the call still goes through.
 */
export function CallLink({ className, children }: CallLinkProps) {
  const reportConversion = () => {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag !== 'function') return;
    gtag('event', 'conversion', {
      send_to: 'AW-16472265989/qYN-CM_l298cEIWqy649',
    });
  };

  return (
    <a className={className} href={`tel:${siteConfig.phoneHref}`} onClick={reportConversion}>
      {children}
    </a>
  );
}
