import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoMillerEnergyGroup from '@/images/logo/TheMillerEngergyGroup_logo.png'
import imageField1 from '@/images/backgrounds/field-1.jpg'
import imageLand from '@/images/backgrounds/land.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const states = [
  { name: 'Colorado', href: '/where-we-buy/colorado' },
  { name: 'Wyoming', href: '/where-we-buy/wyoming' },
  { name: 'New Mexico', href: '/where-we-buy/new-mexico' },
  { name: 'North Dakota', href: '/where-we-buy/north-dakota' },
  { name: 'Montana', href: '/where-we-buy/montana' }
]

function StatesServed() {
  return (
    <div className="mt-16 sm:mt-24 lg:mt-32 rounded-4xl bg-primary py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageField1}
          alt="Rocky Mountain landscape"
          fill
          className="object-cover opacity-50"
        />
      </div>
      <Container className="relative">
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We buy mineral rights in the Rocky Mountain West
          </h2>
          <div className="h-px flex-auto bg-neutral-400" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5"
          >
            {states.map((state) => (
              <li key={state.name}>
                <FadeIn>
                  <Link 
                    href={state.href}
                    className="block text-center text-white hover:text-accent transition-colors group"
                  >
                    <div className="font-display text-lg font-semibold group-hover:scale-105 transition-transform">
                      {state.name}
                    </div>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function MineralRightsTypes() {
  const types = [
    {
      title: "Land Ownership",
      description: "Surface estate ownership gives you rights to the land surface but not necessarily the minerals underneath.",
      href: "/mineral-rights-types/land-ownership"
    },
    {
      title: "Mineral Rights", 
      description: "Ownership of minerals beneath the surface with rights to extract or lease those minerals.",
      href: "/mineral-rights-types/mineral-rights"
    },
    {
      title: "Royalty Interests",
      description: "Right to receive a percentage of profits from mineral production without operational responsibility.",
      href: "/mineral-rights-types/royalty-interests"
    }
  ]

  return (
    <>
      <SectionIntro
        title="Understanding your mineral rights"
        className="mt-16 sm:mt-24 lg:mt-32"
      >
        <p>
          The world of mineral rights can be confusing. It's helpful to start with a basic understanding of what you have the rights to sell.
        </p>
      </SectionIntro>
      <Container className="mt-12 sm:mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {types.map((type) => (
            <FadeIn key={type.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-100 sm:p-8">
                <h3>
                  <Link href={type.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                  </Link>
                </h3>
                <p className="mt-6 font-display text-2xl font-semibold text-primary">
                  {type.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {type.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function WhySell() {
  return (
    <>
      <SectionIntro
        eyebrow="Why Sell Your Mineral Rights"
        title="Making the best decision for you and your family"
        className="mt-16 sm:mt-24 lg:mt-32"
      >
        <p>
          The decision to sell mineral rights depends on your unique situation. Here are some good reasons to consider selling.
        </p>
      </SectionIntro>
      <Container className="mt-12 sm:mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLand}
                alt="Rocky Mountain landscape with oil and gas infrastructure"
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary">Eliminate management responsibility and risk</h3>
                  <p className="mt-2 text-neutral-600">Mineral rights take time and energy to manage and come with risk of financial loss. Will your children or other heirs want to handle this responsibility?</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary">Receive a lump sum of cash</h3>
                  <p className="mt-2 text-neutral-600">Turn this investment into a liquid asset you can use for other things. Dividing mineral rights among multiple people can complicate both management and family relationships.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary">Tax advantages</h3>
                  <p className="mt-2 text-neutral-600">When you sell mineral rights (held for more than a year), you may qualify for long-term capital gains treatment instead of ordinary income tax rates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary">1031 Exchange opportunity</h3>
                  <p className="mt-2 text-neutral-600">If you've owned mineral rights for at least one year, you can do a 1031 exchange to defer capital gains taxes by reinvesting in another property within 90 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Miller Energy Group - Mineral Rights Buyers | Free Valuation',
  description: 'Miller Energy Group buys mineral rights in Colorado, Wyoming, New Mexico, North Dakota, and Montana. Get a free valuation of your mineral rights today. 5th generation Coloradans with 100,000+ acres handled.',
  keywords: 'mineral rights buyers, oil and gas rights, mineral rights valuation, Colorado mineral rights, Wyoming mineral rights, New Mexico mineral rights, North Dakota mineral rights, Montana mineral rights, royalty interests, land ownership',
  openGraph: {
    title: 'Miller Energy Group - Mineral Rights Buyers | Free Valuation',
    description: 'Miller Energy Group buys mineral rights in Colorado, Wyoming, New Mexico, North Dakota, and Montana. Get a free valuation of your mineral rights today.',
    type: 'website',
    url: 'https://millerenergygroup.com',
    siteName: 'Miller Energy Group',
    images: [
      {
        url: '/images/logo/TheMillerEngergyGroup_logo.png',
        width: 200,
        height: 32,
        alt: 'Miller Energy Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miller Energy Group - Mineral Rights Buyers',
    description: 'Miller Energy Group buys mineral rights in Colorado, Wyoming, New Mexico, North Dakota, and Montana. Get a free valuation of your mineral rights today.',
    images: ['/images/logo/TheMillerEngergyGroup_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://millerenergygroup.com',
  },
}

export default async function Home() {
  return (
    <RootLayout>
      <Container className="mt-20 sm:mt-24 lg:mt-32">
        <FadeIn className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium text-accent-dark mb-6">
            <span className="mr-2">🏔️</span>
            5th Generation Coloradan
          </div>
          <h1 className="font-display text-4xl font-medium tracking-tight text-balance text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            Making the Best Mineral Rights Decision for You and Your Family
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Family-owned. Local expertise. Fair offers. Miller Energy Group is a mineral acquisition group that buys mineral rights from small companies and mineral owners in Colorado, Wyoming, New Mexico, North Dakota and Montana.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-dark transition-colors"
            >
              Get Your Free Valuation
            </a>
            <a
              href="tel:+17203186907"
              className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Call (720) 318-6907
            </a>
          </div>
        </FadeIn>
      </Container>

      {/* Process Steps Section */}
      <Container className="mt-16 sm:mt-24">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-primary mb-4">
              How We Make It Simple
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our streamlined process gets you a fair offer quickly and closes on your timeline.
            </p>
          </div>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FadeIn className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white text-2xl font-bold">
              1
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-primary">Contact Us</h3>
            <p className="mt-2 text-neutral-600">Call or submit your property details</p>
          </FadeIn>
          <FadeIn className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white text-2xl font-bold">
              2
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-primary">Property Evaluation</h3>
            <p className="mt-2 text-neutral-600">We analyze your mineral rights</p>
          </FadeIn>
          <FadeIn className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white text-2xl font-bold">
              3
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-primary">Receive Offer</h3>
            <p className="mt-2 text-neutral-600">Receive fair market offer in under 72h</p>
          </FadeIn>
          <FadeIn className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white text-2xl font-bold">
              4
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-primary">Fast Closing</h3>
            <p className="mt-2 text-neutral-600">Close on your timeline, hassle-free</p>
          </FadeIn>
        </FadeInStagger>
      </Container>

      {/* Trust Signals Section */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-50 py-16 px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-semibold text-primary mb-4">
                Why Choose Miller Energy Group
              </h2>
              <p className="text-lg text-neutral-600">
                Family-owned. Local expertise. Fair offers.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">5th</div>
                <div className="text-sm font-medium text-primary">Generation Coloradan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100K+</div>
                <div className="text-sm font-medium text-primary">Acres Evaluated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">5</div>
                <div className="text-sm font-medium text-primary">States Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">48hr</div>
                <div className="text-sm font-medium text-primary">Response Time</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <StatesServed />

      <MineralRightsTypes />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Miller Energy Group', logo: logoMillerEnergyGroup }}
      >
        Miller Energy Group is led by a fifth-generation Coloradan, who has the best interests of the people and land in the Rocky Mountain West at heart. For us, integrity matters as much as having deep expertise of the industry.
      </Testimonial>

      <WhySell />

      <ContactSection />
    </RootLayout>
  )
}
