import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import CDNMap from '@/components/InteractiveMap'

export const metadata: Metadata = {
  title: 'Interactive Map - Our Operational Basins',
  description:
    'Explore our operational basins across the Rocky Mountain region. See where we buy mineral rights and learn about our experience in each basin.',
}

export default function InteractiveMapPage() {
  return (
    <RootLayout>
      <PageIntro 
        eyebrow="Interactive Map" 
        title="Our Operational Basins"
      >
        <p>
          Explore the basins where we actively acquire mineral rights across the Rocky Mountain region. 
          Click on any basin to learn more about our experience and request a quote for your mineral rights.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <CDNMap />
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
