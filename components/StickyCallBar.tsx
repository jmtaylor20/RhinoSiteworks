import Link from 'next/link';
import { CallLink } from '@/components/CallLink';
import { siteConfig } from '@/config/site';

/**
 * Mobile-only tap-to-call bar pinned to the bottom of the viewport. The call
 * button routes through CallLink so taps still report the Google Ads
 * "Calls from Website" conversion.
 *
 * Body padding for this bar lives in app/globals.css (.has-sticky-call).
 */
export function StickyCallBar() {
  return (
    <div className="sticky-call-bar flex lg:hidden">
      <CallLink className="flex min-h-14 flex-1 items-center justify-center whitespace-nowrap bg-brand-gold px-3 text-xs font-black uppercase tracking-[0.06em] text-brand-ink">
        Call {siteConfig.phone}
      </CallLink>
      <Link
        href="/contact"
        className="flex min-h-14 flex-1 items-center justify-center whitespace-nowrap bg-brand-forest px-3 text-xs font-black uppercase tracking-[0.06em] text-white"
      >
        Free estimate
      </Link>
    </div>
  );
}
