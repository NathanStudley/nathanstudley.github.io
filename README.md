# nathanstudley.github.io

Personal site: [nathanstudley.github.io](https://nathanstudley.github.io/). Vite + React + Tailwind, deployed to the `gh-pages` branch.

```bash
npm install
npm run dev          # local dev server
npm run build        # production build to dist/
npm run resume:pdf   # regenerate public/Nathan_Studley_Resume.pdf from src/data/profile.js (needs Chrome)
npm run deploy       # build and publish dist/ to gh-pages
```

Content lives in `src/data/` — `profile.js` feeds both the Resume page and the PDF, `work.js` feeds the case studies.
