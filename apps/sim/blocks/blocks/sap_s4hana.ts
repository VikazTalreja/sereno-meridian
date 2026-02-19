import { SAPS4HANAIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const SAPS4HANABlock: BlockConfig = {
    type: 'sap_s4hana',
    name: 'SAP S/4HANA',
    description: 'Trigger workflows from SAP S/4HANA events.',
    category: 'triggers',
    icon: SAPS4HANAIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/sap-s4hana',
    triggerAllowed: true,
    subBlocks: [...getTrigger('sap_s4hana_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['sap_s4hana_webhook'],
    },
}
