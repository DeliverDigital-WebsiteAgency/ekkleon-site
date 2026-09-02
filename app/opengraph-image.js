import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const runtime = 'nodejs'
export const alt = 'Ekkleon church consulting and ministry solutions, founded by Pastor Craig Liscom'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const assetsDir = join(process.cwd(), 'app', 'assets')
  const [playfairBold, interRegular, interSemiBold] = await Promise.all([
    readFile(join(assetsDir, 'PlayfairDisplay-Bold.woff')),
    readFile(join(assetsDir, 'Inter-Regular.woff')),
    readFile(join(assetsDir, 'Inter-SemiBold.woff')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 90px',
          backgroundColor: '#0b1f3a',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          position: 'relative',
        }}
      >
        {/* corner brackets — matches the Hero/ai-info accent motif */}
        <div style={{ display: 'flex', position: 'absolute', top: 40, left: 40, width: 36, height: 36, borderTop: '2px solid rgba(200,112,58,0.6)', borderLeft: '2px solid rgba(200,112,58,0.6)' }} />
        <div style={{ display: 'flex', position: 'absolute', bottom: 40, right: 40, width: 36, height: 36, borderBottom: '2px solid rgba(200,112,58,0.6)', borderRight: '2px solid rgba(200,112,58,0.6)' }} />

        {/* eyebrow — reuses the site title text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
          <div style={{ display: 'flex', width: 48, height: 2, backgroundColor: '#c8703a' }} />
          <div style={{ display: 'flex', fontFamily: 'Inter', fontWeight: 600, fontSize: 22, letterSpacing: 4, color: '#d98a56', textTransform: 'uppercase' }}>
            Church Consulting &amp; Ministry Solutions
          </div>
        </div>

        {/* wordmark */}
        <div style={{ display: 'flex', fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 128, color: 'white', letterSpacing: 6, lineHeight: 1 }}>
          EKKLEON
        </div>

        {/* tagline — reuses the Hero subheading text */}
        <div style={{ display: 'flex', marginTop: 28, fontFamily: 'Inter', fontWeight: 400, fontSize: 30, color: 'rgba(255,255,255,0.75)', maxWidth: 820, lineHeight: 1.4 }}>
          Guiding Churches to Clarity, Strategy, and Spirit-Led Renewal
        </div>

        {/* footer credit line — reuses the Hero footer credits text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 56, fontFamily: 'Inter', fontWeight: 600, fontSize: 20, letterSpacing: 2, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
          <div style={{ display: 'flex' }}>Ekkleon.com</div>
          <div style={{ display: 'flex', width: 6, height: 6, borderRadius: 999, backgroundColor: '#c8703a' }} />
          <div style={{ display: 'flex' }}>Pastor Craig Liscom, Founder</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Playfair Display', data: playfairBold, weight: 700, style: 'normal' },
        { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: interSemiBold, weight: 600, style: 'normal' },
      ],
    }
  )
}
