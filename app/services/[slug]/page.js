import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { getServices, getServiceBySlug } from '@/lib/wordpress'

function plainText(html, length = 155) {
  if (!html) return ''
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, length)
}

export async function generateStaticParams() {
  const services = await getServices()
  return services.filter(s => s.slug).map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) return {}

  const description = plainText(service.content?.rendered)

  return {
    title: service.title.rendered,
    description,
    alternates: { canonical: `https://ekkleon.com/services/${slug}` },
    openGraph: {
      title: service.title.rendered,
      description,
      url: `https://ekkleon.com/services/${slug}`,
    },
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) notFound()

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title.rendered,
    description: plainText(service.content?.rendered, 300),
    provider: {
      '@type': 'ProfessionalService',
      name: 'Ekkleon',
      url: 'https://ekkleon.com',
    },
    areaServed: 'United States',
    url: `https://ekkleon.com/services/${slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ekkleon.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ekkleon.com/#services' },
      { '@type': 'ListItem', position: 3, name: service.title.rendered, item: `https://ekkleon.com/services/${slug}` },
    ],
  }

  return (
    <>
      <Nav />

      <main style={{ background: 'var(--cream)', paddingTop: '100px' }}>

        {/* Page Header */}
        <section style={{
          background: 'var(--navy)',
          padding: '80px 5% 60px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
              {' / '}
              <Link href="/#services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Services</Link>
              {' / '}
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{service.title.rendered}</span>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--orange)', flexShrink: 0 }} />
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                color: 'var(--orange-light)',
                textTransform: 'uppercase',
              }}>What We Offer</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.2,
            }}>{service.title.rendered}</h1>
          </div>
        </section>

        {/* Content */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 5%' }}>
          <div
            style={{ fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.85 }}
            dangerouslySetInnerHTML={{ __html: service.content.rendered }}
          />

          <Link href="/#contact" style={{
            display: 'inline-block',
            marginTop: '2.5rem',
            background: 'var(--orange)',
            color: 'white',
            padding: '0.85rem 2rem',
            borderRadius: '3px',
            fontSize: '0.875rem',
            fontWeight: 600,
            textDecoration: 'none',
          }}>Schedule a Call</Link>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <Link href="/#services" style={{ fontSize: '0.85rem', color: 'var(--orange)', textDecoration: 'none', fontWeight: 600 }}>
              ← Back to all services
            </Link>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Footer />
    </>
  )
}
