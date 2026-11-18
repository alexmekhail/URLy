# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Recruiters and engineers who open URLy as part of evaluating the owner's portfolio. The visit is fast — they land, assess immediately, and form a judgment within seconds. The job is "verify this person can ship real, polished software."

**Secondary:** The owner (Alex Mekhail), who uses the dashboard and shortens URLs in practice, validating the app works end-to-end.

## Product Purpose

URLy is a functional URL shortener: paste a long link, get a short one instantly, no account required. It exists as a portfolio piece that proves the owner can design, build, and ship a complete, production-grade full-stack product — frontend to database to deployed infra — with real engineering quality throughout.

Success for a recruiter or engineer visitor means: opening the page, instantly grasping what it does, using it in under 10 seconds, and walking away thinking "this person ships clean work."

## Positioning

URLy demonstrates full-stack ownership without noise — a focused, fast, complete product that works exactly as described. It is not a template clone: the design, the API contracts, the infra choices, and the edge cases (expiration, custom aliases, link safety, QR codes) are all genuinely considered and observable.

## Operating Context

- Visitors arrive via portfolio links (LinkedIn, GitHub, resume, referrals). They spend 15–60 seconds.
- The primary action is shortening a URL — the whole value is in that one interaction.
- The dashboard exists for the owner to manage links and demonstrate deeper engineering (auth, pagination, per-link stats).
- The site is deployed on Vercel (Hobby) + Neon Postgres. Cold starts are ~2–5 seconds; first-paint speed is critical for the recruiter impression.

## Capabilities and Constraints

- **Features:** URL shortening, custom alias, expiration (1h / 1d / 7d / 30d / never), QR code generation, link safety check (Google Safe Browsing), admin dashboard (view, deactivate, per-link stats).
- **Backend:** ASP.NET Core 8 on Vercel container runtime. Routes, request/response shapes, and env/config must not be changed by frontend work.
- **Database:** Neon Postgres via EF Core + Npgsql.
- **Frontend:** Next.js (App Router), React, Tailwind CSS. No heavy new dependencies — load speed matters.
- **Theme:** Dark only. No light mode, no toggle.
- **Slug format:** 6-char alphanumeric. Custom aliases 3–30 chars: letters, numbers, hyphens, underscores.

## Brand Commitments

- **Name:** URLy (all-caps "URL" + lowercase "y", written "URLy" in UI).
- **Domain:** url-y.net
- **Voice:** Confident, minimal, no marketing fluff. Labels and copy are functional and precise.
- **Theme:** Dark — the dark palette is established and must be preserved; refining it (depth, contrast, accent) is in scope.

## Evidence on Hand

- Fully functional deployed app at www.url-y.net
- GitHub repository with real commit history showing incremental engineering decisions
- Real Vercel deployment with Neon Postgres (no mocked data)

## Product Principles

1. **Speed is the first impression.** The site opens fast and the core interaction completes in under 10 seconds. Every load-time decision is a first-impression decision.
2. **Polish signals craft.** Typographic care, state feedback, edge-case handling, and visual depth are the proof — not feature count.
3. **Functional completeness over decoration.** Every feature present is there for a reason; nothing is cosmetic scaffolding.
4. **Observable quality.** The engineering choices (API contracts, error handling, alias validation, link safety) are visible in the UI. A recruiter who looks closely should find things done right.
5. **Owned end-to-end.** Design, frontend, backend, database, and infra were all written and configured by one person. The product communicates that.
