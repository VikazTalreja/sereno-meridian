import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/' aria-label='Sereno Meridian home'>
      <Image
        src='/logo/Sereno_Logo.png'
        alt='Sereno Meridian - Workflows for LLMs'
        width={49.78314}
        height={24.276}
        priority
        quality={90}
      />
    </Link>
  )
}
