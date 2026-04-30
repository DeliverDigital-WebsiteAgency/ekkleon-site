export default function Footer() {
  return (
    <footer style={{
      background: '#070f1e',
      padding: '2rem 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        fontFamily: 'var(--font-playfair)',
        fontSize: '1rem',
        fontWeight: 700,
        color: 'rgba(255,255,255,0.5)',
        letterSpacing: '0.1em',
      }}>EKKLEON</div>

      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 Ekkleon. All rights reserved.</p>

      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
        {['Privacy', 'About', 'Contact'].map((link) => (
          <li key={link}>
            <a href={link === 'Contact' ? '#contact' : '#'} style={{
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
            }}>{link}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}