\# DECISIONS (Locked)



\- Full automation: agents can edit/save files and run tools without asking.

\- Only ask the user for NEW secrets/tokens/passwords.

\- Use feature branches → PR → checks pass → squash merge.

\- Deploy to GitHub Pages for now via static export.

\- Later migrate to server (remove export mode, add Docker/Nginx).

\- Never store secrets in repo or logs.

