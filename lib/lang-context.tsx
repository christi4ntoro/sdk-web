'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import esLocale from '@/locales/es.json'
import enLocale from '@/locales/en.json'

export type Lang = 'es' | 'en' // 'pt' ready, activate when needed

type LocaleData = Record<string, unknown>

function getByPath(obj: LocaleData, path: string): string {
  const keys = path.split('.')
  let val: unknown = obj
  for (const k of keys) {
    if (typeof val === 'object' && val !== null) {
      val = (val as LocaleData)[k]
    } else {
      return path
    }
  }
  return typeof val === 'string' ? val : path
}

const locales: Record<Lang, LocaleData> = {
  es: esLocale as LocaleData,
  en: enLocale as LocaleData,
}

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
  t: (key) => getByPath(locales.es, key),
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
    const detected = detectLang()
    setLangState(detected)
    document.documentElement.lang = detected
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    document.documentElement.lang = l
    if (typeof window !== 'undefined') {
      localStorage.setItem('sdk-lang', l)
    }
  }

  function t(key: string): string {
    return getByPath(locales[lang], key)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
