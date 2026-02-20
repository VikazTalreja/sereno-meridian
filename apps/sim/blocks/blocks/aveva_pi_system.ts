import { AVEVAPISystemIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const AvevaPISystemBlock: BlockConfig = {
    type: 'aveva_pi_system',
    name: 'AVEVA PI System',
    description: 'Trigger workflows from AVEVA PI System events.',
    category: 'triggers',
    icon: AVEVAPISystemIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/aveva-pi-system',
    triggerAllowed: true,
    subBlocks: [...getTrigger('aveva_pi_system_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['aveva_pi_system_webhook'],
    },
}
