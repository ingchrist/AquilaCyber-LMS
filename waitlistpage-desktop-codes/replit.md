# replit.md

## Overview

This project is a modern full-stack web application built with React, Express, and TypeScript. It serves as a cybersecurity learning platform called "AquilaCyberLMS" (also referred to as "HACKRIFT"), featuring course management, user authentication, and interactive learning experiences.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Framework**: Custom components built with Radix UI primitives and shadcn/ui
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: In-memory storage (development) with PostgreSQL session store (connect-pg-simple)

### Development Environment
- **Dev Server**: Vite with HMR and Express middleware mode
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **TypeScript**: Strict mode enabled with path mapping

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` with Zod validation
- **Migrations**: Managed via drizzle-kit in `./migrations` directory
- **Current Tables**: Users table with username/password authentication

### API Layer
- **Structure**: RESTful API with `/api` prefix
- **Storage Interface**: Abstracted storage layer (`IStorage`) with in-memory fallback
- **Error Handling**: Centralized error middleware
- **Logging**: Request/response logging for API endpoints

### Frontend Components
- **Design System**: Custom Tailwind configuration with CSS variables
- **UI Components**: Comprehensive shadcn/ui component library
- **Layout**: Responsive design with mobile-first approach
- **Landing Page**: Multi-section layout with hero, features, courses, testimonials

### Shared Resources
- **Type Safety**: Shared TypeScript types between client and server
- **Schema Validation**: Zod schemas for runtime type checking
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Processing**: Express routes handle requests via storage interface
3. **Database Operations**: Drizzle ORM executes queries against PostgreSQL
4. **Response Handling**: JSON responses with error handling middleware
5. **State Updates**: TanStack Query manages cache invalidation and updates

## External Dependencies

### Production Dependencies
- **UI Library**: Radix UI primitives for accessible components
- **Database**: Neon serverless PostgreSQL
- **Validation**: Zod for schema validation
- **Date Handling**: date-fns for date manipulation
- **Utilities**: clsx, tailwind-merge for CSS class management

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Development**: tsx for TypeScript execution
- **Linting**: ESLint configuration (via Vite)
- **Replit Integration**: Custom Vite plugins for Replit environment

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reload**: Vite HMR for frontend, tsx for backend restart
- **Database**: `npm run db:push` for schema synchronization

### Production
- **Build Process**: `npm run build` creates optimized bundles
- **Server Bundle**: Backend bundled to `dist/index.js`
- **Static Assets**: Frontend built to `dist/public`
- **Startup**: `npm start` runs production server

### Database Management
- **Schema Changes**: Managed via Drizzle migrations
- **Environment**: DATABASE_URL required for PostgreSQL connection
- **Session Storage**: PostgreSQL-backed sessions in production

## Changelog

- June 29, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.