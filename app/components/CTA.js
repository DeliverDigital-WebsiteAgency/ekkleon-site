export default function CTA() {
  return (
    <section style={{
      background: 'var(--navy-mid)',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 5%',
      textAlign: 'center',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: 'var(--orange)',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>Ready to Move Forward?</div>
        <h2 style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
          fontWeight: 700,
          color: 'white',
          lineHeight: 1.2,
          marginBottom: '1.25rem',
        }}>Custom Ministry Solutions.</h2>
        <p style={{
          color: 'rgba(255,255,255,0.6)',
          fontSize: '1rem',
          marginBottom: '2.5rem',
          maxWidth: '480px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>Every church has a unique calling. Let&apos;s find yours together and build a clear path to get there.</p>
        <a href="#contact" style={{
          display: 'inline-block',
          background: 'var(--orange)',
          color: 'white',
          padding: '0.85rem 2rem',
          borderRadius: '3px',
          fontSize: '0.875rem',
          fontWeight: 600,
          textDecoration: 'none',
        }}>Schedule a Call</a>
      </div>
    </section>
  )
}