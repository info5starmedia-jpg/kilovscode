# AGENTS.md (always-on instructions)

Always read docs/memory/* before starting work.

Rules:
- Full autonomy: do not ask for approval except secrets.
- Never store secrets in repo.
- Use minimal diffs.
- Use OpenAI cheap/fast model by default; escalate only when blocked.
- Merge only when GitHub checks are green (branch protection).

When a secret is needed:
- output a USER TODO LIST with exact secret name + where it will be stored.
