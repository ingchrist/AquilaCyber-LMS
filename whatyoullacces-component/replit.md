# Web Application with React/Express Stack

## Overview

This is a full-stack web application built with React frontend and Express.js backend. The application uses a monorepo structure with shared schema definitions and modern tooling including Vite, TypeScript, and Tailwind CSS. The project is configured for deployment on Replit with PostgreSQL database support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **Development**: tsx for TypeScript execution in development

### Data Storage
- **Database**: PostgreSQL 16 (configured via Replit modules)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless driver for PostgreSQL connectivity

## Key Components

### Database Schema
Located in `shared/schema.ts`, currently defines:
- **Users Table**: Basic user authentication with username/password
- **Validation**: Zod schemas for type-safe data validation
- **Type Generation**: Automatic TypeScript types from database schema

### Storage Layer
- **Interface**: IStorage interface for CRUD operations
- **Implementation**: MemStorage class for development (in-memory storage)
- **Methods**: getUser, getUserByUsername, createUser

### Frontend Components
- **UI Library**: Complete shadcn/ui component suite
- **Routing**: Single-page application with 404 handling
- **Theming**: CSS variables-based theming system
- **Toast System**: User feedback and notifications

### Development Setup
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Type Checking**: Shared TypeScript configuration
- **Path Aliases**: Configured for clean imports (@/, @shared/)

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **API Layer**: Express routes handle HTTP requests (currently minimal)
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: PostgreSQL stores persistent data via Drizzle ORM
5. **Response**: JSON responses flow back to React frontend
6. **State Management**: TanStack Query caches and manages server state

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Backend**: Express.js, Node.js runtime
- **Database**: PostgreSQL, Drizzle ORM, Neon serverless driver

### UI/UX Dependencies
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod resolvers for validation

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across the stack
- **Linting/Formatting**: Configured for consistent code style

## Deployment Strategy

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Port Mapping**: Internal port 5000 mapped to external port 80
- **Build Process**: `npm run build` creates production assets
- **Start Command**: `npm run start` for production deployment

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production
4. **Database**: PostgreSQL provisioned automatically on Replit

### Development vs Production
- **Development**: Vite dev server with HMR, tsx for backend
- **Production**: Express serves static files, compiled JavaScript execution
- **Environment**: NODE_ENV controls build optimization and development features

## Changelog
- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.