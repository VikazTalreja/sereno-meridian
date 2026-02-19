import { SalesforceSalesCloudIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const SalesforceSalesCloudBlock: BlockConfig = {
    type: 'salesforce_sales_cloud',
    name: 'Salesforce Sales Cloud',
    description: 'Trigger workflows from Salesforce Sales Cloud events.',
    category: 'triggers',
    icon: SalesforceSalesCloudIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/salesforce-sales-cloud',
    triggerAllowed: true,
    subBlocks: [...getTrigger('salesforce_sales_cloud_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['salesforce_sales_cloud_webhook'],
    },
}
