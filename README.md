# Thiago Cabral - Portfolio Website

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple)](https://getbootstrap.com/)
[![Firebase](https://img.shields.io/badge/Hosted%20on-Firebase-orange)](https://firebase.google.com/)

A modern personal portfolio website featuring multilingual support (English/Portuguese), responsive design, and dynamic content loading. Built with React.js and Bootstrap, deployed on Firebase Hosting.



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
- React 18 + React Router 6
- React Bootstrap 5.3
- FortAwesome Icons
- React Helmet (SEO)

### Development
- Node.js (v14+)
- Create React App (CRA)
- Firebase CLI

### Hosting
- Firebase Hosting
- Global CDN distribution

---

## 📂 Project Structure

```bash
📁 larbaco.com
├── 📂 public/             # Static files
│   ├── manifest.json
│   ├── robots.txt
│   └── README.md
│
├── 📂 src/
│   ├── 📂 assets/images/  # All visual assets
│   ├── 📂 components/     # Reusable components
│   │   ├── cards/
│   │   ├── carousel/
│   │   └── layout/
│   │
│   ├── 📂 pages/          # Page components
│   │   ├── about/
│   │   ├── contact/
│   │   ├── home/
│   │   ├── projects/      # (Multi-language JSON files)
│   │   └── resume/        # Sub-application
│   │
│   ├── config/            # Configuration files
│   ├── routes.js          # Main routing
│   └── index.js           # Entry point
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

### 3️⃣ Start Development Server
```bash
npm start
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
- Update JSON files in `public/data/`
- Replace images in `public/images/`
- Modify translations in **APP_CONFIG** (`App.js`)


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
[LinkedIn](#)

