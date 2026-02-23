# Clawster Landing Page

A Next.js landing page for Clawster.

## Setup

### Option 1: Add to existing Next.js project

1. Copy the files to your Next.js app directory:
   ```bash
   # Copy to app/page.tsx, app/layout.tsx, app/globals.css
   cp page.tsx /path/to/nextjs-app/app/
   cp layout.tsx /path/to/nextjs-app/app/
   cp globals.css /path/to/nextjs-app/app/
   cp tailwind.config.ts /path/to/nextjs-app/
   ```

2. Copy assets to the public folder:
   ```bash
   cp -r public/animations /path/to/nextjs-app/public/
   cp -r public/screenshots /path/to/nextjs-app/public/
   ```

### Option 2: Create new Next.js project

1. Create a new Next.js project:
   ```bash
   npx create-next-app@latest clawster-landing --typescript --tailwind --app
   cd clawster-landing
   ```

2. Replace the default files:
   ```bash
   cp ../landing/page.tsx app/
   cp ../landing/layout.tsx app/
   cp ../landing/globals.css app/
   cp ../landing/tailwind.config.ts .
   cp -r ../landing/public/* public/
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

## Assets

- `/public/animations/` - All 12 Clawster mood SVGs
- `/public/screenshots/` - Demo screenshots

## Customization

- Update GitHub links in `page.tsx` to point to your repo
- Modify the sponsor/hackathon badges as needed
- Add your own demo video by replacing the hero screenshot
