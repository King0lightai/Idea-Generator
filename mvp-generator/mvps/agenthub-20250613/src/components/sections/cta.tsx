import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function CTASection() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <div className="flex items-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            Trusted by 1000+ teams
          </span>
        </div>
        
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Ready to orchestrate your AI agents?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Join thousands of teams who use AgentHub to streamline their AI operations. 
          Start your free trial today - no credit card required.
        </p>
        
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/auth/signin">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/pricing">
              View Pricing
            </Link>
          </Button>
        </div>
        
        <div className="flex items-center space-x-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}