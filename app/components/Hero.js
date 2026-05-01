export default function Hero({ acf }) {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--navy)',
      overflow: 'hidden',
      padding: '100px 5% 80px',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '760px' }}>
        <span style={{
          display: 'inline-block',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: 'var(--orange-light)',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          border: '1px solid rgba(200,112,58,0.35)',
          padding: '0.3rem 1rem',
          borderRadius: '2px',
        }}>{acf.hero_eyebrow || 'Church Consulting & Leadership'}</span>

        <h1 style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 700,
          color: 'white',
          letterSpacing: '0.08em',
          lineHeight: 1.1,
          marginBottom: '1.25rem',
        }}>{acf.hero_heading || 'EKKLEON'}</h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'rgba(255,255,255,0.7)',
          fontWeight: 300,
          maxWidth: '560px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
        }}>{acf.hero_subheading || 'Guiding Churches to Clarity, Strategy, and Spirit-Led Renewal'}</p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            background: 'var(--orange)',
            color: 'white',
            padding: '0.85rem 2rem',
            borderRadius: '3px',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textDecoration: 'none',
            display: 'inline-block',
          }}>Schedule a Call</a>

          <a href="#services" style={{
            background: 'transparent',
            color: 'rgba(255,255,255,0.85)',
            padding: '0.85rem 2rem',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '3px',
            fontSize: '0.875rem',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'inline-block',
          }}>Explore Services</a>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'rgba(255,255,255,0.35)',
        fontSize: '0.7rem',
        letterSpacing: '0.15em',
      }}>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
        }} />
      </div>
    </section>
  )
}