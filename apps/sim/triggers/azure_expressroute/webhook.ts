import { AzureExpressRouteIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const azureExpressRouteWebhookTrigger: TriggerConfig = {
  id: 'azure_expressroute_webhook',
  name: 'Azure ExpressRoute',
  provider: 'azure_expressroute',
  description: 'Trigger workflow from Azure ExpressRoute circuit events',
  version: '1.0.0',
  icon: AzureExpressRouteIcon,
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
      triggerId: 'azure_expressroute_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
