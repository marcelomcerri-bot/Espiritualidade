# Bem-Estar Espiritual (Spiritual Wellbeing Platform)

## Overview
A spiritual wellness platform built with React and Express for the discipline "Espiritualidade no Campo da Saúde" at UFF. The application provides evidence-based tools and logotherapy-based practices to strengthen wellbeing through spiritual care.

**Current State**: Fully functional in development and production modes. The application is using in-memory storage (MemStorage) as no PostgreSQL database has been provisioned yet.

**Latest Updates (Nov 1, 2025)**:
- Updated all references from "saúde mental" to "Espiritualidade no Campo da Saúde"
- Improved header and feature card styling for better desktop appearance
- Replaced YouTube video links with verified working alternatives
- Removed Contact/Support section, replaced with academic project information
- Updated footer credits to reflect student development for UFF discipline
- Fixed React warnings related to nested anchor tags

## Project Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS
- **Backend**: Express + TypeScript
- **Database**: PostgreSQL with Drizzle ORM (fallback to in-memory storage when DB not available)
- **UI Components**: Radix UI + Custom components
- **Routing**: Wouter (React)
- **Forms**: React Hook Form + Zod validation

### Directory Structure
```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components (Home, Diário, Práticas, etc.)
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
│   └── index.html
├── server/              # Backend Express application
│   ├── index.ts        # Main server entry point
│   ├── routes.ts       # API route handlers
│   ├── storage.ts      # Database and in-memory storage implementations
│   └── vite.ts         # Vite dev server integration
├── shared/             # Shared types and schemas
│   └── schema.ts       # Database schema and Zod validators
└── attached_assets/    # Static assets and images
```

## Features
- **Descobrir Propósito**: Purpose discovery questionnaire
- **Meu Diário**: Personal journal with gratitude tracking
- **Práticas**: Spiritual and mental health practices
- **Minha Jornada**: Journey assessments and progress tracking
- **Mapa de Sentido**: Meaning pillars mapping
- **Momento Difícil**: Support for difficult moments
- **Aprenda Mais**: Educational resources and references

## Development Setup

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (optional - uses in-memory storage if not set)
- `PORT`: Server port (defaults to 5000)
- `NODE_ENV`: Environment mode (development/production)

### Running the Application
```bash
npm install
npm run dev  # Starts development server on port 5000
```

### Building for Production
```bash
npm run build  # Builds both frontend and backend
npm run start  # Runs production server
```

## Database Schema
The application supports both PostgreSQL and in-memory storage:
- **users**: User accounts (not currently used - demo-user hardcoded)
- **diary_entries**: Personal journal entries
- **purpose_answers**: Questionnaire responses for purpose discovery
- **meaning_pillars**: User's meaning map pillars
- **journey_assessments**: Weekly self-assessments across spiritual, emotional, and mental dimensions

## Configuration Notes
- Server binds to `0.0.0.0:5000` for Replit proxy compatibility
- Vite dev server has `allowedHosts: true` for iframe preview
- Storage automatically falls back to in-memory when DATABASE_URL is not set
- All API routes use hardcoded "demo-user" ID (authentication not yet implemented)

## Recent Changes
- **2025-11-01**: Initial project setup in Replit environment
  - Configured to use in-memory storage as fallback when database not available
  - Set up workflow for development server on port 5000
  - Configured deployment settings for autoscale production deployment
