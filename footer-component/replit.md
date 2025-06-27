# Replit.md

## Overview

This is a full-stack TypeScript application built with Express.js backend and React frontend, designed to showcase a cybersecurity learning management system (AquilaCyberLMS). The application uses modern web technologies including Drizzle ORM for database management, shadcn/ui for components, and TailwindCSS for styling.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: TailwindCSS with custom design tokens and themes
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js 20 with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reloading with tsx

### Project Structure
```
├── client/              # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components (shadcn/ui)
│   │   ├── pages/       # Application pages/routes
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions and configurations
├── server/              # Express.js backend
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Data access layer with in-memory implementation
│   └── vite.ts          # Vite development server integration
├── shared/              # Shared TypeScript code
│   └── schema.ts        # Database schema and validation
└── migrations/          # Database migration files
```

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Drizzle ORM**: Type-safe database queries with PostgreSQL dialect
- **Zod Integration**: Runtime validation using drizzle-zod for schema validation

### Storage Layer
- **Interface-based Design**: IStorage interface for flexible data access
- **In-Memory Implementation**: MemStorage class for development/testing
- **CRUD Operations**: User creation, retrieval by ID and username

### UI Components
- **Design System**: Complete shadcn/ui component library
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Dark Mode Ready**: CSS custom properties for theme switching

### API Architecture
- **RESTful Design**: Express routes with /api prefix
- **Error Handling**: Centralized error middleware
- **Request Logging**: Detailed API request/response logging
- **CORS**: Configured for cross-origin requests

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle HTTP requests with validation
3. **Storage Layer**: IStorage interface abstracts data persistence
4. **Database**: Drizzle ORM manages PostgreSQL interactions
5. **Response**: JSON responses with consistent error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitive components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Development**: `npm run dev` for concurrent frontend/backend
- **Production Build**: Vite builds client, esbuild bundles server
- **Deployment Target**: Autoscale with automatic scaling
- **Port Configuration**: Internal port 5000, external port 80

### Build Process
1. **Frontend**: Vite bundles React app to `dist/public`
2. **Backend**: esbuild creates single server bundle in `dist/`
3. **Assets**: Static files served from public directory
4. **Environment**: DATABASE_URL required for PostgreSQL connection

### Environment Requirements
- **NODE_ENV**: Set to 'production' for optimized builds
- **DATABASE_URL**: PostgreSQL connection string
- **Session Configuration**: Automatic session table creation

## Changelog

Changelog:
- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.