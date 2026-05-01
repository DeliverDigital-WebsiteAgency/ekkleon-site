export default function Contact() {
  return (
    <section id="contact" style={{
      background: 'var(--navy)',
      padding: '100px 5%',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        maxWidth: '900px',
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
          }}>Get in Touch</div>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.2,
          }}>Let&apos;s Start a Conversation</h2>
          <p style={{
            fontSize: '0.975rem',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.8,
            marginTop: '1rem',
          }}>Whether your church is thriving and seeking its next chapter, or navigating difficult seasons, Ekkleon is here to help. Reach out and we&apos;ll schedule a complimentary discovery call.</p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[['First Name', 'text', 'John'], ['Last Name', 'text', 'Smith']].map(([label, type, placeholder]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{label}</label>
                <input type={type} placeholder={placeholder} style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'white',
                  padding: '0.75rem 1rem',
                  borderRadius: '2px',
                  fontSize: '0.9rem',
                  outline: 'none',
                  fontFamily: 'inherit',
                }} />
              </div>
            ))}
          </div>

          {[['Email Address', 'email', 'pastor@yourchurch.org'], ['Church Name', 'text', 'First Baptist Church']].map(([label, type, placeholder]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{label}</label>
              <input type={type} placeholder={placeholder} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '2px',
                fontSize: '0.9rem',
                outline: 'none',
                fontFamily: 'inherit',
              }} />
            </div>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>How Can We Help?</label>
            <textarea placeholder="Tell us briefly about your church and what you're hoping to work on..." style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'white',
              padding: '0.75rem 1rem',
              borderRadius: '2px',
              fontSize: '0.9rem',
              outline: 'none',
              fontFamily: 'inherit',
              minHeight: '120px',
              resize: 'vertical',
            }} />
          </div>

          <button type="submit" style={{
            background: 'var(--orange)',
            color: 'white',
            padding: '0.85rem 2rem',
            border: 'none',
            borderRadius: '3px',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
            marginTop: '0.5rem',
          }}>Send Message</button>
        </form>
      </div>
    </section>
  )
}