import { HoneywellDCSIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const honeywellDCSWebhookTrigger: TriggerConfig = {
  id: 'honeywell_dcs_webhook',
  name: 'Honeywell DCS',
  provider: 'honeywell_dcs',
  description: 'Trigger workflow from Honeywell Distributed Control System events',
  version: '1.0.0',
  icon: HoneywellDCSIcon,
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
      triggerId: 'honeywell_dcs_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
