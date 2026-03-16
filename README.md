# Pankaj Kumar Pal - Portfolio Website

Personal portfolio website built with React and styled-components, showcasing work experience, AI/GenAI capabilities, projects, certifications, testimonials, and contact details.

Live URL: https://pankaj901.github.io/

## Overview

This repository powers the portfolio of Pankaj Kumar Pal (GenAI Technical Lead, 5.6 years experience), focused on:

- AI-powered application development
- Generative AI, RAG, and agentic systems
- Machine Learning and Computer Vision
- Technical leadership and product-focused engineering

## Key Features

- Responsive single-page layout
- Animated hero and section transitions
- Service cards for AI/GenAI expertise areas
- Project slider
- Certification slider with external links
- Testimonial slider
- Contact form integrated with EmailJS
- GitHub Pages deployment

## Tech Stack

- React 18 (Create React App)
- styled-components
- react-awesome-reveal
- react-slick
- react-icons
- EmailJS (emailjs-com)

## Project Structure

```text
public/
  index.html
  images/
src/
  App.js
  index.js
  index.css
  components/
    Banner/
    Service/
    Projects/
    Certificates/
    Clients/
    Footer/
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

3. Open:

```text
http://localhost:3000
```

## EmailJS Configuration

The contact form requires these environment variables at build time:

- REACT_APP_EMAILJS_SERVICE_ID
- REACT_APP_EMAILJS_TEMPLATE_ID
- REACT_APP_EMAILJS_USER_ID

For local development, create `.env.local` in the project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_public_key
```

Important:

- Restart the dev server after editing env files.
- Ensure EmailJS template variables match the form payload fields:
  - fullname
  - email
  - message

## Deployment

### Option 1: Manual deploy from local

```bash
npm run deploy
```

This builds and publishes the `build` folder to the `gh-pages` branch.

### Option 2: GitHub Actions (recommended)

Workflow file: `.github/workflows/deploy.yml`

It:

- installs dependencies
- builds with repo secrets
- deploys to `gh-pages`

Required GitHub repo secrets:

- REACT_APP_EMAILJS_SERVICE_ID
- REACT_APP_EMAILJS_TEMPLATE_ID
- REACT_APP_EMAILJS_USER_ID

## Troubleshooting Email Form

If contact form fails on live site:

1. Verify GitHub Actions workflow completed successfully.
2. Confirm all three repo secrets are present and correct.
3. Confirm EmailJS service/template/public key are active.
4. Check template parameter names (fullname, email, message).
5. Check EmailJS domain restrictions allow `pankaj901.github.io`.

## Profiles

- GitHub: https://github.com/Pankaj901
- LinkedIn: https://www.linkedin.com/in/pal-pankaj/
- Portfolio: https://pankaj901.github.io/
- LeetCode: https://leetcode.com/pankajpal901/
- HackerRank: https://www.hackerrank.com/profile/pankajkumarpal91
- Instagram: https://www.instagram.com/code_with_pkp/
