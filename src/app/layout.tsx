import type { Metadata } from 'next'
import './globals.css'
import { RenderContent } from '../components/RenderContent'

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Bellico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <title>Bellico Portfolio</title>
      </head>
      <body>
        <div className="flex h-screen text-sm bg-zinc-900">
          <RenderContent>{children}</RenderContent>
        </div>
      </body>
    </html>
  )
}
