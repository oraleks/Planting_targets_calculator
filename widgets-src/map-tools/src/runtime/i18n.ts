import { type Locale } from './locale'

export type StringKey = 'toggleBasemap' | 'toggleFullscreen'

const STRINGS: Record<Locale, Record<StringKey, string>> = {
  en: {
    toggleBasemap: 'Toggle basemap',
    toggleFullscreen: 'Toggle fullscreen'
  },
  he: {
    toggleBasemap: 'שינוי מפת רקע',
    toggleFullscreen: 'שינוי מצב מסך מלא'
  }
}

export function t (locale: Locale, key: StringKey): string {
  return STRINGS[locale]?.[key] ?? STRINGS.en[key]
}
