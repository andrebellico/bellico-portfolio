/* eslint-disable react/jsx-no-undef */
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Josefin_Sans } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import { RenderContent } from '@/components/RenderContent'

// import global_en from '../translations/en/global.json'
// import global_br from '../translations/pt-br/global.json'
// import i18next from 'i18next'

// i18next.init({
//   interpolation: { escapeValue: false },
//   lng: 'en',
//   resources: {
//     en: {
//       global: global_en,
//     },
//     'pt-br': {
//       global: global_br,
//     },
//   },
// })

export const metadata: Metadata = {
  title: '| Portfólio',
  description: 'Bellico',
}
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={josefin.className}>
      <head>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <title>Bellico Portfolio</title>
      </head>
      <body>
        {/* <I18nextProvider i18n={i18next}> */}
        <RenderContent>{children}</RenderContent>
        <Toaster />
        {/* </I18nextProvider> */}
      </body>
    </html>
  )
}
