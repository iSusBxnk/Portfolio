import i18nConfig from "../../../i18nConfig"

// Build a path that respects next-i18n-router's "no prefix for default locale"
// behaviour: default locale stays at root, others get a /<locale> prefix.
export function localizedPath(locale: string, path: string): string {
  return locale === i18nConfig.defaultLocale ? path : `/${locale}${path}`
}
