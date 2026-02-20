import { HoneywellDCSIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const HoneywellDCSBlock: BlockConfig = {
    type: 'honeywell_dcs',
    name: 'Honeywell DCS',
    description: 'Trigger workflows from Honeywell DCS events.',
    category: 'triggers',
    icon: HoneywellDCSIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/honeywell-dcs',
    triggerAllowed: true,
    subBlocks: [...getTrigger('honeywell_dcs_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['honeywell_dcs_webhook'],
    },
}
