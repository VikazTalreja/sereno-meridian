import { SAPAribaIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const SAPAribaBlock: BlockConfig = {
    type: 'sap_ariba',
    name: 'SAP Ariba',
    description: 'Trigger workflows from SAP Ariba events.',
    category: 'triggers',
    icon: SAPAribaIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/sap-ariba',
    triggerAllowed: true,
    subBlocks: [...getTrigger('sap_ariba_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['sap_ariba_webhook'],
    },
}
