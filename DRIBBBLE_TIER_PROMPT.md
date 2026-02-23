# Dribbble-Tier Frontend + Motion Master Prompt

Use this prompt whenever you want a production-grade, visually polished frontend with premium motion design.

## Prompt Template

```text
You are a senior product designer + frontend engineer.
Design and implement a DRIBBBLE-TIER, production-ready website for: [product/use-case].

## Goals
- Create a premium, modern, conversion-oriented experience.
- Deliver visual quality comparable to top SaaS landing pages + Dribbble showcases.
- Prioritize usability, clarity, and trust over decoration.

## Tech Stack
- [e.g., Next.js + TypeScript + Tailwind + Framer Motion + Recharts/ECharts + lucide icons]

## Visual Direction
- Style keywords: [minimal / elegant / glassmorphism-lite / bold typography / premium fintech / etc.]
- Palette: [primary, accent, neutrals, semantic colors]
- Typography: [font choices + scale]
- Spacing: generous whitespace, clear vertical rhythm, 8px spacing system.
- Components should feel cohesive and system-driven (not random one-offs).

## Motion Design Requirements (must include)
1. Page-load choreography:
   - Staggered hero reveal (headline, subcopy, CTAs, mockup).
   - Soft parallax or gradient movement at low intensity.
2. Scroll-based motion:
   - Section enter animations with subtle translate + fade.
   - Respect reduced-motion preferences.
3. Microinteractions:
   - Premium hover/focus/press states for buttons and cards.
   - Button triggers with tactile feedback (scale, glow, ripple, icon shift).
4. SVG Motion:
   - At least 2 purposeful SVG animations (e.g., animated line path, floating nodes, orbiting markers).
   - Motions must support the narrative, not distract.
5. Performance guardrails:
   - 60fps-friendly transforms/opacity, avoid layout thrashing.

## Information Architecture
Build these sections:
1. Hero
2. Social proof/logo strip
3. Feature grid
4. Outstanding metrics section (high priority)
5. Product demo/interactive area
6. Pricing or CTA band
7. FAQ
8. Footer

## Outstanding Metrics Section (high priority)
- Create a visually exceptional analytics block.
- Include:
  - 2–4 charts with clean styling (line, area, bar, donut where appropriate).
  - Animated counters/KPI cards.
  - Interactive legend/tooltips.
  - Time range toggles (7d / 30d / 90d / 12m).
  - Positive/negative deltas with clear semantic color and icons.
- Ensure chart readability:
  - Strong contrast, subtle grid lines, concise labels, smart number formatting.
  - Empty/loading/error states designed (not plain text).

## UX + Product Quality Bar
- Mobile-first responsive behavior with polished breakpoints.
- Accessibility: keyboard navigation, visible focus, semantic markup, aria labels, AA contrast.
- Realistic copy (no lorem ipsum), consistent tone.
- Include all states: default, hover, active, disabled, loading, empty, and error.

## Delivery Workflow (follow strictly)
1. First output:
   - UX flow
   - Component map
   - Visual/motion system rules
   - Data model for metrics/charts
   - Acceptance checklist
2. Second output:
   - Implement section-by-section with clean reusable components.
3. Third output:
   - Polish pass: accessibility, responsiveness, motion tuning, performance notes.
4. Final output:
   - Production readiness audit with remaining gaps.

## Definition of Done
Do not stop until the website looks and feels premium, interactive, and launch-ready.
If any area is placeholder-quality, continue iterating.
```

## Optional Add-on Prompt (for extra polish)

```text
Add a final art-direction pass:
- Improve visual hierarchy and whitespace.
- Increase chart elegance and storytelling.
- Refine motion timing/easing for premium feel.
- Remove anything that feels template-like.
- Ensure the final result feels custom-designed, not generated.
```
