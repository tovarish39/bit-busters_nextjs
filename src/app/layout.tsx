import type { Metadata } from 'next'
import '@/styles/global.scss'

export const metadata: Metadata = {
  title: '@BitBusters',
  description: 'Студия разработки эффективных IT продуктов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
