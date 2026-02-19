import { AzureAISearchIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const AzureAISearchBlock: BlockConfig = {
    type: 'azure_ai_search',
    name: 'Azure AI Search',
    description: 'Trigger workflows from Azure AI Search events.',
    category: 'triggers',
    icon: AzureAISearchIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/azure-ai-search',
    triggerAllowed: true,
    subBlocks: [...getTrigger('azure_ai_search_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['azure_ai_search_webhook'],
    },
}
