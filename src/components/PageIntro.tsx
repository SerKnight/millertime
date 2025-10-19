import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
}) {
  return (
    <Container
      className={clsx('mt-12 sm:mt-16 lg:mt-20', centered && 'text-center')}
    >
      <FadeIn>
        <div className="relative">
          {/* Clean, professional overlay */}
          <div className="absolute inset-0 bg-primary/85 rounded-xl sm:rounded-2xl -m-4 sm:-m-6" />
          
          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            <h1>
              <span className="block font-display text-base font-semibold text-white uppercase tracking-wider">
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
              <span
                className={clsx(
                  'mt-6 block max-w-5xl font-display text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl xl:text-7xl',
                  centered && 'mx-auto',
                )}
              >
                {title}
              </span>
            </h1>
            <div
              className={clsx(
                'mt-8 max-w-3xl text-lg text-white/95 leading-relaxed',
                centered && 'mx-auto',
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
