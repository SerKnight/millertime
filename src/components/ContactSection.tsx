import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Offices } from '@/components/Offices'
import Image from 'next/image'
import fieldImage from '@/images/backgrounds/field-2.jpg'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={fieldImage}
            alt="Oil and gas field with infrastructure"
            fill
            className="object-cover opacity-20"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary/60" />
        </div>
        
        <div className="relative px-6 py-20 sm:px-12 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
                    Understanding Your Mineral Rights
                  </h2>
                  <p className="mt-4 text-lg text-neutral-200 leading-relaxed">
                    Selling mineral rights is a significant decision that affects your family's future. 
                    We believe in transparent, educational conversations that help you understand all 
                    your options before making any commitments.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent text-sm font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Educational Consultation</h3>
                      <p className="text-neutral-300 text-sm mt-1">
                        Learn about your mineral rights, current market conditions, and what factors influence valuation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent text-sm font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Transparent Valuation</h3>
                      <p className="text-neutral-300 text-sm mt-1">
                        Receive a detailed, no-obligation assessment based on current production data and market analysis.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent text-sm font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">No Pressure Partnership</h3>
                      <p className="text-neutral-300 text-sm mt-1">
                        Take your time to consider all options. We're here to provide guidance, not pressure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    href="/contact" 
                    invert 
                    className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-black font-semibold transition-all duration-200"
                  >
                    Start the Conversation
                  </Button>
                  <p className="text-sm text-neutral-400">
                    No obligation • Confidential • 5th generation Coloradans
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="font-display text-xl font-semibold text-white mb-4">
                    Ready to Learn More?
                  </h3>
                  <p className="text-neutral-200 text-sm mb-6">
                    Schedule a confidential conversation to understand your mineral rights and explore your options.
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href="tel:+17203186907"
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent">📞</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">(720) 318-6907</p>
                        <p className="text-sm text-neutral-300">Call anytime</p>
                      </div>
                    </a>

                    <a
                      href="mailto:Info@Millerenergygroup.com"
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent">✉️</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Info@Millerenergygroup.com</p>
                        <p className="text-sm text-neutral-300">Email us</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-semibold text-white mb-4">Our Office</h4>
                  <Offices
                    invert
                    className="text-neutral-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
