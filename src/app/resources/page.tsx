import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Educational resources and information about mineral rights, selling your mineral rights, and working with Miller Energy Group.',
}

export default function Resources() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Resources" title="Learning Center">
        <p>
          Educational resources and information about mineral rights, selling your mineral rights, and working with Miller Energy Group. We're here to help you understand your options and make informed decisions.
        </p>
      </PageIntro>

      <Container className="mt-12 sm:mt-16">
        <div className="rounded-3xl bg-neutral-50 p-6 sm:p-8 lg:p-12">
          <h2 className="font-display text-2xl font-semibold text-primary mb-6">
            Coming Soon
          </h2>
          <p className="text-lg text-neutral-600 mb-6">
            We're working on creating comprehensive educational resources to help you understand mineral rights and make informed decisions.
          </p>
          <p className="text-base text-neutral-600">
            In the meantime, feel free to contact us directly for personalized guidance about your mineral rights. We're here to help you understand what you own and explore your options.
          </p>
        </div>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
