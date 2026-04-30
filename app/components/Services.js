export default function Services({ services }) {
  return (
    <section id="services" style={{
      background: 'var(--cream)',
      padding: '100px 5%',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{
          fontSize: '0.68rem',
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
          fontSize: '1.05rem',
          color: 'var(--text-mid)',
          maxWidth: '600px',
          lineHeight: 1.75,
          margin: '0 auto',
        }}>Every congregation is unique. Ekkleon brings structured frameworks and Spirit-led discernment to help your church move from uncertainty to momentum.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2px',
        border: '2px solid #e8e4dc',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>
        {services.map((service, i) => (
          <div key={i} style={{
            background: 'white',
            padding: '2.5rem 2rem',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--navy)',
              marginBottom: '0.75rem',
            }}>{service.title.rendered}</h3>

            <div
              style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.7 }}
              dangerouslySetInnerHTML={{ __html: service.content.rendered }}
            />

            <a href="#contact" style={{
              display: 'inline-block',
              marginTop: '1.25rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--orange)',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}>Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  )
}