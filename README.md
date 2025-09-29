
# SamudraSankalp

A well-structured Vite + React project, ready for local development and deployment on Vercel.

## Project Structure

- `index.html` — Main HTML entry point
- `package.json` — Project dependencies and scripts
- `vite.config.ts` — Vite configuration
- `src/` — All source code
  - `App.tsx`, `main.tsx` — React entry points
  - `index.css` — Main CSS
  - `components/` — All React components, organized by feature
    - `admin/`, `figma/`, `government/`, `marketplace/`, `mobile/`, `ui/` — Feature and UI components
  - `guidelines/` — Project guidelines and documentation
  - `styles/` — Global styles

## Local Development

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open the provided localhost URL (usually http://localhost:5173/) in your browser.

## Deployment (Vercel)

- Push your code to a GitHub/GitLab/Bitbucket repository.
- Connect the repo to Vercel and select the root directory.
- Vercel will auto-detect Vite and use `npm run build` and `dist/` as the output.

## Ignore Files

- `.gitignore` is set up to exclude build, environment, and system files.

---

For any custom configuration, edit `vite.config.ts` or add environment variables in `.env`.