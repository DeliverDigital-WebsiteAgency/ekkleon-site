'use client'
import { useState } from 'react'

const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: 'white',
  padding: '0.75rem 1rem',
  borderRadius: '2px',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'inherit',
  width: '100%',
}

const labelStyle = {
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.45)',
}

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', church: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      } else {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', church: '', message: '' })
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ background: 'var(--navy)', padding: '100px 5%' }}>
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

        {status === 'success' ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(200,112,58,0.15)',
              border: '1px solid var(--orange)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
            }}>✓</div>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.4rem', color: 'white', fontWeight: 700 }}>Message Sent</h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              Thank you for reaching out. We&apos;ll be in touch within 1–2 business days to schedule your discovery call.
            </p>
            <button
              onClick={() => setStatus('idle')}
              style={{ background: 'none', border: 'none', color: 'var(--orange)', fontSize: '0.85rem', cursor: 'pointer', textAlign: 'left', padding: 0, fontFamily: 'inherit' }}
            >
              Send another message →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={labelStyle}>First Name</label>
                <input name="firstName" type="text" placeholder="John" value={form.firstName} onChange={handleChange} required style={inputStyle} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={labelStyle}>Last Name</label>
                <input name="lastName" type="text" placeholder="Smith" value={form.lastName} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={labelStyle}>Email Address</label>
              <input name="email" type="email" placeholder="pastor@yourchurch.org" value={form.email} onChange={handleChange} required style={inputStyle} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={labelStyle}>Church Name</label>
              <input name="church" type="text" placeholder="First Baptist Church" value={form.church} onChange={handleChange} style={inputStyle} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={labelStyle}>How Can We Help?</label>
              <textarea
                name="message"
                placeholder="Tell us briefly about your church and what you're hoping to work on..."
                value={form.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
              />
            </div>

            {status === 'error' && (
              <p style={{ fontSize: '0.85rem', color: '#f87171', margin: 0 }}>{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                background: status === 'loading' ? 'rgba(200,112,58,0.6)' : 'var(--orange)',
                color: 'white',
                padding: '0.85rem 2rem',
                border: 'none',
                borderRadius: '3px',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                fontFamily: 'inherit',
                marginTop: '0.5rem',
                transition: 'background 0.2s',
              }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
