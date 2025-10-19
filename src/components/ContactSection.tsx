import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-primary px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Ready to discuss your mineral rights?
            </h2>
            <p className="mt-4 text-lg text-neutral-300">
              Get a free consultation and learn what your mineral rights might be worth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" invert className="bg-accent hover:bg-accent-dark text-black font-semibold">
                Get a free consultation
              </Button>
              <a
                href="tel:+17203186907"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                📞 Call (720) 318-6907
              </a>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our office
              </h3>
              <Offices
                invert
                className="mt-6"
              />
              <div className="mt-6 text-sm text-neutral-300">
                <p>Phone: (720) 318-6907</p>
                <p>Email: Info@Millerenergygroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
