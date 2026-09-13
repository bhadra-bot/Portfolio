# Bhadra Sreelatha - Personal Research Portfolio

This is a production-ready personal academic/research portfolio built for Bhadra Sreelatha, based on her Curriculum Vitae. 
It represents her research in combustion, thermoacoustics, fluid mechanics, and heat transfer.

## Technology Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (Animations)
- HTML5 Canvas (Visualizations)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data & Content Configuration
All factual information regarding Bhadra's profile is strictly mapped from her CV. 
To modify her profile, experience, projects, or publications, edit the data structures in:
`data/profile.ts`

## Deployment to GitHub Pages

This project is configured for GitHub Pages using Next.js static export.

### 1. Configure the Base Path
By default, the `next.config.mjs` automatically configures the `basePath` if running in GitHub Actions.
If you need to configure it manually (e.g. your repository is `github.com/bhadra/portfolio`), edit `next.config.mjs` and uncomment/set the `repo` variable:

```js
const repo = '/portfolio';
```

### 2. GitHub Actions Deployment
Create a GitHub Action workflow `.github/workflows/deploy.yml` with standard Next.js deployment steps (or use the one provided in this repository).

When you push to `main`, the Action will build the static output and deploy it to the `gh-pages` branch or directly to GitHub Pages environments.

## Visual Identity
The visual identity of this portfolio revolves around the concept of a "Thermal Flow Field" - a nod to combustion, thermofluids, and computational modeling. The canvas-based hero animation, color palette (near-black, ember, off-white), and typography (sans-serif and monospace technical fonts) are specifically chosen to match the sophisticated nature of physical engineering research.
