import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy | Ekkleon',
  description: 'Privacy policy for Ekkleon church consulting services.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '64px', background: 'var(--cream)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 5%' }}>
          <div style={{
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: 'var(--orange)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>Legal</div>

          <h1 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--navy)',
            lineHeight: 1.2,
            marginBottom: '0.5rem',
          }}>Privacy Policy</h1>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            Last updated: May 2026
          </p>

          {[
            {
              heading: 'Overview',
              body: 'Ekkleon ("we," "us," or "our") is committed to protecting your personal information. This policy explains what data we collect, how we use it, and your rights regarding that data when you visit ekkleon.com or contact us through our website.',
            },
            {
              heading: 'Information We Collect',
              body: 'We collect information you voluntarily provide through our contact form, including your name, email address, church name, and message. We do not collect payment information or create user accounts.',
            },
            {
              heading: 'How We Use Your Information',
              body: 'We use the information you submit solely to respond to your inquiry and schedule consultations. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
            },
            {
              heading: 'Email Communications',
              body: 'When you contact us, we may follow up by email regarding your inquiry. You may opt out of any non-essential communications at any time by replying to any email with "unsubscribe" in the subject line.',
            },
            {
              heading: 'Cookies & Analytics',
              body: 'Our website may use cookies or third-party analytics tools (such as Google Analytics) to understand how visitors use our site. This data is aggregated and anonymous. You can disable cookies in your browser settings at any time.',
            },
            {
              heading: 'Data Retention',
              body: 'We retain contact form submissions only as long as necessary to fulfill the purpose for which they were submitted. You may request deletion of your information at any time by contacting us.',
            },
            {
              heading: 'Third-Party Services',
              body: 'Our website is built and hosted using third-party platforms. These providers have their own privacy policies governing data they process on our behalf. We use SendGrid for email delivery and Vercel for hosting.',
            },
            {
              heading: 'Your Rights',
              body: 'You have the right to request access to, correction of, or deletion of any personal data we hold about you. To make a request, contact us at the email below.',
            },
            {
              heading: 'Contact',
              body: 'If you have questions about this privacy policy or how we handle your data, please contact us at info@ekkleon.com.',
            },
          ].map(({ heading, body }) => (
            <section key={heading} style={{ marginBottom: '2.25rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--navy)',
                marginBottom: '0.6rem',
              }}>{heading}</h2>
              <p style={{ fontSize: '0.975rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
