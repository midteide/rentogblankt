#!/bin/bash

# Deploy script for Rent & Blankt AS
# This script makes it easy to deploy changes without manual steps

set -e

echo "🚀 Rent & Blankt AS - Deployment Script"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}⚠️  You have uncommitted changes${NC}"
    echo ""
    echo "What would you like to do?"
    echo "1) Commit all changes and push"
    echo "2) Stash changes and push"
    echo "3) Cancel"
    read -p "Enter choice (1-3): " choice
    
    case $choice in
        1)
            echo ""
            read -p "Enter commit message (or press Enter for default): " commit_msg
            if [ -z "$commit_msg" ]; then
                commit_msg="Update website"
            fi
            git add -A
            git commit -m "$commit_msg"
            ;;
        2)
            git stash
            echo "✓ Changes stashed"
            ;;
        3)
            echo "Cancelled"
            exit 0
            ;;
        *)
            echo "Invalid choice"
            exit 1
            ;;
    esac
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${YELLOW}⚠️  You're not on the main branch (currently on: $CURRENT_BRANCH)${NC}"
    read -p "Do you want to switch to main? (y/n): " switch_branch
    if [ "$switch_branch" = "y" ]; then
        git checkout main
        CURRENT_BRANCH="main"
    fi
fi

# Check if remote is set
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ Error: No remote 'origin' configured"
    echo "Please set up your GitHub remote first"
    exit 1
fi

# Show what will be pushed
echo ""
echo -e "${BLUE}📦 Changes to push:${NC}"
git log origin/main..HEAD --oneline 2>/dev/null || echo "No new commits"
echo ""

# Push to GitHub
echo -e "${BLUE}⬆️  Pushing to GitHub...${NC}"
git push origin "$CURRENT_BRANCH"

echo ""
echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
echo ""
echo "🌐 Netlify will automatically deploy your changes"
echo "   Check deployment status at: https://app.netlify.com"
echo ""
echo "💡 Tip: You can also check your site at:"
git remote get-url origin | sed 's/\.git$//' | sed 's/github\.com/\.netlify\.app/' | sed 's|https://|https://|' || echo "   (Check Netlify dashboard for your site URL)"
