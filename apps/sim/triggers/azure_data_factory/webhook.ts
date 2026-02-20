import { AzureDataFactoryIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const azureDataFactoryWebhookTrigger: TriggerConfig = {
  id: 'azure_data_factory_webhook',
  name: 'Azure Data Factory',
  provider: 'azure_data_factory',
  description: 'Trigger workflow from Azure Data Factory pipeline events',
  version: '1.0.0',
  icon: AzureDataFactoryIcon,
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
      triggerId: 'azure_data_factory_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
