# Product Discovery Agent Rules

This repository uses a lightweight Product Discovery System.

## Source of truth
- GitHub Issues = raw ideas and discussion.
- GitHub Project = portfolio/workflow status.
- `docs/` Markdown = durable knowledge (research, experiments, decisions, strategy, architecture).
- FigJam = workshop space only. Summarize important outcomes back to an Issue or `docs/` Markdown.
- Obsidian and VitePress use the same Markdown in `docs/`.

## Required discovery flow
Capture → AI Triage → Team Select → Explore → Validate → Decide → Knowledge Update

## Agent operating rules
1. Search existing Issues/docs before creating new knowledge.
2. Look for duplicates and link likely duplicate Issues.
3. Read related research/experiments/decisions before proposing next actions.
4. Always link conclusions back to source Issues.
5. Never auto-drop or auto-close ideas.
6. Never override or alter a human decision.
7. Never overwrite raw evidence from interviews, tests, or workshop outputs.
8. Keep AI outputs structured, traceable, and reviewable by humans.
