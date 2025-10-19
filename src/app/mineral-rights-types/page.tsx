import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

const types = [
  {
    title: 'Land Ownership',
    href: '/mineral-rights-types/land-ownership',
    description: 'A person with surface estate ownership owns the land surface but not necessarily the minerals underneath it. The land surface title may be separate from the mineral rights title.',
    details: 'If you have surface ownership only, you have the right to use, sell or lease the land surface but no rights to the minerals beneath it.'
  },
  {
    title: 'Mineral Rights',
    href: '/mineral-rights-types/mineral-rights',
    description: 'A person with mineral rights owns the minerals beneath the surface of a certain piece of land. The person often does not own the land surface, but has rights to using the land surface to extract minerals.',
    details: 'A person with mineral rights has the ability to sell or lease those rights to someone else – or hold onto the rights and bear the risk and responsibility for extracting the minerals.'
  },
  {
    title: 'Royalty Interests',
    href: '/mineral-rights-types/royalty-interests',
    description: 'A person with royalty interests, or a "non-participating royalty interest," has the right to receive royalties – a set percentage of the profit – from minerals on a certain piece of land.',
    details: 'If you have a royalty interest, you receive royalties only when there are profits, and you don\'t have the right to lease the minerals.'
  }
]

function TypesGrid() {
  return (
    <Container className="mt-12 sm:mt-16">
      <FadeInStagger className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
        {types.map((type) => (
          <FadeIn key={type.href} className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 sm:p-8 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50">
              <h3>
                <Link href={type.href}>
                  <span className="absolute inset-0 rounded-3xl" />
                  <span className="font-display text-2xl font-semibold text-primary">
                    {type.title}
                  </span>
                </Link>
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                {type.description}
              </p>
              <p className="mt-4 text-sm text-neutral-500">
                {type.details}
              </p>
            </article>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Mineral Rights Types',
  description:
    'Understanding your mineral rights can be confusing. Learn about land ownership, mineral rights, and royalty interests to make informed decisions.',
}

export default function MineralRightsTypes() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Mineral Rights Types" title="Understanding your mineral rights">
        <p>
          The world of mineral rights can be confusing. It's helpful to start with a basic understanding of what you have the rights to sell.
        </p>
        <p>
          Deed language can be confusing and archaic, so it can be difficult to understand what you actually own. Not sure what type of interest you have or how many net mineral acres you own? Contact us and we will help you understand what you own, what your options are and what we would offer you.
        </p>
      </PageIntro>

      <TypesGrid />

      <ContactSection />
    </RootLayout>
  )
}