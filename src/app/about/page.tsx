import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageJeffMiller from '@/images/team/jeff-miller-founder.jpeg'
import imageCharlieMatthews from '@/images/team/charlie-matthews.jpeg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import imageAbout from '@/images/backgrounds/About.jpg'
import imageDenver from '@/images/backgrounds/denver.jpg'
import imagePartner1 from '@/images/clients/partner-1.png'
import imagePartner2 from '@/images/clients/partner-2.png'
import imagePartner3 from '@/images/clients/partner-3.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Values() {
  return (
    <div className="mt-16 sm:mt-24 lg:mt-32 rounded-4xl bg-primary py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageDenver}
          alt="Denver skyline"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Transparency, fairness and integrity in everything we do."
        invert
      >
        <p>
          We do our work with transparency, fairness and integrity because we value our relationships with the communities where we live, work and serve.
        </p>
      </SectionIntro>
      <Container className="mt-16 relative">
        <GridList>
          <GridListItem title="Transparency" invert>
            We are 100% transparent with you every step of the way when selling to Miller Energy Group. We explain the process and guide you through decision-making.
          </GridListItem>
          <GridListItem title="Fairness" invert>
            We work to get the best price possible for your property and ensure you feel good about the decision you make and the deal you get for your mineral rights.
          </GridListItem>
          <GridListItem title="Integrity" invert>
            Integrity matters as much as having deep expertise of the industry. We want you to be as comfortable selling to us as we are buying from you.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function IndustryAssociations() {
  const associations = [
    { name: 'Industry Association 1', logo: imagePartner1 },
    { name: 'Industry Association 2', logo: imagePartner2 },
    { name: 'Industry Association 3', logo: imagePartner3 },
  ]

  return (
    <Container className="mt-16 sm:mt-24 lg:mt-32">
      <FadeIn>
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-primary mb-6">
            Industry Associations & Certifications
          </h2>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
            Miller Energy Group is proud to be associated with leading industry organizations that uphold the highest standards in mineral rights acquisition and land management.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {associations.map((association, index) => (
            <FadeIn key={index} className="flex justify-center">
              <div className="flex items-center justify-center h-24 w-48 bg-neutral-50 rounded-lg p-4">
                <Image
                  src={association.logo}
                  alt={association.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-16"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Container>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Jeff Miller',
        role: 'Founder',
        image: { src: imageJeffMiller },
        bio: 'Jeffrey Miller is a fifth-generation Coloradan who is committed to fairness, integrity and good stewardship when it comes to mineral rights. He is an experienced oil & gas professional with a particular focus on helping landowners and oil & gas companies negotiate agreements that provide value for both parties.',
        experience: 'Jeff has led transactions in the midstream pipeline sector, and leasing or purchasing mineral rights for over 100,000 acres of land.',
        education: 'After finishing college at the University of Oregon, Jeff returned to Colorado to live and work in the state he loves.',
        background: 'Before starting Miller Energy Group, Jeff worked with James C. Karo Associates and Lincoln Energy Partners in Colorado. In these roles, he mastered the crafts of oil & gas leasing, right-of-way/easement leasing, pipeline construction, contract work, and project negotiation in Colorado, Wyoming, New Mexico, North Dakota, Texas, Mississippi and Oklahoma.',
        community: 'Jeff has volunteered with Jewish Family Services and is currently on the board of The Bridge Project at the University of Denver, which provides learning and leadership opportunities to Denver youth from kindergarten to college.',
        personal: 'As an avid sports fan in Denver, Jeff supports the Denver Broncos, the Colorado Avalanche, the Colorado Rockies and the Denver Nuggets through good times and bad. As an alum of the University of Oregon, he\'s also a fan of the Oregon Ducks teams. To relax, Jeff enjoys golf, being with friends and family, and a good whiskey.'
      },
      {
        name: 'Charlie Matthews',
        role: 'Landman',
        image: { src: imageCharlieMatthews },
        bio: 'Charlie Matthews brings extensive experience in land management and mineral rights evaluation to Miller Energy Group.',
        experience: 'Charlie has worked in the Rocky Mountain region for over 15 years, specializing in mineral rights acquisition and land title research.',
        education: 'Charlie holds a degree in Land Management from Colorado State University.',
        background: 'Before joining Miller Energy Group, Charlie worked with several oil and gas companies in Colorado and Wyoming, developing expertise in mineral rights evaluation and land acquisition.',
        community: 'Charlie is active in the local landman community and serves as a mentor to new professionals entering the field.',
        personal: 'When not working, Charlie enjoys hiking in the Rocky Mountains and spending time with his family.'
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-16 sm:mt-24 lg:mt-32">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 sm:gap-8 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-primary">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  {group.people.map((person) => (
                    <FadeIn key={person.name}>
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-1">
                          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                            <Image
                              alt=""
                              {...person.image}
                              className="h-80 sm:h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                              <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                {person.name}
                              </p>
                              <p className="mt-2 text-sm text-white">
                                {person.role}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-2 space-y-6">
                          <div>
                            <p className="text-base text-neutral-600">{person.bio}</p>
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-semibold text-primary">Experience</h3>
                            <p className="mt-2 text-base text-neutral-600">{person.experience}</p>
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-semibold text-primary">Background</h3>
                            <p className="mt-2 text-base text-neutral-600">{person.background}</p>
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-semibold text-primary">Community Involvement</h3>
                            <p className="mt-2 text-base text-neutral-600">{person.community}</p>
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-semibold text-primary">Personal</h3>
                            <p className="mt-2 text-base text-neutral-600">{person.personal}</p>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Miller Energy Group',
  description:
    'Miller Energy Group is an independent mineral rights broker and investment group based in Denver, Colorado with deep roots in the Rocky Mountain West.',
}

export default async function About() {
  return (
    <RootLayout>
      <PageIntro eyebrow="About Miller Energy Group" title="Our strength is our Rocky Mountain heritage">
        <p>
          Miller Energy Group is an independent mineral rights broker and investment group based in Denver, Colorado. We have experience working with many clients interested in selling oil and gas rights throughout Colorado, Wyoming, New Mexico, North Dakota, and Montana.
        </p>
        <div className="mt-10 max-w-2xl space-y-4 text-base">
          <p>
            The Rocky Mountains have been home to our family for many generations, so we value the land and its people. We do our work with transparency, fairness and integrity because we value our relationships with the communities where we live, work and serve.
          </p>
          <p>
            Miller Energy Group is led by a fifth-generation Coloradan, who has the best interests of the people and land in the Rocky Mountain West at heart. For us, integrity matters as much as having deep expertise of the industry.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-12 sm:mt-16">
        <StatList>
          <StatListItem value="5th" label="Generation Coloradan" />
          <StatListItem value="100,000+" label="Acres handled" />
          <StatListItem value="5" label="States served" />
        </StatList>
      </Container>

      <Values />

      <Team />

      <IndustryAssociations />

      <ContactSection />
    </RootLayout>
  )
}
