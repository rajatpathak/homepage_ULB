# Sheohar Nagar Parishad - Smart Urban Governance Portal

## Overview

This is a civic administration web portal for Sheohar Nagar Parishad (Municipal Council) in Bihar, India. The application serves as a digital gateway for citizens to access municipal services including property tax payment, water bill payment, certificate applications, and other civic amenities. The platform aims to modernize urban governance through transparent, citizen-friendly digital services.

The application provides real-time information such as local weather conditions, air quality index (AQI), and municipal announcements. It acts as a comprehensive digital interface between the municipal administration and citizens.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18.3.1 with TypeScript for type safety and modern component development
- **Build Tool:** Vite 5.4.2 for fast development and optimized production builds
- **Styling:** Tailwind CSS 3.4.1 with PostCSS for utility-first styling and custom CSS variables for theming
- **Icons:** Lucide-react for consistent, lightweight iconography

**Design Decisions:**
- **Single Page Application (SPA):** Uses React for client-side rendering to provide a responsive, app-like experience
- **TypeScript Configuration:** Strict mode enabled with comprehensive linting rules to catch errors early and improve code quality
- **Component Architecture:** Modular component structure (evident from extensive icon imports) for reusable UI elements
- **Theming System:** CSS custom properties (variables) defined for colors, spacing, and border radius to maintain consistent design language
- **Responsive Design:** Mobile-first approach using Tailwind's utility classes

**Key Architectural Patterns:**
- React hooks for state management (useState, useEffect)
- Functional components throughout for simplicity and hooks compatibility
- CSS-in-JS avoided in favor of utility classes for better performance
- Time-based updates using React state and effects for real-time data display

### Build and Development Configuration

**Development Server:**
- Configured to run on host `0.0.0.0` (accessible from network) on port 5000
- Hot module replacement via Vite for instant feedback during development

**Code Quality:**
- ESLint with TypeScript support for code linting
- React-specific linting rules (react-hooks, react-refresh)
- Strict TypeScript compiler options including noUnusedLocals and noUnusedParameters

**Optimization:**
- Lucide-react excluded from dependency optimization to prevent bundling issues
- Separate TypeScript configurations for application code and Node/Vite configuration
- Tree-shaking enabled through ES modules

### External Dependencies

**Backend Services:**
- **Supabase (v2.57.4):** Integrated as the Backend-as-a-Service platform
  - **Purpose:** Likely used for authentication, database operations, and real-time data synchronization
  - **Rationale:** Provides PostgreSQL database, authentication, and real-time subscriptions out-of-the-box without custom backend development
  - **Use Cases:** User management, storing municipal records, payment transactions, certificate applications

**Third-Party Integrations:**
- **Weather Data:** Real-time weather information (temperature, conditions) displayed in the top info bar
- **Air Quality Index (AQI):** Environmental data integration for citizen awareness
- **Time Services:** Client-side time display with potential server synchronization

**Development Dependencies:**
- Tailwind CSS ecosystem (autoprefixer, postcss)
- Vite React plugin for JSX transformation and Fast Refresh
- TypeScript toolchain for type checking and compilation

**Potential Future Integrations:**
Based on the municipal services context, the system may integrate with:
- Payment gateways for online tax and bill payments
- Government databases for certificate verification
- SMS/Email services for notifications
- Document management systems for digital certificates
- Mapping services for location-based features

**Data Storage Considerations:**
- Supabase provides PostgreSQL database capabilities
- Real-time subscriptions possible for live updates (announcements, service status)
- File storage likely used for document uploads (certificates, applications)
- Row-level security for data access control