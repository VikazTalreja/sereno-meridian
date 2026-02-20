import { AzureOpenAIIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const azureOpenAIWebhookTrigger: TriggerConfig = {
  id: 'azure_openai_webhook',
  name: 'Azure OpenAI',
  provider: 'azure_openai',
  description: 'Trigger workflow from Azure OpenAI service events',
  version: '1.0.0',
  icon: AzureOpenAIIcon,
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
      triggerId: 'azure_openai_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
