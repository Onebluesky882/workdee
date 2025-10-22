User เลือกจังหวัด / ประเภทงาน → กด Search → แสดงรายการงาน → เลือกงาน → ดูรายละเอียด + Review → Apply

Flow Frontend - Workdee
Landing / Home

Header: Login / Signup / Menu

Quick Filter / Search: จังหวัด, ประเภทงาน

CTA: ดูงานล่าสุด / ดูงานยอดนิยม

Page 1: Job Board (Web Board)

เป้าหมาย: ผู้ใช้งานค้นหางานที่ประกาศโดยนายจ้าง

Components:

Filter:

จังหวัด

ประเภทงาน (Web, Mobile, Design, ฯลฯ)

Job List:

Job title, employer name, location

Tag: “Verified Payment”, “Verified Job”

Sorting: ล่าสุด, ใกล้ตัว, ยอดนิยม

Job Card Action:

ดูรายละเอียด

Apply / สนใจ

Mock Review:

แสดง review ของลูกจ้างที่เคยทำงานกับนายจ้างนี้

Flow:

User เลือกจังหวัด / ประเภทงาน → กด Search → แสดงรายการงาน → เลือกงาน → ดูรายละเอียด + Review → Apply

Page 2: Job Ranking / Verified Jobs

เป้าหมาย: ให้ผู้ใช้ดู งานที่ verified และ top ranking jobs

Components:

Filter:

จังหวัด

Ranking (Top Jobs)

Verified Jobs (จ่ายจริง / ทำจริง)

Job Card:

คะแนน rating จากลูกจ้าง

จำนวนคนทำงานสำเร็จ

Status: Verified Payment / Verified Job

Mock Review:

แสดง review ของทั้งลูกจ้างและนายจ้าง

Sorting:

Top Rating, Most Applied, Recent Verified Jobs

Flow:

User เลือกจังหวัด + Verified → Filter → แสดง top jobs → เลือก job → ดูรายละเอียด + Reviews → Apply

Verify / Review System

Verified Job: ระบบตรวจสอบว่า งานนี้มีคนทำสำเร็จจริง

Verified Payment: ระบบตรวจสอบว่า จ่ายเงินจริง

Mock Review:

ลูกจ้างรีวิวนายจ้าง: rating 1-5, ข้อความ

นายจ้างรีวิวลูกจ้าง: rating 1-5, ข้อความ

แสดงเป็นส่วนประกอบใน Job Card หรือ Detail Page

Navigation Flow
Home
├─> Page 1: Job Board
│ ├─> Filter Job
│ ├─> Job Detail
│ └─> Apply + Review
└─> Page 2: Job Ranking / Verified
├─> Filter + Ranking
├─> Job Detail
└─> Apply + Review

UX Notes

แยก Job Board กับ Verified / Ranking เพื่อให้ผู้ใช้ชัดเจนว่า “งานไหนน่าเชื่อถือ”

ใช้ tags และ badges (เช่น Verified, Top Job) ใน Job Card

Mock Review แนะนำให้โชว์ summary rating + snippet review ก่อนเข้า Detail

ฟีเจอร์ Apply ควรอยู่ทุกหน้า Job Card
