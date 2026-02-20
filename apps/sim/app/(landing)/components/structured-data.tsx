export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': '/#organization',
        name: 'Sereno Meridian',
        alternateName: 'Sereno Meridian',
        description:
          'Open-source AI agent workflow builder used by developers at trail-blazing startups to Fortune 500 companies',
        url: '/',
        logo: {
          '@type': 'ImageObject',
          '@id': '/#logo',
          url: '/logo/Sereno_Logo.png',
          contentUrl: '/logo/Sereno_Logo.png',
          width: 49.78314,
          height: 24.276,
          caption: 'Sereno Meridian Logo',
        },
        image: { '@id': '/#logo' },
        sameAs: [],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          availableLanguage: ['en'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': '/#website',
        url: '/',
        name: 'Sereno Meridian - AI Agent Workflow Builder',
        description:
          'Open-source AI agent workflow builder. 60,000+ developers build and deploy agentic workflows. SOC2 and HIPAA compliant.',
        publisher: {
          '@id': '/#organization',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': '/#webpage',
        url: '/',
        name: 'Sereno Meridian - Workflows for LLMs | Build AI Agent Workflows',
        isPartOf: {
          '@id': '/#website',
        },
        about: {
          '@id': '/#software',
        },
        datePublished: '2024-01-01T00:00:00+00:00',
        dateModified: new Date().toISOString(),
        description:
          'Build and deploy AI agent workflows with Sereno Meridian. Visual drag-and-drop interface for creating powerful LLM-powered automations.',
        breadcrumb: {
          '@id': '/#breadcrumb',
        },
        inLanguage: 'en-US',
        potentialAction: [
          {
            '@type': 'ReadAction',
            target: ['https://sim.ai'],
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': '/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: '/',
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': '/#software',
        name: 'Sereno Meridian - AI Agent Workflow Builder',
        description:
          'Open-source AI agent workflow builder used by 60,000+ developers. Build agentic workflows with visual drag-and-drop interface. SOC2 and HIPAA compliant. Integrate with 100+ apps.',
        applicationCategory: 'DeveloperApplication',
        applicationSubCategory: 'AI Development Tools',
        operatingSystem: 'Web, Windows, macOS, Linux',
        softwareVersion: '1.0',
        offers: [
          {
            '@type': 'Offer',
            '@id': '/#offer-free',
            name: 'Community Plan',
            price: '0',
            priceCurrency: 'USD',
            priceValidUntil: '2026-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
              '@id': '/#organization',
            },
            eligibleRegion: {
              '@type': 'Place',
              name: 'Worldwide',
            },
          },
          {
            '@type': 'Offer',
            '@id': '/#offer-pro',
            name: 'Pro Plan',
            price: '20',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '20',
              priceCurrency: 'USD',
              unitText: 'MONTH',
              billingIncrement: 1,
            },
            priceValidUntil: '2026-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
              '@id': '/#organization',
            },
          },
          {
            '@type': 'Offer',
            '@id': '/#offer-team',
            name: 'Team Plan',
            price: '40',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: '40',
              priceCurrency: 'USD',
              unitText: 'MONTH',
              billingIncrement: 1,
            },
            priceValidUntil: '2026-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability: 'https://schema.org/InStock',
            seller: {
              '@id': '/#organization',
            },
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '150',
          bestRating: '5',
          worstRating: '1',
        },
        featureList: [
          'Visual workflow builder',
          'Drag-and-drop interface',
          '100+ integrations',
          'AI model support (OpenAI, Anthropic, Google, xAI, Mistral, Perplexity)',
          'Real-time collaboration',
          'Version control',
          'API access',
          'Custom functions',
          'Scheduled workflows',
          'Event triggers',
        ],
        screenshot: [
          {
            '@type': 'ImageObject',
            url: '/logo/Sereno_Logo.png',
            caption: 'Sereno Meridian AI agent workflow builder interface',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': '/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Sereno Meridian?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sereno Meridian is an open-source AI agent workflow builder used by 60,000+ developers at trail-blazing startups to Fortune 500 companies. It provides a visual drag-and-drop interface for building and deploying agentic workflows. Sereno Meridian is SOC2 and HIPAA compliant.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which AI models does Sereno Meridian support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sereno Meridian supports all major AI models including OpenAI (GPT-5, GPT-4o), Anthropic (Claude), Google (Gemini), xAI (Grok), Mistral, Perplexity, and many more. You can also connect to open-source models via Ollama.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need coding skills to use Sereno Meridian?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No coding skills are required! Sereno Meridian features a visual drag-and-drop interface that makes it easy to build AI workflows. However, developers can also use custom functions and our API for advanced use cases.',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
