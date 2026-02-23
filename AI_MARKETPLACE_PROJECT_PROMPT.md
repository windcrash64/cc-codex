# AI Marketplace Template Project — Master Prompt

Use this prompt to generate a **production-grade template project** that showcases elite product design and realistic business architecture.

```text
You are acting as a senior startup founder, product architect, UX lead, and staff full-stack engineer.

Create a template project that demonstrates top-tier product design and realistic implementation quality.

Project concept:
A B2B+B2C marketplace for AI assets:
- Rule sets (policy packs, guardrails, prompt constraints)
- Skills (task-specific capability bundles)
- Agents (goal-driven autonomous workers)
- Workflows (n8n, Zapier, Make, custom automations)

The output must feel like a real, fundable business, not a hackathon demo.

## Primary Objective
Build a complete product blueprint + implementation plan for a marketplace business that can realistically launch and scale.

## Deliverables (strict order)
1) Business architecture and monetization model
2) Product requirements (MVP + v2 roadmap)
3) UX architecture and premium UI direction
4) Technical architecture (frontend, backend, infra, data)
5) Feature-by-feature implementation plan
6) Launch readiness checklist (security, compliance, operations)

---

## 1) Business Architecture (Required)
Define this marketplace as a real business:
- Customer segments:
  - Builders (developers, automation consultants, agencies)
  - Buyers (SMBs, growth teams, enterprise innovation teams)
  - Partners (integration vendors, channel partners)
- Value propositions by segment
- Revenue model:
  - Take-rate on transactions
  - Subscription tiers (Free / Pro / Team / Enterprise)
  - Optional verification fees, promoted listings, API overage pricing
- Unit economics assumptions:
  - CAC, LTV, gross margin drivers, refund risk
- Trust model:
  - Creator verification
  - Asset quality scoring
  - Reviews + usage proof
- Marketplace flywheel:
  - Supply acquisition → demand generation → quality improvement → retention

Include clear pricing table and go-to-market motion for first 6 months.

---

## 2) Product Scope (MVP vs V2)
Define realistic features, separated by phase.

### MVP (must be implementable in 8–12 weeks)
- Auth + organizations + roles (owner/admin/member)
- Creator profiles and team pages
- Asset listing pages for Rulesets / Skills / Agents / Workflows
- Category taxonomy + tagging + advanced search/filtering
- Product detail page with:
  - description, compatibility, input/output schema, changelog
  - screenshots/demo/video
  - pricing + license terms
- Ratings/reviews and verified purchase badge
- Checkout + subscriptions + invoices (Stripe)
- Asset delivery modes:
  - API key access
  - downloadable package
  - one-click workflow import (n8n/Zapier where available)
- Dashboard analytics:
  - creator revenue, conversion rate, churn, top assets
- Admin moderation panel:
  - approve/reject, flagging, abuse handling

### V2 (post-MVP)
- Enterprise procurement (SSO, approval workflows, annual contracts)
- Sandboxed “try before buy” playground
- SLA-backed managed agents
- Affiliate/referral program
- AI-assisted asset QA + policy compliance checks

For each feature, label:
- User value
- Business value
- Engineering complexity (S/M/L)
- Dependencies

---

## 3) UX / UI (Dribbble-tier but usable)
Design a premium interface with strong clarity and conversion focus.

### Visual direction
- Premium SaaS style, modern, high trust
- Clean typography hierarchy, generous spacing, strong card design
- Color system that supports analytics and status semantics

### Core pages to design
- Home (value prop + top categories + social proof + featured assets)
- Marketplace browse page
- Asset detail page
- Creator studio (publish/manage assets)
- Buyer workspace (installed assets, teams, billing)
- Analytics/metrics page (outstanding charts)
- Admin/moderation panel

### Interaction/motion requirements
- Subtle section reveal and hover microinteractions
- Intentional motion only (no decorative over-animation)
- Accessible focus states and reduced-motion support

### Metrics area (high priority)
Create a best-in-class analytics block with:
- KPI cards (MRR, ARPA, conversion, churn)
- Line/area chart for revenue trend
- Funnel chart for visit→install→purchase
- Cohort/retention visualization
- Time filters (7d/30d/90d/12m)
- Loading, empty, and error states with polished visuals

---

## 4) Technical Architecture (realistic)
Specify production-ready architecture with rationale.

### Suggested stack
- Frontend: Next.js + TypeScript + Tailwind + component system + Framer Motion
- Backend: Node/Nest/Next API (or equivalent), REST/GraphQL boundaries
- DB: Postgres (+ Prisma/Drizzle)
- Search: Postgres FTS or Meilisearch/Elasticsearch
- Queue: BullMQ/SQS for async jobs
- Storage: S3-compatible object storage
- Auth: Clerk/Auth0/NextAuth with RBAC
- Billing: Stripe subscriptions + Connect (if payout marketplace)
- Observability: structured logs, tracing, error tracking

### Required engineering concerns
- Multi-tenant data model
- Role-based access control
- Audit logs for sensitive actions
- Rate limiting + API key management
- Secure secret handling
- Webhook reliability and idempotency
- Background jobs for asset validation/scanning

Include entity schema for:
Users, Organizations, Assets, AssetVersions, Purchases, Subscriptions, Reviews, Payouts, Integrations, Events.

---

## 5) Implementation Blueprint
Provide:
- Monorepo structure
- Key modules/components
- API contract examples
- Database schema outline
- 12-week sprint plan (by week)
- Definition of done per milestone

Emphasize what is truly buildable by a small team (2–5 engineers).
Avoid fantasy scope.

---

## 6) Risk, Compliance, and Launch Readiness
Include practical launch requirements:
- Legal pages (ToS, Privacy, licensing templates)
- Data retention + deletion policy
- Content moderation policy
- Incident response basics
- Backup/restore strategy
- Security checklist (OWASP basics, dependency scanning)
- KPI dashboard for launch health

---

## Output Quality Rules
- No vague statements. Be specific and implementation-oriented.
- No placeholder copy or fake metrics without labeling assumptions.
- Every major section must tie to both user value and business value.
- Keep design premium, but prioritize usability and trust.

At the end, provide:
1) A concise investor-style one-page summary
2) A founder execution checklist for the next 30 days
3) Top 10 mistakes to avoid when building this marketplace
```
