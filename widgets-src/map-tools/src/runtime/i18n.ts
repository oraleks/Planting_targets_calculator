import { type Locale } from './locale'

export type StringKey = 'toggleBasemap' | 'toggleFullscreen'

const STRINGS: Record<Locale, Record<StringKey, string>> = {
  en: {
    toggleBasemap: 'Toggle basemap',
    toggleFullscreen: 'Toggle fullscreen'
  },
  he: {
    toggleBasemap: 'החלפת מפת רקע',
    toggleFullscreen: 'החלפת מסך מלא'
  }
}

export function t (locale: Locale, key: StringKey): string {
  return STRINGS[locale]?.[key] ?? STRINGS.en[key]
}
