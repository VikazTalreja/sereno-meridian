import { AzureExpressRouteIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const AzureExpressRouteBlock: BlockConfig = {
    type: 'azure_expressroute',
    name: 'Azure ExpressRoute',
    description: 'Trigger workflows from Azure ExpressRoute events.',
    category: 'triggers',
    icon: AzureExpressRouteIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/azure-expressroute',
    triggerAllowed: true,
    subBlocks: [...getTrigger('azure_expressroute_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['azure_expressroute_webhook'],
    },
}
