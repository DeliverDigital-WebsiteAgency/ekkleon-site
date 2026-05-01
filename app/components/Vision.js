const stats = [
  { num: '20+', label: 'Years of Pastoral Leadership' },
  { num: '2', label: 'Church Contexts Led (Plant & Revitalization)' },
  { num: 'Ph.D', label: 'Executive Leadership Expertise' },
  { num: '1', label: 'Mission: Advance the Kingdom' },
]

const pillars = [
  { title: 'Alignment', description: 'Unify leadership, staff, and congregation around a common direction and purpose.' },
  { title: 'Clarity', description: 'Replace ambiguity with a written, agreed-upon plan that guides decisions at every level.' },
  { title: 'Momentum', description: 'Turn good intentions into measurable progress and renewed congregational energy.' },
]

export default function Vision() {
  return (
    <section style={{ background: 'var(--cream)', padding: '100px 5%' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <div>
          <div style={{
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: 'var(--orange)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>Develop Vision Plan</div>

          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            color: 'var(--navy)',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
          }}>Why Does Your Church Need a Vision Plan?</h2>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-mid)',
            lineHeight: 1.8,
            marginBottom: '1.25rem',
          }}>Without a clear, shared vision, even faithful churches drift. A vision plan is not a business strategy — it is a Spirit-led document that answers the question: <em>Where is God calling us, and how do we get there together?</em></p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
            {pillars.map((pillar, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'var(--orange)',
                  flexShrink: 0,
                  marginTop: '5px',
                }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.3rem' }}>{pillar.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" style={{
            display: 'inline-block',
            background: 'var(--orange)',
            color: 'white',
            padding: '0.85rem 2rem',
            borderRadius: '3px',
            fontSize: '0.875rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}>Start Your Vision Plan</a>
        </div>

        <div style={{
          background: 'var(--navy)',
          borderRadius: '4px',
          padding: '2.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              color: 'var(--orange)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              fontWeight: 600,
            }}>Vision Plan Impact</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {stats.map((stat, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1rem' }}>
                  <div style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '2.2rem',
                    fontWeight: 700,
                    color: 'var(--orange-light)',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}>{stat.num}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontStyle: 'italic' }}>
                &apos;A vision without a plan is just a dream. A plan without God is just a program. Ekkleon brings both together.&apos;
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--orange-light)', marginTop: '0.75rem', fontWeight: 600 }}>— Pastor Craig Liscom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}