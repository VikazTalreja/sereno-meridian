import { IBMMaximoIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const ibmMaximoWebhookTrigger: TriggerConfig = {
  id: 'ibm_maximo_webhook',
  name: 'IBM Maximo',
  provider: 'ibm_maximo',
  description: 'Trigger workflow from IBM Maximo asset management events',
  version: '1.0.0',
  icon: IBMMaximoIcon,
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
      triggerId: 'ibm_maximo_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
