import { QlikSenseIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const qlikSenseWebhookTrigger: TriggerConfig = {
  id: 'qlik_sense_webhook',
  name: 'Qlik Sense',
  provider: 'qlik_sense',
  description: 'Trigger workflow from Qlik Sense analytics events',
  version: '1.0.0',
  icon: QlikSenseIcon,
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
      triggerId: 'qlik_sense_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
