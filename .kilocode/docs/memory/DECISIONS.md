\# DECISIONS (locked)



\- Merge is only allowed when GitHub required checks pass (branch protection).

\- Full autonomy: no approvals except secrets.

\- If changes make things worse: rollback to last known good state and fix.

\- OpenAI-only model routing: cheap/fast by default, stronger model only when blocked.

\- Never store secrets in code/docs/PR text/logs.

