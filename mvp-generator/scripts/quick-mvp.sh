#!/bin/bash

# Quick MVP Generator - Streamlined version for rapid prototyping
# Give it an idea and it builds immediately

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
MVPS_DIR="$PROJECT_ROOT/mvps"

# Check if idea was provided
if [ -z "$1" ]; then
    echo "Usage: ./quick-mvp.sh \"Your MVP idea\""
    echo "Example: ./quick-mvp.sh \"AI-powered recipe generator\""
    exit 1
fi

IDEA="$1"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
PROJECT_NAME=$(echo "$IDEA" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')
MVP_DIR="$MVPS_DIR/$PROJECT_NAME-$TIMESTAMP"

echo "🚀 Generating MVP for: $IDEA"
echo "📁 Project directory: $MVP_DIR"

mkdir -p "$MVP_DIR"
cd "$MVP_DIR"

# Generate the MVP using Claude Code
claude-code "Create a complete Next.js web application for: $IDEA. 
Include:
- Modern landing page with hero section
- User authentication (using NextAuth or Supabase)
- Core functionality implementation
- Responsive design with Tailwind CSS
- API routes for backend logic
- Simple database schema
- Deployment configuration for Vercel
Make it production-ready with proper error handling and loading states."

echo "✅ MVP Generated successfully!"
echo "📂 Location: $MVP_DIR"
echo ""
echo "Next steps:"
echo "1. cd $MVP_DIR"
echo "2. npm install"
echo "3. npm run dev"
echo "4. Deploy with: vercel"