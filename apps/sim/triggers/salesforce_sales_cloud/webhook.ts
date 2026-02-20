import { SalesforceSalesCloudIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const salesforceSalesCloudWebhookTrigger: TriggerConfig = {
  id: 'salesforce_sales_cloud_webhook',
  name: 'Salesforce Sales Cloud',
  provider: 'salesforce_sales_cloud',
  description: 'Trigger workflow from Salesforce Sales Cloud events',
  version: '1.0.0',
  icon: SalesforceSalesCloudIcon,
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
      triggerId: 'salesforce_sales_cloud_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
