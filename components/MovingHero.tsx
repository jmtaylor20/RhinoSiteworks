export function MovingHero() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/hero-land-clearing-poster.webp"
      >
        <source src="/media/hero-land-clearing.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
