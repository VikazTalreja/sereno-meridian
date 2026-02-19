import { SalesforceMarketingCloudIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const SalesforceMarketingCloudBlock: BlockConfig = {
    type: 'salesforce_marketing_cloud',
    name: 'Salesforce Marketing Cloud',
    description: 'Trigger workflows from Salesforce Marketing Cloud events.',
    category: 'triggers',
    icon: SalesforceMarketingCloudIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/salesforce-marketing-cloud',
    triggerAllowed: true,
    subBlocks: [...getTrigger('salesforce_marketing_cloud_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['salesforce_marketing_cloud_webhook'],
    },
}
