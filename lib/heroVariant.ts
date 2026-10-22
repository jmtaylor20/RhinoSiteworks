import { mediaBlur } from '@/data/mediaBlur';

/**
 * Swaps a full-detail photo for its hero derivative.
 *
 * Hero backgrounds render at 25 to 40 percent opacity behind a gradient, so
 * they do not need the original's detail, but they ARE the largest element on
 * the page and therefore the LCP. The derivatives in public/media/hero are
 * slightly blurred and heavily compressed, which is invisible at that opacity
 * and roughly 8x lighter. Generate them with: npm run media
 *
 * Falls back to the original when no derivative exists.
 */
export function heroVariant(src: string): string {
  if (!src.startsWith('/media/') || src.startsWith('/media/hero/')) return src;
  const candidate = src.replace('/media/', '/media/hero/');
  return candidate in mediaBlur ? candidate : src;
}
