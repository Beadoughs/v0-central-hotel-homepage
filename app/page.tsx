import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Story } from '@/components/story'
import { FridayNights } from '@/components/friday-nights'
import { Events } from '@/components/events'
import { Timeline } from '@/components/timeline'
import { MeetLarry } from '@/components/meet-larry'
import { Community } from '@/components/community'
import { Visit } from '@/components/visit'
import { SiteFooter } from '@/components/site-footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['BarOrPub', 'Hotel'],
  name: 'Central Hotel Zeehan',
  description:
    'Heritage-listed historic pub and hotel in Zeehan on the West Coast of Tasmania. Friday night live music, hearty counter meals and genuine old-pub charm.',
  image: 'https://centralhotelzeehan.com.au/images/hero-pub-exterior.png',
  url: 'https://centralhotelzeehan.com.au',
  telephone: '+61364710000',
  foundingDate: '1898',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '131 Main Street',
    addressLocality: 'Zeehan',
    addressRegion: 'TAS',
    postalCode: '7469',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -41.8814,
    longitude: 145.3328,
  },
  keywords:
    'Pub Zeehan, Zeehan Pub, West Coast Tasmania Pub, Historic Hotel Tasmania, Heritage Hotel Zeehan, Bars Zeehan, Things To Do Zeehan',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <FridayNights />
        <Events />
        <Timeline />
        <MeetLarry />
        <Community />
        <Visit />
      </main>
      <SiteFooter />
    </>
  )
}
