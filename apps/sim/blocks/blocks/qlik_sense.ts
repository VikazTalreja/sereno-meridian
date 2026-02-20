import { QlikSenseIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const QlikSenseBlock: BlockConfig = {
    type: 'qlik_sense',
    name: 'Qlik Sense',
    description: 'Trigger workflows from Qlik Sense events.',
    category: 'triggers',
    icon: QlikSenseIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/qlik-sense',
    triggerAllowed: true,
    subBlocks: [...getTrigger('qlik_sense_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['qlik_sense_webhook'],
    },
}
