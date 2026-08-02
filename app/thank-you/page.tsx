import { ButtonLink } from '@/components/ButtonLink';

export default function ThankYouPage() {
  return (
    <section className="section-space bg-brand-cream">
      <div className="container-shell max-w-3xl text-center">
        <p className="eyebrow text-brand-green">Request received</p>
        <h1 className="mt-4 text-5xl font-black uppercase">Thank you.</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">Your project details have been sent. Rhino Landworks will follow up to discuss the property and next steps.</p>
        <ButtonLink href="/" className="mt-8">Return home</ButtonLink>
      </div>
    </section>
  );
}
