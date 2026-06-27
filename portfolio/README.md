# Rahul Raj R — Developer Portfolio

A production-grade, elite developer portfolio built with **React.js**, **HTML5**, and **pure CSS3**.
Zero external UI libraries — 100% bespoke design with CSS variables, Grid, and Flexbox.

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── Rahul_Raj_R_Resume_ATS95.docx   ← ⚠️ Copy your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          — Glassmorphism sticky nav
│   │   ├── Hero.jsx            — Full-viewport hero + typewriter
│   │   ├── MetricsTicker.jsx   — Animated counter metrics strip
│   │   ├── Skills.jsx          — Categorized skill pill grid
│   │   ├── Projects.jsx        — Project cards + GitHub links
│   │   ├── Experience.jsx      — Vertical timeline
│   │   ├── Achievements.jsx    — Hackathon & LeetCode highlights
│   │   ├── Education.jsx       — Academic background
│   │   ├── Certifications.jsx  — Certification badges
│   │   └── Contact.jsx         — Contact links + Footer
│   ├── data/
│   │   └── portfolioData.js    — ← All your real data lives here
│   ├── App.jsx
│   ├── index.css               — Complete design system (no frameworks)
│   └── main.jsx
├── package.json
└── vite.config.js
```

## ⚠️ Important — Resume Download

Copy your resume file into the `public/` folder:

```
public/Rahul_Raj_R_Resume_ATS95.docx
```

The Navbar "Download Resume" button links directly to this file.

## 🎨 Design System

| Token              | Value         |
|--------------------|---------------|
| Background primary | `#0b0f19`     |
| Background card    | `#111827`     |
| Accent cyan        | `#06b6d4`     |
| Accent indigo      | `#6366f1`     |
| Text primary       | `#f9fafb`     |
| Text secondary     | `#9ca3af`     |
| Font               | Inter (Google)|
| Code font          | JetBrains Mono|

## 🚀 Deployment

Deploy instantly to **Vercel** (recommended):

```bash
npm install -g vercel
vercel
```

Or to **Netlify**:

```bash
npm run build
# Upload the `dist/` folder to Netlify
```

## 🛠 Updating Content

All portfolio content is centralized in `src/data/portfolioData.js`.
Edit that single file to update any section — no component code changes needed.

---

Built by Rahul Raj R | rahulrajan9384@gmail.com
