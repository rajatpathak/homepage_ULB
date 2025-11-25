# Sheohar Nagar Parishad - Smart Urban Governance Portal

## Overview

This is a civic administration web portal for Sheohar Nagar Parishad (Municipal Council) in Bihar, India. The application serves as a digital gateway for citizens to access municipal services including property tax payment, water bill payment, certificate applications, and other civic amenities. The platform aims to modernize urban governance through transparent, citizen-friendly digital services.

The application provides real-time information such as local weather conditions, air quality index (AQI), and municipal announcements. It acts as a comprehensive digital interface between the municipal administration and citizens.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** Static HTML5 with no JavaScript framework dependencies
- **Styling:** Bootstrap 5.3.0 (CDN) for responsive grid system and components
- **Icons:** Font Awesome 6.4.0 (CDN) for consistent iconography
- **Custom CSS:** Clean, minimal custom CSS in `assets/css/style.css` for branding and theme customization

**Design Decisions:**
- **Multi-Page Static Website:** Traditional HTML pages for simplicity, fast loading, and easy maintenance
- **Bootstrap Framework:** Leverages Bootstrap's responsive grid, components, and utilities for consistent design
- **No Build Process:** Direct HTML/CSS deployment without compilation or bundling steps
- **Responsive Design:** Mobile-first approach using Bootstrap's responsive classes and custom media queries
- **Consistent Header/Footer:** Shared navigation and footer structure across all pages (index.html, services.html, about.html, contact.html)

**Key Features:**
- Hero banner with Bootstrap carousel showcasing 5 AI-generated images of Sheohar
- Comprehensive citizen services section with 12+ municipal services
- Online payment integration with Bihar government portals
- Contact information and external links to Bihar state services
- Real-time date/time display using vanilla JavaScript
- Smooth animations and hover effects for better user experience

### Build and Development Configuration

**Development Server:**
- Python's built-in HTTP server (`python3 -m http.server 5000`)
- Serves static files on port 5000 (0.0.0.0:5000)
- No build process or hot module replacement needed

**File Structure:**
```
/
├── index.html              # Homepage with hero carousel and all sections
├── services.html           # Complete services listing
├── about.html              # About Sheohar Nagar Parishad
├── contact.html            # Contact information and ward details
└── assets/
    ├── css/
    │   └── style.css       # Custom styling and theme variables
    └── images/
        ├── sheohar_city_overview_banner.png
        ├── development_infrastructure_work_banner.png
        ├── clean_green_sheohar_banner.png
        ├── digital_governance_services_banner.png
        └── cultural_community_spirit_banner.png
```

### External Dependencies

**CDN Resources:**
- **Bootstrap 5.3.0:** Complete CSS framework for responsive design and components
- **Font Awesome 6.4.0:** Icon library for visual elements throughout the site
- No local dependencies or package management required

**Third-Party Integrations:**
- **Bihar Government Portals:** External links to official services
  - Bihar ServicePlus (serviceonline.bihar.gov.in) - Certificate services
  - UDHD Bihar (udhd.bihar.gov.in) - Property tax and municipal services
  - Jan Samadhan (jansamadhan.bihar.gov.in) - Grievance redressal
  - RTI Online (rtionline.bihar.gov.in) - Right to Information
  - District Administration (sheohar.nic.in)
  - Various other Bihar state portals for specific services

**Generated Assets:**
- **AI-Generated Banners:** Five high-quality 16:9 images representing Sheohar's civic life, infrastructure, environment, digital governance, and community

**Potential Future Integrations:**
- Payment gateways for online tax and bill payments (currently links to Bihar portals)
- Government databases for certificate verification
- SMS/Email notification services
- Document management systems for digital certificates
- Mapping services for ward-wise location features
- Backend API for authentication (Citizen/Admin login functionality)