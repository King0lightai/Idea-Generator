# 🚀 MVP Generator - Automated Startup Builder

Turn trending ideas into deployed MVPs using Claude Code!

## 🎯 Quick Start

### Generate a single MVP:
```bash
./scripts/quick-mvp.sh "Your amazing startup idea"
```

### Discover trends and auto-generate:
```bash
./scripts/mvp-generator.sh
```

### Generate multiple MVPs in parallel:
```bash
./scripts/batch-mvp.sh
```

## 📁 Project Structure
```
mvp-generator/
├── scripts/          # Automation scripts
├── mvps/            # Generated MVP projects
├── ideas/           # Discovered trends and chosen ideas
└── logs/            # Generation logs
```

## 💡 Examples

Generate an AI writing assistant:
```bash
./scripts/quick-mvp.sh "AI-powered blog post generator with SEO optimization"
```

## 🚀 Deployment

Each generated MVP includes:
- Next.js + Tailwind CSS frontend
- API routes for backend logic  
- Authentication setup
- Vercel deployment config

To deploy any MVP:
```bash
cd mvps/your-mvp-name
vercel
```

## 💰 Cost: ~$0.10-0.50 per MVP using Claude API

Happy building! 🎉