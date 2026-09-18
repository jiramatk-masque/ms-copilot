# AI Agent Architecture (Provider-Neutral)

## Purpose
Assist discovery work through triage, research synthesis, experiment support, and documentation drafts while preserving human control.

## Triggers
- New issue labeled `idea`
- Issue comment requesting triage or synthesis
- Manual workflow dispatch by maintainers
- Project status moved to Explore or Validate

## Repository inputs
- Source Idea Issue content and comments
- Related Issues (possible duplicates)
- Existing docs in `docs/research`, `docs/experiments`, `docs/decisions`, `docs/strategy`, `docs/architecture`
- Project metadata (Status/Theme/Owner/Impact/Confidence/Effort)

## Outputs
- Structured triage comment on Issue
- Links to duplicate candidates
- Suggested research/experiment templates filled as drafts
- Summary updates to relevant Markdown docs

## Permissions and least privilege
- Read Issues/Project/docs by default
- Write only to allowed targets (Issue comments, designated docs paths)
- No permission to auto-close issues, auto-drop ideas, or alter final human decisions

## Environment and secret handling
- Use GitHub Secrets for credentials only when truly required
- Never commit API keys/tokens
- Scope secrets to minimum repository/environment
- Rotate/revoke secrets when no longer needed

## Human review checkpoints
- Human confirms triage outcomes before status changes beyond Inbox
- Human approves Explore/Validate plans
- Human records final decision (Commit/Parked/Dropped)
- Human approves any durable knowledge update affecting strategy/architecture
