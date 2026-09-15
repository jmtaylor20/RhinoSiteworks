import type { Metadata } from 'next';
import { Photo } from '@/components/Photo';
import { ButtonLink } from '@/components/ButtonLink';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Land Clearing & Grading Project Gallery',
  description: 'Real Rhino Landwork projects across East Alabama: forestry mulching, land clearing, grading, drainage, gravel driveways, and site preparation.',
  alternates: { canonical: '/gallery' },
};

const projects = [
  { src: '/media/gravel-driveway-installation.webp', alt: 'Completed gravel driveway installed on a rural East Alabama property', label: 'Gravel driveway installation' },
  { src: '/media/excavator-land-clearing.webp', alt: 'Excavator clearing trees and brush from a wooded property', label: 'Land clearing' },
  { src: '/media/forestry-mulching-jobsite.webp', alt: 'Tracked forestry mulching equipment opening an overgrown property', label: 'Forestry mulching' },
  { src: '/media/culvert-drainage-installation.webp', alt: 'Culvert pipe installation with excavation equipment', label: 'Culvert drainage' },
  { src: '/media/dozer-site-grading.webp', alt: 'Dozer shaping and grading soil on a jobsite', label: 'Site grading' },
  { src: '/media/dump-truck-dirt-delivery.webp', alt: 'Dump truck delivering fill dirt to a rural property', label: 'Fill dirt delivery' },
  { src: '/media/excavator-and-dozer-jobsite.webp', alt: 'Excavator and dozer working together on property preparation', label: 'Site preparation' },
  { src: '/media/brush-clearing-excavator.webp', alt: 'Excavator removing brush during property reclamation', label: 'Brush removal' },
  { src: '/media/dozer-road-grading.webp', alt: 'Dozer grading a new access road through a cleared site', label: 'Access-road grading' },
  { src: '/media/finished-site-grading.webp', alt: 'Dozer completing finish grading on a cleared property', label: 'Finish grading' },
  { src: '/media/dozer-land-clearing.webp', alt: 'Dozer clearing and preparing wooded land', label: 'Land preparation' },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Built for the land. Focused on the result." copy="Real clearing, mulching, grading, drainage, driveway, and site-preparation work completed by Rhino Landwork." image="/media/dozer-road-grading.webp" imageAlt="Dozer grading an East Alabama access road" />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <figure key={project.src} className={`project-frame ${index === 0 ? 'sm:col-span-2' : ''}`}>
                <Photo
                  src={project.src}
                  alt={project.alt}
                  width={1600}
                  height={1000}
                  sizes={index === 0 ? '(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1280px' : '(max-width: 640px) 100vw, 620px'}
                  className={`w-full object-cover ${index === 0 ? 'h-[55vw] max-h-[650px]' : 'h-[420px]'}`}
                />
                <figcaption className="image-label">{project.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center"><ButtonLink href="/contact">Discuss your property</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
