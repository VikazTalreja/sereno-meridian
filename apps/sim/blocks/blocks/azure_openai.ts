import { AzureOpenAIIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const AzureOpenAIBlock: BlockConfig = {
    type: 'azure_openai',
    name: 'Azure OpenAI',
    description: 'Trigger workflows from Azure OpenAI events.',
    category: 'triggers',
    icon: AzureOpenAIIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/azure-openai',
    triggerAllowed: true,
    subBlocks: [...getTrigger('azure_openai_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['azure_openai_webhook'],
    },
}
