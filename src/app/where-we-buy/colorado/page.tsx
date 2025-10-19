import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import imageField1 from '@/images/backgrounds/field-1.jpg'

const counties = [
  'Adams',
  'Arapahoe', 
  'La Plata',
  'Larimer',
  'Weld'
]

export const metadata: Metadata = {
  title: 'Selling Mineral Rights in Colorado',
  description:
    'Miller Energy Group focuses on mineral rights in Colorado. We have worked with people in Adams, Arapahoe, La Plata, Larimer, and Weld counties.',
}

export default function Colorado() {
  return (
    <RootLayout>
      <div className="relative">
        <div className="absolute inset-0 h-[500px] sm:h-[600px] mt-16">
          <Image
            src={imageField1}
            alt="Colorado landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <Container>
            <PageIntro eyebrow="Selling Mineral Rights in Colorado" title="Rocky Mountain West Mineral Rights">
        <p>
          Miller Energy Group focuses on mineral rights in the Rocky Mountain West region and helping those who are interested in selling mineral rights in Colorado. We have worked with people in Adams, Arapahoe, La Plata, Larimer, and Weld counties.
        </p>
        <p>
          If you are located in Colorado, contact us today to learn more about your options to sell, lease, or keep your mineral rights. Our deep knowledge of the Rocky Mountain Region – an area we know best and have a personal connection with, allows us to provide you with insight and knowledge to give you comfort in making the right decision for you and your family.
        </p>
          </PageIntro>
          </Container>
        </div>
      </div>

      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-50 p-6 sm:p-8 lg:p-12">
            <h2 className="font-display text-2xl font-semibold text-primary mb-6">
              Colorado Counties We Serve
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {counties.map((county) => (
                <div key={county} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-accent mr-3" />
                  <span className="text-base text-primary font-medium">{county}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-12 sm:mt-16">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-3xl bg-primary p-6 sm:p-8 lg:p-12 text-white">
              <h2 className="font-display text-2xl font-semibold text-white mb-6">
                Why Choose Miller Energy Group for Colorado Mineral Rights?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">5th Generation Coloradan</h3>
                    <p className="text-neutral-300">Deep local roots and understanding of Colorado's mineral landscape</p>
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
                    <h3 className="text-lg font-semibold text-white">Local Expertise</h3>
                    <p className="text-neutral-300">We know Colorado's basins, regulations, and market conditions</p>
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
                    <h3 className="text-lg font-semibold text-white">Fair & Transparent</h3>
                    <p className="text-neutral-300">No pressure, no obligation. We explain everything clearly</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-accent/5 p-6 sm:p-8 lg:p-12 border border-accent/20">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                Get Your Colorado Mineral Rights Valuation
              </h2>
              <p className="text-neutral-600 mb-6">
                Ready to find out what your Colorado mineral rights are worth? Get your free valuation within 48 hours.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base focus:border-primary focus:ring-primary/5"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base focus:border-primary focus:ring-primary/5"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base focus:border-primary focus:ring-primary/5"
                    placeholder="(720) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">County *</label>
                  <select
                    required
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base focus:border-primary focus:ring-primary/5"
                  >
                    <option value="">Select your county</option>
                    {counties.map((county) => (
                      <option key={county} value={county}>{county}</option>
                    ))}
                    <option value="other">Other Colorado County</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Approximate Acres</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-base focus:border-primary focus:ring-primary/5"
                    placeholder="e.g., 160 acres or 'not sure'"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Currently Producing?</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="producing" value="yes" className="mr-3" />
                      <span className="text-sm">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="producing" value="no" className="mr-3" />
                      <span className="text-sm">No</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="producing" value="not_sure" className="mr-3" />
                      <span className="text-sm">Not sure</span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
                >
                  Get My Free Colorado Valuation
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
