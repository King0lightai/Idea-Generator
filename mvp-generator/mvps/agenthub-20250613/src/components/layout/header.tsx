"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bot, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Bot className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              AgentHub
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/#features"
            >
              Features
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/#how-it-works"
            >
              How it works
            </Link>
          </nav>
        </div>
        
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </button>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="flex items-center space-x-2 md:hidden" href="/">
              <Bot className="h-6 w-6" />
              <span className="font-bold">AgentHub</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/auth/signin">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <Link
              className="block px-3 py-2 text-base font-medium text-foreground/60 hover:text-foreground"
              href="/#features"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              className="block px-3 py-2 text-base font-medium text-foreground/60 hover:text-foreground"
              href="/pricing"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              className="block px-3 py-2 text-base font-medium text-foreground/60 hover:text-foreground"
              href="/#how-it-works"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}