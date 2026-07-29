import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { EstimateForm } from '@/components/EstimateForm';
import { SectionHeading } from '@/components/SectionHeading';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[720px] overflow-hidden bg-brand-forest text-white">
        <Image src="/images/project-hero.webp" alt="Rhino Siteworks equipment improving rural property" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,31,23,.94)_0%,rgba(7,31,23,.76)_48%,rgba(7,31,23,.2)_100%)]" />
        <div className="container-shell relative flex min-h-[720px] items-center py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-gold">East Alabama land & site services</p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.98] sm:text-7xl lg:text-8xl">
              Make your property <span className="text-brand-gold">work better.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Land clearing, forestry mulching, grading, drainage, gravel work, and property reclamation—planned around your land and the result you need.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request an estimate</ButtonLink>
              <ButtonLink href="/services" variant="secondary">Explore services</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-brand-gold text-brand-ink">
        <div className="container-shell flex flex-wrap justify-center gap-x-10 gap-y-3 py-5 text-sm font-black uppercase tracking-[0.12em]">
          <span>Land clearing</span><span>Forestry mulching</span><span>Grading</span><span>Drainage</span><span>Gravel</span>
        </div>
      </div>

      <section id="about" className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="Rhino Siteworks" title="From overgrown to ready." />
          <div className="grid gap-6 text-lg leading-8 text-slate-600">
            <p>Every property has different challenges. We look at the full site, listen to what you want to accomplish, and recommend a sensible path forward.</p>
            <p>Whether you are reclaiming acreage, correcting drainage, opening access, or preparing for a project, the goal is straightforward: clean work, clear communication, and a result you can use.</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-cream">
        <div className="container-shell">
          <SectionHeading eyebrow="What we do" title="Sitework solutions for real property needs" copy="Services designed to improve access, function, safety, drainage, and the way your land looks." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.slug} className="group flex min-h-72 flex-col border border-brand-forest/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                <span className="text-sm font-black tracking-[0.18em] text-brand-green">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-2xl font-black uppercase">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.shortDescription}</p>
                <Link href={`/services/${service.slug}`} className="mt-auto pt-7 font-black text-brand-green group-hover:text-brand-forest">Explore service →</Link>
              </article>
            ))}
          </div>
          <ButtonLink href="/services" className="mt-8">View all services</ButtonLink>
        </div>
      </section>

      <section className="bg-brand-forest text-white">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-5 py-20 sm:px-10 lg:px-[max(2.5rem,calc((100vw-80rem)/2))]">
            <div className="max-w-2xl">
              <SectionHeading light eyebrow="Property transformation" title="Clear the problem. Shape the solution." copy="From thick overgrowth and uneven terrain to washed-out drives and standing water, Rhino Siteworks turns property problems into usable ground." />
              <ButtonLink href="/contact" className="mt-8">Talk about your project</ButtonLink>
            </div>
          </div>
          <div className="grid min-h-[520px] grid-cols-2 grid-rows-2 gap-1">
            <Image src="/images/project-18.webp" alt="Land clearing project" width={900} height={700} className="h-full w-full object-cover" />
            <Image src="/images/project-19.webp" alt="Forestry and sitework project" width={900} height={700} className="row-span-2 h-full w-full object-cover" />
            <Image src="/images/project-20.webp" alt="Completed property improvement" width={900} height={700} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="What property owners value" title="Dependable work starts with clear communication" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="border-t-4 border-brand-gold bg-brand-cream p-7">
                <blockquote className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6 text-sm font-black uppercase tracking-wider text-brand-green">{testimonial.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-green text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading light eyebrow="Free project estimate" title="Tell us about your property." copy="Send the basics and Rhino Siteworks will follow up about access, scope, timing, and the best next step." />
          </div>
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
