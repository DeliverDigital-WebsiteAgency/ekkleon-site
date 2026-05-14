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
  alternates: { canonical: 'https://ekkleon.com' },
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W49ZKSQX');`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W49ZKSQX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}