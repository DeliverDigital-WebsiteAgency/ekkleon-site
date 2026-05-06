export default function Footer() {
  return (
    <footer className="footer-inner" style={{
      background: '#070f1e',
      padding: '2rem 5%',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <a href="#hero" style={{ textDecoration: 'none' }}>
        <div style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '1rem',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.1em',
        }}>EKKLEON</div>
      </a>

      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 Ekkleon. All rights reserved.</p>

      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
        {[
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Contact', href: '#contact' },
        ].map(({ label, href }) => (
          <li key={label}>
            <a href={href} style={{
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
            }}>{label}</a>
          </li>
        ))}</ul>
    </footer>
  )
}