# HidayaSoft Website

> Digital solutions for the Ummah

## Overview

HidayaSoft is a faith-conscious software studio building modern, trustworthy digital solutions for the Ummah. From interest-free microfinance to business and school management and tools for memorising the Qur'an, our products combine modern technology with timeless Islamic values. Part of our income is devoted to charity through Amana Fund.

## 🌐 Live Website

Visit us at: **[hidayasoft.com](https://hidayasoft.com)**

## 🚀 Our Products

- **[Amana Fund](https://www.amanafund.org/)** — Interest-free microfinance (Qard Hasan) helping families build sustainable income. We built their website and management software *(Live)*
- **HidayaERP** — Finance & operations: inventory, customers & suppliers, purchase & sales records, payments, and customised dashboards *(In Development)*
- **School Management** — Tracks teachers, students, staff, and investors with attendance, expense management, and salary & tuition handling *(In Development)*
- **Hifzul Qalb** — A companion app for memorising and revising the Qur'an, with gentle reminders for the verses you tend to forget *(In Progress)*

## 🤲 Charitable Commitment

Part of HidayaSoft's income flows to **Amana Fund**, providing interest-free loans that help families build sustainable sources of income — making every product a form of sadaqah jariyah, in shaa Allah.

## 🛠️ Technology Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Internationalisation**: Custom React context (English + বাংলা)
- **Deployment**: GitHub Pages
- **Build Tool**: Vite

## 🌍 Languages

The site is fully bilingual and can be switched instantly with the **EN / বাং** toggle in the header:

- **English** — default
- **বাংলা (Bangla)** — full translation of every section, with Bengali numerals and the `Hind Siliguri` typeface

The chosen language is remembered across visits via `localStorage`.

## 🎨 Design Philosophy

Our website reflects our values through:
- A refined palette of **deep forest green**, **warm gold**, and a **soft ivory** canvas (hidaya = guidance)
- Editorial serif headings (Playfair Display) paired with a clean sans body (Inter)
- Smooth scroll-reveal animations and an inspiring, faith-conscious tone
- Light and dark themes with seamless transitions
- Product UI “snippet” mockups that preview each app at a glance
- Respectful integration of Qur'anic verses and Arabic typography (Amiri)

## 🏗️ Local Development

```bash
# Clone the repository
git clone https://github.com/hidayalab/hidayalab.github.io.git

# Navigate to project directory
cd hidayalab.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── public/                 # Static assets (logo-icon.png, etc.)
├── src/
│   ├── components/         # React components
│   │   ├── BrandMark.jsx        # HidayaSoft logo (logo-icon.png)
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ProductPreviews.jsx  # In-card product UI mockups
│   │   ├── Impact.jsx           # Charity / Amana Fund commitment
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Reveal.jsx           # Scroll-reveal animation helper
│   │   ├── ThemeToggle.jsx      # Light / dark switch
│   │   └── LanguageToggle.jsx   # EN / বাং switch
│   ├── contexts/
│   │   ├── ThemeContext.jsx     # Light / dark theme state
│   │   └── LanguageContext.jsx  # Translations + language state
│   ├── index.css           # Tailwind CSS + design system
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── index.html              # HTML template with meta tags
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite configuration
```

## 🤝 Contributing

We welcome contributions from developers, designers, and community members who share our vision of building ethical technology.

### Code Standards
- Follow Islamic principles in all development
- Use clean, documented, and modular code
- Maintain accessibility standards
- Test thoroughly before submitting

## 📧 Contact

- **Email**: [hidayasoft@gmail.com](mailto:hidayasoft@gmail.com)
- **Website**: [hidayasoft.com](https://hidayasoft.com)

## 📜 Values & Mission

**Mission**: To build digital solutions for the Ummah that are modern, trustworthy, and purpose-driven — empowering individuals, businesses, schools, and charities.

**Values**:
- Faith-first development guided by Islamic principles
- Trust & privacy with the highest ethical standards
- Excellence (ihsan) in craft, and giving back to the community

---

*"وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ"*  
*"And that there is nothing for man except what he strives for" - Quran 53:39*

**Built with ❤️ for the Ummah**