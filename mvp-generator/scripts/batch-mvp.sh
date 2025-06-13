#!/bin/bash

# Batch MVP Generator - Generate multiple MVPs in parallel
# Perfect for testing multiple ideas simultaneously

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Function to generate MVP in background
generate_mvp() {
    local idea="$1"
    local index="$2"
    echo "[MVP $index] Starting generation for: $idea"
    "$SCRIPT_DIR/quick-mvp.sh" "$idea" &
}

# List of MVP ideas to generate
MVP_IDEAS=(
    "AI-powered daily standup assistant for remote teams"
    "Subscription tracker with spending insights"
    "Micro-learning platform for coding skills"
    "Local service marketplace connector"
    "Personal finance goal tracker with gamification"
)

echo "🚀 Batch MVP Generator"
echo "📦 Generating ${#MVP_IDEAS[@]} MVPs in parallel..."
echo ""

# Generate all MVPs in parallel
for i in "${!MVP_IDEAS[@]}"; do
    generate_mvp "${MVP_IDEAS[$i]}" "$((i+1))"
done

# Wait for all background processes to complete
wait

echo ""
echo "✅ All MVPs generated successfully!"
echo "📂 Check the mvps/ directory for your projects"