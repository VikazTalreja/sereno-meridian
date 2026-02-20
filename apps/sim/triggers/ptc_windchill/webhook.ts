import { PTCWindchillIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const ptcWindchillWebhookTrigger: TriggerConfig = {
  id: 'ptc_windchill_webhook',
  name: 'PTC Windchill',
  provider: 'ptc_windchill',
  description: 'Trigger workflow from PTC Windchill PLM events',
  version: '1.0.0',
  icon: PTCWindchillIcon,
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
      triggerId: 'ptc_windchill_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
