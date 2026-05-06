export default function Services({ services }) {
  return (
    <section id="services" className="section-pad" style={{ background: 'var(--cream)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: 'var(--orange)',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>What We Offer</div>

        <h2 style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
          fontWeight: 700,
          color: 'var(--navy)',
          lineHeight: 1.2,
          marginBottom: '1rem',
        }}>Ministry Solutions Built for Your Church</h2>

        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-mid)',
          maxWidth: '600px',
          lineHeight: 1.8,
          margin: '0 auto',
        }}>Every congregation is unique. Ekkleon brings structured frameworks and Spirit-led discernment to help your church move from uncertainty to momentum.</p>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <div key={i} style={{
            background: 'white',
            padding: '2.5rem 2rem',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--navy)',
              marginBottom: '1rem',
            }}>{service.title.rendered}</h3>

            <div
              style={{ fontSize: '0.975rem', color: 'var(--text-mid)', lineHeight: 1.75 }}
              dangerouslySetInnerHTML={{ __html: service.content.rendered }}
            />

          </div>
        ))}
      </div>
    </section>
  )
}