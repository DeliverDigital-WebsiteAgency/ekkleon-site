import { NextResponse } from 'next/server'

export async function POST(request) {
  const { firstName, lastName, email, church, message } = await request.json()

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const body = {
    personalizations: [
      {
        to: [{ email: process.env.CONTACT_TO_EMAIL }],
        subject: `New Contact Form Submission — ${church || 'Unknown Church'}`,
      },
    ],
    from: { email: process.env.SENDGRID_FROM_EMAIL, name: 'Ekkleon Website' },
    reply_to: { email, name: `${firstName} ${lastName}`.trim() },
    content: [
      {
        type: 'text/html',
        value: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Church:</strong> ${church || '—'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
      },
    ],
  }

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('SendGrid error:', text)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
