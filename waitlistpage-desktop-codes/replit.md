# AquilaCyber Waitlist Application

## Overview

This is a full-stack web application for AquilaCyber's Learning Management System (LMS) waitlist. The application features a modern, responsive landing page with a cybersecurity theme, allowing users to join a waitlist for early access to the platform. Built with React, Express, and PostgreSQL, it follows a modular architecture with shared types and schemas.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for optimized bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Shared TypeScript schemas with Zod validation

## Key Components

### Client Structure
```
client/
├── src/
│   ├── pages/
│   │   ├── Waitinglist.tsx (main landing page)
│   │   ├── sections/ (modular page sections)
│   │   └── not-found.tsx
│   ├── components/ui/ (shadcn/ui components)
│   ├── lib/ (utilities and query client)
│   └── hooks/ (custom React hooks)
```

### Server Structure
```
server/
├── index.ts (main server file)
├── routes.ts (API route definitions)
├── storage.ts (data layer abstraction)
└── vite.ts (development server integration)
```

### Shared Resources
```
shared/
└── schema.ts (database schemas and types)
```

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle HTTP requests with `/api` prefix
3. **Storage Layer**: Abstract storage interface supports both in-memory and database operations
4. **Database**: Drizzle ORM manages PostgreSQL interactions with type safety
5. **Response**: JSON responses flow back through the API to React components

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Database and Backend
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle ORM**: Type-safe database toolkit
- **Express**: Web application framework

### Development Tools
- **Vite**: Fast build tool with HMR
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development
- **Environment**: Replit with Node.js 20 and PostgreSQL 16 modules
- **Hot Reload**: Vite middleware integrated with Express server
- **Port Configuration**: Development server on port 5000

### Production Build
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Deployment**: Replit Autoscale deployment target
4. **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection

### Configuration Files
- **Drizzle Config**: PostgreSQL dialect with migrations output
- **TypeScript**: Shared configuration for client, server, and shared modules
- **Tailwind**: Configured for all TypeScript/JSX files with custom theme
- **Vite**: React plugin with path aliases and Replit-specific plugins

## Changelog

Changelog:
- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.