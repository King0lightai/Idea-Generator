"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
  Bot, 
  ArrowLeft,
  MessageSquare,
  Zap,
  Globe,
  Settings,
  Check
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const agentTypes = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI's conversational AI assistant",
    icon: MessageSquare,
    popular: true,
    capabilities: ["Conversations", "Text Generation", "Code Assistance"],
    setup: "API Key required"
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant for complex tasks",
    icon: Bot,
    popular: true,
    capabilities: ["Analysis", "Writing", "Reasoning"],
    setup: "API Key required"
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Automation platform for connecting apps",
    icon: Zap,
    popular: false,
    capabilities: ["Workflow Automation", "App Integration", "Data Transfer"],
    setup: "Webhook URL required"
  },
  {
    id: "make",
    name: "Make (Integromat)",
    description: "Visual automation platform",
    icon: Settings,
    popular: false,
    capabilities: ["Visual Workflows", "Data Processing", "API Connections"],
    setup: "Webhook URL required"
  },
  {
    id: "custom",
    name: "Custom API",
    description: "Connect your own API or service",
    icon: Globe,
    popular: false,
    capabilities: ["Custom Logic", "Internal Tools", "Third-party APIs"],
    setup: "Endpoint configuration required"
  }
]

export default function NewAgentPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const [agentData, setAgentData] = useState({
    name: "",
    description: "",
    apiKey: "",
    endpoint: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const selectedAgent = agentTypes.find(agent => agent.id === selectedType)

  const handleNext = () => {
    if (step === 1 && selectedType) {
      setStep(2)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Agent connected successfully!",
        description: `${agentData.name} has been added to your dashboard.`,
      })
      router.push("/dashboard/agents")
    }, 2000)
  }

  if (step === 1) {
    return (
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/agents">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
            <h2 className="text-3xl font-bold tracking-tight">Connect New Agent</h2>
          </div>
        </div>

        <div className="max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Choose an Agent Type</CardTitle>
              <CardDescription>
                Select the type of AI agent or service you want to connect to AgentHub.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {agentTypes.map((agent) => {
                  const Icon = agent.icon
                  return (
                    <Card 
                      key={agent.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedType === agent.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedType(agent.id)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <CardTitle className="text-base">{agent.name}</CardTitle>
                          </div>
                          {agent.popular && (
                            <Badge variant="secondary" className="text-xs">Popular</Badge>
                          )}
                        </div>
                        <CardDescription className="text-sm">
                          {agent.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground">Capabilities:</p>
                          <div className="flex flex-wrap gap-1">
                            {agent.capabilities.map((capability, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {capability}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            Setup: {agent.setup}
                          </p>
                        </div>
                        {selectedType === agent.id && (
                          <div className="mt-3 flex items-center text-primary">
                            <Check className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">Selected</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
              
              <div className="flex justify-end mt-6">
                <Button 
                  onClick={handleNext}
                  disabled={!selectedType}
                  className="min-w-[100px]"
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-3xl font-bold tracking-tight">Configure {selectedAgent?.name}</h2>
        </div>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <selectedAgent.icon className="w-6 h-6 text-primary" />
              <div>
                <CardTitle>Connect {selectedAgent?.name}</CardTitle>
                <CardDescription>
                  Configure your {selectedAgent?.name} integration
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Agent Name</Label>
                <Input
                  id="name"
                  placeholder={`My ${selectedAgent?.name} Agent`}
                  value={agentData.name}
                  onChange={(e) => setAgentData({...agentData, name: e.target.value})}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Give your agent a descriptive name
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Input
                  id="description"
                  placeholder="What will this agent be used for?"
                  value={agentData.description}
                  onChange={(e) => setAgentData({...agentData, description: e.target.value})}
                />
              </div>

              {(selectedType === "chatgpt" || selectedType === "claude") && (
                <div className="space-y-2">
                  <Label htmlFor="apiKey">API Key</Label>
                  <Input
                    id="apiKey"
                    type="password"
                    placeholder="Enter your API key"
                    value={agentData.apiKey}
                    onChange={(e) => setAgentData({...agentData, apiKey: e.target.value})}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Your API key will be encrypted and stored securely
                  </p>
                </div>
              )}

              {(selectedType === "zapier" || selectedType === "make" || selectedType === "custom") && (
                <div className="space-y-2">
                  <Label htmlFor="endpoint">
                    {selectedType === "custom" ? "API Endpoint" : "Webhook URL"}
                  </Label>
                  <Input
                    id="endpoint"
                    type="url"
                    placeholder={selectedType === "custom" ? "https://api.example.com" : "https://hooks.zapier.com/..."}
                    value={agentData.endpoint}
                    onChange={(e) => setAgentData({...agentData, endpoint: e.target.value})}
                    required
                  />
                </div>
              )}

              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Connecting..." : "Connect Agent"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}