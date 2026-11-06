# heargo.dev — rules

Personal portfolio site: Vue 3 (Options API) built with Vue CLI 5, Vuex 4 for state, Vue Router 4 (hash history), SCSS, AOS and vue3-parallax for animations. Tested with Vitest + Vue Test Utils (jsdom).

## Structure

- `src/views/`: one component per route (`HomeView`, `CaseStudy`, `UnavailableView`). Routes are in `src/router/index.js`.
- `src/components/`: reusable pieces (`ContactCard`, `ContactForm`, `ProjectPreview`, `ToggleLanguage`, …).
- `src/store/index.js`: the single Vuex store. It holds the current `lang`, all UI text in `txt.fr` / `txt.en`, and the `projects` list (each with `fr` / `en` content).
- `src/styles/`: `global.scss` is injected into every SFC by `vue.config.js`; keep it to variables and mixins.
- `public/`: static files served as-is (CVs in `public/cv/`).
- `tests/`: Vitest specs, mirroring `src/` (`tests/components/X.spec.js` for `src/components/X.vue`).

## Conventions

- The site is bilingual. Every user-visible string goes in the store under both `txt.fr` and `txt.en` (or a project's `fr` / `en`), never hard-coded in a template.
- Components read text as `$store.state.txt[$store.state.lang].<key>`.
- New project entries go at the top of `projects` with the next `id`.
- Import from `src` with the `@/` alias.

## Commands

| What | Command |
| --- | --- |
| Full unit suite | `npm test` (summary: `npm test 2>&1 \| tail -8`) |
| Single test file | `npx vitest run tests/components/X.spec.js` |
| Lint | `npm run lint -- --no-fix <files>` |
| Build | `npm run build` |
| Dev server | `npm run serve` |

## Tests

- Mount components with a fresh store built by `createStore` from `vuex`, holding only the state the test needs, passed via `global.plugins`.
- Mock browser APIs with `vi.spyOn` (e.g. `navigator.language`) and restore them in `afterEach`.
- Assert on rendered text and store state, not on component internals.
