# Krishna Singh — Personal Portfolio Website

A production-ready, highly optimized, and recruiter-friendly personal portfolio website showcasing full-stack development capabilities, algorithms experience, and system design skills. 

Built with a responsive, premium cosmic dark theme, smooth motion transitions, and type-safe components.

**Live Demo:** [https://krishnasingh-dev.vercel.app/](https://krishnasingh-dev.vercel.app/)

---

## 🚀 Key Features

*   **Premium Cosmic Dark Design**: Implements a high-end dark aesthetic (`bg-[#030014]`) with smooth gradients, glassmorphism, and radial glow highlights.
*   **Slide-In Mobile Navigation**: Custom drawer menu sliding in from the right viewport (`x: '100%'` to `x: 0`) with synchronized backdrop blur and staggered animation entries.
*   **Dynamic Scroll Spy**: Tracks user scrolling in real-time, automatically highlighting active sections in the desktop and mobile navigation lists.
*   **Interactive Hero Section**: Includes a smooth typewriter role animator and a floating user card containing quick stats (DSA solutions, certifications, B.Tech info).
*   **Recruiter Focused Projects Grid**: Highlights core projects (MediDost, SyncTube, Java E-Commerce Engine) using detailed, impact-oriented bullet points outlining system architectures.
*   **Fully Type-Safe & Build Verified**: Written entirely in TypeScript with strict compile-time verification.
*   **Optimized Performance**: Code-splitting using `React.lazy` and `Suspense` for faster initial page loads and high Lighthouse scores.

---

## 🛠️ Tech Stack & Dependencies

*   **Core**: React (v18.3.1), TypeScript (v5.5.3)
*   **Bundler**: Vite (v5.3.4)
*   **Styling**: Tailwind CSS (v3.4.4) for custom grid systems and utility styling
*   **Animations**: Framer Motion (v11.3.2) for springs, tweens, and staggered entrance transitions
*   **Icons**: React Icons (v5.2.1) providing access to FontAwesome, Feather, and SimpleIcons

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx            # Navigation header & right-sliding mobile drawer
│   ├── Hero.tsx              # Splash section with typewriter role animator & stats card
│   ├── About.tsx             # Interactive split-column bio and academic details
│   ├── Skills.tsx            # Categorized list of technical skills with hover glow effects
│   ├── Projects.tsx          # Dynamic projects portfolio grid (filtered, non-redundant)
│   ├── FeaturedProject.tsx   # Detailed showcase card for primary high-impact project
│   ├── Experience.tsx        # Structured timeline of educational qualifications
│   ├── Contact.tsx           # Contact form with validation and styling overrides
│   └── Footer.tsx            # Site footer containing copyright and quick social icons
├── context/
│   └── ThemeContext.tsx      # Dark mode lock configurations
├── hooks/
│   └── useScrollSpy.ts       # Active section tracker utility
├── data/
│   └── portfolioData.ts      # Structured site copy (personalInfo, projects, experiences)
├── types/
│   └── index.ts              # Global TypeScript interfaces (Project, Skill, Experience)
├── App.tsx                   # Main layout container
└── main.tsx                  # DOM entrypoint
```

---

## 💻 Local Development Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or higher is recommended).

### Setup Steps

1.  **Clone the repository and navigate to the project directory:**
    ```bash
    git clone https://github.com/Krishnasingh9999/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the local Vite development server:**
    ```bash
    npm run dev
    ```
    The server will spin up, typically at `http://localhost:5173/` (or next available port).

4.  **Perform TypeScript checking and build the production bundle:**
    ```bash
    npm run build
    ```

5.  **Locally preview the production bundle:**
    ```bash
    npm run preview
    ```

---

## 🎨 Verification Status

This project has been thoroughly tested on mobile, tablet, and desktop viewports using automated Playwright browser simulations. All layouts, animations, transitions, and click behaviors render without overflow or transparency issues.
