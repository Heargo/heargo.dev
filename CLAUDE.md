# heargo.dev

Hugo Rey's bilingual (FR/EN) portfolio site: Vue 3 + Vue CLI, Vuex, Vue Router, SCSS. Conventions, structure and commands are in [docs/rules.md](docs/rules.md); read it before you change code.

## Branches

Work on `dev` or a `feat/*` branch merged into `dev`. Promote with a PR `dev` → `main`. Never push to `main` directly. Never commit `.env` files or secrets.

## Developing a ticket

To develop a ticket, follow [workflow.md](workflow.md): red, green, then review, each in its own subagent (`.claude/agents/tdd-*.md`), with the ticket file as the hand-off. Test commands are in `docs/rules.md`.

## Agent skills

### Issue tracker

Issues live as local markdown files under `.scratch/<feature>/`. Move resolved tickets to `.scratch/archived/<feature>/` in the commit that resolves them. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`), recorded as a `Status:` line in each issue file. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
