# AI Marketplace V2 Template Project

Production-oriented template for an AI asset marketplace (Rulesets, Skills, Agents, Workflows) with a premium frontend showcase and realistic business/technical architecture.

## What's included

- `frontend/`: Launch-style interactive web experience with smooth motion, SVG infographic animation, and chart-rich metrics area.
- `backend/`: API contract draft + Prisma schema starter for multi-tenant marketplace entities.
- `docs/`: Business architecture, MVP/V2 scope, and 12-week implementation plan.

## Quick start (frontend demo)

```bash
cd template-project/frontend
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## V2 decisions

- Frontend experience emulates a Next.js + Framer Motion architecture through modular sections and animation tokens.
- Includes Spline-ready hero slot and fallback visual treatment.
- Analytics section includes KPI counters, trend chart, category chart, and interactive time filters.
- Technical scaffolding aligns to PostgreSQL + Prisma + Stripe + RBAC patterns.
