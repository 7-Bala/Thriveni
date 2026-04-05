#!/bin/bash

# Thriveni Cars - All-in-One Startup Script
# This script handles database syncing and starts the Next.js dev server (Frontend + API)

echo "------------------------------------------------"
echo "🚀 Starting Thriveni Cars Development Environment"
echo "------------------------------------------------"

# 1. Check for .env file
if [ ! -f .env ]; then
    echo "⚠️  .env file not found! Copying from .env.local.example..."
    cp .env.local.example .env
    echo "📌 ACTION REQUIRED: Please edit the .env file with your database credentials."
fi

# 2. Generate Prisma Client
echo "⚙️  Generating Prisma Client..."
npx prisma generate

# 3. Sync Database Schema
# Note: This pushes the schema to your DB. For production, use migrations.
echo "📦 Syncing database schema..."
npx prisma db push --accept-data-loss

# 4. Start the Application
# Since this is a Next.js app, 'npm run dev' starts both the Frontend and the API routes.
echo "✨ Launching Frontend & Backend API at http://localhost:3000"
echo "------------------------------------------------"
npm run dev
