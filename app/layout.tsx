import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-display',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hero.niftynitesh.com'),
  title: 'Nifty Nitesh - Stock Market Training | 20-Day Live Program',
  description: 'Learn stock market from basics with Nifty Nitesh. 20-day live online training program. Complete structured education. Limited seats available.',
  keywords: ['Nifty Nitesh', 'Stock Market Training', '20-Day Live Program', 'Stock Market for Beginners', 'Trading Course', 'Investing Masterclass'],
  openGraph: {
    title: 'Nifty Nitesh - Stock Market Training | 20-Day Live Program',
    description: 'Learn stock market from basics with Nifty Nitesh. 20-day live online training program. Complete structured education.',
    url: 'https://hero.niftynitesh.com',
    siteName: 'Nifty Nitesh',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nifty Nitesh - Stock Market Training | 20-Day Live Program',
    description: 'Learn stock market from basics with Nifty Nitesh. 20-day live online training program. Complete structured education.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0f1f3d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body className="font-dm-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
