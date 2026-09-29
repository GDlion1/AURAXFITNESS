# ⚡ AURA X FITNESS — Web Application

> **A modern, responsive, and high-performance web platform built for AURA X FITNESS, a premium commercial athletic training facility in Lalbagh, Bengaluru.**

---

## 🚀 Overview & Key Features

- **Dynamic Hero Carousel**: Seamless dynamic slogan & facility showcase with automated progress tracking.
- **Interactive Floor Explorer**: Real-time interactive zone preview featuring heavy lifting floors, hack squat Arnold mural, cardio suite, and cold plunge recovery options.
- **Tiered Membership Portal**:
  - **Regular Annual Membership**: Direct WhatsApp enquiry system.
  - **Student Exclusive Rate**: Interactive eligibility submission & student ID upload flow with instant rate reveal (`₹9,999 / year`).
- **One Day Pass Sub-App**: Instant session pass booking (`₹299`) with live UPI QR code payment workflow & proof submission.
- **Mobile-First Responsive Layout**: Designed for seamless performance across modern smartphones, tablets, and wide desktop screens.

---

## 🛠️ Tech Stack & Tools

- **Frontend**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom Design System with CSS variables, Glassmorphism & HSL color tokens)
- **Deployment**: [Vercel](https://vercel.com/) (Single Page App routing)
- **Forms & Verification**: Google Apps Script Backend integration

---

## 📁 Directory Architecture

```text
AURAXFITNESS/
├── public/                 # Static public assets
│   ├── favicon.png         # Main site favicon
│   ├── favicon.ico         # Legacy favicon
│   └── images/             # Optimized web asset media
│       ├── gym/            # High-resolution gym facility shots
│       ├── logo/           # Brand logo emblems and insignia
│       ├── payment_qr/     # Payment UPI QR code image
│       └── trainer_img/    # Coach profiles
├── src/                    # Core source code
│   ├── main.jsx            # Main React application & routing logic
│   └── styles.css          # Global Design System & Component CSS
├── index.html              # HTML5 entry point & SEO meta tags
├── package.json            # Project dependencies and npm scripts
├── vercel.json             # Vercel rewrite configuration for SPA routes
└── README.md               # Project documentation
```

---

## ⚡ Quickstart / Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GDlion1/AURAXFITNESS.git
   cd AURAXFITNESS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License

Developed for **AURA X FITNESS, Lalbagh, Bengaluru**. All rights reserved.
