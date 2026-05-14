export default function Footer() {
  return (
    <footer style={{
      background: '#070f1e',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="footer-inner" style={{ padding: '2rem 5%' }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="https://cms.ekkleon.com/wp-content/uploads/2025/09/Ekkleon-logo-white-back-e1758653758917.png"
            alt="Ekkleon"
            style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.8 }}
          />
        </a>

        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>Copyright 2026 Ekkleon | Built by{' '}
          <a href="https://deliverdigital.net" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Deliver Digital</a>
        </p>

        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
          {[
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <li key={label}>
              <a href={href} style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
              }}>{label}</a>
            </li>
          ))}
        </ul>
      </div>

    </footer>
  )
}
