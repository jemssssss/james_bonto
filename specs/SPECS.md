# PROJECT SPECIFICATION: Personal Website (CV + Portfolio)

## 1. OVERVIEW

Build a *single-page personal website* based on the provided stitch.zip design output.

The website must:
- Be *frontend-only* (NO backend, NO server, NO database)
- Be deployable via *GitHub Pages*
- Be built using:
  - React (Vite)
  - Tailwind CSS
- Be fully *responsive (mobile + desktop)*
- Be *fast-loading and lightweight*

The design, layout, and structure must follow the assets and references inside:
`stitch.zip`


---

## 2. CORE REQUIREMENTS

### 2.1 Architecture
- Use *Vite + React*
- Use *functional components only*
- Use *Tailwind CSS for styling*
- No external UI frameworks (e.g., no MUI, Bootstrap)

### 2.2 Constraints
- ❌ No backend APIs
- ❌ No authentication
- ❌ No database
- ❌ No server-side rendering
- ✅ Static assets only
- ✅ GitHub Pages compatible (vite build output)

---

## 3. SITE STRUCTURE

### Sections (Single Page Scroll)

Implement the following sections in order:

1. Hero
2. About (Terminal Style)
3. Skills
4. Projects (3 items)
5. Experience (Timeline)
6. Education
7. Contact
8. Resume Download

Each section must:
- Have a unique id for navigation
- Support scroll navigation

---

## 4. COMPONENT REQUIREMENTS

### 4.1 Navigation
- Floating navbar
- Highlights active section
- Includes scroll progress indicator
- Smooth scrolling

---

### 4.2 Hero Section
- Full viewport height
- Name + tagline
- CTA buttons:
  - View Projects (scroll)
  - Download Resume (PDF)
- Background animation (lightweight)

---

### 4.3 About Section (Terminal Component)
- Simulated terminal UI
- Typing animation
- Monospace font
- Displays:
  - Introduction
  - Interests
  - Personality traits
  - Hobbies

---

### 4.4 Skills Section
- Grid layout
- Categorized:
  - Embedded Systems
  - Web Development
  - Tools
- Hover effects

---

### 4.5 Projects Section
- Exactly 3 project cards
- Each card:
  - Image
  - Title
  - Description
- Click opens modal or expanded view

---

### 4.6 Experience Section (Timeline)
- Vertical timeline
- Scroll-triggered animations
- Highlight active item

---

### 4.7 Education Section
- Clean, minimal layout

---

### 4.8 Contact Section
- Email
- GitHub link
- Clickable buttons

---

### 4.9 Resume Download
- Button linking to /public/resume.pdf
- Must trigger download

---

## 5. DESIGN SYSTEM

### Theme
- Dark mode
- Turquoise accent color

### Typography
- Sans-serif (body)
- Monospace (terminal / technical UI)

### Animations
- Moderate only:
  - Fade-in
  - Slide-in
  - Hover transitions
- Avoid heavy libraries

---

## 6. INTERACTIVITY

### Required Features
- Smooth scrolling
- Cursor hover effects (subtle physics)
- Section reveal on scroll

### Optional (if lightweight)
- IntersectionObserver-based animations
- CSS-based cursor effects

---

## 7. PERFORMANCE REQUIREMENTS

- Lighthouse score target:
  - Performance ≥ 90
  - Accessibility ≥ 90
- Lazy load images
- Minimize JS bundle size
- Avoid unnecessary dependencies

---

## 8. RESPONSIVENESS

### Mobile
- Stacked layout
- Touch-friendly spacing
- Simplified animations

### Desktop
- Grid layouts
- Enhanced spacing
- Full interactions

---

## 9. FILE STRUCTURE

Expected structure:


/src
/components
/sections
/hooks
/assets
App.jsx
main.jsx

/public
resume.pdf

index.html
tailwind.config.js
vite.config.js

`

---

## 10. IMPLEMENTATION RULES

- Use reusable components
- Use Tailwind utility classes (avoid inline CSS)
- Keep components modular
- Add meaningful comments in code

---

## 11. TEST VALIDATION

The implementation is considered COMPLETE only if:

### Build Test
- npm install runs without errors
- npm run build succeeds
- dist/ folder is generated

### Preview Test
- npm run preview works locally

### Navigation Test
- All navbar links scroll correctly
- Active section highlighting works

### Responsiveness Test
- Works on:
  - Mobile (375px width)
  - Tablet (768px)
  - Desktop (1440px)

### Performance Test
- No major layout shifts
- Images load properly
- No console errors

### Resume Test
- Resume button downloads PDF successfully

---

## 12. DOCUMENTATION REQUIREMENTS

Generate a README.md including:

- Project overview
- Tech stack
- Setup instructions:
  
  npm install
  npm run dev
  npm run build
`

* Deployment instructions for GitHub Pages
* Folder structure explanation

---

## 13. DEPLOYMENT REQUIREMENTS

Prepare for GitHub Pages:

* Use relative paths
* Configure vite.config.js with correct base
* Ensure static compatibility

---

## 14. INPUT FILES

* Use stitch.zip as reference for:

  * Layout
  * Design
  * Content structure

---

## 15. OUTPUT EXPECTATION

The agent must output:

* Full working React project
* Clean, readable, maintainable code
* Ready-to-deploy static site

---

## FINAL INSTRUCTION

Follow the design intent from stitch.zip, but prioritize:

* Clean code
* Performance
* Responsiveness
* Professional presentation for recruiters

Do NOT over-engineer. Keep it elegant and efficient.