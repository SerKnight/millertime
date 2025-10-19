import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Mineral Rights',
  description: 'Understanding mineral rights ownership and your ability to extract or lease minerals.',
}

export default function MineralRightsPage() {
  return (
    <RootLayout>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Mineral Rights Types" title="Mineral Rights" centered>
            <p>Understanding mineral rights ownership and your ability to extract or lease minerals.</p>
          </PageIntro>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              {/* Article Header */}
              <div className="mb-12">
                <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Mineral Rights Types</span>
                  <span>•</span>
                  <time dateTime="2024-01-01">Updated January 2024</time>
                </div>
                <h1 className="text-4xl font-bold text-neutral-900 mb-6">Understanding Mineral Rights Ownership</h1>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Learn about mineral rights ownership and your ability to extract, lease, or sell minerals beneath the surface.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-neutral-50 rounded-xl p-6 mb-12">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  <a href="#what-are-mineral-rights" className="block text-neutral-600 hover:text-primary transition-colors">What Are Mineral Rights?</a>
                  <a href="#rights-and-responsibilities" className="block text-neutral-600 hover:text-primary transition-colors">Your Rights and Responsibilities</a>
                  <a href="#types-of-mineral-rights" className="block text-neutral-600 hover:text-primary transition-colors">Types of Mineral Rights</a>
                  <a href="#common-minerals" className="block text-neutral-600 hover:text-primary transition-colors">Common Minerals</a>
                  <a href="#questions-to-consider" className="block text-neutral-600 hover:text-primary transition-colors">Questions to Consider</a>
                </nav>
              </div>

              {/* Main Content */}
              <article className="prose prose-lg max-w-none">
                <section id="what-are-mineral-rights" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">What Are Mineral Rights?</h2>
                  <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
                    <p className="text-lg text-neutral-700 mb-0">
                      <strong>Key Definition:</strong> A person with mineral rights owns the minerals beneath the surface of a certain piece of land. The person often does not own the land surface, but has rights to using the land surface to extract minerals.
                    </p>
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    A person with mineral rights has the ability to sell or lease those rights to someone else – or hold onto the rights and bear the risk and responsibility for extracting the minerals. This gives you significant control over the development of your mineral assets.
                  </p>
                </section>

                <section id="rights-and-responsibilities" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Your Rights and Responsibilities</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4">✅ What You Can Do</h3>
                      <ul className="space-y-3 text-neutral-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">•</span>
                          Extract minerals yourself (if you have the capability)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">•</span>
                          Lease your mineral rights to oil and gas companies
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">•</span>
                          Sell your mineral rights to other parties
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">•</span>
                          Receive royalties from production
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-orange-800 mb-4">⚠️ What You're Responsible For</h3>
                      <ul className="space-y-3 text-neutral-700">
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          Managing lease negotiations
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          Understanding production risks
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          Handling tax implications
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          Making decisions about development
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="types-of-mineral-rights" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Types of Mineral Rights</h2>
                  <div className="grid gap-6">
                    <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">Working Interest</h3>
                      <p className="text-neutral-700 mb-2">You own the right to develop and produce minerals</p>
                      <p className="text-sm text-neutral-600">This gives you the most control but also the most responsibility and risk.</p>
                    </div>
                    <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">Non-Participating Royalty Interest</h3>
                      <p className="text-neutral-700 mb-2">You receive royalties but don't participate in operations</p>
                      <p className="text-sm text-neutral-600">Passive income without the risks of development.</p>
                    </div>
                    <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">Overriding Royalty Interest</h3>
                      <p className="text-neutral-700 mb-2">You receive a percentage of production revenue</p>
                      <p className="text-sm text-neutral-600">A royalty carved out of a working interest, typically for a specific term.</p>
                    </div>
                  </div>
                </section>

                <section id="common-minerals" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Common Minerals in the Rocky Mountain West</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Oil and Natural Gas</h3>
                      <p className="text-neutral-700">The most valuable and commonly developed minerals in the region</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Coal</h3>
                      <p className="text-neutral-700">Traditional energy source with established markets</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Uranium</h3>
                      <p className="text-neutral-700">Nuclear fuel with growing demand for clean energy</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Rare Earth Elements</h3>
                      <p className="text-neutral-700">Critical for technology and renewable energy applications</p>
                    </div>
                  </div>
                </section>

                <section id="questions-to-consider" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Questions to Consider</h2>
                  <div className="bg-neutral-50 rounded-xl p-8">
                    <ul className="space-y-4 text-lg text-neutral-700">
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        Do you want to manage the development process yourself?
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        Are you comfortable with the risks of mineral development?
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        Would you prefer a lump sum payment or ongoing royalties?
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        How will your heirs handle mineral rights management?
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-primary/5 rounded-xl p-8 text-center">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Can Help</h2>
                  <p className="text-lg text-neutral-700 mb-6">
                    We can help you understand your mineral rights, evaluate their value, and explore your options for selling or leasing.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Get a Free Consultation
                  </a>
                </section>
              </article>
            </div>
          </FadeIn>
        </Container>
      </article>

      <ContactSection />
    </RootLayout>
  )
}
