import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dk-dark': '#1D1C33',
        'dk-amber': '#F8BB15',
        'dk-surface': '#F7F6F2',
        'dk-mid': '#6B6A7E',
        'dk-white': '#FFFFFF',
        'dk-deep': '#141324',
      },
      fontFamily: {
        display: ['var(--font-instrument)', 'Georgia', 'serif'],
        sans: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.14em',
        'wider': '0.08em',
      },
    },
  },
  plugins: [],
}

export default config
