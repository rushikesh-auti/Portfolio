# Personal Portfolio

A responsive portfolio website built with React, Vite, and Tailwind CSS. It
showcases selected projects, technical skills, education, certifications, and
contact information, with a theme toggle and an EmailJS-powered contact form.

**Live site:** [rushikeshauti.vercel.app](https://rushikeshauti.vercel.app)

## Features

- Responsive layout and navigation for desktop, tablet, and mobile
- Light theme by default, dark theme toggle, and saved theme preference
- Hero, About, Skills, Projects, Certifications, and Contact sections
- Project cards linking to live demos and GitHub repositories
- Certificate verification links
- Resume viewing and download
- Contact form powered by EmailJS
- Accessible focus styles and reduced-motion support

## Technology stack

| Area | Technologies |
| --- | --- |
| UI | React, JavaScript, Tailwind CSS |
| Build tooling | Vite |
| Icons | Lucide React, React Icons |
| Contact form | EmailJS |
| Hosting | Vercel |

## Project structure

```text
Portfolio/
├── old-portfolio/                 # Previous static portfolio
├── portfolio-react/               # Active React application
│   ├── public/                    # Static assets and site metadata
│   ├── src/
│   │   ├── assets/                # Profile image and resume
│   │   ├── components/            # Page sections and shared UI
│   │   ├── config/                # EmailJS configuration
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/rushikesh-auti/Portfolio.git
cd Portfolio/portfolio-react
npm install
npm run dev
```

Vite prints the local development URL in the terminal (typically
`http://localhost:5173`).

## EmailJS configuration

Create a `.env` file in `portfolio-react` and provide the EmailJS service ID,
template ID, and public key:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These `VITE_` values are included in the browser bundle. Use only the EmailJS
public key; never expose an EmailJS private key in client-side code.

## Build and lint

Run from `portfolio-react`:

```bash
npm run lint
npm run build
npm run preview
```

## Deployment

The site is deployed on Vercel. Set the Vercel project root directory to
`portfolio-react` and configure the three EmailJS environment variables in the
Vercel project settings. Redeploy after changing the variables because Vite
reads them during the build.

## Preview

### Light theme

<img width="1917" height="911" alt="Portfolio website in light theme" src="https://github.com/user-attachments/assets/87956b71-99a2-454e-b690-abb091ad4d4c" />

### Dark theme

<img width="1902" height="906" alt="Portfolio website in dark theme" src="https://github.com/user-attachments/assets/c8000459-0ea9-4c1f-952c-907c57254b8d" />

## Developer

**Rushikesh Auti**
