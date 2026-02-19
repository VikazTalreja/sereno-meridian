import { AzureKubernetesServiceIcon } from '@/components/icons'
import type { BlockConfig } from '@/blocks/types'
import { getTrigger } from '@/triggers'

export const AzureKubernetesServiceBlock: BlockConfig = {
    type: 'azure_kubernetes_service',
    name: 'Azure Kubernetes Service',
    description: 'Trigger workflows from Azure Kubernetes Service events.',
    category: 'triggers',
    icon: AzureKubernetesServiceIcon,
    bgColor: '#FFFFFF',
    docsLink: 'https://docs.sim.ai/triggers/azure-kubernetes-service',
    triggerAllowed: true,
    subBlocks: [...getTrigger('azure_kubernetes_service_webhook').subBlocks],
    tools: { access: [] },
    inputs: {},
    outputs: {},
    triggers: {
        enabled: true,
        available: ['azure_kubernetes_service_webhook'],
    },
}
