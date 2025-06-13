# AgentHub - Unified AI Agent Orchestration Platform

AgentHub is a modern web application that allows you to connect, manage, and orchestrate all your business AI tools through one simple dashboard. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Universal Agent Connection**: Connect ChatGPT, Claude, Bard, and 50+ other AI tools
- **Magic Link Authentication**: Secure, passwordless authentication with NextAuth
- **Real-time Dashboard**: Monitor all your AI agents from a single interface  
- **Responsive Design**: Beautiful UI built with shadcn/ui components
- **Type Safety**: Full TypeScript support throughout the application
- **Modern Architecture**: Built with Next.js 14 App Router and server components

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Authentication**: NextAuth.js with Email Provider
- **Database**: Prisma with SQLite (easily configurable for PostgreSQL/MySQL)
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agenthub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in the required environment variables:
   ```env
   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-here-generate-with-openssl-rand-base64-32
   
   # Email Provider (for magic links)
   EMAIL_SERVER_HOST=smtp.gmail.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=your-email@gmail.com
   EMAIL_SERVER_PASSWORD=your-app-password
   EMAIL_FROM=noreply@agenthub.ai
   
   # Database
   DATABASE_URL="file:./dev.db"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Email Setup (Gmail Example)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: Google Account → Security → 2-Step Verification → App passwords
3. Use the generated app password in `EMAIL_SERVER_PASSWORD`

### Database Configuration

The app uses SQLite by default for easy setup. To use PostgreSQL or MySQL:

1. Update the `DATABASE_URL` in your `.env` file
2. Update the `provider` in `prisma/schema.prisma`
3. Run `npx prisma generate` and `npx prisma db push`

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── pricing/           # Pricing page
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   ├── sections/          # Landing page sections
│   └── dashboard/         # Dashboard components
├── lib/                   # Utilities and configurations
└── types/                 # TypeScript type definitions
```

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) - a collection of beautiful, accessible, and customizable components built with Radix UI and Tailwind CSS.

Components included:
- Button, Card, Input, Label, Badge
- Dialog, Dropdown Menu, Avatar
- Toast notifications
- Loading skeletons

## 🔐 Authentication

- Magic link authentication via email
- Secure session management with NextAuth.js
- Protected dashboard routes
- User session persistence

## 📊 Dashboard Features

- **Overview**: Key metrics and recent activity
- **Agents Management**: Connect, configure, and monitor AI agents
- **Real-time Status**: Live status indicators for all connected agents
- **Activity Logs**: Track recent agent activities and executions

## 🔌 Supported Integrations

- **AI Assistants**: ChatGPT, Claude, Google Bard
- **Automation**: Zapier, Make (Integromat), n8n
- **Custom APIs**: Connect any REST API or service

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Node.js:
- Railway
- Heroku
- DigitalOcean App Platform
- AWS, GCP, or Azure

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database Commands

- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes to database
- `npx prisma db seed` - Seed the database (if configured)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you need help or have questions:

1. Check the [documentation](docs/)
2. Search [existing issues](issues)
3. Create a [new issue](issues/new)

## 🎯 Roadmap

- [ ] Workflow builder with visual interface
- [ ] Advanced analytics and reporting
- [ ] Real-time collaboration features
- [ ] Mobile app
- [ ] Enterprise SSO integration
- [ ] Advanced monitoring and alerting

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.