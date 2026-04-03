'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

export type Lang = 'es' | 'en' // 'pt' ready, activate when needed

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: <T = any>(es: T, en: T) => T
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
  t: (es) => es,
})

function detectLang(): Lang {
  // 1. User override stored in localStorage
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('sdk-lang') as Lang | null
    if (stored === 'es' || stored === 'en') return stored
  }

  // 2. Browser preference
  if (typeof navigator !== 'undefined') {
    const browser = navigator.language?.toLowerCase() ?? ''
    if (browser.startsWith('es')) return 'es'
    // PT hook: when ready, uncomment below and add 'pt' to Lang type
    // if (browser.startsWith('pt')) return 'pt'
  }

  // 3. Default
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    // Runs only on client, after hydration
    setLangState(detectLang())
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    if (typeof window !== 'undefined') {
      localStorage.setItem('sdk-lang', l)
    }
  }

  function t<T>(es: T, en: T): T {
    return lang === 'es' ? es : en
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)