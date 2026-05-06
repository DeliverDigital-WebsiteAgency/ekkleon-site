export default function Process({ steps }) {
  return (
    <section id="process" className="section-pad" style={{
      background: 'var(--navy)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: 'var(--orange)',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>How It Works</div>
        <h2 style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
          fontWeight: 700,
          color: 'white',
          lineHeight: 1.2,
          marginBottom: '1rem',
        }}>A Clear Path Forward</h2>
        <p style={{
          fontSize: '1.15rem',
          color: 'rgba(255,255,255,0.65)',
          maxWidth: '600px',
          lineHeight: 1.8,
          margin: '0 auto',
        }}>We follow a proven four-step process that brings clarity before strategy, and strategy before action.</p>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div key={i} className="process-step">
            <span style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '3.5rem',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.06)',
              lineHeight: 1,
              marginBottom: '0.5rem',
              display: 'block',
            }}>0{i + 1}</span>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: 'var(--orange)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
              display: 'block',
            }}>Step {i + 1}</span>
            <h3 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem',
            }}>{step.title.rendered}</h3>
            <div
              style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: step.content.rendered }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}