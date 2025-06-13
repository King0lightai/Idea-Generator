# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **MVP Generator** that automates the creation of complete web applications from startup ideas. The system discovers trending ideas and generates production-ready Next.js applications using Claude Code AI.

## Common Commands

### MVP Generation Scripts
```bash
# Generate MVP from specific idea
./scripts/quick-mvp.sh "Your startup idea description"

# Auto-discover trending ideas and generate MVP
./scripts/mvp-generator.sh

# Generate multiple MVPs in parallel
./scripts/batch-mvp.sh

# Fully automated: AI discovers trending idea and builds it
./scripts/auto-idea-mvp.sh
```

### Generated MVP Development
```bash
# Navigate to any generated MVP
cd mvps/project-name-timestamp/

# Development server
npm run dev

# Production build
npm run build

# Production server
npm run start

# Lint code
npm run lint

# Deploy to Vercel
vercel
```

## Architecture

### Directory Structure
- `scripts/` - Shell scripts for MVP generation automation
- `mvps/` - Generated Next.js applications (each timestamped)
- `ideas/` - Discovered trends and selected ideas for tracking
- `logs/` - Generation logs with detailed process information

### Generated MVP Stack
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Components**: Radix UI headless components
- **Authentication**: NextAuth with Prisma adapter
- **Database**: Prisma ORM ready
- **Forms**: React Hook Form with Zod validation
- **State**: TanStack Query for server state
- **Icons**: Lucide React

### MVP Component Architecture
```
src/
├── app/           # Next.js app directory (pages and API routes)
├── components/    # Reusable UI components
│   ├── dashboard/ # Protected dashboard components
│   ├── layout/    # Header, Footer, Navigation
│   ├── sections/  # Landing page sections (Hero, Features, CTA)
│   └── ui/        # Base UI components (Button, Card, Dialog, etc.)
├── lib/           # Utilities and configurations
└── types/         # TypeScript type definitions
```

## Key Features of Generated MVPs

Each generated MVP includes:
- Responsive landing page with hero, features, and CTA sections
- User authentication system with NextAuth
- Dashboard with protected routes
- API routes for backend functionality
- Toast notifications and form handling
- Dark mode support
- TypeScript throughout with proper type safety
- ESLint configuration for code quality
- Vercel deployment configuration

## Development Guidelines

### When Working on Generated MVPs
- Follow the established component patterns in `src/components/`
- Use the existing UI components from `src/components/ui/`
- Maintain TypeScript strict mode compliance
- Use the `@/` path alias for imports from `src/`
- Follow the Tailwind CSS utility-first approach
- Utilize Radix UI for accessible component primitives

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

## Cost and Performance
- Each MVP generation costs approximately $0.10-0.50 in Claude API usage
- Generated applications are optimized for performance with Next.js 14 features
- Ready for production deployment on Vercel platform