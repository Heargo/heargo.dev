# Development workflow

Develop one ticket test-first: **red** (failing tests), **green** (code that passes them), **review**. You are the orchestrator: the `tdd-red`, `tdd-green` and `tdd-review` subagents (`.claude/agents/`) do the work, and the ticket file is the hand-off between them.

Input: the path of one ticket, `.scratch/<feature>/issues/NN-slug.md`.

## Budget

Every token counts:

- You read the ticket and run short git/test commands; the subagents read the code. Leave code exploration to them.
- Pipe every test run through `tail` or a `grep` for summary lines.
- Briefs use the templates below, filled in. Subagents put details in the ticket file and reply with a short block.
- Retry a step by continuing the same subagent with `SendMessage`, which keeps its context.
- One ticket per run.

## 1. Load the ticket

Read the ticket file (and `spec.md` beside its `issues/` folder only if the ticket points to it). State its title.

Done when: you can say the ticket's behaviours in one line each.

## 2. Prepare the branch and baseline

1. `git status --short` is empty (`.scratch/` changes aside). If it isn't, stop and ask.
2. Check out `feat/<feature-slug>`, creating it from `dev` if it doesn't exist.
3. Run the full unit suite with the command from `docs/rules.md`, summary lines only. Record the result in the ticket as `## Baseline` (passing and failing files).

Done when: the branch is checked out and `## Baseline` is in the ticket. A red baseline is fine: it is recorded, and later steps compare against it.

## 3. Agree the seams

Propose 1 to 3 seams: the public interfaces the tests will go through (a component's props/emits and rendered output, a store action or mutation, a route). One line each: what it catches, what it misses. Ask the user to confirm.

More than 3 seams means the ticket is too big: propose a split and stop.

Done when: the user confirmed, and the seams are written in the ticket as `## Seams`.

## 4. Red

Dispatch `tdd-red`:

> Ticket: `<ticket path>`. Seams are in the ticket. Baseline passing files: `<list>`.

Then run the `## Red` command yourself through `tail -15` and check it fails as described. Stage the test files: `git add <test files>`.

Done when: the new tests are red for the reason the report gives, and staged.

## 5. Green

Dispatch `tdd-green`:

> Ticket: `<ticket path>`. The red tests are staged; keep them unchanged.

Then check:

- `git diff --name-only` lists no test file.
- The `## Red` command passes (`tail -15`).

If a check fails, or the agent reports a test it believes is wrong, continue it once with `SendMessage` and the exact problem. A second failure goes to the user.

Done when: both checks pass.

## 6. Review

Dispatch `tdd-review`:

> Ticket: `<ticket path>`. Review `git diff HEAD`.

- **ship**: go to step 7.
- **fix first**: show the user the `Must fix` lines. On their go, continue `tdd-green` with `SendMessage` and those lines, rerun the step 5 checks, then continue `tdd-review` with `SendMessage` for a re-check of the fixes only.

Done when: the verdict is `ship`, or the user accepted the remaining findings.

## 7. Wrap up

1. Show the user: the ticket title, files changed (`git diff HEAD --stat`), suite result vs baseline, and any `Consider` lines.
2. Propose a commit message `<type>(<scope>): <summary>` that references the ticket path. Commit only when the user says so.
3. In the same commit, set the ticket's `Status:` to `resolved` and `git mv` it to `.scratch/archived/<feature-slug>/issues/` (see `docs/agents/issue-tracker.md`).

Pushing and PRs: `feat/*` into `dev`, then `dev` → `main`. Ask before each one.
