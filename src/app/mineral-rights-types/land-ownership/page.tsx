import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Land Ownership',
  description: 'Understanding surface estate ownership and your rights to the land surface.',
}

export default function LandOwnershipPage() {
  return (
    <RootLayout>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Mineral Rights Types" title="Land Ownership" centered>
            <p>Understanding surface estate ownership and your rights to the land surface.</p>
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
                <h1 className="text-4xl font-bold text-neutral-900 mb-6">Understanding Land Ownership and Surface Rights</h1>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Learn about surface estate ownership and what rights you have to the land surface versus mineral rights beneath it.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-neutral-50 rounded-xl p-6 mb-12">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  <a href="#surface-estate-ownership" className="block text-neutral-600 hover:text-primary transition-colors">Surface Estate Ownership</a>
                  <a href="#what-this-means" className="block text-neutral-600 hover:text-primary transition-colors">What This Means for You</a>
                  <a href="#common-scenarios" className="block text-neutral-600 hover:text-primary transition-colors">Common Scenarios</a>
                  <a href="#questions-to-consider" className="block text-neutral-600 hover:text-primary transition-colors">Questions to Consider</a>
                </nav>
              </div>

              {/* Main Content */}
              <article className="prose prose-lg max-w-none">
                <section id="surface-estate-ownership" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Surface Estate Ownership</h2>
                  <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
                    <p className="text-lg text-neutral-700 mb-0">
                      <strong>Key Definition:</strong> A person with surface estate ownership owns the land surface but not necessarily the minerals underneath it. The land surface title may be separate from the mineral rights title.
                    </p>
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    If you have surface ownership only, you have the right to use, sell or lease the land surface but no rights to the minerals beneath it. This is a common situation where property ownership has been divided over time.
                  </p>
                </section>

                <section id="what-this-means" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">What This Means for You</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4">✅ Your Rights</h3>
                      <ul className="space-y-3 text-neutral-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">•</span>
                          You own the surface of the land
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">•</span>
                          You can use, sell, or lease the land surface
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-orange-800 mb-4">⚠️ Limitations</h3>
                      <ul className="space-y-3 text-neutral-700">
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          You do not have rights to minerals beneath the surface
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          You may have restrictions on surface use if mineral rights are owned by others
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="common-scenarios" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Common Scenarios</h2>
                  <p className="text-lg text-neutral-700 mb-6">
                    Many landowners find themselves in situations where they own the surface but not the mineral rights. This can happen when:
                  </p>
                  <div className="grid gap-6">
                    <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">Previous Sales or Leases</h3>
                      <p className="text-neutral-700">Mineral rights were previously sold or leased to oil and gas companies or other parties.</p>
                    </div>
                    <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">Inherited Property</h3>
                      <p className="text-neutral-700">The property was inherited with split ownership between surface and mineral rights.</p>
                    </div>
                    <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">Original Deed Separation</h3>
                      <p className="text-neutral-700">The original deed separated surface and mineral rights, creating different ownership chains.</p>
                    </div>
                  </div>
                </section>

                <section id="questions-to-consider" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Questions to Consider</h2>
                  <div className="bg-neutral-50 rounded-xl p-8">
                    <ul className="space-y-4 text-lg text-neutral-700">
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        Do you know if you own the mineral rights under your land?
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        Have you received offers to lease your surface for mineral exploration?
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        Are you aware of any restrictions on your surface use?
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-primary/5 rounded-xl p-8 text-center">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Can Help</h2>
                  <p className="text-lg text-neutral-700 mb-6">
                    If you're unsure about your ownership rights or have questions about your surface estate, we can help you understand what you own and what your options are.
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
