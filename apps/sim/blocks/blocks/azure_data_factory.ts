import { AzureDataFactoryIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const AzureDataFactoryBlock: BlockConfig = {
    type: 'azure_data_factory',
    name: 'Azure Data Factory',
    description: 'Trigger workflows from Azure Data Factory events.',
    category: 'triggers',
    icon: AzureDataFactoryIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/azure-data-factory',
    triggerAllowed: true,
    subBlocks: [...getTrigger('azure_data_factory_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['azure_data_factory_webhook'],
    },
}
