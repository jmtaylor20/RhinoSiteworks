import Image, { type ImageProps } from 'next/image';
import { mediaBlur } from '@/data/mediaBlur';

type PhotoProps = Omit<ImageProps, 'src' | 'placeholder' | 'blurDataURL'> & { src: string };

/**
 * next/image with a blur placeholder applied automatically.
 *
 * Every photo on the site is a heavy 1920px WebP of foliage or gravel, which
 * is worst case for compression. Lazy loading those without a placeholder is
 * what left the homepage project tiles showing as empty grey frames. The blur
 * data is pregenerated in data/mediaBlur.ts (npm run blur).
 *
 * Always pass `sizes`. Without it next/image requests the 3840px variant no
 * matter how small the image renders, which is an 8x payload penalty on these
 * files.
 */
export function Photo({ src, alt, ...props }: PhotoProps) {
  const blurDataURL = mediaBlur[src];

  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      {...(blurDataURL ? { placeholder: 'blur' as const, blurDataURL } : {})}
    />
  );
}
