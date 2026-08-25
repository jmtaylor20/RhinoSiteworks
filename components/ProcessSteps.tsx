const steps = [
  ['01', 'Call or send the details', 'Tell us the location, the acreage, and what the property needs to become. No obligation, no pressure.'],
  ['02', 'We walk the property', 'We look at terrain, access, water flow, and problem spots in person, then talk through the options that actually fit the site.'],
  ['03', 'You get a clear scope', 'A free estimate that spells out the work, how debris is handled, and what the finished property will look like.'],
  ['04', 'We schedule and get it done', 'We book the work around ground conditions and your timeline, and we keep you posted as the site changes.'],
];

export function ProcessSteps() {
  return (
    <section className="section-space bg-white">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow text-brand-green">How it works</p>
          <h2 className="mt-4 text-4xl font-black uppercase text-brand-forest sm:text-5xl">From first call to finished ground.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every property is different, but the way we work does not change. Here is what to expect.
          </p>
        </div>
        <ol className="mt-12 grid gap-px bg-brand-forest/15 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, copy]) => (
            <li key={number} className="process-step flex flex-col bg-white p-7">
              <span className="text-5xl font-black leading-none text-brand-gold">{number}</span>
              <h3 className="mt-5 text-xl font-black uppercase text-brand-forest">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
