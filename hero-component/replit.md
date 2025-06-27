# Project Overview

This is a full-stack web application built with React and Express.js, featuring a modern UI with shadcn/ui components and PostgreSQL database integration through Drizzle ORM. The project follows a monorepo structure with clear separation between client and server code.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Development**: Hot reload with tsx for development server

### Database Architecture
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Schema**: Basic user management with username/password authentication

## Key Components

### Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui component library
│   │   ├── pages/         # Application pages/routes
│   │   ├── lib/           # Utility functions and configurations
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express.js application
│   ├── routes.ts          # API route definitions (currently empty)
│   ├── storage.ts         # Data access layer with in-memory fallback
│   └── index.ts           # Server entry point
├── shared/                # Shared code between client and server
│   └── schema.ts          # Database schema and validation
└── migrations/            # Database migration files
```

### Current Features
- Basic user schema with username/password fields
- In-memory storage implementation as database fallback
- Comprehensive UI component library (shadcn/ui)
- Development environment with hot reload
- TypeScript configuration with path aliases

## Data Flow

### Database Layer
- **Primary**: PostgreSQL via Neon Database with connection pooling
- **Fallback**: In-memory storage for development/testing
- **ORM**: Drizzle ORM provides type-safe database operations
- **Validation**: Zod schemas for runtime type checking

### API Layer
- Express.js server with middleware for JSON parsing and logging
- Route structure ready for REST API implementation
- Error handling middleware configured
- Request/response logging for development

### Frontend Layer
- React Query for efficient server state management
- Wouter for lightweight routing
- Component-based architecture with reusable UI components
- TypeScript for type safety throughout the application

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon Database
- **drizzle-orm**: TypeScript ORM with SQL-like syntax
- **@tanstack/react-query**: Server state management for React
- **wouter**: Minimalist routing library for React

### UI Dependencies
- **@radix-ui/***: Comprehensive set of low-level UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for managing CSS class variants
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution environment
- **drizzle-kit**: Database migrations and introspection

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both client and server with hot reload
- **Database**: Requires DATABASE_URL environment variable for PostgreSQL connection
- **Port Configuration**: Server runs on port 5000, client proxies API requests

### Production Build
- **Build Process**: Vite builds client assets, esbuild bundles server code
- **Deployment Target**: Configured for autoscale deployment on Replit
- **Environment**: NODE_ENV=production for optimized builds

### Database Management
- **Schema Updates**: `npm run db:push` applies schema changes to database
- **Migrations**: Drizzle Kit generates and manages database migrations
- **Connection**: Uses connection pooling for production environments

## Changelog

Changelog:
- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.