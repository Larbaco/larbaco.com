
# Thiago Cabral - Portfolio Website

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple)](https://getbootstrap.com/)
[![Firebase](https://img.shields.io/badge/Hosted%20on-Firebase-orange)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Bundler-Vite-green)](https://vitejs.dev/)

A modern personal portfolio website featuring multilingual support (English/Portuguese), responsive design, and dynamic content loading. Built with React.js, Vite, and Bootstrap, deployed on Firebase Hosting.

---

## 🚀 Quick Start

Want to see it running quickly? Follow these steps:

```bash
# 1. Clone and install
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install

# 2. Start development server
npm start

# 3. Open http://localhost:3000
```

That's it! The site will be live in your browser with hot reload enabled.

---

## 🆕 Recent Updates

### Fixed CRITICAL Bugs (2026-04-09)
- ✅ Fixed **favicon.ico 404 error** by correcting file path to `/images/favicon.ico`
- ✅ Fixed **logo192.png console warning** by correcting file path to `/images/logo192.png`
- ✅ Added **og-global.jpg** for proper social media sharing previews (Facebook, Twitter, etc.)

---

## ✨ Features

- **Multilingual Support**: English/Portuguese toggle with context API
- **Dynamic Resume**: JSON-powered CV with collapsible sections
- **Project Gallery**: Card-based showcase with demo/code links
- **SEO Optimization**: React Helmet for meta tags and social media cards
- **PWA Ready**: Service worker configuration (unregistered by default)
- **Responsive Design**: Mobile-first approach with Bootstrap grid
- **Contact Integration**: Direct email/phone/LinkedIn links
- **Theme Management**: Bootstrap-based styling with custom CSS

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** + **React Router 6** — UI framework and routing
- **React Bootstrap 5.3** — Component library
- **Vite** — Build tool and dev server (faster than CRA)
- **React Helmet** — SEO meta tag management
- **FortAwesome** — Icon library
- **Bootstrap 5.3** — CSS framework

### Development
- **Node.js (v18+)** — Runtime environment
- **npm** — Package manager
- **Firebase CLI** — Deployment tool

### Hosting & Infrastructure
- **Firebase Hosting** — Static site hosting with global CDN
- **Image optimization** — OG images for social sharing
- **PWA icons** — 192x192 and 512x512 for mobile apps

---

## 📂 Project Structure

```bash
larbaco.com/
├── public/
│   ├── data/                    # JSON files for resume content
│   ├── images/                  # Static assets (favicon, PWA icons, OG images)
│   ├── manifest.json            # PWA manifest
│   ├── robots.txt               # Search engine directives
│   └── index.html               # HTML template
├── src/
│   ├── assets/
│   │   └── images/              # Source images (project screenshots, avatars)
│   ├── components/
│   │   ├── cards/               # Reusable card components
│   │   ├── carousel/            # Hero carousel component
│   │   ├── layout/              # Navbar, Footer, Hero
│   │   └── PrintButton.js       # Resume print functionality
│   ├── pages/
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── home/                # Home/Hero page
│   │   ├── projects/            # Project gallery
│   │   ├── resume/              # Resume/CV page with print support
│   │   └── styles.css           # Per-page styles
│   ├── App.jsx                  # Main app with routing and language context
│   ├── index.jsx                # React entry point (Vite)
│   └── global.css               # Global styles and CSS variables
├── build/                       # Production build output (firebase deploy)
├── package.json
├── vite.config.js               # Vite configuration
├── firebase.json                 # Firebase Hosting config
├── index.html                   # HTML template (root entry)
├── BUG_DOSSIER.md               # Bug tracking document
└── CLAUDE.md                    # AI assistant instructions
```

---

## 💻 Installation

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start Development Server (Vite)
```bash
npm start
```
Dev server runs on `http://localhost:3000` with hot module replacement (HMR).

**Note:** If you prefer to use the old Create React App CLI:
```bash
npx create-react-app@latest . --template cra-template-vite  # Not recommended
```

---

## 🚀 Deployment

### 1️⃣ Install Firebase CLI
```bash
npm install -g firebase-tools
```

### 2️⃣ Build Production Version
```bash
npm run build
```

### 3️⃣ Deploy to Firebase
```bash
firebase login
firebase init
firebase deploy
```

---

## ⚙️ Configuration

### 🔧 Add Your Content

#### Resume Content
- Update JSON files in `src/pages/resume/en.json` (English)
- Update JSON files in `src/pages/resume/pt.json` (Portuguese)
- Modify translations in **APP_CONFIG** (`src/App.jsx`)

#### Project Gallery
- Update projects array in `src/pages/projects/en.json`
- Update projects array in `src/pages/projects/pt.json`
- Add project images to `src/assets/images/`
- Update `manifest.json` with your PWA name and colors

#### Images
- **Favicon:** Place `favicon.ico` in `public/images/`
- **PWA Icons:** Add `logo192.png` and `logo512.png` in `public/images/`
- **OG Images:** Add social sharing images (1200x630 recommended) in `public/images/`
- **Project Thumbnails:** Add screenshots to `src/assets/images/`

#### Styling
- Edit `src/global.css` for global styles
- Edit page-specific styles in `src/pages/*/styles.css`
- Use CSS custom properties (variables) for consistent theming



---

## 🤝 Contributing

### 1️⃣ Fork the Project

### 2️⃣ Create Your Feature Branch
```bash
git checkout -b feature/amazing-feature
```

### 3️⃣ Commit Changes
```bash
git commit -m 'Add some amazing feature'
```

### 4️⃣ Push to Branch
```bash
git push origin feature/amazing-feature
```

### 5️⃣ Open a Pull Request

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Images Not Loading (404 Errors)
**Symptom:** Favicon, PWA icons, or project images show broken links
**Solution:**
- Verify file paths in `index.html` and `src/App.jsx`
- Ensure images exist in `public/images/` or `src/assets/images/`
- Check `import.meta.env.BASE_URL` in React components

#### 2. Social Media Cards Not Showing
**Symptom:** Open Graph tags display incorrectly on Facebook/Twitter
**Solution:**
- Ensure `og-global.jpg` exists in `public/images/`
- Verify image dimensions (1200x630 recommended)
- Check `og:image` paths in `src/App.jsx`

#### 3. Mobile Navigation Broken
**Symptom:** Navbar disappears on mobile devices
**Solution:**
- Update Bootstrap classes to use responsive utilities
- Check navbar breakpoints in `src/global.css`

#### 4. Language Switching Not Working
**Symptom:** UI text doesn't update when toggling languages
**Solution:**
- Verify `LanguageContext` usage in components
- Check translation keys match between EN/PT JSON files

#### 5. Build Fails
**Symptom:** `npm run build` returns errors
**Solution:**
- Clear cache: `rm -rf node_modules .vite`
- Reinstall: `npm install`
- Check Node.js version: `node --version` (requires v18+)

---

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.

You are free to:
- **Share** — Copy and redistribute the material in any medium or format.
- **Adapt** — Remix, transform, and build upon the material.

Under the following terms:
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial** — You may not use the material for commercial purposes.

For more details, see [CC BY-NC 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/).

---

**Created by Thiago Cabral**
*DevOps Analyst & Full Stack Developer*

---

## 📊 Project Status

- ✅ **Production Ready** - Deployed on Firebase Hosting
- ✅ **Mobile Responsive** - Bootstrap 5.3 responsive grid
- ✅ **SEO Optimized** - Meta tags and social media cards
- ✅ **PWA Support** - Installable on mobile devices
- ✅ **Multilingual** - English/Portuguese support

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?logo=linkedin&logoColor=white&style=for-the-badge)](https://linkedin.com/in/thiagoo.cabral)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-darkgrey?logo=github&logoColor=white&style=for-the-badge)](https://github.com/thiago-cabral/larbaco.com)


