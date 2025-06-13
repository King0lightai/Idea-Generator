import Link from "next/link"
import { Bot } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link className="flex items-center space-x-2" href="/">
            <Bot className="h-6 w-6" />
            <span className="font-bold">AgentHub</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Unified AI agent orchestration platform.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            className="text-sm text-muted-foreground hover:text-foreground"
            href="/privacy"
          >
            Privacy
          </Link>
          <Link
            className="text-sm text-muted-foreground hover:text-foreground"
            href="/terms"
          >
            Terms
          </Link>
          <Link
            className="text-sm text-muted-foreground hover:text-foreground"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}