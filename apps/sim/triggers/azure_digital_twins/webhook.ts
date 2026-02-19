import { AzureDigitalTwinsIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const azureDigitalTwinsWebhookTrigger: TriggerConfig = {
  id: 'azure_digital_twins_webhook',
  name: 'Azure Digital Twins',
  provider: 'azure_digital_twins',
  description: 'Trigger workflow from Azure Digital Twins model events',
  version: '1.0.0',
  icon: AzureDigitalTwinsIcon,
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
      triggerId: 'azure_digital_twins_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
