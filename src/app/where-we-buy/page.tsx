import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import CDNMap from '@/components/InteractiveMap'
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
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {states.map((state) => (
          <div key={state.name} className="flex">
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
          </div>
        ))}
      </div>
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
      <Container className="mt-8 sm:mt-12 lg:mt-16">
        <div className="mb-4">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Our Operational Footprint
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl">
            Explore our experience across major oil and gas basins. Click on any basin 
            to learn more about our activity in that region. Hover over project dots to see 
            detailed acquisition information.
          </p>
        </div>
        <CDNMap />
      </Container>

      <StatesGrid />

      {/* Featured Projects Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-semibold text-primary mb-4">
            Our Active Projects
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Explore our successful mineral rights acquisitions across major oil and gas basins. 
            Each project represents our commitment to fair valuations and transparent transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Bakken Core Project',
              location: 'North Dakota',
              year: 2021,
              purchasePrice: 2850000,
              acres: 320,
              production: 45000,
              description: 'High-producing Bakken wells with 3-mile laterals'
            },
            {
              name: 'Wolfcamp A Acquisition',
              location: 'Texas',
              year: 2020,
              purchasePrice: 4200000,
              acres: 450,
              production: 62000,
              description: 'Premium Delaware Basin acreage with excellent economics'
            },
            {
              name: 'Eagle Ford Core',
              location: 'Texas',
              year: 2019,
              purchasePrice: 3200000,
              acres: 380,
              production: 55000,
              description: 'Oil window with excellent EURs and low breakevens'
            },
            {
              name: 'Spraberry Development',
              location: 'Texas',
              year: 2020,
              purchasePrice: 3600000,
              acres: 420,
              production: 68000,
              description: 'Legacy Spraberry with modern completion techniques'
            },
            {
              name: 'Wattenberg Field',
              location: 'Colorado',
              year: 2019,
              purchasePrice: 2800000,
              acres: 350,
              production: 52000,
              description: 'Proven Wattenberg acreage with established infrastructure'
            },
            {
              name: 'SCOOP Play',
              location: 'Oklahoma',
              year: 2021,
              purchasePrice: 2200000,
              acres: 280,
              production: 42000,
              description: 'Oklahoma SCOOP with stacked pay potential'
            }
          ].map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-primary text-lg">{project.name}</h3>
                  <p className="text-sm text-neutral-600">{project.location} • {project.year}</p>
                </div>
                <div className="bg-accent/10 rounded-lg px-3 py-1">
                  <span className="text-sm font-semibold text-accent">{project.acres} acres</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Purchase Price:</span>
                  <span className="font-semibold text-primary">${(project.purchasePrice / 1000000).toFixed(1)}M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Production:</span>
                  <span className="font-semibold text-primary">{project.production.toLocaleString()} BOE</span>
                </div>
              </div>
              
              <p className="text-sm text-neutral-700 mb-4">{project.description}</p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-lg font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Discuss Your Mineral Rights
          </Link>
        </div>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
