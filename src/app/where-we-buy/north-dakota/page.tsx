import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

const counties = [
  'Dunn',
  'McKenzie',
  'Montrail',
  'Williams'
]

export const metadata: Metadata = {
  title: 'Selling Mineral Rights in North Dakota',
  description:
    'Miller Energy Group focuses on mineral rights in North Dakota. We have worked with people in Dunn, McKenzie, Montrail, and Williams counties.',
}

export default function NorthDakota() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Selling Mineral Rights in North Dakota" title="Rocky Mountain West Mineral Rights">
        <p>
          Miller Energy Group focuses on mineral rights in the Rocky Mountain West region and helping those who are interested in selling mineral rights in North Dakota. We have worked with people in Dunn, McKenzie, Montrail, and Williams counties.
        </p>
        <p>
          If you are located in North Dakota, contact us today to learn more about your options to sell, lease, or keep your mineral rights. Our deep knowledge of the Rocky Mountain Region – an area we know best and have a personal connection with, allows us to provide you with insight and knowledge to give you comfort in making the right decision for you and your family.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-50 p-8 sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-6">
              North Dakota Counties We Serve
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {counties.map((county) => (
                <div key={county} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-neutral-400 mr-3" />
                  <span className="text-base text-neutral-700">{county}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* North Dakota Oil & Gas Statistics */}
      <Container className="mt-16">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 sm:p-12 border border-primary/20">
            <h2 className="font-display text-3xl font-semibold text-primary mb-8 text-center">
              North Dakota Oil & Gas Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-sm text-neutral-600">Active Wells</div>
                <div className="text-xs text-neutral-500 mt-1">Bakken Formation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1.2B</div>
                <div className="text-sm text-neutral-600">Barrels Oil (2023)</div>
                <div className="text-xs text-neutral-500 mt-1">Annual Production</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2.1T</div>
                <div className="text-sm text-neutral-600">Cubic Feet Gas</div>
                <div className="text-xs text-neutral-500 mt-1">Annual Production</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">18.75%</div>
                <div className="text-sm text-neutral-600">Average Royalty</div>
                <div className="text-xs text-neutral-500 mt-1">Range: 18.75% - 25%</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Major Basins in North Dakota */}
      <Container className="mt-16">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-primary mb-4">
              Major Basins in North Dakota
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              North Dakota is home to the Williston Basin and the world-famous Bakken Formation, one of the most productive oil plays in North America.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn>
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-neutral-200">
              <h3 className="font-display text-2xl font-semibold text-primary mb-4">Williston Basin (Bakken)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Primary Formations:</h4>
                  <p className="text-neutral-600">Bakken, Three Forks, Madison, Red River</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Production Type:</h4>
                  <p className="text-neutral-600">Oil and Natural Gas</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Key Statistics:</h4>
                  <ul className="text-neutral-600 space-y-1">
                    <li>• 15,000+ active wells</li>
                    <li>• 2.5 million acres under development</li>
                    <li>• Major operators: Continental Resources, Hess, Marathon Oil, EOG Resources</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-neutral-200">
              <h3 className="font-display text-2xl font-semibold text-primary mb-4">Tyler Formation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Primary Formations:</h4>
                  <p className="text-neutral-600">Tyler, Heath, Charles, Mission Canyon</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Production Type:</h4>
                  <p className="text-neutral-600">Oil and Natural Gas</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Key Statistics:</h4>
                  <ul className="text-neutral-600 space-y-1">
                    <li>• 1,200+ active wells</li>
                    <li>• 800,000 acres under development</li>
                    <li>• Major operators: Whiting Petroleum, Oasis Petroleum</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* North Dakota Mineral Rights Facts */}
      <Container className="mt-16">
        <FadeIn>
          <div className="rounded-3xl bg-primary p-8 sm:p-12 text-white">
            <h2 className="font-display text-3xl font-semibold text-white mb-8 text-center">
              North Dakota Mineral Rights Facts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Split Estate Common</h3>
                <p className="text-neutral-300">Surface vs mineral ownership separation is prevalent in North Dakota</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Favorable Tax Treatment</h3>
                <p className="text-neutral-300">North Dakota offers competitive severance tax rates for mineral owners</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Active Leasing Market</h3>
                <p className="text-neutral-300">Strong demand for North Dakota mineral rights from major operators</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Why North Dakota Landowners Trust Us */}
      <Container className="mt-16">
        <FadeIn>
          <div className="rounded-3xl bg-accent/5 p-8 sm:p-12 border border-accent/20">
            <h2 className="font-display text-3xl font-semibold text-primary mb-8 text-center">
              Why North Dakota Landowners Trust Miller Energy Group
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5th</div>
                <div className="text-sm text-neutral-600">Generation Coloradans</div>
                <div className="text-xs text-neutral-500 mt-1">Deep Rocky Mountain roots</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">125+</div>
                <div className="text-sm text-neutral-600">North Dakota Transactions</div>
                <div className="text-xs text-neutral-500 mt-1">Completed successfully</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30</div>
                <div className="text-sm text-neutral-600">Days Average</div>
                <div className="text-xs text-neutral-500 mt-1">Closing time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$0</div>
                <div className="text-sm text-neutral-600">Hidden Fees</div>
                <div className="text-xs text-neutral-500 mt-1">No commissions or surprises</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* CTA Section */}
      <Container className="mt-16">
        <FadeIn>
          <div className="rounded-3xl bg-accent/5 p-8 sm:p-12 border border-accent/20 text-center">
            <h2 className="font-display text-3xl font-semibold text-primary mb-4">
              Ready to Discuss Your North Dakota Mineral Rights?
            </h2>
            <p className="text-neutral-600 mb-8 text-lg max-w-2xl mx-auto">
              Our team has deep expertise in North Dakota mineral rights. Get a confidential consultation and fair market valuation.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Get Your Free Valuation
            </a>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
