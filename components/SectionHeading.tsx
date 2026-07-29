type Props = {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, copy, light = false }: Props) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${light ? 'text-brand-gold' : 'text-brand-green'}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-4xl font-black leading-tight sm:text-5xl ${light ? 'text-white' : 'text-brand-ink'}`}>
        {title}
      </h2>
      {copy && <p className={`mt-5 text-lg leading-8 ${light ? 'text-white/75' : 'text-slate-600'}`}>{copy}</p>}
    </div>
  );
}
