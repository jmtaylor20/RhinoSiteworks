'use client';

import { FormEvent, useState } from 'react';
import { CallLink } from '@/components/CallLink';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Google Ads "Form submit" conversion.
// TODO: replace FORM_CONVERSION_LABEL with the label from the form action's
// event snippet once it's created in Google Ads (Goals > Conversions > + New).
// Until then this fires nothing and the form stays untracked.
const FORM_CONVERSION_SEND_TO = 'AW-16472265989/FORM_CONVERSION_LABEL';

export function EstimateForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => {
      if (typeof value === 'string') body.append(key, value);
    });

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setStatus('success');
      reportFormConversion();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form name="estimate-request" onSubmit={handleSubmit} className="grid gap-5 rounded-sm bg-white p-6 text-brand-ink shadow-lift sm:p-8">
      <input type="hidden" name="form-name" value="estimate-request" />
      <p className="hidden" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full name"><input required name="name" autoComplete="name" /></FormField>
        <FormField label="Phone number"><input required name="phone" type="tel" autoComplete="tel" /></FormField>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Email address"><input required name="email" type="email" autoComplete="email" /></FormField>
        <FormField label="Property location"><input name="property-location" autoComplete="street-address" placeholder="City, county, or address" /></FormField>
      </div>
      <FormField label="Service needed">
        <select required name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
          <option value="Other">Other / special project</option>
        </select>
      </FormField>
      <FormField label="Project details">
        <textarea required name="project-details" rows={6} placeholder="Describe the property, the problem, and what you want completed." />
      </FormField>
      <button
        className="min-h-14 rounded-sm bg-brand-gold px-6 font-black uppercase tracking-[0.14em] text-brand-ink transition hover:bg-brand-forest hover:text-white disabled:opacity-60"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send estimate request'}
      </button>
      <div aria-live="polite">
        {status === 'success' && <p className="font-bold text-emerald-700">Thank you. Your request was sent successfully.</p>}
        {status === 'error' && (
          <p className="font-bold text-red-700">
            The form did not send. Call <CallLink className="underline">{siteConfig.phone}</CallLink> or email{' '}
            <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}

function reportFormConversion() {
  if (FORM_CONVERSION_SEND_TO.includes('FORM_CONVERSION_LABEL')) return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', 'conversion', { send_to: FORM_CONVERSION_SEND_TO });
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="form-field"><span>{label}</span>{children}</label>;
}
