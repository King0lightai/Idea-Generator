import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, AlertCircle, ArrowLeft } from "lucide-react"

export default function AuthErrorPage() {
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
              "Don't worry, our support team is here to help if you run into any issues."
            </p>
            <footer className="text-sm">Support Team</footer>
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
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
              <CardTitle className="text-2xl">Authentication Error</CardTitle>
              <CardDescription>
                Something went wrong during the sign-in process. This could be due to an expired link or network issue.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Common solutions:</p>
                <p>• Try requesting a new magic link</p>
                <p>• Check your internet connection</p>
                <p>• Clear your browser cache and cookies</p>
                <p>• Use an incognito/private browser window</p>
              </div>
              
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link href="/auth/signin">
                    Try again
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <p className="px-8 text-center text-sm text-muted-foreground">
            Still having trouble?{" "}
            <Link href="/contact" className="underline underline-offset-4 hover:text-primary">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}