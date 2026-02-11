'use client'

import Image from 'next/image'
import { useBrandConfig } from '@/lib/branding/branding'
import { inter } from '@/app/_styles/fonts/inter/inter'

interface ChatHeaderProps {
  chatConfig: {
    title?: string
    customizations?: {
      headerText?: string
      logoUrl?: string
      imageUrl?: string
      primaryColor?: string
    }
  } | null
  starCount: string
}

export function ChatHeader({ chatConfig }: ChatHeaderProps) {
  const brand = useBrandConfig()
  const primaryColor = chatConfig?.customizations?.primaryColor || 'var(--brand-primary-hex)'
  const customImage = chatConfig?.customizations?.imageUrl || chatConfig?.customizations?.logoUrl

  return (
    <nav
      aria-label='Chat navigation'
      className={`flex w-full items-center justify-between px-4 pt-[12px] pb-[21px] sm:px-8 sm:pt-[8.5px] md:px-[44px] md:pt-[16px]`}
    >
      <div className='flex items-center gap-[34px]'>
        <div className='flex items-center gap-3'>
          {customImage && (
            <Image
              src={customImage}
              alt={`${chatConfig?.title || 'Chat'} logo`}
              width={24}
              height={24}
              unoptimized
              className='h-6 w-6 rounded-md object-cover'
            />
          )}
          <h2 className={`${inter.className} font-medium text-[18px] text-foreground`}>
            {chatConfig?.customizations?.headerText || chatConfig?.title || 'Chat'}
          </h2>
        </div>
      </div>

      {!brand.logoUrl && (
        <div className='flex items-center gap-[16px]'>
          {/* Only show Sereno Meridian logo if no custom branding is set */}
          <div aria-label='Sereno Meridian'>
            <Image
              src='/logo/Sereno_Logo.png'
              alt='Sereno Meridian - Workflows for LLMs'
              width={29.869884}
              height={14.5656}
              className='h-[14.5656px] w-auto pb-[1px]'
              priority
              loading='eager'
              quality={100}
            />
          </div>
        </div>
      )}
    </nav>
  )
}
