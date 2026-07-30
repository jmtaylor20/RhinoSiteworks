import Image from 'next/image';

type Props = {
  before: string;
  after: string;
  title: string;
  copy: string;
  reverse?: boolean;
};

export function BeforeAfter({ before, after, title, copy, reverse = false }: Props) {
  return (
    <article className={`grid overflow-hidden bg-white shadow-lift lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div className="grid min-h-[420px] grid-cols-2 gap-1 bg-brand-ink p-1">
        <figure className="relative overflow-hidden">
          <Image src={before} alt={`Before: ${title}`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          <figcaption className="image-label">Before</figcaption>
        </figure>
        <figure className="relative overflow-hidden">
          <Image src={after} alt={`After: ${title}`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          <figcaption className="image-label bg-brand-gold text-brand-ink">After</figcaption>
        </figure>
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-12">
        <p className="eyebrow text-brand-green">Property transformation</p>
        <h2 className="mt-4 text-4xl font-black uppercase">{title}</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">{copy}</p>
      </div>
    </article>
  );
}
