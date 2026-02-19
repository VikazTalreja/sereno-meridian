import { SiemensTeamcenterIcon } from '@/components/icons'
import type { TriggerConfig } from '@/triggers/types'

export const siemensTeamcenterWebhookTrigger: TriggerConfig = {
  id: 'siemens_teamcenter_webhook',
  name: 'Siemens Teamcenter',
  provider: 'siemens_teamcenter',
  description: 'Trigger workflow from Siemens Teamcenter PLM events',
  version: '1.0.0',
  icon: SiemensTeamcenterIcon,
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
      triggerId: 'siemens_teamcenter_webhook',
    },
  ],
  outputs: {
    event: { type: 'string', description: 'Event type' },
    payload: { type: 'string', description: 'Event payload' },
  },
  webhook: { method: 'POST' },
}
