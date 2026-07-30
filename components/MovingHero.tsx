import Image from 'next/image';

const heroFrames = [
  { src: '/images/project-hero.webp', alt: 'Rhino Siteworks equipment working across an East Alabama property' },
  { src: '/images/project-19.webp', alt: 'Sitework equipment moving through a rural jobsite' },
  { src: '/images/project-20.webp', alt: 'Completed land improvement project' },
];

export function MovingHero() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {heroFrames.map((frame, index) => (
        <div key={frame.src} className={`hero-motion-frame hero-motion-frame-${index + 1}`}>
          <Image src={frame.src} alt="" fill priority={index === 0} sizes="100vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}
