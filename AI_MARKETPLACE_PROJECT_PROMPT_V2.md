# AI Marketplace Template Project — Final V2 Prompt

```text
You are a world-class startup founder, principal product architect, elite UX/UI designer, and staff full-stack engineer.

Design a production-grade template project for:
An AI marketplace for Rulesets, Skills, Agents, and Workflows (n8n, Zapier, Make, custom automations).

The outcome must be launch-ready, investor-ready, and realistic for a small team to build.

==================================================
FINAL V2 STACK (LOCKED — DO NOT SUBSTITUTE)
==================================================
Use exactly this stack:
- Frontend: Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Motion: Framer Motion (page choreography + microinteractions)
- 3D scenes: Spline (hero + product showcase)
- Data viz: Recharts (primary), ECharts only for advanced fallback needs
- Icons: Lucide
- Infographics: Custom SVGs with lightweight motion
- Backend: Next.js Route Handlers + Server Actions (single-repo architecture)
- Database: PostgreSQL + Prisma ORM
- Background jobs: BullMQ + Redis
- Billing: Stripe Billing + Stripe Connect (creator payouts)
- Auth: Auth.js + RBAC + organization membership model
- Storage: S3-compatible object storage
- Observability: Sentry + structured logs + basic product analytics

==================================================
PRIMARY V2 GOAL
==================================================
Deliver a complete blueprint and execution plan that optimizes for:
1) Premium visual quality and brand trust
2) Smooth, purposeful motion and interactive showcases
3) Outstanding metrics storytelling (charts + infographics)
4) Real business architecture and monetization viability
5) Engineering feasibility for 2–5 engineers

==================================================
DELIVERABLES (STRICT ORDER)
==================================================
1. One-page concept brief (what, who, why now, positioning)
2. Business architecture (segments, pricing, revenue loops, GTM)
3. Product architecture (MVP vs locked V2 scope)
4. Information architecture + user journeys
5. Design system + motion system spec
6. Showcase section designs (high-fidelity interaction concepts)
7. Analytics/infographics system
8. Technical architecture + data model + API design
9. 12-week build plan with weekly milestones
10. Launch readiness (security/compliance/ops)
11. Risks, trade-offs, and success metrics

==================================================
BUSINESS ARCHITECTURE REQUIREMENTS
==================================================
Define with realistic assumptions:
- Customer segments:
  - Creators: prompt engineers, automation builders, AI consultants/agencies
  - Buyers: SMB operators, growth teams, enterprise innovation teams
  - Partners: integration vendors, channel/community partners
- Value proposition per segment
- Revenue model:
  - Marketplace take-rate (default assumption: 15%)
  - Subscriptions: Free / Pro / Team / Enterprise
  - Add-ons: promoted listings, verified creator badge, advanced analytics seats
- Trust model:
  - Verification pipeline, quality score, abuse/report workflow
  - Refund and dispute policy framework
- 6-month GTM plan:
  - Supply acquisition
  - Demand acquisition
  - Marketplace flywheel loops

Include a simple pricing table with assumptions clearly labeled.

==================================================
PRODUCT SCOPE
==================================================
A) MVP (8–12 weeks, must be buildable)
- Auth + organizations + RBAC
- Creator profiles + asset publishing flow
- Asset taxonomy: Rulesets / Skills / Agents / Workflows
- Search, filtering, sort, tags
- Asset detail pages (schema, compatibility, changelog, licensing, pricing)
- Checkout/subscriptions/invoices
- Reviews + verified purchase badge
- Asset delivery: download, API credential, workflow import links
- Admin moderation console

B) V2 (this prompt’s selected direction)
- Framer Motion + Spline premium showcase system
- Interactive comparison matrix + recommendation widgets
- Creator analytics workspace (funnel, retention, cohort)
- Team collaboration (comments, approvals, release notes)
- Try-before-buy sandbox for selected assets
- Enterprise controls (SAML SSO, audit export, policy templates)

For every feature, output:
- User value
- Business value
- Complexity (S/M/L)
- Dependencies
- Success metric

==================================================
UI/UX DIRECTION (DRIBBBLE-TIER, PRODUCTION-USABLE)
==================================================
Visual direction:
- Premium modern SaaS aesthetic
- Confident typography scale and spacing rhythm
- Strong hierarchy, excellent readability, high trust surfaces
- Accessibility-first color/contrast and states

Motion direction:
- Hero choreography on first paint (staggered, restrained)
- Scroll reveal system with subtle opacity/translate
- High-quality microinteractions for CTAs, cards, toggles, chart points
- Document timing/easing tokens (fast/normal/slow)
- Respect `prefers-reduced-motion`
- Avoid unnecessary motion noise

Spline requirements:
- 2 purposeful scenes minimum (hero + product proof section)
- Conversion-supportive narrative (not decorative-only)
- Lazy load + offscreen defer
- Graceful fallback for low-power/mobile/reduced-motion contexts

==================================================
SHOWCASE AREAS (MANDATORY)
==================================================
Design 4 standout areas:
1) Hero Showcase
   - Spline scene + value proposition + animated CTA cluster
2) Workflow Story Strip
   - Animated steps from creator publishing → buyer adoption
3) Interactive Marketplace Gallery
   - Filter transitions, quick preview drawer, rich hover states
4) Trust & Proof Section
   - Customer logos, proof metrics, testimonials with subtle motion

For each, provide:
- UX objective
- Content blocks
- Motion behavior
- Mobile behavior
- Conversion intent

==================================================
METRICS / CHARTS / INFOGRAPHICS (TOP PRIORITY)
==================================================
Create a best-in-class analytics experience with:
- KPI cards: MRR, conversion rate, ARPA, churn, retention
- Revenue trend chart (line/area)
- Conversion funnel (visit → trial/install → paid)
- Cohort retention chart
- Category performance bars
- Channel/geo distribution (donut/treemap)
- Time range filters: 7d / 30d / 90d / 12m
- Interactive legend + premium tooltip behavior

Infographics:
- SVG infographic #1: marketplace flywheel
- SVG infographic #2: trust/safety pipeline
- Motion style: stroke draw, node pulse, directional flow, low-intensity loops

State design (required):
- Polished skeleton loading states
- Designed empty states with CTA guidance
- Error states with clear recovery actions

==================================================
TECHNICAL ARCHITECTURE REQUIREMENTS
==================================================
Provide:
- Monorepo folder structure and ownership boundaries
- API contracts (sample request/response)
- Prisma schema outline for core entities
- Queue workflows for moderation, analytics aggregation, webhook retries
- Stripe webhook idempotency strategy
- Caching strategy for browse/detail pages
- Security baseline: RBAC, rate limits, audit logs, secret handling

Core entities to model:
Users, Organizations, Memberships, Assets, AssetVersions, Categories, Tags,
Purchases, Subscriptions, Reviews, CreatorPayouts, Integrations, Events,
ModerationCases, UsageMetrics.

==================================================
12-WEEK EXECUTION PLAN
==================================================
Output weekly milestones including:
- Scope of delivery
- Role owner (FE/BE/FS/Design)
- Risks + mitigations
- Acceptance criteria

Assume team: 2–5 engineers + 1 designer.
No fantasy scope.

==================================================
LAUNCH READINESS CHECKLIST
==================================================
Include:
- Legal: ToS, Privacy, licensing templates
- Data lifecycle: retention/deletion/export
- Moderation policy and abuse handling SOP
- Backup and disaster recovery basics
- Incident response starter runbook
- Security checks: OWASP baseline, dependency scanning, CI gates
- Launch KPI dashboard: activation, conversion, retention, creator supply

==================================================
OUTPUT QUALITY RULES
==================================================
- Be concrete and implementation-first.
- Avoid vague language and generic platitudes.
- Tie each recommendation to user value + business value.
- Prioritize elegance + usability + feasibility.
- Clearly state trade-offs and assumptions.

END WITH:
1) Investor-ready one-page memo
2) 30-day founder execution checklist
3) Top 10 build mistakes to avoid
4) V2 readiness score (0–100) with rationale
```
