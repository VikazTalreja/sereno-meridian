import { OracleFinancialsCloudIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const oracleFinancialsCloudWebhookTrigger: TriggerConfig = {
  id: 'oracle_financials_cloud_webhook',
  name: 'Oracle Financials Cloud',
  provider: 'oracle_financials_cloud',
  description: 'Trigger workflow from Oracle Financials Cloud events',
  version: '1.0.0',
  icon: OracleFinancialsCloudIcon,
  subBlocks: [
    {
      id: 'webhookUrlDisplay',
      title: 'Webhook URL',
      type: 'short-input',
      readOnly: true,
      showCopyButton: true,
      useWebhookUrl: true,
      placeholder: 'Webhook URL will be generated',
      mode: 'trigger',
    },
    {
      id: 'triggerSave',
      title: '',
      type: 'trigger-save',
      hideFromPreview: true,
      mode: 'trigger',
      triggerId: 'oracle_financials_cloud_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
