#AuthZ Assessment Demo (AS‑07)
A controlled prototype for testing authentication and authorization boundaries.
This project demonstrates how trust can break down after login and how to safely reproduce, document, and remediate issues.

🚀 Features
Login Flow Analysis → Email + password, recovery paths

Authentication Testing → Rate limits, invalid tokens, replay attempts

Session Handling → JWTs, refresh tokens, logout invalidation

Authorization & Roles → Role checks (user, admin)

API Permission Parity → UI and API routes enforce same rules

Evidence & Remediation → Safe reproduction, impact, severity, fixes

📂 Project Structure
Code
src/        # Prototype source code
tests/      # Automated security tests
docs/       # Evidence, walkthrough, remediation notes
README.md   # Setup instructions
🛠️ Setup Instructions
Clone the repo

bash
git clone https://github.com/<your-username>/authz-assessment-demo.git
cd authz-assessment-demo
Install dependencies

bash
npm install
Run the server

bash
node src/app.js
Server runs at: http://localhost:3000

Test endpoints

POST /auth/login → Login with email/password

POST /auth/refresh → Refresh token

GET /api/records → User‑only route

GET /api/admin/data → Admin‑only route

🔐 Dummy Accounts
User: user@example.com / pass123

Admin: admin@example.com / admin123

🧪 Testing
Run automated tests:

bash
npm test
Tests cover:

Authentication boundaries

Session handling

Role escalation attempts

📊 Evidence & Remediation
See /docs/evidence.md and /docs/remediation.md for:

Safe reproduction steps

Impact and severity ratings

Correct fixes

🎥 Video Walkthrough
Record a 3–5 minute unedited demo showing:

Normal login and role‑based access

Unauthorized access attempts → blocked

Session expiration and refresh handling

API parity check

Evidence of remediation

⚠️ Disclaimer
Authorized environment only → Dummy accounts, local DB

No real user data is accessed or retained

Controlled failures are intentional for demonstration
