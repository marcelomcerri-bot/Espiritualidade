# Cuidado Espiritual na Saúde Mental (Spiritual Care in Mental Health Platform)

## Overview
A spiritual wellness platform built with React and Express for the discipline "Espiritualidade no Campo da Saúde" at UFF. The application provides evidence-based tools and logotherapy-based practices to strengthen wellbeing through spiritual care.

**Current State**: Fully functional in development and production modes. The application is using in-memory storage (MemStorage) as no PostgreSQL database has been provisioned yet. Google Gemini AI integration is active for generating personalized spiritual reflections.

**Latest Updates (Nov 1, 2025)**:
- **Rebranding**: Changed site name from "Bem-Estar Espiritual" to "Cuidado Espiritual na Saúde Mental"
- **Feature Rename**: "Mensagem da Alma" → "Reflexões que Curam" (Reflections that Heal)
- Configured Google Gemini API (GEMINI_API_KEY) for AI-generated reflections
- Improved header spacing and layout for better desktop appearance
- Removed "Seminário" prefix from homepage section title
- Removed explanatory "Sobre esta mensagem" section for cleaner UX
- Updated Gemini prompts to align with new "Reflexões que Curam" branding
- Replaced YouTube video links with verified working alternatives
- Fixed React warnings related to nested anchor tags
- Configured project for Netlify deployment (netlify.toml + _redirects)
- **Enhanced UX**: 
  - Removed "Gerar Nova Mensagem" button from Reflexões que Curam (auto-generates on entry)
  - Added edit, delete, and clear-all functionality to Meu Diário
  - Added clear-all functionality to Minha Jornada
  - Implemented confirmation dialogs for all destructive actions
  - Fixed dialog state management bug in Jornada that prevented creating new assessments after canceling edits
- **Recent Fixes (Nov 1, 2025)**:
  - Replaced lotus flower image with clean SVG icon (Flower2 from lucide-react) to remove background artifacts
  - Updated meditation videos to Portuguese: Poetoterapia (sleep) and Raissa Zoccal/Yoga Mudra (anxiety)
  - Configured GEMINI_API_KEY as Replit Secret (must also be added to Netlify for production deployment)
- **Major Visual Redesign (Nov 1, 2025)**:
  - Implemented modern, vibrant color palette with improved contrast ratios (WCAG AA compliant)
  - Added glassmorphism effects and smooth animations throughout the app
  - Redesigned core components: Header, Footer, FeatureCard, QuoteCard with modern gradients and hover effects
  - Improved Home page with enhanced hero section, animated cards, and better visual hierarchy
  - Updated text contrast for better accessibility (foreground: 12%, muted-foreground: 30%)
  - Added interactive hover animations with scale, rotate, and translate transforms
  - Implemented rounded-3xl corners and elevated shadows for depth
  - Created custom gradient backgrounds with primary/accent color overlays
  - All changes architect-reviewed and accessibility-tested

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
- **Reflexões que Curam**: AI-generated personalized spiritual reflections using Google Gemini
- **Mapa de Sentido**: Meaning pillars mapping
- **Momento Difícil**: Support for difficult moments
- **Aprenda Mais**: Educational resources and references
- **LUME**: AI chat assistant that answers questions about spirituality and mental health based exclusively on scientific references from the platform. Always cites academic sources.

## Development Setup

### Environment Variables
- `GEMINI_API_KEY`: Google Gemini API key for AI-generated reflections (required for "Reflexões que Curam" feature)
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
- **2025-12-10**: Added LUME AI Assistant
  - New AI chat assistant that answers questions exclusively based on scientific references from the platform
  - Uses Google Gemini API with comprehensive knowledge base from Referencias.tsx and Aprenda.tsx
  - Enforces citation requirements - LUME always cites academic sources (AUTHOR, year) format
  - Added input validation using Zod schemas to prevent malformed requests
  - Accessible via /lume route and header navigation
  - Refuses to answer questions outside the knowledge base scope
- **2025-11-05**: Navigation updates
  - Removed "Reflexões que Curam" from navigation menu (Gemini integration not compatible with APK)
  - Route still exists at /mensagem-alma for direct URL access if needed
- **2025-11-04**: Mobile layout fixes
  - Fixed tab navigation layout on Práticas page for mobile devices
  - Changed from horizontal grid to vertical stack layout for better mobile UX
  - Tabs now display one below another on small screens (< 1024px)
  - Desktop layout preserved with 4-column grid
- **2025-11-01**: Initial project setup in Replit environment
  - Configured to use in-memory storage as fallback when database not available
  - Set up workflow for development server on port 5000
  - Configured deployment settings for autoscale production deployment
