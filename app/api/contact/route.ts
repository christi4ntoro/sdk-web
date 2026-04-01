import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

let resend: Resend | null = null
function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  if (!resend) resend = new Resend(key)
  return resend
}

export async function POST(req: NextRequest) {
  try {
    const client = getResend()
    if (!client) {
      return NextResponse.json(
        { error: 'Email not configured' },
        { status: 503 }
      )
    }

    const { name, company, email, service, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await client.emails.send({
      from: 'Studio Deki <noreply@studiodeki.co>',
      to: ['info@studiodeki.co'],
      replyTo: email,
      subject: `Nuevo contacto: ${service || 'General'} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1D1C33;">
          <h2 style="color: #1D1C33; border-bottom: 3px solid #F8BB15; padding-bottom: 0.5rem;">
            Nuevo mensaje desde studiodeki.co
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem;">
            <tr>
              <td style="padding: 0.6rem 0; color: #6B6A7E; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; width: 120px;">Nombre</td>
              <td style="padding: 0.6rem 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 0.6rem 0; color: #6B6A7E; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em;">Empresa</td>
              <td style="padding: 0.6rem 0;">${company || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 0.6rem 0; color: #6B6A7E; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
              <td style="padding: 0.6rem 0;"><a href="mailto:${email}" style="color: #F8BB15;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 0.6rem 0; color: #6B6A7E; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em;">Servicio</td>
              <td style="padding: 0.6rem 0;">${service || '—'}</td>
            </tr>
          </table>
          <div style="margin-top: 2rem; padding: 1.5rem; background: #F7F6F2; border-radius: 4px;">
            <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #6B6A7E; margin-bottom: 0.75rem;">Mensaje</div>
            <p style="margin: 0; line-height: 1.7;">${message || '—'}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}
