const cornerBrackets = [
  { top: '24px', left: '24px', borderTop: '2px solid rgba(200,112,58,0.5)', borderLeft: '2px solid rgba(200,112,58,0.5)' },
  { top: '24px', right: '24px', borderTop: '2px solid rgba(200,112,58,0.5)', borderRight: '2px solid rgba(200,112,58,0.5)' },
  { bottom: '24px', left: '24px', borderBottom: '2px solid rgba(200,112,58,0.5)', borderLeft: '2px solid rgba(200,112,58,0.5)' },
  { bottom: '24px', right: '24px', borderBottom: '2px solid rgba(200,112,58,0.5)', borderRight: '2px solid rgba(200,112,58,0.5)' },
]

export default function Hero({ acf }) {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'var(--navy)',
      overflow: 'hidden',
      padding: '100px 5% 80px',
    }}>
      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      {/* Corner brackets */}
      {cornerBrackets.map((style, i) => (
        <div key={i} className="hero-bracket" style={{ position: 'absolute', width: '30px', height: '30px', pointerEvents: 'none', ...style }} />
      ))}

      {/* Split layout */}
      <div className="hero-content">

        {/* Left: text */}
        <div className="hero-text">
          {/* Eyebrow with leading orange line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--orange)', flexShrink: 0 }} />
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              color: 'var(--orange-light)',
              textTransform: 'uppercase',
            }}>{acf.hero_eyebrow || 'Church Consulting & Leadership'}</span>
          </div>

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
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(255,255,255,0.75)',
            fontWeight: 300,
            maxWidth: '480px',
            marginBottom: '2.5rem',
            lineHeight: 1.7,
          }}>{acf.hero_subheading || 'Guiding Churches to Clarity, Strategy, and Spirit-Led Renewal'}</p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
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

          {/* Footer credits */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
          }}>
            <span>Ekkleon.com</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--orange)', flexShrink: 0 }} />
            <span>Pastor Craig Liscom, Founder</span>
          </div>
        </div>

        {/* Right: blueprint compass */}
        <div className="hero-compass">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '420px' }}>
            {/* Concentric rings — outer to inner, increasing opacity */}
            <circle cx="200" cy="200" r="188" stroke="#c8703a" strokeOpacity="0.07" strokeWidth="1"/>
            <circle cx="200" cy="200" r="158" stroke="#c8703a" strokeOpacity="0.11" strokeWidth="1"/>
            <circle cx="200" cy="200" r="128" stroke="#c8703a" strokeOpacity="0.18" strokeWidth="1.5"/>
            <circle cx="200" cy="200" r="98"  stroke="#c8703a" strokeOpacity="0.28" strokeWidth="1.5"/>
            <circle cx="200" cy="200" r="68"  stroke="#c8703a" strokeOpacity="0.40" strokeWidth="2"/>
            <circle cx="200" cy="200" r="38"  stroke="#c8703a" strokeOpacity="0.58" strokeWidth="2"/>
            <circle cx="200" cy="200" r="14"  stroke="#c8703a" strokeOpacity="0.75" strokeWidth="1.5"/>

            {/* Crosshair */}
            <line x1="200" y1="10" x2="200" y2="390" stroke="#c8703a" strokeOpacity="0.12" strokeWidth="1"/>
            <line x1="10"  y1="200" x2="390" y2="200" stroke="#c8703a" strokeOpacity="0.12" strokeWidth="1"/>

            {/* 45° guide lines */}
            <line x1="60"  y1="60"  x2="340" y2="340" stroke="#c8703a" strokeOpacity="0.06" strokeWidth="1"/>
            <line x1="340" y1="60"  x2="60"  y2="340" stroke="#c8703a" strokeOpacity="0.06" strokeWidth="1"/>

            {/* Cardinal tick marks */}
            <line x1="200" y1="8"   x2="200" y2="24"  stroke="#c8703a" strokeOpacity="0.65" strokeWidth="2.5"/>
            <line x1="200" y1="376" x2="200" y2="392" stroke="#c8703a" strokeOpacity="0.3"  strokeWidth="2"/>
            <line x1="8"   y1="200" x2="24"  y2="200" stroke="#c8703a" strokeOpacity="0.3"  strokeWidth="2"/>
            <line x1="376" y1="200" x2="392" y2="200" stroke="#c8703a" strokeOpacity="0.3"  strokeWidth="2"/>

            {/* Compass needle — north (bright orange, pointing up) */}
            <path d="M200 44 L215 196 L185 196 Z" fill="#c8703a" fillOpacity="0.92"/>
            {/* Compass needle — south (dim, pointing down) */}
            <path d="M200 356 L215 204 L185 204 Z" fill="#c8703a" fillOpacity="0.28"/>

            {/* Center hub */}
            <circle cx="200" cy="200" r="8"   fill="#c8703a" fillOpacity="0.9"/>
            <circle cx="200" cy="200" r="3.5" fill="#0b1f3a"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
