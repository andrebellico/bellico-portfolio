import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'br'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    br: '/endereco',
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
