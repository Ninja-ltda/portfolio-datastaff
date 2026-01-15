# Copilot Instructions for Github-Auto

## Project Overview
This is a professional portfolio site built with React, Vite, and Tailwind CSS. The main goal is to showcase digital presence and client statistics, with interactive UI and optimized performance.

## Architecture & Key Files
- **src/App.jsx**: Main React component, entry point for UI logic and layout.
- **src/main.jsx**: React app bootstrap and root rendering.
- **src/index.css**: Tailwind CSS styles.
- **index.html**: Main HTML template.
- **vite.config.js**: Vite build configuration.
- **tailwind.config.js**: Tailwind CSS configuration.
- **postcss.config.js**: PostCSS configuration.

## Developer Workflows
- **Install dependencies**: `npm install`
- **Start development server**: `npm run dev` (opens at http://localhost:3000)
- **Build for production**: `npm run build` (outputs to `dist/`)
- **Deploy**: Drag & drop `dist/` to Netlify or connect repo for auto-deploy.

## Project-Specific Patterns
- **Contact Info**: WhatsApp and Email are hardcoded in `src/App.jsx` (lines 28-29).
- **Statistics**: Updated in `src/App.jsx` (lines 33-38).
- **Google Maps Links**: Footer contains links for Lisbon, Setúbal, Portugal.
- **Icons**: Uses Lucide React for iconography.
- **Animations**: Canvas API for particle effects, smooth scroll progress bar.
- **Mobile-first**: Responsive design is prioritized.

## External Integrations
- **Netlify**: For production deployment.
- **Lucide React**: For icons.
- **Canvas API**: For custom animations.

## Conventions
- All styles use Tailwind CSS utility classes.
- No custom routing; single-page layout.
- All links and contact info are functional and visible in the UI.
- Performance and smooth animations are prioritized.

## Example: Adding a New Section
1. Create a new component in `src/`.
2. Import and use it in `App.jsx`.
3. Style with Tailwind classes in `index.css` if needed.

---
For more details, see [README.md](../README.md). Update this file if major architectural changes are made.
