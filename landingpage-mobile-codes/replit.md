# replit.md

## Overview

This is a full-stack web application built with React frontend and Express.js backend, designed for cybersecurity education and training. The application serves as a learning management system (LMS) called "HACKRIFT" that offers interactive cybersecurity courses, labs, and community features.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Router**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Build Tool**: ESBuild for production builds
- **Development**: tsx for TypeScript execution

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: Shared schema definition in `/shared/schema.ts`
- **Current Implementation**: In-memory storage (MemStorage class) for development
- **Production Ready**: PostgreSQL with Neon Database serverless connection

## Key Components

### Shared Schema
- **User Model**: Basic user structure with username/password authentication
- **Schema Validation**: Zod schemas for type-safe data validation
- **Database Migrations**: Drizzle kit configured for schema management

### Frontend Components
- **Landing Page**: Multi-section homepage showcasing platform features
- **UI Components**: Comprehensive shadcn/ui component library
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Handling**: Type-safe forms with React Hook Form

### Backend Services
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Route Management**: Modular route registration system
- **Error Handling**: Centralized error middleware
- **Development Tools**: Request logging and Vite integration

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express.js routes handle HTTP requests with middleware
3. **Storage Layer**: Abstract storage interface allows switching between implementations
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
5. **Response Handling**: Type-safe responses with error boundaries

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL for production
- **Connection Management**: PostgreSQL session store with connect-pg-simple

### UI/UX
- **Radix UI**: Accessible component primitives
- **Lucide Icons**: Modern icon library
- **Embla Carousel**: Touch-friendly carousel component

### Development Tools
- **Replit Integration**: Development environment optimizations
- **Error Overlay**: Runtime error handling for development

## Deployment Strategy

### Development
- **Hot Reload**: Vite dev server with HMR
- **TypeScript**: Incremental compilation with strict mode
- **Environment**: Node.js development server with tsx

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: ESBuild bundles server code for Node.js
- **Static Serving**: Express serves built frontend assets
- **Database**: PostgreSQL connection via environment variables

### Configuration
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Build Scripts**: Separate development and production workflows
- **Asset Management**: Static asset serving with proper routing

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```