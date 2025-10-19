import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageField2 from '@/images/backgrounds/field-2.jpg'
import imageField3 from '@/images/backgrounds/field-3.jpg'
import imageLand from '@/images/backgrounds/land.jpg'
import { RootLayout } from '@/components/RootLayout'

function ProfessionalSection({
  title,
  subtitle,
  children,
  image,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
  image?: React.ComponentPropsWithoutRef<typeof StylizedImage>
}) {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="w-full">
          <h2 className="font-display text-3xl font-semibold text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 mb-8">
              {subtitle}
            </p>
          )}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
          {image && (
            <div className="flex justify-center mt-12">
              <StylizedImage
                {...image}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="w-full max-w-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function MineralRightsOverview() {
  return (
    <ProfessionalSection
      title="Understanding Mineral Rights Transactions"
      subtitle="Professional mineral rights acquisition with legal expertise and industry knowledge"
      image={{ src: imageLand }}
    >
      <div className="space-y-6">
        <p className="text-neutral-700">
          Mineral rights represent subsurface property interests that grant the holder the legal right to extract oil, gas, and other minerals from beneath the surface of the land. These rights can be severed from surface ownership and transferred independently.
        </p>
        <p className="text-neutral-700">
          As experienced landmen and mineral rights professionals, we understand the complexities of mineral ownership, title research, and the legal framework governing mineral rights transactions in the Rocky Mountain region.
        </p>
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h3 className="font-display text-lg font-semibold text-primary mb-3">
            Key Legal Considerations
          </h3>
          <ul className="space-y-2 text-neutral-700">
            <li>• Title verification and chain of title analysis</li>
            <li>• State-specific mineral rights laws and regulations</li>
            <li>• Tax implications of mineral rights transactions</li>
            <li>• Estate planning and inheritance considerations</li>
            <li>• Environmental and regulatory compliance</li>
          </ul>
        </div>
      </div>
    </ProfessionalSection>
  )
}

function ProfessionalProcess() {
  return (
    <ProfessionalSection
      title="Our Professional Acquisition Process"
      subtitle="Structured approach to mineral rights evaluation and acquisition"
      image={{ src: imageField3, shape: 1 }}
    >
      <div className="space-y-6">
        <p className="text-neutral-700">
          Our acquisition process follows industry best practices and legal requirements to ensure a transparent, professional transaction for all parties involved.
        </p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-display text-lg font-semibold text-primary mb-2">
              Initial Property Analysis
            </h3>
            <p className="text-neutral-700">
              Comprehensive evaluation of mineral rights including title research, geological assessment, and market analysis to determine fair market value.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-display text-lg font-semibold text-primary mb-2">
              Legal Documentation Review
            </h3>
            <p className="text-neutral-700">
              Thorough examination of existing leases, royalty agreements, and title documents to ensure clear ownership and identify any encumbrances.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-display text-lg font-semibold text-primary mb-2">
              Professional Valuation
            </h3>
            <p className="text-neutral-700">
              Independent assessment using industry-standard methodologies to determine fair market value based on current market conditions and property characteristics.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-display text-lg font-semibold text-primary mb-2">
              Transaction Execution
            </h3>
            <p className="text-neutral-700">
              Professional closing process with proper legal documentation, title transfer, and recording in accordance with state and local requirements.
            </p>
          </div>
        </div>
      </div>
    </ProfessionalSection>
  )
}

function ProfessionalServices() {
  return (
    <ProfessionalSection
      title="Professional Landman Services"
      subtitle="Comprehensive mineral rights consultation and acquisition services"
      image={{ src: imageField2, shape: 2 }}
    >
      <div className="space-y-6">
        <p className="text-neutral-700">
          As licensed landmen with extensive experience in mineral rights transactions, we provide professional services to mineral rights owners throughout the Rocky Mountain region.
        </p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="font-display text-lg font-semibold text-primary mb-3">
              Title Research & Analysis
            </h3>
            <p className="text-neutral-700 text-sm">
              Comprehensive title examination including chain of title verification, ownership analysis, and identification of any encumbrances or restrictions.
            </p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="font-display text-lg font-semibold text-primary mb-3">
              Mineral Rights Valuation
            </h3>
            <p className="text-neutral-700 text-sm">
              Professional appraisal services using industry-standard methodologies to determine fair market value of mineral interests.
            </p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="font-display text-lg font-semibold text-primary mb-3">
              Legal Documentation
            </h3>
            <p className="text-neutral-700 text-sm">
              Preparation and review of all necessary legal documents including deeds, assignments, and transfer documentation.
            </p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h3 className="font-display text-lg font-semibold text-primary mb-3">
              Transaction Management
            </h3>
            <p className="text-neutral-700 text-sm">
              Complete transaction oversight from initial consultation through closing and recording of documents.
            </p>
          </div>
        </div>
      </div>
    </ProfessionalSection>
  )
}

function ProfessionalContact() {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-primary mb-4">
            Professional Mineral Rights Consultation
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
            Contact our experienced landmen for a confidential consultation regarding your mineral rights. 
            We provide professional evaluation, title research, and acquisition services throughout the Rocky Mountain region.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">
                Office Location
              </h3>
              <p className="text-neutral-700 mb-2">
                1325 S. Colorado Blvd., Suite B-600
              </p>
              <p className="text-neutral-700 mb-4">
                Denver, CO 80222
              </p>
              <p className="text-sm text-neutral-600">
                Professional mineral rights consultation by appointment
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">
                Contact Information
              </h3>
              <p className="text-neutral-700 mb-2">
                Phone: (720) 318-6907
              </p>
              <p className="text-neutral-700 mb-4">
                Email: Info@Millerenergygroup.com
              </p>
              <p className="text-sm text-neutral-600">
                Licensed landmen serving the Rocky Mountain region
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Professional Mineral Rights Services',
  description:
    'Professional mineral rights acquisition and landman services. Expert evaluation, title research, and legal documentation for mineral rights transactions.',
}

export default function ProfessionalMineralRights() {
  return (
    <RootLayout>
      <PageIntro 
        eyebrow="Professional Mineral Rights Services" 
        title="Expert Mineral Rights Acquisition & Landman Services"
      >
        <p>
          Professional mineral rights consultation and acquisition services provided by experienced landmen. 
          We specialize in title research, property evaluation, and legal documentation for mineral rights transactions throughout the Rocky Mountain region.
        </p>
      </PageIntro>

      <MineralRightsOverview />
      <ProfessionalProcess />
      <ProfessionalServices />
      <ProfessionalContact />
      <ContactSection />
    </RootLayout>
  )
}
