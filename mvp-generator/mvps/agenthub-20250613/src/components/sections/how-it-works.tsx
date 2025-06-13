import { ArrowRight, Plus, Zap, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    step: "01",
    icon: Plus,
    title: "Connect Your AI Tools",
    description: "Link your existing AI agents like ChatGPT, Claude, and automation tools in minutes with our simple setup wizard."
  },
  {
    step: "02", 
    icon: Zap,
    title: "Create Workflows",
    description: "Build intelligent workflows that automatically route tasks to the right AI agent based on your business rules."
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Monitor & Optimize",
    description: "Track performance, costs, and usage patterns. Optimize your AI workflows for maximum efficiency."
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          How AgentHub Works
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Get started with AgentHub in three simple steps. No technical expertise required.
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-8 md:max-w-[64rem] md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <Card className="h-full">
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.step}
                </div>
                <div className="flex justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-sm leading-6">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
            
            {/* Arrow connector */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mx-auto max-w-[58rem] text-center">
        <p className="text-sm text-muted-foreground">
          Ready to streamline your AI operations? Start your free trial today.
        </p>
      </div>
    </section>
  )
}