import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}

export const metadata = {
  title: {
    default: 'Documentation - Visual Workflow Builder for AI Applications',
    template: '%s',
  },
  description:
    'Comprehensive documentation for the visual workflow builder for AI applications. Create powerful AI agents, automation workflows, and data processing pipelines by connecting blocks on a canvas—no coding required.',
  keywords: [
    'AI workflow builder',
    'visual workflow editor',
    'AI automation',
    'workflow automation',
    'AI agents',
    'no-code AI',
    'drag and drop workflows',
    'AI integrations',
    'workflow canvas',
    'AI Agent Workflow Builder',
    'workflow orchestration',
    'agent builder',
    'AI workflow automation',
    'visual programming',
  ],
  authors: [{ name: 'Documentation Team' }],
  creator: 'Sereno Meridian',
  publisher: 'Sereno Meridian',
  category: 'Developer Tools',
  classification: 'Developer Documentation',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Documentation',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES', 'fr_FR', 'de_DE', 'ja_JP', 'zh_CN'],
    url: '/',
    siteName: 'Documentation',
    title: 'Documentation - Visual Workflow Builder for AI Applications',
    description:
      'Comprehensive documentation for the visual workflow builder for AI applications. Create powerful AI agents, automation workflows, and data processing pipelines.',
    images: [
      {
        url: '/api/og?title=Documentation',
        width: 1200,
        height: 630,
        alt: 'Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation - Visual Workflow Builder for AI Applications',
    description:
      'Comprehensive documentation for the visual workflow builder for AI applications.',
    images: ['/api/og?title=Documentation'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {},
}
