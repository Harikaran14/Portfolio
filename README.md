# Harikaran C — Developer Portfolio

A sci-fi / game-UI styled personal portfolio built with React and Vite. Design inspired by the [Web Portfolio Design](https://www.figma.com/community/file/1244911410692501170/web-portfolio-design) Figma community file.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Netlify (recommended)

### Option A — GitHub + auto deploy

1. Create a repo on GitHub (e.g. `harikaran-portfolio`).
2. In this folder:

```bash
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Go to [https://app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**.
4. Pick the repo. Netlify reads `netlify.toml` automatically (`build` → `dist`).
5. Click **Deploy**. Your site will be live at `https://random-name.netlify.app` — rename under **Domain settings**.

### Option B — Drag & drop (no Git)

1. Run `npm run build`.
2. Open [https://app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag the **`dist`** folder onto the page.

### Custom domain

In Netlify: **Site configuration** → **Domain management** → add your domain.

## Customize

Edit `src/data/portfolio.js` to update projects, skills, bio, and links. Drop your resume PDF in `public/` and link it from the Experience section when ready.

## Tech stack

- React 19
- Vite 6
- Pure CSS (no UI framework)
