# Revno RCM — Full React Website

A complete React + Vite clone of the Revno RCM full website.

## 📦 Project Structure

```
revno-rcm/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── RCM.jsx
        ├── Billing.jsx
        ├── HIPAA.jsx
        ├── Coding.jsx
        ├── Denial.jsx
        ├── Credentialing.jsx
        └── Contact.jsx
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open http://localhost:5173

### 3. Build for production
```bash
npm run build
```
Output goes to `dist/` folder.

### 4. Preview production build
```bash
npm run preview
```

## 📄 Pages Included

| Page | Route (internal) | Description |
|------|-----------------|-------------|
| Home | `home` | Hero, stats, service tiles, specialties, CTA |
| About | `about` | Company overview, certifications, EHR integrations |
| RCM Services | `rcm` | 7-step RCM process flow |
| Medical Billing | `billing` | Specialty billing, clean claim illustration |
| HIPAA Compliance | `hipaa` | Shield illustration, safeguards |
| Medical Coding | `coding` | ICD-10, CPT, HCPCS capabilities |
| Denial Management | `denial` | Funnel illustration, recovery process |
| Credentialing | `cred` | Credential card, payer list |
| Contact Us | `contact` | Live form with success toast notification |

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **Plain CSS** — Custom design system (no Tailwind needed)
- **No external UI libraries** — fully self-contained

## ✨ Features

- ✅ Sticky navbar with dropdown menu
- ✅ Mobile hamburger menu
- ✅ Sub-tab navigation bar
- ✅ 9 fully built pages
- ✅ SVG illustrations on every page
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll on navigation
- ✅ Contact form with success toast
- ✅ CTA sections on every page
- ✅ HIPAA / AAPC / AHIMA branding

## 📧 Customization

- Update company info in `src/pages/Contact.jsx`
- Change colors in `src/index.css` (CSS variables in `:root`)
- Add real form submission (EmailJS, Formspree, etc.) in `Contact.jsx`
