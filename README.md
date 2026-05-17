# Aditya Panda — Developer Portfolio

A premium, futuristic developer portfolio built with React + Vite + Tailwind CSS + Framer Motion.

**Live URL:** `https://aditya510.github.io/myportfolio`

## Tech Stack

- **React 18** + **Vite 5** — lightning-fast build tooling
- **Tailwind CSS v3** — utility-first styling with custom design tokens
- **Framer Motion** — fluid animations and page transitions
- **react-intersection-observer** — scroll-triggered reveal animations
- **lucide-react** — crisp icon system

## Design System

- **Aesthetic:** Neural Terminal — obsidian dark base with electric cyan/emerald accents
- **Fonts:** Syne (display), DM Sans (body), JetBrains Mono (code/labels)
- **Features:** Custom cursor, canvas background with particles, scanline overlay, noise texture, glassmorphism panels, glitch text effect, typewriter animation

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:5173/myportfolio/
```

## Deployment to GitHub Pages

### One-time Setup

1. **Create the repo** on GitHub as `myportfolio` (or any name)
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**

### Deploy

```bash
# Initialize git
git init
git add .
git commit -m "feat: initial portfolio"

# Push to GitHub
git remote add origin https://github.com/aditya510/myportfolio.git
git branch -M main
git push -u origin main
```

GitHub Actions will automatically build and deploy on every push to `main`.

Your site will be live at: **`https://aditya510.github.io/myportfolio/`**

### Custom Domain (Optional)

To use `adityapanda.dev` or similar:
1. Add a `CNAME` file in `/public/` with your domain
2. Configure DNS: point CNAME to `aditya510.github.io`
3. Enable in GitHub Settings → Pages → Custom domain

## Folder Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Background.jsx      # Canvas particle system
│   │   ├── Navbar.jsx          # Fixed nav with scroll detection
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useCursor.js        # Custom cursor tracking
│   │   └── useTypewriter.js    # Typewriter effect hook
│   ├── sections/
│   │   ├── Hero.jsx            # Landing + terminal card
│   │   ├── Experience.jsx      # Timeline-style work history
│   │   ├── Projects.jsx        # Expandable project cards
│   │   ├── Skills.jsx          # Animated skill bars
│   │   ├── Education.jsx       # Education + achievements
│   │   └── Contact.jsx         # Contact links + CTA
│   ├── App.jsx                 # Root composition
│   ├── data.js                 # All portfolio content (edit here)
│   ├── index.css               # Global styles + design tokens
│   └── main.jsx                # React entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Customization

All content lives in `src/data.js` — edit your name, experience, projects, and skills there.
All visual tokens (colors, fonts, effects) live in `src/index.css` and `tailwind.config.js`.
