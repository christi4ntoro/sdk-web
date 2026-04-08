import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import sanitizeHtml from 'sanitize-html'

// Strip all HTML — keeps plain text only
function sanitize(value: unknown): string {
  if (typeof value !== 'string') return ''
  return sanitizeHtml(value, { allowedTags: [], allowedAttributes: {} })
}

// In-memory rate limiter: max 5 requests per IP per 10 minutes.
// NOTE: This resets on cold start. For production-grade persistence, replace
// with @upstash/ratelimit backed by Vercel KV.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now >= entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

let resend: Resend | null = null
function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  if (!resend) resend = new Resend(key)
  return resend
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Try again later.' },
      { status: 429 }
    )
  }

  try {
    const client = getResend()
    if (!client) {
      return NextResponse.json(
        { error: 'Email not configured' },
        { status: 503 }
      )
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL
    const toEmail = process.env.RESEND_TO_EMAIL

    if (!fromEmail || !toEmail) {
      return NextResponse.json({ error: 'Email not configured' }, { status: 503 })
    }

    const body = await req.json()
    const { formType } = body

    if (formType === 'cta') {
      const email = sanitize(body.email)
      const topic = sanitize(body.topic)
      const lang = sanitize(body.lang)

      if (!email) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
      }

      // Notification to Studio Deki
      await client.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: `Nuevo lead CTA — ${topic || 'Sin tema'}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; color: #1D1C33;">
            <h2 style="color: #1D1C33; border-bottom: 3px solid #F8BB15; padding-bottom: 0.5rem;">
              Nuevo lead desde el CTA — studiodeki.co
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem;">
              <tr>
                <td style="padding: 0.6rem 0; color: #6B6A7E; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; width: 120px;">Email</td>
                <td style="padding: 0.6rem 0;"><a href="mailto:${email}" style="color: #F8BB15;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 0.6rem 0; color: #6B6A7E; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em;">Tema</td>
                <td style="padding: 0.6rem 0; font-weight: 600;">${topic || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 0.6rem 0; color: #6B6A7E; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em;">Idioma</td>
                <td style="padding: 0.6rem 0;">${lang || '—'}</td>
              </tr>
            </table>
          </div>
        `,
      })

      // Auto-reply to the user
      const autoreplyText =
        lang === 'en'
          ? 'Thanks for reaching out. We\'ll be in touch soon.'
          : 'Gracias por escribirnos. Te contactamos pronto.'

      await client.emails.send({
        from: fromEmail,
        to: [email],
        subject: lang === 'en' ? 'Studio Deki — We got your message' : 'Studio Deki — Recibimos tu mensaje',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; color: #1D1C33;">
            <p style="font-size: 1rem; line-height: 1.7;">${autoreplyText}</p>
            <p style="margin-top: 2rem; font-size: 0.85rem; color: #6B6A7E;">Studio Deki · <a href="https://studiodeki.co" style="color: #F8BB15;">studiodeki.co</a></p>
          </div>
        `,
      })

      return NextResponse.json({ ok: true })
    }

    // Contact form
    const name = sanitize(body.name)
    const company = sanitize(body.company)
    const email = sanitize(body.email)
    const size = sanitize(body.size)
    const challenge = sanitize(body.challenge)

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await client.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Nuevo contacto — ${name}`,
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
              <td style="padding: 0.6rem 0; color: #6B6A7E; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em;">Tamaño</td>
              <td style="padding: 0.6rem 0;">${size || '—'}</td>
            </tr>
          </table>
          <div style="margin-top: 2rem; padding: 1.5rem; background: #F7F6F2; border-radius: 4px;">
            <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #6B6A7E; margin-bottom: 0.75rem;">Desafio</div>
            <p style="margin: 0; line-height: 1.7;">${challenge || '—'}</p>
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
