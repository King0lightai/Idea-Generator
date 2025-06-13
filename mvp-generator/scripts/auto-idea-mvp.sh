#!/bin/bash

# Auto Idea MVP Generator - Let Claude Code discover AND build
# No input needed - fully automated idea generation to deployment

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
MVPS_DIR="$PROJECT_ROOT/mvps"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "🤖 Auto Idea MVP Generator"
echo "🔍 Discovering trending startup opportunities..."

# Let Claude Code find a trending idea
IDEA=$(claude-code "Research current tech trends, startup news, and identify ONE specific MVP idea that:
1. Solves a real problem people are talking about
2. Can be built as a web app
3. Has clear monetization potential
4. Is NOT already dominated by big players
Output ONLY the idea in this format: 'Product Name - Brief description'")

echo "💡 Generated idea: $IDEA"
echo ""

# Generate the MVP
"$SCRIPT_DIR/quick-mvp.sh" "$IDEA"