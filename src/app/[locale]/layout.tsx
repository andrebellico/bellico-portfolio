/* eslint-disable react/jsx-no-undef */
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Josefin_Sans } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { RenderContent } from '@/components/RenderContent'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import './globals.css'
export const metadata: Metadata = {
  title: '| Portfólio',
  description: 'Bellico',
}
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

type Props = {
  children: React.ReactNode
  params: {
    locale: 'en' | 'br'
  }
}

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages()
  return (
    <html lang={locale} className={josefin.className}>
      <head>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <title>Bellico Portfolio</title>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <RenderContent>{children}</RenderContent>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
