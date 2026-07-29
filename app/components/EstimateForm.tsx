'use client';

import { FormEvent, useState } from 'react';

const services = [
  'Land Clearing',
  'Forestry Mulching',
  'Dirt Work & Grading',
  'Water Drainage',
  'Gravel Driveways',
  'Property Reclamation',
  'Yard Leveling & Sod Prep',
  'Special Projects',
];

export default function EstimateForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encoded = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === 'string') encoded.append(key, value);
    });

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded.toString(),
      });

      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="estimate-form" name="estimate-request" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="estimate-request" />
      <p className="hidden-field"><label>Do not fill this out: <input name="bot-field" /></label></p>

      <div className="field-row">
        <label>Full name<input required name="name" type="text" autoComplete="name" /></label>
        <label>Phone number<input required name="phone" type="tel" autoComplete="tel" /></label>
      </div>
      <div className="field-row">
        <label>Email address<input required name="email" type="email" autoComplete="email" /></label>
        <label>Property location<input name="property-location" type="text" placeholder="City, county, or address" /></label>
      </div>
      <label>Service needed
        <select required name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.map((service) => <option key={service} value={service}>{service}</option>)}
        </select>
      </label>
      <label>Project details<textarea required name="project-details" rows={6} placeholder="Describe the property, the problem, and what you want completed." /></label>
      <label>Best time to contact<input name="best-time" type="text" placeholder="Morning, afternoon, or evening" /></label>
      <button className="button primary submit-button" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Estimate Request'}
      </button>
      {status === 'success' && <p className="form-status success">Thank you. Your estimate request was sent successfully.</p>}
      {status === 'error' && <p className="form-status error">The form did not send. Please call 334-707-7874 or email WeGoRhino@gmail.com.</p>}
      <p className="form-note">Your request will be securely submitted through Netlify Forms.</p>
    </form>
  );
}
