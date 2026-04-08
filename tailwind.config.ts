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
        'dk-dark': '#0C0C15',
        'dk-accent': '#7349FF',
        'dk-surface': '#F9FAFC',
        'dk-secondary': '#4628AA',
        'dk-white': '#FFFFFF',
        'dk-deep': '#F9FAFC',
        'dk-error': '#ff6b6b',
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
