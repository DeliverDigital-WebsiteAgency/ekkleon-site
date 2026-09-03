'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Our Path', href: '/#process' },
  { label: 'About', href: '/#about' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        height: '64px',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 1px 8px rgba(0,0,0,0.08)',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', position: 'relative', height: '36px', width: '160px' }}>
          <Image
            src="https://cms.ekkleon.com/wp-content/uploads/2025/09/Ekkleon-logo-white-back-e1758653758917.png"
            alt="Ekkleon - Church Consulting and Vision Planning"
            fill
            sizes="160px"
            style={{ objectFit: 'contain', objectPosition: 'left center' }}
            priority
          />
        </Link>

        <ul className="nav-desktop-links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} style={{ color: 'rgba(11,31,58,0.8)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contact" style={{
              background: 'var(--orange)',
              color: 'white',
              padding: '0.45rem 1.1rem',
              borderRadius: '3px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '0.875rem',
            }}>Schedule a Call</Link>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
        >
          <span style={{
            display: 'block', width: '22px', height: '2px', background: 'var(--navy)',
            transition: 'transform 0.25s', transformOrigin: 'center',
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px', background: 'var(--navy)',
            transition: 'opacity 0.25s',
            opacity: open ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px', background: 'var(--navy)',
            transition: 'transform 0.25s', transformOrigin: 'center',
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {open && (
        <div id="mobile-nav-menu" style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'white',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          padding: '0.5rem 5% 1.25rem',
        }}>
          <ul style={{ listStyle: 'none' }}>
            {navLinks.map(({ label, href }) => (
              <li key={label} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    padding: '1rem 0',
                    color: 'var(--navy)',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >{label}</Link>
              </li>
            ))}
            <li style={{ paddingTop: '1rem' }}>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'var(--orange)',
                  color: 'white',
                  padding: '0.85rem 2rem',
                  borderRadius: '3px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >Schedule a Call</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
