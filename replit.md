# Full-Stack React + Express Application

## Overview

This is a full-stack web application built with React frontend and Express backend, featuring a modern tech stack with TypeScript, Tailwind CSS, shadcn/ui components, and PostgreSQL database integration. The application is designed as a monorepo with shared types and schemas between frontend and backend.

## System Architecture

### Monorepo Structure
- **Client**: React frontend application with TypeScript and Vite
- **Server**: Express.js backend with TypeScript
- **Shared**: Common schemas, types, and utilities shared between frontend and backend

### Technology Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Wouter (routing)
- **Backend**: Express.js, TypeScript, Drizzle ORM
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom design tokens

## Key Components

### Frontend Architecture
- **Component Library**: Comprehensive shadcn/ui components for consistent UI
- **Routing**: Client-side routing with Wouter library
- **State Management**: TanStack Query for API state management
- **Form Handling**: React Hook Form with Zod validation (via @hookform/resolvers)
- **Styling**: Tailwind CSS with custom CSS variables and design system

### Backend Architecture
- **API Layer**: Express.js with TypeScript for REST endpoints
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Middleware**: Request logging, JSON parsing, error handling

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Type Safety**: Drizzle Zod integration for runtime validation
- **Migrations**: Drizzle Kit for database schema management

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Routes**: Express server handles requests at `/api/*` endpoints
3. **Storage Layer**: Abstract storage interface allows switching between implementations
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
5. **Response Handling**: Structured error handling and logging throughout the stack

## External Dependencies

### UI and Styling
- **Radix UI**: Headless UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **class-variance-authority**: Styling variants management

### Backend Services
- **PostgreSQL**: Primary database (via @neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Vite**: Frontend build tool and dev server
- **ESBuild**: Backend bundling for production
- **TypeScript**: Type safety across the entire stack
- **Drizzle Kit**: Database schema management and migrations

## Deployment Strategy

### Development Environment
- **Replit Integration**: Configured for Replit development environment
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Port Configuration**: Frontend dev server proxies API requests to backend

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: ESBuild bundles Node.js application
- **Database**: PostgreSQL connection via environment variables
- **Deployment Target**: Configured for autoscale deployment

### Environment Configuration
- **NODE_ENV**: Development/production environment switching
- **DATABASE_URL**: PostgreSQL connection string
- **Port Management**: Configurable port settings for different environments

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```