export default function TrustBar() {
  const items = [
    '20+ Years Senior Pastoral Experience',
    'Church Plants & Revitalizations',
    'Ph.D. in Executive Leadership',
    'Southwestern Seminary M.Div.',
  ]

  return (
    <div style={{
      background: 'var(--navy-mid)',
      padding: '1.5rem 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '3rem',
      flexWrap: 'wrap',
    }}>
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.8rem',
          fontWeight: 500,
          letterSpacing: '0.05em',
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--orange)',
            flexShrink: 0,
          }} />
          {item}
        </div>
      ))}
    </div>
  )
}