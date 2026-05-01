export default function Nav({ siteName }) {
  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: 'rgba(11,31,58,0.96)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5%',
      height: '64px',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img
          src="https://cms.ekkleon.com/wp-content/uploads/2025/09/Ekkleon-logo-white-back-e1758653758917.png"
          alt="Ekkleon"
          style={{ height: '36px', width: 'auto' }}
        />
      </a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        <li><a href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Home</a></li>
        <li><a href="#about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>About</a></li>
        <li><a href="#services" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Services</a></li>
        <li><a href="#contact" style={{
          background: 'var(--orange)',
          color: 'white',
          padding: '0.45rem 1.1rem',
          borderRadius: '3px',
          fontWeight: 600,
          textDecoration: 'none',
          fontSize: '0.875rem',
        }}>Schedule a Call</a></li>
      </ul>
    </nav>
  )
}