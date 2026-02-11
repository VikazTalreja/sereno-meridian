import { Footer, Nav } from '@/app/(landing)/components'

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sereno Meridian',
    url: '/',
    logo: '/logo/Sereno_Logo.png',
    sameAs: [],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sereno Meridian',
    url: '/',
    // SearchAction removed to avoid hard-coded Sim search URL
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Nav hideAuthButtons={false} variant='landing' />
      <main className='relative flex-1'>{children}</main>
      <Footer fullWidth={true} />
    </div>
  )
}
