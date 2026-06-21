# Prashant Singh — Premium Developer Portfolio

A state-of-the-art, cinematic developer portfolio designed with modern glassmorphism aesthetics, responsive layouts, and highly interactive motion experiences.

---

## 🚀 Live Demo
Visit the live portfolio: [theprashantsingh.vercel.app](https://theprashantsingh.vercel.app/)

---

## 🛠️ Technology Stack
- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript (Strict type safety)
- **Styles & Theme**: Tailwind CSS & CSS Variables (Unified Design System)
- **Animations**: Framer Motion & Custom Micro-interactions
- **Icons**: Lucide React
- **Deployment**: Netlify / Vercel

---

## ✨ Features
1. **Interactive Project Showcases**:
   - Simulated browser mockups containing real product screenshots.
   - Long-duration mouse-hover scroll transitions displaying full application landing pages.
   - Dynamic accent border glowing effects and scale-up zoom triggers.
   - Fully clickable browser frames opening live demo links in new tabs.
2. **Immersive UI/UX**:
   - Custom animated page loader with percentage progression counters and orbital indicator rings.
   - Custom magnetic button primitives for organic-feeling contact items.
   - Elegant dark theme utilizing depth, frosted-glass panels, and gradients.
3. **Structured & Extensible Data**:
   - Single-source data schema in `lib/data.ts` to easily modify projects, publications, education timeline, and skills.

---

## 📂 Project Structure
```bash
├── app/                  # Next.js app router pages, layout, and global styles
├── components/
│   ├── primitives/       # Magnetic buttons, custom page-loaders, scroll bars
│   ├── sections/         # Individual page sections (Hero, About, Projects, Contact...)
│   └── ui/               # Essential core design primitives (Button, Dialog)
├── lib/
│   ├── data.ts           # Schema models and data content (skills, projects, etc.)
│   └── utils.ts          # Helper utilities (cn merge)
├── public/               # Static images, project screenshots, resume PDF
```

---

## ⚙️ Local Development Setup

To run this project locally, clone the repository and install its dependencies:

```bash
# Clone the repository
git clone https://github.com/prashantsingh30/Prashant_Portfolio.git

# Navigate to the project directory
cd Prashant_Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio live.

### Commands
- `npm run dev` - Starts the development server.
- `npm run build` - Creates an optimized production build.
- `npm run start` - Starts the production build server.
- `npm run typecheck` - Compiles and verifies TypeScript types.
- `npm run lint` - Validates codebase formatting rules.
