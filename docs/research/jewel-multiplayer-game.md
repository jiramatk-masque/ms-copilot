# Research: Jewel/Match-3 Multiplayer for Friends Online (Issue #19)

> **Status (Draft):** AI-assisted discovery draft for team review.  
> ยังไม่ใช่ข้อสรุปทางผลิตภัณฑ์ และยังไม่ใช่หลักฐานยืนยันความต้องการผู้ใช้จริง

## Question
ผู้เล่นจะอยากเล่นเกมเรียงเพชร (match-3) แบบ multiplayer กับเพื่อนออนไลน์ โดยเฉพาะในบริบท live stream มากพอที่จะคุ้มกับการสำรวจต่อหรือไม่?

## Context
- Source idea: [Issue #19](https://github.com/jiramatk-masque/ms-copilot/issues/19)
- Issue #19 ระบุไอเดีย “เกมเรียงเพชร multiplayer” พร้อมภาพอ้างอิง และมี Explore comment ที่ระบุปัญหา ผู้ใช้เป้าหมาย สมมติฐาน และ unknowns
- เอกสารนี้เป็น **durable research note** ตาม workflow ใน repository (Issue = raw idea, docs = durable knowledge)

## Findings

### A) Repository findings (internal context, not validation)
- ไอเดียหลักอยู่ใน [Issue #19](https://github.com/jiramatk-masque/ms-copilot/issues/19) และยังไม่มีผล validate เชิงพฤติกรรมผู้ใช้
- พบ issue ที่ใกล้เคียงเชิงธีม:
  - [Issue #18](https://github.com/jiramatk-masque/ms-copilot/issues/18): แนวคิดเล่นกับเพื่อน/overlay ใน live
  - [Issue #17](https://github.com/jiramatk-masque/ms-copilot/issues/17): แนวคิดเกมสำหรับ live
- ยังไม่พบ research/experiment/decision เดิมใน `docs/` ที่ตอบโจทย์ multiplayer match-3 โดยตรง

### B) External product/context research (reference only)
ข้อสังเกตด้านล่างคือ **reference จากแหล่งภายนอก** เพื่อตั้งคำถามต่อ ไม่ใช่หลักฐานยืนยัน demand ของผู้ใช้เรา:
- มีเกมแนว match-3 ที่สื่อสารจุดขายแบบแข่งขัน/เล่นกับผู้อื่นออนไลน์ (เช่น Match Masters)  
- มีตัวอย่างเกมแนว puzzle/match-3 ที่นำเสนอ PvP ใน store listing  
- รูปแบบ “เข้าร่วมผ่านลิงก์/โค้ดห้อง” เป็น pattern ที่พบได้ในผลิตภัณฑ์ social game หลายประเภท และควรถูกทดสอบความเข้าใจผู้เล่นกับกลุ่มเป้าหมายจริงของเรา

## Evidence

### Internal evidence (context only)
- [Issue #19](https://github.com/jiramatk-masque/ms-copilot/issues/19) และ Explore comment ใน issue เดียวกัน (รวมภาพ reference ใน issue)
- [Issue #18](https://github.com/jiramatk-masque/ms-copilot/issues/18)
- [Issue #17](https://github.com/jiramatk-masque/ms-copilot/issues/17)

### External references (for verification)
- Match Masters official site: <https://www.matchmastersgame.com/>
- Match Masters (Google Play): <https://play.google.com/store/apps/details?id=com.funtomic.matchmasters>
- Match Masters (App Store): <https://apps.apple.com/us/app/match-masters/id1244932601>
- Match Puzzle - PVP Match 3 (App Store): <https://apps.apple.com/us/app/match-puzzle-pvp-match-3/id1618735250>
- Match3Race product page: <https://match3race.com/>

> หมายเหตุ: แหล่งภายนอกด้านบนใช้เป็นบริบทเทียบเคียงเบื้องต้น และต้องให้ทีมตรวจสอบเชิงลึกอีกครั้งก่อนใช้เป็นฐานตัดสินใจ

## Related Issues
- Primary: [#19](https://github.com/jiramatk-masque/ms-copilot/issues/19)
- Related (theme-adjacent): [#18](https://github.com/jiramatk-masque/ms-copilot/issues/18), [#17](https://github.com/jiramatk-masque/ms-copilot/issues/17)
- Duplicate status: ยังไม่พบ duplicate ที่ยืนยันได้แบบ 1:1 ใน repository ณ ตอนร่างนี้

## Assumptions and Unknowns

### Assumptions
- ผู้เล่นบางส่วนอาจสนใจประสบการณ์ match-3 ที่เล่นกับเพื่อนได้แบบ synchronous
- บริบท live stream อาจเพิ่มแรงจูงใจให้เกิดการแข่งขัน/การมีส่วนร่วม

### Unknowns
- แพลตฟอร์มหลัก: web, mobile, หรือ live platform integration
- โหมดที่เหมาะ: real-time, turn-based, co-op, หรือ team-vs-team
- รูปแบบเข้าเล่นที่ friction ต่ำที่สุด: room code, link, QR
- metric แรกที่ใช้ตัดสินใจไปต่อ (engagement, return rate, session length, join completion)

## Possible Product Directions (non-committal)
1. **Quick Room Battle:** สร้างห้องเร็ว แข่งคะแนนช่วงเวลาสั้นสำหรับเพื่อน
2. **Streamer-led Challenge:** host สร้าง challenge แล้วผู้ชมแข่ง leaderboard รอบสั้น
3. **Co-op Objective Mode:** ผู้เล่นช่วยกันทำ objective เดียวภายในเวลา

> ยังไม่เลือกทิศทางใดในเอกสารนี้

## Minimal Next Research / Validation Question
“ในกลุ่มผู้เล่นเป้าหมายแรก ผู้ใช้เข้าใจและยอมเข้าร่วมเกมผ่าน room link/QR ภายในขั้นตอนสั้น ๆ โดยไม่ต้องอธิบายเพิ่มหรือไม่?”

## Conclusion
ไอเดีย multiplayer match-3 ในบริบทเล่นกับเพื่อน/ไลฟ์มีความเป็นไปได้เชิงแนวคิดและมีตัวอย่างตลาดให้ศึกษา แต่ยังไม่มีหลักฐานเฉพาะกลุ่มผู้ใช้ของโปรเจ็กต์นี้เพียงพอสำหรับการ commit ฟีเจอร์ ควรใช้คำถาม validation ที่แคบและวัดผลได้ก่อนตัดสินใจขั้นถัดไป
