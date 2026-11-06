# heargo.dev

Hugo Rey's portfolio site. Vue 3 + Vite.

Requires Node `^20.19.0 || >=22.12.0`.

```sh
npm install      # install dependencies
npm run dev      # dev server with hot reload
npm run build    # production build in dist/
npm run preview  # serve the production build locally
npm test         # unit tests (Vitest)
npm run lint     # ESLint
```

The contact form reads its access key from `VUE_APP_CONTACT_KEY` (in `.env.local` or the host's env).
