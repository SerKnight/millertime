import Image from 'next/image'
import clsx from 'clsx'
import millerEnergyLogo from '@/images/logo/TheMillerEngergyGroup_logo.png'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <div
      className={clsx(
        'h-8 w-8 flex items-center justify-center',
        filled ? 'w-8' : 'w-8 group-hover/logo:w-8',
      )}
      {...props}
    >
      <Image
        src={millerEnergyLogo}
        alt="Miller Energy Group"
        width={32}
        height={32}
        className={clsx(
          'h-full w-full object-contain',
          invert ? 'brightness-0 invert' : ''
        )}
        priority
        quality={100}
        sizes="32px"
      />
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx(
        'flex items-center',
        fillOnHover && 'group/logo',
        className
      )}
      {...props}
    >
      <Image
        src={millerEnergyLogo}
        alt="Miller Energy Group"
        width={200}
        height={32}
        className={clsx(
          'h-8 object-contain',
          invert ? 'brightness-0 invert' : ''
        )}
        priority
        quality={100}
        sizes="(max-width: 640px) 120px, 200px"
      />
    </div>
  )
}
