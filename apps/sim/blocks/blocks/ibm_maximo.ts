import { IBMMaximoIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const IBMMaximoBlock: BlockConfig = {
    type: 'ibm_maximo',
    name: 'IBM Maximo',
    description: 'Trigger workflows from IBM Maximo events.',
    category: 'triggers',
    icon: IBMMaximoIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/ibm-maximo',
    triggerAllowed: true,
    subBlocks: [...getTrigger('ibm_maximo_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['ibm_maximo_webhook'],
    },
}
