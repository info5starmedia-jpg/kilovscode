import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Viking Essentials | Outdoor Gear Built for the North</title>
        <meta
          name="description"
          content="Viking Essentials equips modern explorers with rugged gear, coastal-ready layers, and purpose-built accessories for northern adventures."
        />
        <meta property="og:title" content="Viking Essentials" />
        <meta
          property="og:description"
          content="Premium outdoor gear, crafted for relentless weather and bold journeys."
        />
        <meta property="og:type" content="website" />
      </Head>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav">
          <div aria-label="Viking Essentials logo" style={{ fontWeight: 700 }}>
            Viking Essentials
          </div>
          <nav aria-label="Primary">
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div>
              <p style={{ fontWeight: 600, color: "var(--accent)" }}>
                Built for northern adventures
              </p>
              <h1>Gear that thrives where the trail meets the fjord.</h1>
              <p>
                Viking Essentials blends Scandinavian design with expedition-tested
                durability, delivering layers, packs, and tools that keep you ready for
                anything.
              </p>
              <div className="hero-cta">
                <a className="button" href="#contact">
                  Shop the collection
                </a>
                <a className="button secondary" href="#services">
                  Explore services
                </a>
              </div>
            </div>
            <div className="card" aria-label="Product highlight">
              <h3>Winter-ready field kit</h3>
              <p>
                Modular layers, stormproof packs, and navigation accessories assembled
                for weeklong treks in sub-zero climates.
              </p>
              <ul style={{ marginTop: 16, color: "var(--slate)", paddingLeft: 20 }}>
                <li>Thermal + waterproof shell system</li>
                <li>Lightning-fast camp setup tools</li>
                <li>Emergency-ready essentials</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>Rooted in heritage, engineered for today.</h2>
            <p>
              Born from a love of northern coastlines, Viking Essentials curates gear that
              respects the elements. Our team tests every product on windswept trails and
              glacier-bound routes to ensure reliability.
            </p>
          </div>
        </section>

        <section id="services" className="section" style={{ background: "white" }}>
          <div className="container">
            <h2>Services that keep you expedition-ready.</h2>
            <p>
              From outfit planning to custom kit builds, our specialists design gear
              packages for solo explorers, group treks, and weekend escapes.
            </p>
            <div className="section-grid">
              <article className="card">
                <h3>Trail-ready outfitting</h3>
                <p>
                  Personalized recommendations to match terrain, temperature, and trip
                  duration.
                </p>
              </article>
              <article className="card">
                <h3>Pack tuning</h3>
                <p>
                  Fit consultations and weight balancing sessions for comfort on long-haul
                  expeditions.
                </p>
              </article>
              <article className="card">
                <h3>Seasonal gear refresh</h3>
                <p>
                  Swap, upgrade, and service essentials before each new season arrives.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="cta">
              <h2>Plan your next northern journey.</h2>
              <p>
                Speak with our expedition team for curated kits, travel planning, and
                premium equipment drops.
              </p>
              <a className="button" href="mailto:hello@vikingessentials.com">
                Book a gear consult
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© 2026 Viking Essentials. Crafted for rugged coastlines.</p>
        </div>
      </footer>
    </>
  );
}
