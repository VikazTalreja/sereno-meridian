import { OracleFinancialsCloudIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const OracleFinancialsCloudBlock: BlockConfig = {
    type: 'oracle_financials_cloud',
    name: 'Oracle Financials Cloud',
    description: 'Trigger workflows from Oracle Financials Cloud events.',
    category: 'triggers',
    icon: OracleFinancialsCloudIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/oracle-financials-cloud',
    triggerAllowed: true,
    subBlocks: [...getTrigger('oracle_financials_cloud_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['oracle_financials_cloud_webhook'],
    },
}
