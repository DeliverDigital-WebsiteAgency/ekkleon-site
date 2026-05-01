export default function About({ acf }) {
  const credentials = acf.about_credentials
    ? acf.about_credentials.split('\n').filter(c => c.trim())
    : []

  return (
    <section id="about" style={{
      background: 'white',
      padding: '100px 5%',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <div>
          {acf.about_photo ? (
            <img
              src={acf.about_photo}
              alt={acf.about_name}
              style={{
                width: '100%',
                aspectRatio: '4/5',
                objectFit: 'cover',
                borderRadius: '2px',
                display: 'block',
              }}
            />
          ) : (
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              background: 'linear-gradient(145deg, #1a2e48 0%, #0b1f3a 100%)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.25)',
              fontSize: '0.75rem',
            }}>
              Photo coming soon
            </div>
          )}

          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {credentials.map((cred, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.8rem',
                color: 'var(--text-mid)',
              }}>
                <div style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--orange)',
                  flexShrink: 0,
                }} />
                {cred.trim()}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: 'var(--orange)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>Meet the Consultant</div>

          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            color: 'var(--navy)',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
          }}>Wisdom Forged in the Local Church</h2>

          <div style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.4rem',
            fontWeight: 700,
            color: 'var(--navy)',
            marginBottom: '0.25rem',
          }}>{acf.about_name || 'Pastor Craig Liscom'}</div>

          <div style={{
            fontSize: '0.8rem',
            fontWeight: 500,
            color: 'var(--orange)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>{acf.about_role || 'Founder, Ekkleon'}</div>

          {[acf.about_bio_1, acf.about_bio_2, acf.about_bio_3].filter(Boolean).map((para, i) => (
            <p key={i} style={{
              fontSize: '0.975rem',
              color: 'var(--text-mid)',
              lineHeight: 1.8,
              marginBottom: '1rem',
            }}>{para.trim()}</p>
          ))}

          <a href="#contact" style={{
            display: 'inline-block',
            marginTop: '1rem',
            background: 'var(--orange)',
            color: 'white',
            padding: '0.85rem 2rem',
            borderRadius: '3px',
            fontSize: '0.875rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}>Work with Craig</a>
        </div>
      </div>
    </section>
  )
}