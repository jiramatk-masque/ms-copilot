# ms-copilot

โปรเจ็คนี้ใช้สำหรับวางแผนภาพรวมของงานในระยะเริ่มต้น โดยยังไม่ผูกกับ repository เนื่องจากงานยังไม่ได้เริ่มพัฒนาจริง และจะเชื่อมกับ repo หรือ issue ที่เกี่ยวข้องภายหลังเมื่อเริ่มดำเนินงาน

## ภาพรวมโปรเจ็ค

**ms-copilot** คือโปรเจ็คพัฒนาระบบ Copilot สำหรับองค์กร ครอบคลุมการวางแผน ออกแบบ พัฒนา ทดสอบ และ deploy ระบบ

## โครงสร้างการวางแผน

```
docs/
└── planning/
    ├── project-plan.md        # แผนงานภาพรวมทั้งหมด
    ├── task-groups.md         # กลุ่มงานและ task list
    └── milestones.md          # milestone และ timeline
.github/
└── ISSUE_TEMPLATE/
    ├── feature.yml            # template สำหรับ feature tasks
    ├── bug.yml                # template สำหรับ bug reports
    └── task.yml               # template สำหรับ general tasks
```

## GitHub Project

แผนงานทั้งหมดถูกจัดการผ่าน [GitHub Project #5](https://github.com/users/jiramatk-masque/projects/5/views/1)

### การตั้งค่า Automation (ต้องทำครั้งเดียว)

เพื่อให้ Issue ใหม่เข้า GitHub Project อัตโนมัติ ต้องตั้งค่า Secret ก่อน:

1. สร้าง **Personal Access Token (PAT)** ที่ [GitHub Settings → Tokens](https://github.com/settings/tokens/new)
   - ต้องมี scope: **`repo`** และ **`write:project`**
2. ไปที่ **Repository Settings → Secrets and variables → Actions**
3. สร้าง Secret ชื่อ **`GH_TOKEN`** และวาง token ที่สร้างไว้

### Workflows

| Workflow | ทำงานเมื่อ | หน้าที่ |
|---|---|---|
| `auto-add-to-project.yml` | Issue หรือ PR ถูกสร้างใหม่ | เพิ่ม item เข้า Project #5 อัตโนมัติ |
| `create-project-issues.yml` | รันด้วยมือ (workflow_dispatch) | สร้าง Issues ทั้ง 55 tasks จาก docs/planning |

**วิธีสร้าง Issues ทั้งหมดครั้งแรก:**
ไปที่ Actions → "Create Planned Issues" → Run workflow

## สถานะปัจจุบัน

| หมวดหมู่ | จำนวน Task | สถานะ |
|---|---|---|
| การวางแผนและ Architecture | 10 | 📋 Todo |
| การพัฒนา Backend | 15 | 📋 Todo |
| การพัฒนา Frontend/UI | 10 | 📋 Todo |
| Integration & API | 10 | 📋 Todo |
| Testing & QA | 5 | 📋 Todo |
| DevOps & Deployment | 5 | 📋 Todo |
| **รวมทั้งหมด** | **55** | |

## การเริ่มต้น

ดูรายละเอียด task ทั้งหมดได้ที่ [docs/planning/task-groups.md](docs/planning/task-groups.md)
