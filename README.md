# Krishna Singh - Portfolio Website

A complete, production-ready, recruiter-friendly personal portfolio website.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.4-38bdf8.svg?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3.2-ff007f.svg?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-5.3.4-646cff.svg?style=flat-square&logo=vite)](https://vitejs.dev/)

## Features

- **Brittany Chiang Inspired Style**: A sleek, minimal layout optimized for technical recruiters.
- **Dark Mode Support**: Seamless transition between light and dark mode using custom Tailwind config and localStorage persistence.
- **Scroll Spy**: Highlights active section in navigation dynamically as you scroll.
- **Typewriter Effect**: An interactive typing effect cycling through professional roles in the Hero section.
- **Animated with Framer Motion**: Scroll-triggered fade-ins and slide animations across components.
- **Code Splitting**: Sections loaded lazily using React.lazy and Suspense for high performance.
- **SEO Ready**: Comprehensive metadata, open graph fields, and structured HTML elements.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── context/
│   └── ThemeContext.tsx
├── hooks/
│   └── useScrollSpy.ts
├── data/
│   └── portfolioData.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## Setup Instructions

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Build the production application:
   ```bash
   npm run build
   ```

4. Preview the built application:
   ```bash
   npm run preview
   ```

## Screenshots

*(Screenshots of Dark Mode and Light Mode will go here)*

## Live Demo

A live demo is available at: [Live Demo Link Placeholder](https://krishnasingh.dev/)
"# Portfolio" 
