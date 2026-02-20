import { AzureKubernetesServiceIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const azureKubernetesServiceWebhookTrigger: TriggerConfig = {
  id: 'azure_kubernetes_service_webhook',
  name: 'Azure Kubernetes Service',
  provider: 'azure_kubernetes_service',
  description: 'Trigger workflow from Azure Kubernetes Service events',
  version: '1.0.0',
  icon: AzureKubernetesServiceIcon,
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
      triggerId: 'azure_kubernetes_service_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
