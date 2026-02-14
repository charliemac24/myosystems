# MYO Systems — Modernize Your Operations

## Overview

MYO Systems is a single-page marketing website for a software company that builds automation-first tools for schools. The flagship product is "MYO Attendance + SMS Alerts" — a system that replaces manual attendance workflows with automated tracking and parent notifications. The site serves as a lead generation tool with sections for product info, company background, and a demo request form.

The application follows a full-stack TypeScript architecture with a React frontend served by an Express backend. It uses a monorepo-style layout with shared schema definitions between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — currently just `/` (Home) and a 404 page
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode supported via class-based toggling, defaults to dark)
- **UI Components**: shadcn/ui (new-york style) — a comprehensive set of Radix UI-based components live in `client/src/components/ui/`
- **State Management**: TanStack React Query for server state; local React state otherwise
- **Fonts**: Inter + DM Sans loaded via Google Fonts
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 on Node.js, written in TypeScript (run via `tsx`)
- **API Pattern**: All API routes should be prefixed with `/api` and registered in `server/routes.ts`
- **Storage Layer**: Abstracted via `IStorage` interface in `server/storage.ts`. Currently uses in-memory storage (`MemStorage`). Can be swapped to a database-backed implementation.
- **Dev Server**: Vite dev server is integrated as middleware during development (`server/vite.ts`), with HMR support
- **Production**: Client is built to `dist/public/`, server is bundled via esbuild to `dist/index.cjs`

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` — currently has a `users` table with `id`, `username`, `password`
- **Validation**: Drizzle-Zod for generating Zod schemas from Drizzle table definitions
- **Migrations**: Drizzle Kit configured to output to `./migrations`, schema push via `npm run db:push`
- **Connection**: Requires `DATABASE_URL` environment variable pointing to a PostgreSQL instance
- **Session Store**: `connect-pg-simple` is available for PostgreSQL-backed sessions

### Build System
- **Dev**: `npm run dev` — runs Express + Vite dev server with HMR
- **Build**: `npm run build` — runs `script/build.ts` which builds the Vite client and bundles the server with esbuild
- **Start**: `npm run start` — runs the production bundle from `dist/index.cjs`
- **Type Check**: `npm run check` — runs TypeScript compiler in noEmit mode

### Key Design Decisions
1. **Shared schema between client and server** — The `shared/` directory contains Drizzle schema and Zod types used by both sides, ensuring type safety across the stack
2. **Storage interface abstraction** — The `IStorage` interface allows swapping between in-memory and database implementations without changing route handlers
3. **Component library pre-installed** — A full set of shadcn/ui components is already available; use these rather than installing new UI libraries
4. **Single-page marketing site** — The home page (`client/src/pages/home.tsx`) is the main content page with multiple scroll sections (hero, products, features, contact form, etc.)

## External Dependencies

### Required Services
- **PostgreSQL**: Required for production database. Connection string via `DATABASE_URL` environment variable
- **Google Fonts**: Inter and DM Sans loaded via CDN (`fonts.googleapis.com`)

### Key npm Packages
- **Frontend**: React, Vite, Wouter, TanStack React Query, Radix UI primitives, Tailwind CSS, class-variance-authority, Lucide icons, embla-carousel-react, react-hook-form, date-fns, recharts, vaul (drawer), cmdk (command palette), react-day-picker, input-otp, react-resizable-panels
- **Backend**: Express 5, Drizzle ORM, pg (PostgreSQL client), connect-pg-simple, express-session, passport, passport-local, zod
- **Build**: Vite, esbuild (via build script), tsx (TypeScript execution), drizzle-kit
- **Replit-specific**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`

### External API Integrations
- **Resend**: Used to send contact/demo form submissions as email notifications to `charlieanchetamacaraeg@gmail.com`. Requires `RESEND_API_KEY` secret. The API route is `POST /api/contact` in `server/routes.ts`. User inputs are HTML-escaped before embedding in email content.