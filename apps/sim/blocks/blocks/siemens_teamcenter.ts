import { SiemensTeamcenterIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const SiemensTeamcenterBlock: BlockConfig = {
    type: 'siemens_teamcenter',
    name: 'Siemens Teamcenter',
    description: 'Trigger workflows from Siemens Teamcenter events.',
    category: 'triggers',
    icon: SiemensTeamcenterIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/siemens-teamcenter',
    triggerAllowed: true,
    subBlocks: [...getTrigger('siemens_teamcenter_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['siemens_teamcenter_webhook'],
    },
}
