# HackRift - Cybersecurity Learning Platform

## Overview

HackRift is a modern cybersecurity learning platform built as a frontend-only React application. The application features a gamified learning experience with interactive labs, structured curriculum, and community-driven mentorship showcased through a beautiful landing page. It uses React with shadcn/ui components and is now designed as a static frontend application without backend dependencies.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and color system
- **Build Tool**: Vite with hot module replacement and development tools

### Static Frontend Architecture
- **Build Tool**: Vite for development and production builds
- **Deployment**: Static site generation for frontend-only deployment
- **Development Server**: Vite dev server with hot module replacement

## Key Components

### Frontend Components
- **Landing Page**: Multi-section marketing page with hero, features, courses, testimonials, and FAQ
- **UI Library**: Comprehensive component library including forms, dialogs, navigation, and data display
- **Responsive Design**: Mobile-first responsive design with custom breakpoints
- **Theme System**: CSS custom properties with light/dark theme support

### Static Content
- **Image Assets**: All images served from public/figmaAssets directory
- **Static Resources**: Fonts, icons, and media files included in the build

## Data Flow

1. **Static Content**: React components render static content and interactive UI
2. **Client-Side State**: TanStack Query manages any client-side data caching
3. **Asset Loading**: Images and media served directly from public directory
4. **Component Rendering**: React handles all UI state and interactions

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Vite for build tooling and development

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for icons
- Various form and validation libraries

### Development Tools
- Vite for build tooling and development server
- TypeScript for type checking
- Replit-specific development enhancements

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist` directory
- **Assets**: Static files copied to build output

### Environment Configuration
- Development: Vite dev server with hot module replacement
- Production: Static file hosting (Replit Static Sites, Netlify, Vercel, etc.)

### Development Workflow
- Local development with hot reload via Vite
- Component-based architecture with TypeScript
- Static asset management through public directory

## Changelog

```
Changelog:
- June 29, 2025: Initial setup with full-stack architecture
- June 29, 2025: Converted to frontend-only React application
  - Removed all backend dependencies (Express, Drizzle, PostgreSQL)
  - Simplified queryClient for frontend-only use
  - Updated image asset paths to work with static hosting
  - Fixed GrowthSection centering issues
  - Configured for static deployment
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```