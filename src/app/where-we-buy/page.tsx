import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import InteractiveMap from '@/components/InteractiveMap'
import { RootLayout } from '@/components/RootLayout'

const states = [
  {
    name: 'Colorado',
    href: '/where-we-buy/colorado',
    counties: ['Adams', 'Arapahoe', 'La Plata', 'Larimer', 'Weld'],
    description: 'We have worked with people in Adams, Arapahoe, La Plata, Larimer, and Weld counties.'
  },
  {
    name: 'Wyoming',
    href: '/where-we-buy/wyoming',
    counties: ['Campbell', 'Converse', 'Crook', 'Johnson', 'Laramie', 'Natrona', 'Niobrara', 'Sheridan', 'Sublette'],
    description: 'We have worked with people in Campbell, Converse, Crook, Johnson, Laramie, Natrona, Niobrara, Sheridan, and Sublette counties.'
  },
  {
    name: 'New Mexico',
    href: '/where-we-buy/new-mexico',
    counties: ['Eddy', 'Lea'],
    description: 'We have worked with people in Eddy and Lea counties.'
  },
  {
    name: 'North Dakota',
    href: '/where-we-buy/north-dakota',
    counties: ['Dunn', 'McKenzie', 'Montrail', 'Williams'],
    description: 'We have worked with people in Dunn, McKenzie, Montrail, and Williams counties.'
  },
  {
    name: 'Montana',
    href: '/where-we-buy/montana',
    counties: ['Richland'],
    description: 'We have worked with people in Richland County.'
  }
]

function StatesGrid() {
  return (
    <Container className="mt-12 sm:mt-16">
      <FadeInStagger className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {states.map((state) => (
          <FadeIn key={state.name} className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 sm:p-8 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50">
              <h3>
                <Link href={state.href}>
                  <span className="absolute inset-0 rounded-3xl" />
                  <span className="font-display text-2xl font-semibold text-primary">
                    {state.name}
                  </span>
                </Link>
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                {state.description}
              </p>
              <div className="mt-6">
                <h4 className="font-display text-sm font-semibold text-primary mb-3">
                  Counties we serve:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {state.counties.map((county) => (
                    <span
                      key={county}
                      className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                    >
                      {county}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Where We Buy Mineral Rights',
  description:
    'Miller Energy Group focuses on mineral rights in the Rocky Mountain West region. We buy mineral rights in Colorado, Wyoming, New Mexico, North Dakota, and Montana.',
}

export default function WhereWeBuy() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Where We Buy" title="Rocky Mountain West Mineral Rights">
        <p>
          Miller Energy Group focuses on mineral rights in the Rocky Mountain West region and helping those who are interested in selling mineral rights. Our deep knowledge of the Rocky Mountain Region – an area we know best and have a personal connection with, allows us to provide you with insight and knowledge to give you comfort in making the right decision for you and your family.
        </p>
      </PageIntro>

      {/* Interactive Map */}
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Operational Footprint
            </h2>
            <p className="text-neutral-600">
              Explore our experience across major oil and gas basins. Click on any basin 
              to learn more about our activity in that region.
            </p>
          </div>
          <InteractiveMap />
        </FadeIn>
      </Container>

      <StatesGrid />

      <ContactSection />
    </RootLayout>
  )
}
