import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from '@/components/ButtonLink';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Project Gallery',
  description: 'See land clearing, mulching, grading, and property improvement work by Rhino Siteworks.',
  alternates: { canonical: '/gallery' },
};

const projects = [
  { src: '/images/project-18.webp', alt: 'Cleared and improved rural land' },
  { src: '/images/project-19.webp', alt: 'Rhino Siteworks equipment on a property project' },
  { src: '/images/project-20.webp', alt: 'Completed grading and property improvement' },
  { src: '/images/project-hero.webp', alt: 'Land clearing equipment at work in East Alabama' },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Built for the land. Focused on the result." copy="A look at the equipment, terrain, and transformations behind Rhino Siteworks projects." />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <figure key={project.src} className={index === 0 ? 'sm:col-span-2' : ''}>
                <Image src={project.src} alt={project.alt} width={1600} height={1000} className={`w-full object-cover ${index === 0 ? 'h-[55vw] max-h-[650px]' : 'h-[420px]'}`} />
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center"><ButtonLink href="/contact">Discuss your property</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
