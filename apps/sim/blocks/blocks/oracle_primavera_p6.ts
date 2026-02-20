import { OraclePrimaveraP6Icon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const OraclePrimaveraP6Block: BlockConfig = {
    type: 'oracle_primavera_p6',
    name: 'Oracle Primavera P6',
    description: 'Trigger workflows from Oracle Primavera P6 events.',
    category: 'triggers',
    icon: OraclePrimaveraP6Icon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/oracle-primavera-p6',
    triggerAllowed: true,
    subBlocks: [...getTrigger('oracle_primavera_p6_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['oracle_primavera_p6_webhook'],
    },
}
