# heargo.dev — rules

Personal portfolio site: Vue 3 (mostly Options API) built with Vite, Vuex 4 for state, Vue Router 5 (hash history), SCSS (Dart Sass), AOS and vue3-parallax for animations. Tested with Vitest + Vue Test Utils (jsdom). Linted with ESLint flat config (`eslint.config.js`).

## Structure

- `src/views/`: one component per route (`HomeView`, `CaseStudy`, `UnavailableView`). Routes are in `src/router/index.js`.
- `src/components/`: reusable pieces (`ContactCard`, `ContactForm`, `ProjectPreview`, `ToggleLanguage`, …).
- `src/store/index.js`: the single Vuex store, built by `createAppStore()` (tests use it for a fresh store; the app uses the default export). It holds the current `lang`, all UI text in `txt.fr` / `txt.en`, and the `projects` list (each with `fr` / `en` content).
- `src/styles/`: `_variables.scss` (variables and mixins) is injected into every SFC style block by `vite.config.js`, so it must never emit CSS. Global rules go in `global.scss`, loaded once from `main.js`.
- `src/utils/assets.js`: `imgUrl(name)` / `svgUrl(name)` for images picked at runtime from `src/assets/img` / `src/assets/svg`. Static paths use `@/assets/...` directly.
- `index.html` at the repo root is the Vite entry; Google Fonts are linked there.
- `public/`: static files served as-is (CVs in `public/cv/`).
- `tests/`: Vitest specs, mirroring `src/` (`tests/components/X.spec.js` for `src/components/X.vue`).

## Conventions

- The site is bilingual. Every user-visible string goes in the store under both `txt.fr` and `txt.en` (or a project's `fr` / `en`), never hard-coded in a template.
- Components read text as `$store.state.txt[$store.state.lang].<key>`.
- New project entries go at the top of `projects` with the next `id` and a `category` (`pro`, `academic` or `personal`, see `PROJECT_CATEGORIES`); the home page tabs filter on it.
- Import from `src` with the `@/` alias.
- Styling uses the tokens and mixins in `src/styles/_variables.scss`: palette (`$ink`, `$indigo`, `$mauve`, `$rose`, `$cream`, `$accent`, `$raspberry`), radii/shadows, `@include glass()` for content panels, `@include button(solid|ghost)` for actions, `@include focus-ring` on anything focusable. Don't hard-code new colors; older names (`$dark`, `$white`, `$better-blue`…) are aliases kept for compatibility.
- Env vars are read with `import.meta.env`; only `VITE_` and `VUE_APP_` prefixed vars are exposed (`VUE_APP_CONTACT_KEY` for the contact form).

## Commands

| What | Command |
| --- | --- |
| Full unit suite | `npm test` (summary: `npm test 2>&1 \| tail -8`) |
| Single test file | `npx vitest run tests/components/X.spec.js` |
| Lint | `npm run lint` (or `npx eslint <files>`) |
| Build | `npm run build` |
| Dev server | `npm run dev` |
| Preview production build | `npm run preview` |

## Tests

- Mount components with a fresh store built by `createStore` from `vuex`, holding only the state the test needs, passed via `global.plugins`.
- Mock browser APIs with `vi.spyOn` (e.g. `navigator.language`) and restore them in `afterEach`.
- Assert on rendered text and store state, not on component internals.
