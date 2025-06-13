import { 
  Bot, 
  Zap, 
  Shield, 
  BarChart3, 
  GitMerge, 
  Clock,
  Workflow,
  MessageSquare,
  Settings
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Bot,
    title: "Universal Agent Connection",
    description: "Connect ChatGPT, Claude, Bard, and 50+ other AI tools through a single interface."
  },
  {
    icon: Workflow,
    title: "Intelligent Workflows",
    description: "Create complex automation workflows that chain multiple AI agents together seamlessly."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor performance, usage, and costs across all your AI agents with detailed insights."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 compliance, encryption, and audit logs."
  },
  {
    icon: GitMerge,
    title: "Smart Orchestration",
    description: "Automatically route tasks to the best AI agent based on context and capability."
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Continuous monitoring ensures your AI agents are always running optimally."
  },
  {
    icon: MessageSquare,
    title: "Unified Chat Interface",
    description: "Chat with any connected AI agent through one consistent interface."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-second response times and 99.9% uptime."
  },
  {
    icon: Settings,
    title: "No-Code Setup",
    description: "Connect and configure AI agents without writing a single line of code."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Everything you need to manage AI agents
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          AgentHub provides all the tools you need to connect, orchestrate, and monitor your AI agents 
          from a single, powerful dashboard.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <feature.icon className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-6">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}