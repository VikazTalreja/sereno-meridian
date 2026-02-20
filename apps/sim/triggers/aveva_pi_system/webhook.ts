import { AVEVAPISystemIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const avevaPISystemWebhookTrigger: TriggerConfig = {
  id: 'aveva_pi_system_webhook',
  name: 'AVEVA PI System',
  provider: 'aveva_pi_system',
  description: 'Trigger workflow from AVEVA PI System industrial data events',
  version: '1.0.0',
  icon: AVEVAPISystemIcon,
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
      triggerId: 'aveva_pi_system_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
