import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import imageDenver from '@/images/backgrounds/denver.jpg'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <div className="space-y-8">
        {/* Ready to Get an Offer Form */}
        <div className="rounded-3xl bg-accent/5 p-6 sm:p-8 border border-accent/20">
          <div className="text-center mb-6">
            <h2 className="font-display text-2xl font-semibold text-primary mb-2">
              Ready to Get an Offer?
            </h2>
            <p className="text-neutral-600">Get your free valuation within 48 hours</p>
          </div>
          <form>
            <div className="isolate -space-y-px rounded-2xl bg-white/50">
              <TextInput label="Your Name" name="name" autoComplete="name" required />
              <TextInput
                label="Your Email"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
              <TextInput label="Your Phone" type="tel" name="phone" autoComplete="tel" required />
              <TextInput label="Property Location (State, County)" name="location" required />
              <TextInput label="Approximate Acres (or 'not sure')" name="acres" />
              <div className="px-6 py-4">
                <label className="block text-sm font-medium text-primary mb-3">
                  Do you own minerals or royalties?
                </label>
                <div className="space-y-2">
                  <RadioInput name="property_type" value="minerals" label="Minerals" />
                  <RadioInput name="property_type" value="royalties" label="Royalties" />
                  <RadioInput name="property_type" value="both" label="Both" />
                  <RadioInput name="property_type" value="not_sure" label="Not sure" />
                </div>
              </div>
              <div className="px-6 py-4">
                <label className="block text-sm font-medium text-primary mb-3">
                  Are they currently producing?
                </label>
                <div className="space-y-2">
                  <RadioInput name="producing" value="yes" label="Yes" />
                  <RadioInput name="producing" value="no" label="No" />
                  <RadioInput name="producing" value="not_sure" label="Not sure" />
                </div>
              </div>
              <div className="px-6 py-4">
                <label className="block text-sm font-medium text-primary mb-3">
                  Timeframe to sell?
                </label>
                <div className="space-y-2">
                  <RadioInput name="timeframe" value="urgent" label="Urgent (within 30 days)" />
                  <RadioInput name="timeframe" value="1-3_months" label="1-3 months" />
                  <RadioInput name="timeframe" value="exploring" label="Just exploring" />
                </div>
              </div>
            </div>
            <Button type="submit" className="mt-6 w-full bg-accent hover:bg-accent-dark text-white">
              Get My Free Valuation
            </Button>
          </form>
        </div>

        {/* Have Questions Form */}
        <div className="rounded-3xl bg-neutral-50 p-6 sm:p-8">
          <div className="text-center mb-6">
            <h2 className="font-display text-2xl font-semibold text-primary mb-2">
              Have Questions?
            </h2>
            <p className="text-neutral-600">We're here to help explain the process</p>
          </div>
          <form>
            <div className="isolate -space-y-px rounded-2xl bg-white/50">
              <TextInput label="Your Name" name="name" autoComplete="name" />
              <TextInput
                label="Your Email"
                type="email"
                name="email"
                autoComplete="email"
              />
              <TextInput label="Your Phone" type="tel" name="phone" autoComplete="tel" />
              <TextInput label="Your Question" name="question" />
            </div>
            <Button type="submit" className="mt-6 w-full">
              Send Question
            </Button>
          </form>
        </div>
      </div>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <div className="space-y-8">
        {/* Trust Signals */}
        <div className="rounded-3xl bg-primary/5 p-6 sm:p-8 border border-primary/20">
          <h2 className="font-display text-2xl font-semibold text-primary mb-4">
            Why Choose Miller Energy Group?
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-primary">5th Generation Coloradan</h3>
                <p className="text-neutral-600">Deep local roots and understanding</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-primary">48-Hour Response</h3>
                <p className="text-neutral-600">We respond within 4 hours</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-primary">No Pressure, No Obligation</h3>
                <p className="text-neutral-600">Transparent process, fair offers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="rounded-3xl bg-neutral-50 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-primary mb-6">
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div className="text-center">
              <a
                href="tel:+17203186907"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 sm:px-8 sm:py-4 text-lg font-semibold text-white hover:bg-accent-dark transition-colors"
              >
                📞 Call (720) 318-6907
              </a>
              <p className="mt-2 text-sm text-neutral-600">Available Monday-Friday, 8am-6pm</p>
            </div>
            
            <div className="text-center">
              <a
                href="mailto:Info@Millerenergygroup.com"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 sm:px-8 sm:py-4 text-lg font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                ✉️ Email Us
              </a>
              <p className="mt-2 text-sm text-neutral-600">Info@Millerenergygroup.com</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <h3 className="font-display text-lg font-semibold text-primary mb-4">
              Our Denver Office
            </h3>
            <Offices />
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Miller Energy Group',
  description: 'Contact us for a free consultation about your mineral rights. We provide expert guidance and transparent valuations.',
}

export default function Contact() {
  return (
    <RootLayout>
      <div className="relative">
        {/* Hero Image with proper spacing from header */}
        <div className="absolute inset-0 h-[500px] sm:h-[600px] mt-16">
          <Image
            src={imageDenver}
            alt="Denver skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* PageIntro with proper spacing */}
        <div className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
          <Container>
            <PageIntro eyebrow="Contact us" title="Get a free consultation">
              <p>If you'd like to request an appraisal of your mineral rights, get help with locating the title or learn more about selling your mineral rights, we will explain the process and give you the attention, expertise and straightforward advice you need to make wise decisions about your mineral rights and get the best outcome possible.</p>
            </PageIntro>
          </Container>
        </div>
      </div>

      <Container className="mt-16 sm:mt-24 lg:mt-32">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
