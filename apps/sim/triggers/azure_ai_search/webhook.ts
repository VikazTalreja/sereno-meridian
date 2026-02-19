import { AzureAISearchIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const azureAISearchWebhookTrigger: TriggerConfig = {
  id: 'azure_ai_search_webhook',
  name: 'Azure AI Search',
  provider: 'azure_ai_search',
  description: 'Trigger workflow from Azure AI Search indexer events',
  version: '1.0.0',
  icon: AzureAISearchIcon,
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
      triggerId: 'azure_ai_search_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
