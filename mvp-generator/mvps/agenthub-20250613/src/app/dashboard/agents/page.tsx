"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Bot, 
  Plus, 
  Search, 
  MoreHorizontal,
  Settings,
  Trash2,
  Play,
  Pause
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data - in a real app, this would come from your API
const mockAgents = [
  {
    id: "1",
    name: "ChatGPT Assistant",
    type: "chatgpt",
    status: "active",
    lastActive: "2 minutes ago",
    description: "General purpose AI assistant for customer support",
    createdAt: "2024-01-15",
    executions: 45
  },
  {
    id: "2", 
    name: "Claude Writer",
    type: "claude",
    status: "active",
    lastActive: "1 hour ago",
    description: "Content creation and writing assistance",
    createdAt: "2024-01-10",
    executions: 23
  },
  {
    id: "3",
    name: "Zapier Automation",
    type: "zapier", 
    status: "inactive",
    lastActive: "3 days ago",
    description: "Workflow automation for lead processing",
    createdAt: "2024-01-05",
    executions: 156
  },
  {
    id: "4",
    name: "Custom API Agent",
    type: "custom",
    status: "error",
    lastActive: "1 week ago",
    description: "Custom integration with internal tools",
    createdAt: "2023-12-20",
    executions: 8
  }
]

const getAgentIcon = (type: string) => {
  return Bot // For simplicity, using Bot icon for all types
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'active':
      return 'default'
    case 'inactive':
      return 'secondary'
    case 'error':
      return 'destructive'
    default:
      return 'outline'
  }
}

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredAgents = mockAgents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Agents</h2>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href="/dashboard/agents/new">
              <Plus className="mr-2 h-4 w-4" />
              Connect Agent
            </Link>
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search agents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredAgents.map((agent) => {
          const Icon = getAgentIcon(agent.type)
          return (
            <Card key={agent.id} className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{agent.name}</CardTitle>
                    <p className="text-xs text-muted-foreground capitalize">{agent.type}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/agents/${agent.id}`}>
                        <Settings className="mr-2 h-4 w-4" />
                        Configure
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {agent.status === 'active' ? (
                        <>
                          <Pause className="mr-2 h-4 w-4" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Activate
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {agent.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <Badge variant={getStatusVariant(agent.status)}>
                    {agent.status}
                  </Badge>
                  <div className="text-right">
                    <p className="text-sm font-medium">{agent.executions}</p>
                    <p className="text-xs text-muted-foreground">executions</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-muted-foreground">
                    Last active: {agent.lastActive}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredAgents.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Bot className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              {searchQuery ? "No agents found" : "No agents connected"}
            </h3>
            <p className="text-muted-foreground text-center mb-4">
              {searchQuery 
                ? "Try adjusting your search terms or filters."
                : "Connect your first AI agent to get started with AgentHub."
              }
            </p>
            {!searchQuery && (
              <Button asChild>
                <Link href="/dashboard/agents/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Connect Agent
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}