# Thriveni Cars Web Application

## Tech Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Prisma & PostgreSQL
- Zod

## Prerequisites
- Node.js 18+
- PostgreSQL database

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Copy `.env.local.example` to `.env` and fill in the values:
   ```bash
   cp .env.local.example .env
   ```

3. **Database Setup**
   Push the schema to your database and generate the Prisma Client:
   ```bash
   npm run db:push
   ```

4. **Seed Database (Demo Data)**
   Populate the database with initial demo data (cars, branches, testimonials):
   ```bash
   npm run db:seed
   ```

5. **Run Locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Useful Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:studio` - Open Prisma Studio to view database

## Deployment (Vercel)
1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Add the environment variables from your `.env` file in Vercel's settings.
4. Deploy! Prisma schema push should run automatically during the build if configured.
