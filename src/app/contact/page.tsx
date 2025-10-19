import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import imageDenver from '@/images/backgrounds/denver.jpg'
import fieldImage from '@/images/backgrounds/field-1.jpg'

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
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-none"
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
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <div className="lg:order-last">
      <div className="rounded-3xl bg-gradient-to-br from-accent/5 via-accent/3 to-accent/5 p-6 sm:p-8 border border-accent/20 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl font-semibold text-primary mb-3">
            Start Your Mineral Rights Journey
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Share your property details and we'll provide a comprehensive, no-obligation assessment 
            of your mineral rights potential.
          </p>
        </div>
        
        <form className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary text-lg border-b border-accent/20 pb-2">
              Your Information
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <TextInput label="Your Name" name="name" autoComplete="name" required />
              <TextInput
                label="Your Email"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <TextInput label="Your Phone" type="tel" name="phone" autoComplete="tel" required />
              <TextInput label="Best Time to Call" name="call_time" placeholder="e.g., Weekday mornings" />
            </div>
          </div>

          {/* Property Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary text-lg border-b border-accent/20 pb-2">
              Property Details
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <TextInput label="Property Location (State, County)" name="location" required />
              <TextInput label="Approximate Acres (or 'not sure')" name="acres" />
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-3">
                  What type of mineral rights do you own?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <RadioInput name="property_type" value="minerals" label="Mineral Rights" />
                  <RadioInput name="property_type" value="royalties" label="Royalty Interests" />
                  <RadioInput name="property_type" value="both" label="Both" />
                  <RadioInput name="property_type" value="not_sure" label="Not sure" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-3">
                  Is your property currently producing oil or gas?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <RadioInput name="producing" value="yes" label="Yes, producing" />
                  <RadioInput name="producing" value="no" label="No production" />
                  <RadioInput name="producing" value="not_sure" label="Not sure" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-3">
                  What's your timeline for considering a sale?
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <RadioInput name="timeframe" value="urgent" label="Within 30 days" />
                  <RadioInput name="timeframe" value="1-3_months" label="1-3 months" />
                  <RadioInput name="timeframe" value="exploring" label="Just exploring options" />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary text-lg border-b border-accent/20 pb-2">
              Additional Information
            </h3>
            <TextInput 
              label="Questions or specific concerns about your mineral rights" 
              name="comments" 
              placeholder="e.g., I'm concerned about environmental impact, I want to understand tax implications, etc."
            />
          </div>
          
          <div className="space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent-dark text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-200"
            >
              Get My Confidential Assessment
            </Button>
            <p className="text-sm text-neutral-500 text-center">
              🔒 Your information is confidential and secure • No obligation • 5th generation Coloradans
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

function ContactDetails() {
  return (
    <div className="space-y-8">
      {/* Educational Content */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5 p-6 sm:p-8 border border-primary/20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={fieldImage}
            alt="Oil and gas field infrastructure"
            fill
            className="object-cover opacity-10"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        <div className="relative">
          <h2 className="font-display text-2xl font-semibold text-primary mb-6">
            Your Mineral Rights Journey
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-lg font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary text-lg">Educational Consultation</h3>
                <p className="text-neutral-600 text-sm mt-1">
                  We'll explain your mineral rights, current market conditions, and help you understand 
                  what factors influence the value of your property.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-lg font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary text-lg">Comprehensive Assessment</h3>
                <p className="text-neutral-600 text-sm mt-1">
                  Receive a detailed analysis of your mineral rights potential, including production 
                  history, geological factors, and market valuation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-lg font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary text-lg">No-Pressure Partnership</h3>
                <p className="text-neutral-600 text-sm mt-1">
                  Take your time to consider all options. We provide guidance and transparency 
                  without any pressure to make immediate decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="rounded-3xl bg-neutral-50 p-6 sm:p-8 border border-neutral-200">
        <h2 className="font-display text-2xl font-semibold text-primary mb-6">
          Why Land Owners Choose Us
        </h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                <h3 className="font-semibold text-primary">5th Generation Coloradans</h3>
                <p className="text-neutral-600 text-sm">Deep local knowledge and community roots</p>
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
                <h3 className="font-semibold text-primary">100,000+ Acres Handled</h3>
                <p className="text-neutral-600 text-sm">Proven experience with land owners</p>
              </div>
            </div>
          </div>
          
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
                <h3 className="font-semibold text-primary">Transparent Process</h3>
                <p className="text-neutral-600 text-sm">Clear communication and fair valuations</p>
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
                <h3 className="font-semibold text-primary">No Pressure Approach</h3>
                <p className="text-neutral-600 text-sm">Educational guidance without sales pressure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 p-6 sm:p-8 border border-primary/20">
        <h2 className="font-display text-2xl font-semibold text-primary mb-6">
          Ready to Learn More?
        </h2>
        
        <div className="space-y-6">
          <div className="text-center">
            <a
              href="tel:+17203186907"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 sm:px-8 sm:py-4 text-lg font-semibold text-white hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label="Call Miller Energy Group at (720) 318-6907"
            >
              📞 Call (720) 318-6907
            </a>
            <p className="mt-2 text-sm text-neutral-600">Available Monday-Friday, 8am-6pm</p>
          </div>
          
          <div className="text-center">
            <a
              href="mailto:Info@Millerenergygroup.com"
              className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 sm:px-8 sm:py-4 text-lg font-semibold text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Email Miller Energy Group at Info@Millerenergygroup.com"
            >
              ✉️ Email Us
            </a>
            <p className="mt-2 text-sm text-neutral-600">Info@Millerenergygroup.com</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20">
          <h3 className="font-display text-lg font-semibold text-primary mb-4">
            Our Denver Office
          </h3>
          <Offices />
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Contact Miller Energy Group - Mineral Rights Education & Assessment',
  description: 'Start your mineral rights journey with Miller Energy Group. Educational consultations, transparent valuations, and no-pressure guidance for land owners considering mineral rights sales.',
  keywords: 'mineral rights consultation, land owner mineral rights, mineral rights education, Colorado mineral rights, Wyoming mineral rights, New Mexico mineral rights, North Dakota mineral rights, Montana mineral rights, mineral rights assessment, mineral rights valuation',
  openGraph: {
    title: 'Contact Miller Energy Group - Mineral Rights Education & Assessment',
    description: 'Start your mineral rights journey with educational consultations, transparent valuations, and no-pressure guidance for land owners.',
    type: 'website',
    url: 'https://millerenergygroup.com/contact',
    siteName: 'Miller Energy Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Miller Energy Group - Mineral Rights Education',
    description: 'Start your mineral rights journey with educational consultations and transparent valuations for land owners.',
  },
  alternates: {
    canonical: 'https://millerenergygroup.com/contact',
  },
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
            <PageIntro eyebrow="Understanding Your Mineral Rights" title="Start Your Mineral Rights Journey">
              <p>Selling mineral rights is a significant decision that affects your family's future. We provide educational consultations, transparent valuations, and no-pressure guidance to help you understand your options and make informed decisions about your mineral rights.</p>
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
