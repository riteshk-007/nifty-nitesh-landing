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
  metadataBase: new URL('https://niftynitesh.com'),
  title: 'Nifty Nitesh - Stock Market Training | 20-Day Live Program',
  description: 'Learn stock market from basics with Nifty Nitesh. 20-day live online training program. Complete structured education. Limited seats available.',
  keywords: ['Nifty Nitesh', 'Stock Market Training', '20-Day Live Program', 'Stock Market for Beginners', 'Trading Course', 'Investing Masterclass'],
  openGraph: {
    title: 'Nifty Nitesh - Stock Market Training | 20-Day Live Program',
    description: 'Learn stock market from basics with Nifty Nitesh. 20-day live online training program. Complete structured education.',
    url: 'https://niftynitesh.com',
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '27386194020971117');
fbq('track', 'PageView');` }} />
      </head>
      <body className="font-dm-sans antialiased">
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=27386194020971117&ev=PageView&noscript=1"
          />
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: `fbq('track', 'ViewContent');` }} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
