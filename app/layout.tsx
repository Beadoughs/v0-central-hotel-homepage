import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})
const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://centralhotelzeehan.com.au'),
  title: {
    default:
      'Central Hotel Zeehan | Historic West Coast Tasmania Pub & Heritage Hotel',
    template: '%s | Central Hotel Zeehan',
  },
  description:
    'The Central Hotel is the historic heart of Zeehan — a heritage-listed pub on the West Coast of Tasmania. Friday night live music, hearty counter meals, cold beer and warm old-pub charm. Locals, miners, bike riders and travellers welcome.',
  keywords: [
    'Pub Zeehan',
    'Zeehan Pub',
    'West Coast Tasmania Pub',
    'Historic Hotel Tasmania',
    'Historic Pub Tasmania',
    'Heritage Hotel Zeehan',
    'Things To Do Zeehan',
    'Bars Zeehan',
    'West Coast Tasmania Attractions',
    'Central Hotel Zeehan',
  ],
  authors: [{ name: 'Central Hotel Zeehan' }],
  openGraph: {
    title:
      'Central Hotel Zeehan | Historic West Coast Tasmania Pub & Heritage Hotel',
    description:
      'The historic heart of Zeehan. A heritage-listed West Coast Tasmania pub with Friday night live music, hearty meals and genuine old-pub charm.',
    url: 'https://centralhotelzeehan.com.au',
    siteName: 'Central Hotel Zeehan',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/hero-pub-exterior.png', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://centralhotelzeehan.com.au' },
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#2a241d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-AU"
      className={`${playfair.variable} ${dmSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
