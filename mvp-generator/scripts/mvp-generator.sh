#!/bin/bash

# MVP Generator - Automated startup idea to deployment pipeline
# Uses Claude Code to discover trends, research, and build MVPs

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
IDEAS_DIR="$PROJECT_ROOT/ideas"
MVPS_DIR="$PROJECT_ROOT/mvps"
LOGS_DIR="$PROJECT_ROOT/logs"

# Create timestamp for this run
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
LOG_FILE="$LOGS_DIR/mvp_generation_$TIMESTAMP.log"

# Function to log messages
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to run Claude Code with logging
run_claude() {
    local prompt="$1"
    local output_file="$2"
    log "Running Claude Code: $prompt"
    
    if [ -n "$output_file" ]; then
        claude-code "$prompt" > "$output_file" 2>> "$LOG_FILE"
    else
        claude-code "$prompt" 2>> "$LOG_FILE"
    fi
}

# Main generation loop
main() {
    log "Starting MVP Generator"
    
    # Stage 1: Discover trending ideas
    log "Stage 1: Discovering trending startup ideas..."
    TRENDS_FILE="$IDEAS_DIR/trends_$TIMESTAMP.txt"
    run_claude "Search HackerNews and ProductHunt for trending startup ideas. List 10 viable MVP ideas with brief descriptions. Focus on ideas that can be built as web apps." "$TRENDS_FILE"
    
    # Stage 2: Select best idea
    log "Stage 2: Selecting best MVP idea..."
    CHOSEN_IDEA_FILE="$IDEAS_DIR/chosen_$TIMESTAMP.txt"
    run_claude "From the file $TRENDS_FILE, analyze and select the single best MVP idea that: 1) Has clear market need 2) Can be built quickly 3) Has monetization potential. Output just the idea name and one-line description." "$CHOSEN_IDEA_FILE"
    
    # Stage 3: Create MVP project
    IDEA_NAME=$(head -n 1 "$CHOSEN_IDEA_FILE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')
    MVP_DIR="$MVPS_DIR/$IDEA_NAME-$TIMESTAMP"
    mkdir -p "$MVP_DIR"
    cd "$MVP_DIR"
    
    log "Stage 3: Generating MVP for: $(cat $CHOSEN_IDEA_FILE)"
    
    # Stage 4: Build the MVP
    run_claude "Build a complete MVP web application for: $(cat $CHOSEN_IDEA_FILE). Use Next.js, Tailwind CSS, and Supabase. Include: landing page, user auth, core functionality, and a simple dashboard. Make it production-ready."
    
    # Stage 5: Set up deployment
    log "Stage 4: Preparing for deployment..."
    run_claude "Add a vercel.json configuration and ensure the project is ready for deployment to Vercel"
    
    log "MVP Generation Complete! Project created at: $MVP_DIR"
    log "To deploy: cd $MVP_DIR && vercel"
}

# Run the generator
main