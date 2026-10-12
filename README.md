# EAK International School Website

**Frontend Development Assignment — EAK Pustak Pvt. Ltd.**

**Live Demo:** [https://eak-international-school-liart.vercel.app/]  
**GitHub Repository:** [https://github.com/Aditya0400000/eak-international-school.git]

## About the Project

A responsive multi-page website for a fictional K–12 school, built with React and Tailwind CSS.
It presents a clean Home, About and Admissions experience with smooth navigation, an FAQ
accordion and a working admission enquiry form that validates input in the browser.

## Features

- Three routed pages (Home, About, Admissions) plus a 404 page, with a sticky navbar that shows the active link and an accessible mobile menu.
- Rich section layouts: hero, academics, facilities, achievements, testimonials, campus overview, admission process, important dates and FAQs.
- Admission enquiry form with client-side validation, inline error messages and a success confirmation.
- Fully responsive across mobile, tablet and desktop.
- Accessible details like a skip-to-content link, keyboard-friendly controls, focus styles and image alt text.
- Per-page browser titles and meta descriptions.

## Tech Stack

- React 19
- React Router 7
- Vite 8
- Tailwind CSS 4
- Lucide React (icons)

## Project Structure

```
├── index.html                # HTML entry point
├── public/                   # Static assets (favicon, SPA redirect file)
├── src/
│   ├── assets/images/        # SVG illustrations used across the site
│   ├── components/
│   │   ├── common/           # Reusable UI (Button, Card, Container, Section, etc.)
│   │   ├── layout/           # Navbar, Footer, Layout, ScrollToTop
│   │   ├── home/             # Home page sections
│   │   ├── about/            # About page sections
│   │   └── admissions/       # Admissions page sections
│   ├── hooks/                # Custom hook for page title and meta description
│   ├── pages/                # Home, About, Admissions, NotFound
│   ├── App.jsx               # Routes and shared layout
│   ├── main.jsx              # App entry point
│   └── index.css             # Tailwind import and theme tokens
├── package.json
└── vite.config.js
```

## Run Locally

```bash
npm install
npm run dev
npm run build
```

## Note

This is a fictional school website created for a frontend assignment. All content is made up,
and the admission form is frontend-only — it validates and shows a success message but does not
send or store any data.
