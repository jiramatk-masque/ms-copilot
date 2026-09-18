# ms-copilot Product Discovery

เป้าหมายของ repo นี้คือจัดการ Product Discovery แบบเบา ใช้คน + AI + GitHub โดยให้ทีมใหม่เข้าใจได้ภายใน ~3 นาที

## ระบบนี้ทำงานอย่างไร
- ไอเดียใหม่เข้าผ่าน **GitHub Issues** (Issue Form: **💡 New Idea**)
- มุมมอง portfolio และสถานะทั้งหมดอยู่ใน **GitHub Project**
- brainstorming/workshop ทำใน **FigJam**
- ความรู้ถาวร (research / experiments / decisions) เก็บเป็น **Markdown ใน `docs/`**
- เขียน/เชื่อมความรู้ด้วย **Markdown หรือ Obsidian**
- อ่าน/แชร์ผ่าน **VitePress** (content เดียวกับ `docs/`)
- **AI** ช่วย triage/research/prototype/summarize
- **Humans** เป็นผู้ตัดสินใจขั้นสุดท้ายเสมอ

## Flow (ย่อ)
**Idea → AI จัด → ทีมเลือก → Explore → Validate → Human Decide → Knowledge Update**

รายละเอียด workflow และ templates:
- [Overview](docs/index.md)
- [Current Focus](docs/current-focus.md)
- [Workflow](docs/workflow.md)
- [GitHub Project Setup](docs/github-project-setup.md)
- [Agent Architecture](docs/architecture/ai-agent.md)

## Docs deployment (GitHub Pages)
- One-time setup: go to **Settings → Pages → Source** and choose **GitHub Actions**.
- Expected project URL after deployment: `https://jiramatk-masque.github.io/ms-copilot/`
