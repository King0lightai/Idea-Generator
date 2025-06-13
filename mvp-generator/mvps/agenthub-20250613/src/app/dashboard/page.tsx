"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, BarChart3, Plus, Activity, Clock, AlertCircle } from "lucide-react"

// Mock data - in a real app, this would come from your API
const mockStats = {
  totalAgents: 3,
  activeAgents: 2,
  workflowsRun: 124,
  lastActivity: "2 minutes ago"
}

const mockAgents = [
  {
    id: "1",
    name: "ChatGPT Assistant",
    type: "chatgpt",
    status: "active",
    lastActive: "2 minutes ago",
    description: "General purpose AI assistant"
  },
  {
    id: "2", 
    name: "Claude Writer",
    type: "claude",
    status: "active",
    lastActive: "1 hour ago",
    description: "Content creation and writing"
  },
  {
    id: "3",
    name: "Zapier Automation",
    type: "zapier", 
    status: "inactive",
    lastActive: "3 days ago",
    description: "Workflow automation"
  }
]

const mockRecentActivity = [
  {
    id: "1",
    action: "Agent connected",
    agent: "ChatGPT Assistant",
    timestamp: "2 minutes ago"
  },
  {
    id: "2",
    action: "Workflow executed",
    agent: "Claude Writer", 
    timestamp: "1 hour ago"
  },
  {
    id: "3",
    action: "Agent created",
    agent: "Zapier Automation",
    timestamp: "3 days ago"
  }
]

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href="/dashboard/agents/new">
              <Plus className="mr-2 h-4 w-4" />
              Connect Agent
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Agents</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalAgents}</div>
            <p className="text-xs text-muted-foreground">
              {mockStats.activeAgents} active
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.activeAgents}</div>
            <p className="text-xs text-muted-foreground">
              Currently running
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workflows Run</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.workflowsRun}</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Activity</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2m</div>
            <p className="text-xs text-muted-foreground">
              {mockStats.lastActivity}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Connected Agents */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Connected Agents</CardTitle>
            <CardDescription>
              Manage your AI agents and their connections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAgents.map((agent) => (
                <div key={agent.id} className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">{agent.name}</p>
                      <p className="text-sm text-muted-foreground">{agent.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={agent.status === 'active' ? 'default' : 'secondary'}>
                      {agent.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{agent.lastActive}</p>
                  </div>
                </div>
              ))}
              
              {mockAgents.length === 0 && (
                <div className="text-center py-8">
                  <Bot className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-2 text-sm font-semibold">No agents connected</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Get started by connecting your first AI agent.
                  </p>
                  <div className="mt-4">
                    <Button asChild>
                      <Link href="/dashboard/agents/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Connect Agent
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest events from your AI agents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.agent}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks to get you started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Button variant="outline" className="h-20 flex-col" asChild>
              <Link href="/dashboard/agents/new">
                <Bot className="h-6 w-6 mb-2" />
                Connect New Agent
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col" disabled>
              <Zap className="h-6 w-6 mb-2" />
              Create Workflow
              <Badge variant="secondary" className="mt-1 text-xs">Coming Soon</Badge>
            </Button>
            <Button variant="outline" className="h-20 flex-col" disabled>
              <BarChart3 className="h-6 w-6 mb-2" />
              View Analytics
              <Badge variant="secondary" className="mt-1 text-xs">Coming Soon</Badge>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}