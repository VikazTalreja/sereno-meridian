import { SAPS4HANAIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const sapS4HANAWebhookTrigger: TriggerConfig = {
  id: 'sap_s4hana_webhook',
  name: 'SAP S/4HANA',
  provider: 'sap_s4hana',
  description: 'Trigger workflow from SAP S/4HANA ERP events',
  version: '1.0.0',
  icon: SAPS4HANAIcon,
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
      triggerId: 'sap_s4hana_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
