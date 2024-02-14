import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import { RenderContent } from '@/components/RenderContent'

export const metadata: Metadata = {
  title: 'Portfólio',
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
        <RenderContent>{children}</RenderContent>
      </body>
    </html>
  )
}
