export interface User {
  id: string
  email: string
  name?: string | null
  image?: string | null
  emailVerified?: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface Agent {
  id: string
  name: string
  description: string
  type: AgentType
  status: AgentStatus
  apiKey?: string
  endpoint?: string
  userId: string
  createdAt: Date
  updatedAt: Date
  lastActiveAt?: Date | null
  config?: Record<string, any>
}

export enum AgentType {
  CHATGPT = 'chatgpt',
  CLAUDE = 'claude',
  BARD = 'bard',
  CUSTOM = 'custom',
  ZAPIER = 'zapier',
  MAKE = 'make',
  N8N = 'n8n',
}

export enum AgentStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ERROR = 'error',
  CONNECTING = 'connecting',
}

export interface AgentConnection {
  id: string
  agentId: string
  connectedAgentId: string
  workflow?: Record<string, any>
  createdAt: Date
  updatedAt: Date
}

export interface PricingTier {
  name: string
  price: number
  description: string
  features: string[]
  highlighted?: boolean
  ctaText: string
  ctaLink: string
}