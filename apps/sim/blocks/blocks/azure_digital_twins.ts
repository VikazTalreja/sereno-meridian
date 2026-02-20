import { AzureDigitalTwinsIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const AzureDigitalTwinsBlock: BlockConfig = {
    type: 'azure_digital_twins',
    name: 'Azure Digital Twins',
    description: 'Trigger workflows from Azure Digital Twins events.',
    category: 'triggers',
    icon: AzureDigitalTwinsIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/azure-digital-twins',
    triggerAllowed: true,
    subBlocks: [...getTrigger('azure_digital_twins_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['azure_digital_twins_webhook'],
    },
}
