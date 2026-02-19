import { PTCWindchillIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const PTCWindchillBlock: BlockConfig = {
    type: 'ptc_windchill',
    name: 'PTC Windchill',
    description: 'Trigger workflows from PTC Windchill events.',
    category: 'triggers',
    icon: PTCWindchillIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/ptc-windchill',
    triggerAllowed: true,
    subBlocks: [...getTrigger('ptc_windchill_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['ptc_windchill_webhook'],
    },
}
