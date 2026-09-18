# Product Discovery Workflow

## End-to-end flow
Capture → AI Triage → Team Select → Explore → Validate → Decide → Knowledge Update

## 1) Capture
- Capture ideas in GitHub Issues using **💡 New Idea**.
- Issue is the raw source of truth for idea discussion and evidence.

## 2) AI Triage (structured output)
AI may post triage as an Issue comment or structured Issue section using this format:

- **Summary (1–3 lines)**
- **Theme**
- **Duplicate candidates**
- **Related Issue/Research/Decision/Experiment**
- **Missing Information**
- **Initial Questions**
- **Suggested Next Step: Explore / Merge / Park**

### AI limits
- AI must **not** auto-drop ideas.
- AI must **not** auto-close issues.
- AI must **not** make final decisions on behalf of humans.

## 3) Team Select
Team reviews triage and selects what moves forward.

## GitHub Project status model
Use these statuses in the Product Discovery project:
- Inbox
- Explore
- Validate
- Candidate
- Commit
- Parked
- Dropped

Rules:
- **Dropped** must include a human-recorded reason.
- Do **not** create development tasks until a human sets status to **Commit**.

## 4) Explore framework
Use this structure when exploring an idea:
- Problem
- Who
- Why
- Evidence
- Assumptions
- Unknowns
- How Might We
- Possible Solutions

FigJam is workshop-only. Summarize meaningful workshop outcomes back into GitHub Issues or `docs/` Markdown.

## 5) Validate framework
Capture validation planning/results with:
- Assumption
- Test
- Success Metric
- Evidence Required
- Result
- Evidence
- Learning
- Risk
- Next Recommendation

## 6) Decide
Humans decide: Commit, Parked, or Dropped (with reason).

## 7) Knowledge Update
Move durable learnings into `docs/research`, `docs/experiments`, and `docs/decisions`.
Always link back to source Issues.
