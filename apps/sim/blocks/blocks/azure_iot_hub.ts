import { AzureIoTHubIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const AzureIoTHubBlock: BlockConfig = {
    type: 'azure_iot_hub',
    name: 'Azure IoT Hub',
    description: 'Trigger workflows from Azure IoT Hub events.',
    category: 'triggers',
    icon: AzureIoTHubIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/azure-iot-hub',
    triggerAllowed: true,
    subBlocks: [...getTrigger('azure_iot_hub_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['azure_iot_hub_webhook'],
    },
}
