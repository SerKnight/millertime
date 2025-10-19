import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Royalty Interests - Mineral Rights Explained | Miller Energy Group',
  description: 'Learn about royalty interests in mineral rights. Understand how royalty payments work, types of royalty interests, and your rights as a mineral owner.',
  keywords: 'royalty interests, mineral rights, royalty payments, oil and gas royalties, mineral ownership, passive income, NPRI, overriding royalty',
  openGraph: {
    title: 'Royalty Interests - Mineral Rights Explained',
    description: 'Learn about royalty interests in mineral rights. Understand how royalty payments work, types of royalty interests, and your rights as a mineral owner.',
    type: 'article',
    url: 'https://millerenergygroup.com/mineral-rights-types/royalty-interests',
    siteName: 'Miller Energy Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royalty Interests - Mineral Rights Explained',
    description: 'Learn about royalty interests in mineral rights. Understand how royalty payments work, types of royalty interests, and your rights as a mineral owner.',
  },
  alternates: {
    canonical: 'https://millerenergygroup.com/mineral-rights-types/royalty-interests',
  },
}

export default function RoyaltyInterestsPage() {
  return (
    <RootLayout>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Mineral Rights Types" title="Royalty Interests" centered>
            <p>Understanding royalty interests and your right to receive a percentage of mineral production profits.</p>
          </PageIntro>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <div className="mx-auto max-w-4xl">
              {/* Article Header */}
              <div className="mb-12">
                <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Mineral Rights Types</span>
                  <span>•</span>
                  <time dateTime="2024-01-01">Updated January 2024</time>
                </div>
                <h1 className="text-4xl font-bold text-neutral-900 mb-6">Understanding Royalty Interests in Mineral Rights</h1>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Learn about royalty interests and how they provide passive income from mineral production without the risks of development.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-neutral-50 rounded-xl p-6 mb-12">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  <a href="#what-are-royalty-interests" className="block text-neutral-600 hover:text-primary transition-colors">What Are Royalty Interests?</a>
                  <a href="#how-royalty-interests-work" className="block text-neutral-600 hover:text-primary transition-colors">How Royalty Interests Work</a>
                  <a href="#types-of-royalty-interests" className="block text-neutral-600 hover:text-primary transition-colors">Types of Royalty Interests</a>
                  <a href="#advantages" className="block text-neutral-600 hover:text-primary transition-colors">Advantages of Royalty Interests</a>
                  <a href="#considerations" className="block text-neutral-600 hover:text-primary transition-colors">Important Considerations</a>
                  <a href="#questions-to-consider" className="block text-neutral-600 hover:text-primary transition-colors">Questions to Consider</a>
                </nav>
              </div>

              {/* Main Content */}
              <article className="prose prose-lg max-w-none">
                <section id="what-are-royalty-interests" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">What Are Royalty Interests?</h2>
                  <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
                    <p className="text-lg text-neutral-700 mb-0">
                      <strong>Key Definition:</strong> A person with royalty interests, or a "non-participating royalty interest," has the right to receive royalties – a set percentage of the profit – from minerals on a certain piece of land.
                    </p>
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    If you have a royalty interest, you receive royalties only when there are profits, and you don't have the right to lease the minerals. This makes royalty interests a passive form of mineral ownership that provides income without the responsibilities of development.
                  </p>
                </section>

                <section id="how-royalty-interests-work" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">How Royalty Interests Work</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4">✅ What You Receive</h3>
                      <ul className="space-y-3 text-neutral-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">•</span>
                          A percentage of the gross revenue from mineral production
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">•</span>
                          Payments only when minerals are actually produced and sold
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3">•</span>
                          No responsibility for development costs or operations
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-orange-800 mb-4">⚠️ What You Don't Control</h3>
                      <ul className="space-y-3 text-neutral-700">
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          When or if development occurs
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          How the minerals are extracted
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          Lease negotiations with operators
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-3">•</span>
                          Development decisions
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="types-of-royalty-interests" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Types of Royalty Interests</h2>
                  <div className="grid gap-6">
                    <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">Landowner Royalty</h3>
                      <p className="text-neutral-700 mb-2">Typically 12.5% to 25% of production</p>
                      <p className="text-sm text-neutral-600">The most common type of royalty interest, usually reserved for the surface owner.</p>
                    </div>
                    <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">Non-Participating Royalty Interest (NPRI)</h3>
                      <p className="text-neutral-700 mb-2">Fixed percentage, no development rights</p>
                      <p className="text-sm text-neutral-600">A royalty interest that doesn't include the right to develop or lease the minerals.</p>
                    </div>
                    <div className="border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">Overriding Royalty Interest</h3>
                      <p className="text-neutral-700 mb-2">Percentage carved out of working interest</p>
                      <p className="text-sm text-neutral-600">A royalty interest created from a working interest, typically for a specific term.</p>
                    </div>
                  </div>
                </section>

                <section id="advantages" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Advantages of Royalty Interests</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">Passive Income</h3>
                      <p className="text-neutral-700">No management responsibility required</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">No Development Risk</h3>
                      <p className="text-neutral-700">You don't bear the cost of drilling or operations</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">Regular Payments</h3>
                      <p className="text-neutral-700">Receive payments as long as production continues</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">Inheritance Friendly</h3>
                      <p className="text-neutral-700">Easy to pass to heirs</p>
                    </div>
                  </div>
                </section>

                <section id="considerations" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Important Considerations</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-orange-800 mb-3">Production Dependent</h3>
                      <p className="text-neutral-700">Only receive payments when minerals are produced</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-orange-800 mb-3">No Control</h3>
                      <p className="text-neutral-700">Cannot influence development decisions</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-orange-800 mb-3">Market Dependent</h3>
                      <p className="text-neutral-700">Payments fluctuate with commodity prices</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-orange-800 mb-3">Tax Implications</h3>
                      <p className="text-neutral-700">Royalty payments are typically ordinary income</p>
                    </div>
                  </div>
                </section>

                <section id="questions-to-consider" className="mb-12">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">Questions to Consider</h2>
                  <div className="bg-neutral-50 rounded-xl p-8">
                    <ul className="space-y-4 text-lg text-neutral-700">
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        Do you want ongoing income or a lump sum payment?
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        Are you comfortable with the uncertainty of production?
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        How important is it to have control over development?
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3">•</span>
                        What are your tax planning goals?
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="bg-primary/5 rounded-xl p-8 text-center">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Can Help</h2>
                  <p className="text-lg text-neutral-700 mb-6">
                    We can help you understand your royalty interests, evaluate their current and potential value, and explore options for selling your royalty rights for immediate cash.
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
        </Container>
      </article>

      <ContactSection />
    </RootLayout>
  )
}
