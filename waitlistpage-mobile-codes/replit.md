# AquilaCyberLMS - Learning Management System

## Overview

AquilaCyberLMS is a modern full-stack web application designed as a cybersecurity learning management system. The application features a waitlist landing page with interactive elements and is built using a monorepo structure with separate client and server directories. The system uses React for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Built-in storage interface with in-memory implementation
- **API Structure**: RESTful API with `/api` prefix routing

### Development Environment
- **Package Manager**: npm with package-lock.json
- **Development Server**: tsx for TypeScript execution
- **Build Process**: esbuild for server bundling, Vite for client bundling
- **Hot Reload**: Vite HMR with runtime error overlay

## Key Components

### Database Schema
- **Users Table**: Core user entity with id, username, and password fields
- **Schema Location**: `shared/schema.ts` using Drizzle ORM definitions
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Managed through Drizzle Kit with PostgreSQL dialect

### Storage Layer
- **Interface**: `IStorage` defining CRUD operations for users
- **Implementation**: `MemStorage` class providing in-memory storage for development
- **Methods**: `getUser`, `getUserByUsername`, `createUser`
- **Design**: Abstracted storage interface allowing easy swapping of implementations

### UI Design System
- **Color Scheme**: Custom CSS variables with HSL color definitions
- **Typography**: Multiple font families (Nunito, Roboto, Inter) with specific weights
- **Components**: Comprehensive set of reusable UI components from shadcn/ui
- **Theme**: Dark theme with neutral base colors and chartreuse accents

### Page Structure
- **Landing Page**: Waitlist functionality with hero, features, and footer sections
- **Component Organization**: Modular section components for better maintainability
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

### Client-Server Communication
1. **API Requests**: Client uses custom `apiRequest` function with credential inclusion
2. **Query Management**: TanStack Query handles caching, background updates, and error states
3. **Error Handling**: Centralized error handling with toast notifications
4. **Authentication**: Cookie-based session management (infrastructure ready)

### Request Lifecycle
1. Client initiates request through React Query
2. Request passes through Express middleware stack
3. Route handlers interact with storage layer
4. Response data flows back through React Query cache
5. UI updates automatically based on query state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/react-***: Accessible UI primitives
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler
- **tailwindcss**: Utility-first CSS framework
- **@vitejs/plugin-react**: React support for Vite

### Replit-Specific Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Code exploration tools (development only)

## Deployment Strategy

### Production Build
1. **Client Build**: Vite builds React application to `dist/public`
2. **Server Build**: esbuild bundles Express server to `dist/index.js`
3. **Asset Serving**: Static assets served from build output directory
4. **Environment Variables**: `DATABASE_URL` required for database connection

### Development Workflow
1. **Development Server**: `npm run dev` starts Express with tsx
2. **Database Management**: `npm run db:push` applies schema changes
3. **Type Checking**: `npm run check` validates TypeScript
4. **Hot Reload**: Vite provides instant updates during development

### Environment Configuration
- **Development**: Uses tsx for direct TypeScript execution
- **Production**: Uses compiled JavaScript with Node.js
- **Database**: PostgreSQL connection via environment variable
- **Static Files**: Served by Express in production, Vite in development

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```