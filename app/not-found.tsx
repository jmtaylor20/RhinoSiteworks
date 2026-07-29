import { ButtonLink } from '@/components/ButtonLink';

export default function NotFound() {
  return (
    <section className="section-space bg-brand-cream">
      <div className="container-shell max-w-3xl text-center">
        <p className="eyebrow text-brand-green">404</p>
        <h1 className="mt-4 text-5xl font-black uppercase">This page could not be found.</h1>
        <p className="mt-6 text-lg text-slate-600">The page may have moved, but your next property project can still start here.</p>
        <ButtonLink href="/" className="mt-8">Return home</ButtonLink>
      </div>
    </section>
  );
}
