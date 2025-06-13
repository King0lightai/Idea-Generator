import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, Shield, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          href="#"
        >
          Now in Public Beta
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Orchestrate All Your AI Agents in{" "}
          <span className="text-primary">One Dashboard</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Connect, manage, and coordinate all your business AI tools through AgentHub. 
          From ChatGPT to custom automations, bring everything together for seamless AI workflows.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/auth/signin">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#features">
              See How It Works
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] justify-center">
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 border-r">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs text-muted-foreground">AI Tools Supported</div>
            </div>
            <div className="flex flex-col items-center space-y-2 border-r">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div className="flex flex-col items-center space-y-2 border-r">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-xs text-muted-foreground">Workflows Created</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs text-muted-foreground">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual representation */}
      <div className="container">
        <div className="mx-auto max-w-[58rem]">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
                <div className="relative rounded-lg border bg-background p-8">
                  <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
                    {[
                      { icon: Bot, name: "ChatGPT" },
                      { icon: Zap, name: "Claude" },
                      { icon: Shield, name: "Zapier" },
                      { icon: Users, name: "Make" },
                      { icon: Bot, name: "Custom" },
                    ].map((agent, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center space-y-2 rounded-lg border p-4"
                      >
                        <agent.icon className="h-8 w-8 text-primary" />
                        <span className="text-sm font-medium">{agent.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <div className="text-sm text-muted-foreground">
                      All connected through AgentHub
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}