import type { Metadata } from 'next'
import ChangelogContent from '@/app/changelog/components/changelog-content'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Stay up-to-date with the latest features, improvements, and bug fixes in Sereno Meridian.',
  openGraph: {
    title: 'Changelog',
    description: 'Stay up-to-date with the latest features, improvements, and bug fixes in Sereno Meridian.',
    type: 'website',
  },
}

export default function ChangelogPage() {
  return <ChangelogContent />
}
