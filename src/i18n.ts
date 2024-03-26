import { getRequestConfig } from 'next-intl/server'
import NotFound from './app/[locale]/not-found'

const locales = ['en', 'br']

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName
  if (!locales.includes(baseLocale)) NotFound()

  return {
    messages: (await import(`./messages/${baseLocale}.json`)).default,
  }
})
