import { OraclePrimaveraP6Icon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const oraclePrimaveraP6WebhookTrigger: TriggerConfig = {
  id: 'oracle_primavera_p6_webhook',
  name: 'Oracle Primavera P6',
  provider: 'oracle_primavera_p6',
  description: 'Trigger workflow from Oracle Primavera P6 project management events',
  version: '1.0.0',
  icon: OraclePrimaveraP6Icon,
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
      triggerId: 'oracle_primavera_p6_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
