# AquilaCyber Learning Management System

## Overview

AquilaCyber LMS is a modern, full-stack learning management system built specifically for cybersecurity education. The application provides an interactive platform for learners to access courses, participate in CTF challenges, connect with mentors, and engage with a community of cybersecurity professionals. The system is designed with a focus on practical, hands-on learning through labs, quests, and real-world scenarios.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Form Management**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL session store
- **API Design**: RESTful APIs with /api prefix routing

### Database Schema
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Location**: `/shared/schema.ts`
- **Current Tables**: Users table with username/password authentication
- **Migration Strategy**: Drizzle Kit for schema migrations

## Key Components

### Authentication System
- User registration and login functionality
- Password-based authentication (ready for enhancement)
- Session-based authentication with secure cookie storage
- Shared user schema between frontend and backend

### UI Component Library
- Complete shadcn/ui component set including:
  - Navigation components (menus, breadcrumbs)
  - Form components (inputs, selects, checkboxes)
  - Data display (tables, cards, badges)
  - Feedback components (alerts, toasts, progress)
  - Layout components (sheets, dialogs, accordions)

### Landing Page Architecture
- Modular section-based design
- Responsive layout with mobile-first approach
- Interactive elements and animations
- SEO-friendly structure

### Storage Layer
- Abstracted storage interface (`IStorage`) for flexible data access
- Memory storage implementation for development
- Database storage ready for production integration
- CRUD operations for user management

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Routing**: Express server routes requests to appropriate handlers
3. **Data Access**: Storage layer abstracts database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: TanStack Query manages caching and synchronization
6. **UI Updates**: React components re-render based on state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/react-***: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **zod**: Runtime type validation

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Hot Reload**: Vite HMR for frontend, tsx watch for backend
- **Database**: Drizzle push for schema synchronization
- **Error Handling**: Runtime error overlays for debugging

### Production Build
- **Frontend**: Vite build with optimized bundles
- **Backend**: esbuild compilation to ESM format
- **Static Assets**: Served from `/dist/public`
- **Database**: Production PostgreSQL with connection pooling

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Session Configuration**: Secure session management

## Changelog

- June 27, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.