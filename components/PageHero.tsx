import Image from 'next/image';

type Props = { eyebrow: string; title: string; copy: string; image?: string; imageAlt?: string };

export function PageHero({ eyebrow, title, copy, image, imageAlt = '' }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-forest py-20 text-white sm:py-28">
      {image && <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />}
      {image && <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-forest via-brand-forest/95 to-brand-forest/45" />}
      <div className="container-shell relative">
        <p className="eyebrow text-brand-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-tight sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{copy}</p>
      </div>
    </section>
  );
}
