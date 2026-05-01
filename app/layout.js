import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  metadataBase: new URL('https://ekkleon.com'),
  title: {
    default: 'Ekkleon — Church Consulting & Ministry Solutions',
    template: '%s | Ekkleon',
  },
  description: 'Ekkleon helps churches move from uncertainty to momentum through Spirit-led vision planning, strategic consulting, and pastoral leadership development.',
  keywords: ['church consulting', 'ministry solutions', 'vision plan', 'church leadership', 'pastoral consulting', 'church strategy', 'Spirit-led renewal', 'Craig Liscom'],
  authors: [{ name: 'Craig Liscom' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ekkleon.com',
    siteName: 'Ekkleon',
    title: 'Ekkleon — Church Consulting & Ministry Solutions',
    description: 'Ekkleon helps churches move from uncertainty to momentum through Spirit-led vision planning, strategic consulting, and pastoral leadership development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ekkleon — Church Consulting & Ministry Solutions',
    description: 'Ekkleon helps churches move from uncertainty to momentum through Spirit-led vision planning and strategic consulting.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Ekkleon',
  description: 'Church consulting and ministry solutions specializing in vision planning, strategic leadership, and Spirit-led renewal.',
  url: 'https://ekkleon.com',
  founder: {
    '@type': 'Person',
    name: 'Craig Liscom',
    jobTitle: 'Founder & Church Consultant',
  },
  serviceType: 'Church Consulting',
  areaServed: 'United States',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}