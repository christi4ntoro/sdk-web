/** @type {import('next').NextConfig} */

const devUnsafeEval = process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${devUnsafeEval} https://www.googletagmanager.com https://www.google-analytics.com`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "img-src 'self' data: https://www.google-analytics.com",
  "connect-src 'self' https://api.resend.com https://www.google-analytics.com https://region1.google-analytics.com",
  "frame-ancestors 'none'",
].join('; ')

const securityHeaders = [
  // Report-only while confirming nothing breaks — switch to Content-Security-Policy to enforce
  {
    key: 'Content-Security-Policy-Report-Only',
    value: cspDirectives,
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const nextConfig = {
  typedRoutes: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig