import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { MDXComponents } from '@/components/MDXComponents'

export default function MineralRightsLayout({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Mineral Rights Types" title={title} centered>
            <p>{description}</p>
          </PageIntro>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <div className="prose prose-lg max-w-none text-neutral-700">
              <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
            </div>
          </FadeIn>
        </Container>
      </article>

      <ContactSection />
    </RootLayout>
  )
}
