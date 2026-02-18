\# Workflow: A→Z Delivery



0\) Read Memory Bank:

\- docs/memory/PROJECT\_STATE.md

\- docs/memory/DECISIONS.md

\- docs/memory/CHECKLIST.md

\- docs/memory/SECRETS\_POLICY.md

\- docs/memory/TOOLING.md



1\) Resource Intake:

\- Identify tools available

\- Identify missing secrets

\- If secrets missing: produce USER TODO LIST and stop



2\) Branch Workflow:

\- Create feature branch

\- Implement scoped changes

\- Run tests/build

\- Open PR



3\) Agents:

\- Frontend Agent: UI/layout/components/SEO/a11y

\- Backend Agent: API/data (server phase later)

\- Fullstack Agent: integration + export compatibility

\- Debug Agent: fix CI/build/test failures

\- QA Agent: build + smoke + a11y checks

\- Security Agent: secret scan + dependency risk



4\) Merge policy:

\- Merge only when qa + security are green

\- Use squash merge



5\) Deploy:

\- GitHub Pages deploy runs on green



6\) Update memory:

\- PROJECT\_STATE.md + CHECKLIST.md

