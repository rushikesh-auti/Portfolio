# Personal Portfolio Website

A modern and responsive personal portfolio website built with **React, Vite, and Tailwind CSS**. The portfolio showcases my technical skills, featured projects, education, resume, and professional contact information.

## Live Demo

https://portfoliorushiz.vercel.app

## Overview

This portfolio serves as a central place to showcase my software development skills, projects, education, and professional background.

The design focuses on a clean and minimal user interface, responsive layouts, accessibility, and a smooth user experience across desktop, tablet, and mobile devices.

## Features

- Responsive design for desktop, tablet, and mobile devices
- Modern and clean user interface
- Responsive navigation with mobile hamburger menu
- Dark and light mode
- Persistent theme preference using localStorage
- Professional hero section
- About section with education details
- Technical skills section with technology icons
- Featured projects with GitHub and live demo links
- Resume view and download functionality
- Contact form integrated with EmailJS
- Contact information with GitHub and LinkedIn links
- Interactive hover and transition effects
- Component-based React architecture

## Technologies

- React
- Vite
- JavaScript
- Tailwind CSS
- React Icons
- Lucide React
- EmailJS

## Project Structure

```text
Portfolio/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── profile.jpg
│   │   │
│   │   └── resume/
│   │       └── Rushikesh_Auti_Resume.pdf
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── config/
│   │   └── emailjs.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Preview

### Light Mode

<img width="1902" height="911" alt="image" src="https://github.com/user-attachments/assets/3eeb5341-903f-4600-bfe2-718a59fd05c3" />

### Dark Mode

<img width="1882" height="891" alt="image" src="https://github.com/user-attachments/assets/0790f83e-5532-41d1-a307-8184158e8409" />

## Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/rushikesh-auti/Portfolio.git
```

### 2. Navigate to the React Project

```bash
cd Portfolio/portfolio-react
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `portfolio-react` directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 5. Start the Development Server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Environment Variables

The project uses the following environment variables for EmailJS:

| Variable                   | Description         |
| -------------------------- | ------------------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service ID  |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key  |


