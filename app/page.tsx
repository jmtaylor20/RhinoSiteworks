const services = [
  ['Land Clearing', 'Clear wooded, overgrown, or unusable areas to prepare your property for construction, pasture, access, or a fresh start.'],
  ['Forestry Mulching', 'Turn brush and unwanted vegetation into ground-covering mulch with less hauling and site disturbance.'],
  ['Dirt Work & Grading', 'Shape, level, and stabilize your property for building pads, yards, roads, drainage, and other site needs.'],
  ['Water Drainage', 'Correct runoff, standing water, erosion, and washouts with practical drainage solutions built for your property.'],
  ['Gravel Driveways', 'Build, repair, and regrade gravel driveways and access roads for dependable everyday use.'],
  ['Property Reclamation', 'Restore neglected or overgrown land and make it safer, cleaner, and more useful again.'],
  ['Yard Leveling & Sod Prep', 'Prepare uneven or damaged yards for sod, seed, landscaping, or improved outdoor use.'],
  ['Special Projects', 'Need something that does not fit a standard category? Tell us what the property needs and we will evaluate it.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rhino Siteworks home">
          <span className="brand-mark">R</span>
          <span><strong>RHINO</strong><small>SITEWORKS</small></span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="tel:3347077874">Call 334-707-7874</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">East Alabama land and site services</p>
          <h1>Make Your Property <span>Work Better.</span></h1>
          <p className="hero-copy">Land clearing, forestry mulching, grading, drainage, gravel work, and property reclamation completed with practical solutions and dependable equipment.</p>
          <div className="hero-actions">
            <a className="button primary" href="tel:3347077874">Request an Estimate</a>
            <a className="button secondary" href="#services">Explore Services</a>
          </div>
        </div>
        <div className="hero-stat"><strong>Built for the land.</strong><span>Focused on the result.</span></div>
      </section>

      <section className="trust-strip">
        <span>Land Clearing</span><span>Forestry Mulching</span><span>Grading</span><span>Drainage</span><span>Gravel</span>
      </section>

      <section className="section intro" id="about">
        <div>
          <p className="eyebrow dark">Rhino Siteworks</p>
          <h2>From Overgrown to Ready.</h2>
        </div>
        <div>
          <p>Every property has different challenges. Rhino Siteworks looks at the full site, listens to what you want to accomplish, and recommends a sensible path forward.</p>
          <p>Whether you are reclaiming acreage, correcting drainage, opening access, or preparing for a new project, the goal is straightforward: clean work, clear communication, and a result you can use.</p>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow dark">What we do</p>
          <h2>Sitework Solutions for Real Property Needs</h2>
          <p>No generic promises. Just the services property owners need to improve access, function, safety, and appearance.</p>
        </div>
        <div className="service-grid">
          {services.map(([title, copy], index) => (
            <article className="service-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="tel:3347077874">Discuss this service →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="project-band" id="work">
        <div className="project-copy">
          <p className="eyebrow">Property transformation</p>
          <h2>Clear the problem. Shape the solution.</h2>
          <p>From thick overgrowth and uneven terrain to washed-out drives and standing water, Rhino Siteworks helps turn property problems into usable ground.</p>
          <a className="button primary" href="tel:3347077874">Talk About Your Project</a>
        </div>
        <div className="project-collage" aria-label="Rhino Siteworks project gallery">
          <div className="photo photo-one" />
          <div className="photo photo-two" />
          <div className="photo photo-three" />
        </div>
      </section>

      <section className="section process">
        <div className="section-heading compact">
          <p className="eyebrow dark">Simple process</p>
          <h2>A Clear Path From First Call to Finished Work</h2>
        </div>
        <div className="steps">
          <div><strong>01</strong><h3>Tell Us the Need</h3><p>Share the location, problem, goal, and any photos that help explain the site.</p></div>
          <div><strong>02</strong><h3>Review the Property</h3><p>We evaluate access, terrain, drainage, vegetation, and the equipment needed.</p></div>
          <div><strong>03</strong><h3>Approve the Plan</h3><p>You receive a clear scope so everyone understands the work before it begins.</p></div>
          <div><strong>04</strong><h3>Transform the Site</h3><p>We complete the work with attention to function, safety, and the finished property.</p></div>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <p className="eyebrow">Have a property project in mind?</p>
          <h2>Let’s Take a Look at the Land.</h2>
          <p>Call or email Rhino Siteworks to discuss your project and request an estimate.</p>
        </div>
        <div className="cta-actions">
          <a className="button light" href="tel:3347077874">334-707-7874</a>
          <a className="button outline-light" href="mailto:WeGoRhino@gmail.com">WeGoRhino@gmail.com</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">R</span><div><strong>RHINO SITEWORKS</strong><p>Land clearing, grading, drainage, and property improvement.</p></div></div>
        <div><strong>Contact</strong><a href="tel:3347077874">334-707-7874</a><a href="mailto:WeGoRhino@gmail.com">WeGoRhino@gmail.com</a></div>
        <div><strong>Location</strong><p>108 Fletcher Segrest Road<br />Tuskegee, AL 36083</p></div>
        <p className="copyright">© {new Date().getFullYear()} Rhino Siteworks. All rights reserved.</p>
      </footer>
    </main>
  );
}
