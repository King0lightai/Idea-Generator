import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Check, Star } from "lucide-react"
import { PricingTier } from "@/types"

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for individuals getting started with AI automation",
    features: [
      "Connect up to 3 AI agents",
      "100 workflow executions/month",
      "Basic analytics dashboard",
      "Email support",
      "Standard integrations",
      "Community access"
    ],
    ctaText: "Start Free",
    ctaLink: "/auth/signin"
  },
  {
    name: "Pro",
    price: 49,
    description: "Ideal for small to medium teams scaling their AI operations",
    features: [
      "Connect up to 15 AI agents",
      "5,000 workflow executions/month",
      "Advanced analytics & reporting",
      "Priority email support",
      "All integrations + custom webhooks",
      "Team collaboration tools",
      "API access",
      "Workflow templates library"
    ],
    highlighted: true,
    ctaText: "Start Free Trial",
    ctaLink: "/auth/signin"
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations requiring advanced features and support",
    features: [
      "Unlimited AI agents",
      "Unlimited workflow executions",
      "Custom analytics & dashboards",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced team management",
      "SSO & advanced security",
      "SLA guarantee",
      "Dedicated success manager",
      "On-premise deployment option"
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact"
  }
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Badge variant="secondary" className="rounded-2xl px-4 py-1.5">
              Simple, transparent pricing
            </Badge>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Choose the perfect plan for your{" "}
              <span className="text-primary">AI operations</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Start free and scale as you grow. All plans include our core features 
              with no hidden fees or surprise charges.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-green-500" />
              <span>14-day free trial</span>
              <span>•</span>
              <Check className="h-4 w-4 text-green-500" />
              <span>No setup fees</span>
              <span>•</span>
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container space-y-6 py-8 md:py-12">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.highlighted ? 'border-primary shadow-lg scale-105' : ''}`}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="text-sm">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full" 
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    <Link href={tier.ctaLink}>
                      {tier.ctaText}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="mx-auto max-w-[58rem] space-y-6">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any charges."
              },
              {
                question: "What happens if I exceed my workflow limit?",
                answer: "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional workflow executions as needed."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees or hidden charges. You only pay for your monthly subscription."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
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
            
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Ready to get started?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join thousands of teams using AgentHub to streamline their AI operations.
            </p>
            
            <Button asChild size="lg">
              <Link href="/auth/signin">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}