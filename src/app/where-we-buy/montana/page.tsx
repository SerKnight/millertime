import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

const counties = [
  'Richland'
]

export const metadata: Metadata = {
  title: 'Selling Mineral Rights in Montana',
  description:
    'Miller Energy Group focuses on mineral rights in Montana. We have worked with people in Richland County.',
}

export default function Montana() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Selling Mineral Rights in Montana" title="Rocky Mountain West Mineral Rights">
        <p>
          Miller Energy Group focuses on mineral rights in the Rocky Mountain West region and helping those who are interested in selling mineral rights in Montana. We have worked with people in Richland County.
        </p>
        <p>
          If you are located in Montana, contact us today to learn more about your options to sell, lease, or keep your mineral rights. Our deep knowledge of the Rocky Mountain Region – an area we know best and have a personal connection with, allows us to provide you with insight and knowledge to give you comfort in making the right decision for you and your family.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-50 p-8 sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-6">
              Montana Counties We Serve
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

      <Container className="mt-16">
        <FadeIn>
          <div className="rounded-3xl bg-primary p-8 sm:p-12 text-white">
            <h2 className="font-display text-2xl font-semibold text-white mb-6">
              Who to sell my mineral rights to?
            </h2>
            <p className="text-lg text-neutral-300 mb-6">
              Most landowners and mineral owners are not experts in oil and gas and don't know where to turn for trustworthy information on how to manage their mineral asset. That's where we come in!
            </p>
            <p className="text-base text-neutral-300">
              Our priority is for mineral owners to feel good about the decision they make and the deal they get for their mineral rights. We explain the process to you and guide you through decision-making every step of the way, so you can feel confident that you made the right choice about your mineral rights for you and your family.
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
