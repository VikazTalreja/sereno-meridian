import { AzureIoTHubIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const azureIoTHubWebhookTrigger: TriggerConfig = {
  id: 'azure_iot_hub_webhook',
  name: 'Azure IoT Hub',
  provider: 'azure_iot_hub',
  description: 'Trigger workflow from Azure IoT Hub device events',
  version: '1.0.0',
  icon: AzureIoTHubIcon,
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
      triggerId: 'azure_iot_hub_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
