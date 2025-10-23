#!/bin/bash

# KZN Talent Portal Presentation - Deployment Script
# This script helps deploy the presentation to various platforms

echo "╔══════════════════════════════════════════════════════╗"
echo "║  KZN Talent Portal - Presentation Deployment        ║"
echo "║  InnovateKZN Collective                              ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: KZN Talent Portal Presentation"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already initialized"
fi

echo ""
echo "Select deployment option:"
echo "1) Deploy to GitHub Pages"
echo "2) Deploy to Netlify (requires Netlify CLI)"
echo "3) Deploy to Vercel (requires Vercel CLI)"
echo "4) Create ZIP archive for sharing"
echo "5) Start local server"
echo "6) Exit"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Deploying to GitHub Pages..."
        echo ""
        echo "Steps to complete:"
        echo "1. Create a new repository on GitHub"
        echo "2. Run these commands:"
        echo ""
        echo "   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git"
        echo "   git branch -M main"
        echo "   git push -u origin main"
        echo ""
        echo "3. Go to your repository Settings → Pages"
        echo "4. Select 'main' branch as source"
        echo "5. Your site will be live at: https://YOUR-USERNAME.github.io/YOUR-REPO"
        ;;
    
    2)
        echo ""
        echo "🚀 Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod
            echo "✅ Deployment complete!"
        else
            echo "❌ Netlify CLI not found. Install it first:"
            echo "   npm install -g netlify-cli"
            echo "   netlify login"
            echo "   netlify deploy --prod"
        fi
        ;;
    
    3)
        echo ""
        echo "🚀 Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
            echo "✅ Deployment complete!"
        else
            echo "❌ Vercel CLI not found. Install it first:"
            echo "   npm install -g vercel"
            echo "   vercel login"
            echo "   vercel --prod"
        fi
        ;;
    
    4)
        echo ""
        echo "📦 Creating ZIP archive..."
        timestamp=$(date +"%Y%m%d_%H%M%S")
        zip -r "kzn-talent-portal-presentation_${timestamp}.zip" . -x "*.git*" "*.DS_Store" "deploy.sh"
        echo "✅ ZIP created: kzn-talent-portal-presentation_${timestamp}.zip"
        echo "📤 You can now share this file via email or cloud storage"
        ;;
    
    5)
        echo ""
        echo "🌐 Starting local server..."
        echo ""
        if command -v python3 &> /dev/null; then
            echo "✅ Starting Python server at http://localhost:8000"
            echo "   Press Ctrl+C to stop"
            echo ""
            python3 -m http.server 8000
        elif command -v python &> /dev/null; then
            echo "✅ Starting Python server at http://localhost:8000"
            echo "   Press Ctrl+C to stop"
            echo ""
            python -m SimpleHTTPServer 8000
        elif command -v php &> /dev/null; then
            echo "✅ Starting PHP server at http://localhost:8000"
            echo "   Press Ctrl+C to stop"
            echo ""
            php -S localhost:8000
        else
            echo "❌ No suitable server found. Install Python or PHP, or use:"
            echo "   npx http-server -p 8000"
        fi
        ;;
    
    6)
        echo "👋 Goodbye!"
        exit 0
        ;;
    
    *)
        echo "❌ Invalid option. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "✨ Done! Good luck with your presentation!"