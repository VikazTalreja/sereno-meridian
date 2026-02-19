import { SAPAribaIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const sapAribaWebhookTrigger: TriggerConfig = {
  id: 'sap_ariba_webhook',
  name: 'SAP Ariba',
  provider: 'sap_ariba',
  description: 'Trigger workflow from SAP Ariba procurement events',
  version: '1.0.0',
  icon: SAPAribaIcon,
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
      triggerId: 'sap_ariba_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
