\# SECRETS POLICY (never violate)



Never store:

\- API keys, tokens, passwords, private keys

in code, docs, commit messages, PR descriptions, logs, screenshots.



Secrets must go into:

\- Docker secrets OR

\- local uncommitted .env OR

\- GitHub Actions secrets



If a secret is required, output a USER TODO LIST with:

\- exact secret name

\- why needed

\- where it will be stored

\- required scopes

