# Sheohar Nagar Parishad Website

Official website for Sheohar Nagar Parishad, Bihar - A modern, responsive civic administration portal built with pure HTML & CSS.

## 🌟 Features

- **100% HTML & CSS** - No JavaScript dependencies
- **Fully Responsive** - Works on all devices
- **Multiple Pages** - Home, About, Services, Contact
- **Modern Design** - Gradients, animations, and smooth transitions
- **Organized Structure** - Clean, maintainable codebase
- **Highlighted Developer Credit** - Designed and Developed by **Appentus Technologies**

## 📁 Project Structure

```
sheohar-nagar-parishad/
│
├── index.html                 # Homepage
├── about.html                 # About Us page
├── contact.html               # Contact page
├── services.html              # Services page
│
├── assets/
│   ├── css/
│   │   ├── style.css         # Main styles
│   │   ├── responsive.css    # Responsive media queries
│   │   └── utils.css         # Utility classes
│   │
│   ├── js/                   # JavaScript folder (empty - pure HTML/CSS site)
│   ├── images/               # Image assets folders
│   ├── fonts/                # Custom fonts
│   └── vendor/               # Third-party libraries
│
├── components/               # HTML component templates
│   ├── header.html          # Header template (manually copied to each page)
│   ├── footer.html          # Footer template (manually copied to each page)
│   └── navbar.html          # Navigation template
│
├── pages/                   # Page-specific sections (for future use)
│   ├── citizen-services/
│   ├── property-tax/
│   └── gallery/
│
└── README.md               # This file
```

## 📝 Component Usage

Since this is a **pure HTML/CSS site** (no JavaScript or server-side includes), the `/components/` folder contains **template files** for reusable sections like headers and footers. 

**How it works:**
- Component templates in `/components/` serve as the source of truth
- Each HTML page manually includes a copy of these components
- To update headers/footers site-wide, edit the component template, then manually update each page

**Why this approach:**
- ✅ No JavaScript required
- ✅ No build process or server-side includes needed
- ✅ Works on any static hosting
- ✅ Clean separation of concerns

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5000`

## 🎨 Features

### CSS Organization (Properly Split)

The CSS is cleanly separated for maintainability:

- **style.css** - Core styles, CSS variables, base components (NO @media queries)
- **responsive.css** - ALL @media queries for responsive behavior
- **utils.css** - Utility classes for quick styling

All three files are loaded in each HTML page in this order.

### Color Palette

- Primary: `#ea580c` (Orange)
- Dark: `#111827`
- Multiple gradient colors for icons

## 📱 Pages

- **Home** - Hero banner, services, announcements
- **About** - Organization history, leadership, values
- **Services** - All citizen services catalog
- **Contact** - Contact information, office hours

## 👨‍💻 Developer

**Designed and Developed by Appentus Technologies**

---

© 2025 Sheohar Nagar Parishad. All rights reserved.