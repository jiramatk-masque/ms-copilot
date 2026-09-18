# Product Discovery GitHub Project Setup (Manual)

Use this guide when direct project creation/configuration cannot be performed by automation in this task.

## 1) Create project
1. In GitHub, open your profile/organization Projects.
2. Create a new project named **Product Discovery**.

## 2) Add required fields
Create these custom fields:
- **Status** (single select): Inbox, Explore, Validate, Candidate, Commit, Parked, Dropped
- **Theme** (single select): Customer, Game, AI, Platform, Internal, Other
- **Owner** (text or user)
- **Impact** (single select or number)
- **Confidence** (single select or number)
- **Effort** (single select or number)

## 3) Configure views
Create views:
- Inbox
- Exploring
- Validating
- Candidates
- Committed
- Parked

Suggested filters:
- Inbox: `Status = Inbox`
- Exploring: `Status = Explore`
- Validating: `Status = Validate`
- Candidates: `Status = Candidate`
- Committed: `Status = Commit`
- Parked: `Status = Parked`

## 4) Optional auto-add rule
Use native GitHub Project workflows (preferred over PAT-based automation):
- Trigger: issue added/edited with label `idea`
- Action: add item to **Product Discovery** project
- Set `Status = Inbox`

## Security notes
- Prefer built-in Project workflows; no PAT needed.
- If automation outside native workflow is required, use least-privilege tokens and store them in GitHub Secrets.
- Never hardcode tokens/secrets in repository files.
