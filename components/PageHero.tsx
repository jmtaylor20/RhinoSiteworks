type Props = { eyebrow: string; title: string; copy: string };

export function PageHero({ eyebrow, title, copy }: Props) {
  return (
    <section className="bg-brand-forest py-20 text-white sm:py-28">
      <div className="container-shell">
        <p className="eyebrow text-brand-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-tight sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{copy}</p>
      </div>
    </section>
  );
}
