import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Mail, ArrowLeft } from "lucide-react"

export default function VerifyRequestPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/80" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Bot className="mr-2 h-6 w-6" />
          AgentHub
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "The magic link authentication makes signing in so seamless. 
              Security without the hassle."
            </p>
            <footer className="text-sm">Marcus Johnson, Security Lead</footer>
          </blockquote>
        </div>
      </div>
      
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex items-center justify-center lg:hidden mb-4">
              <Bot className="mr-2 h-6 w-6" />
              <span className="font-bold text-lg">AgentHub</span>
            </div>
          </div>
          
          <Card>
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Check your email</CardTitle>
              <CardDescription>
                We've sent you a secure sign-in link. Click the link in your email to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Check your spam folder if you don't see the email</p>
                <p>• The link will expire in 10 minutes</p>
                <p>• You can close this tab once you click the link</p>
              </div>
              
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/auth/signin">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to sign-in
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <p className="px-8 text-center text-sm text-muted-foreground">
            Need help?{" "}
            <Link href="/contact" className="underline underline-offset-4 hover:text-primary">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}