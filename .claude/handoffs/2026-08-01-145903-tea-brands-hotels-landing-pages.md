# Handoff: AI Studio landing page rebuilds (hotels-business + tea-brands)

## Session Metadata
- Created: 2026-08-01 14:59:03
- Project: G:\srv-technology
- Branch: main
- Session duration: Not tracked by this session (handoff written retroactively from git history, working tree was already clean)

### Recent Commits (for context)
  - a1c3f76 brand studies commented out
  - 59371d8 fix: use real logo images in tea-brands header/footer
  - 634b1ed fix: revert tea-brands visual design back to the original AI Studio export
  - f8f3e7e feat: rebuild tea-brands page with new D2C positioning
  - eb1c323 feat: rebuild hotels-business page from new AI Studio design, restyled + fixed

## Handoff Chain

- **Continues from**: None (fresh start)
- **Supersedes**: None

> This is the first handoff for this task.

## Current State Summary

Two landing pages (`/hotels-business` and `/tea-brands`) were rebuilt from new Google AI Studio–generated designs, each moved into their own component folder (`src/pages/hotels-landing/`, `src/pages/tea-landing/`) to avoid colliding with the sitewide `src/components/{Hero,Footer,Navbar}.tsx`. Both pages are functionally complete, committed, and the working tree is clean — there is no in-progress code. The last commit (`a1c3f76`) comments out the "Brand Studies" nav link on the tea-brands page but leaves the underlying modal and footer trigger wired up (see Open Questions). No dev server was verified running as part of this handoff; if resuming, treat "does it render correctly in a browser" as unverified.

## Codebase Understanding

### Architecture Overview

- Each AI-Studio-sourced landing page gets its own page-scoped component directory under `src/pages/<name>-landing/` (e.g. `hotels-landing/`, `tea-landing/`) — `Navbar.tsx`, `Footer.tsx`, `Hero.tsx`, etc. scoped per page, not shared with the sitewide `src/components/` versions.
- Lead capture converges on one real endpoint: `POST /api/landing-lead` (see `server.js`), which does email + `leads.json` + shows up in the admin panel. Any new page's lead form/schedule modal must wire into this, not a fake/local-only handler.
- `server.js`'s `/api/landing-lead` was extended with an optional `note` field (in the tea-brands rebuild, f8f3e7e) so schedule-request modals can carry a requested date/time without overloading the generic "detail" field.
- Real WhatsApp CTA convention: `wa.me/917001769472` — AI Studio exports tend to ship a fake simulated chat widget instead; that always gets replaced with the real deep link.
- Real contact number convention: `+91 70017 69472` — AI Studio exports sometimes fabricate a plausible-looking but fake number; always replace with the real one.
- Logo assets: `srv-tech-board.png` (dark-toned, for light backgrounds) and `srv-tech-board-footer.png` (light-toned, for dark backgrounds) — which one to use depends on that specific page's header/footer background color, not a fixed header-vs-footer rule (tea-brands uses `srv-tech-board.png` in *both* header and footer because its footer is white, unlike hotels-business's dark footer).
- Site-wide font is Roboto, forced via an `!important` rule. Pages that intentionally use a different font (tea-brands uses Inter, matching its original AI Studio export) override this with the same `@layer base` technique used first on the hotels-business page.

### Critical Files

| File | Purpose | Relevance |
|------|---------|-----------|
| `server.js` | Express backend; `/api/landing-lead` endpoint handles all landing-page lead submissions | Any new landing page form must POST here |
| `src/pages/HotelsBusinessPage.tsx` | Top-level page for `/hotels-business` | Composes components from `src/pages/hotels-landing/` |
| `src/pages/TeaBrandsPage.tsx` | Top-level page for `/tea-brands` | Composes components from `src/pages/tea-landing/` |
| `src/pages/hotels-landing/` | Page-scoped components for hotels-business (Navbar, Footer, Hero, RoiCalculator, AuditResultModal, DirectBookingDemoModal, etc.) | Restyled to site's blue-600/indigo-600/slate Tailwind palette (deliberately diverges from tea-brands, see Decisions) |
| `src/pages/tea-landing/` | Page-scoped components for tea-brands (Navbar, Footer, Hero, RoiCalculator, CaseStudiesModal, ScheduleModal, etc.) | Kept the *original* AI Studio palette (`#01261f`/`#7d562d`/`#ffca98`/etc.) and Inter font per Rishav's explicit correction — do NOT restyle to site palette |
| `src/assets/landing/tea-hero-original.webp` | Self-hosted hero image for tea-brands | Downloaded from the AI Studio Google-hosted hotlink because that CDN is session-tied/temporary, unsafe for production |
| `src/assets/landing/tea-leaf-macro.webp` | Region-specialization background image | Converted from the AI Studio export's bundled photo, 725KB → 78KB |

### Key Patterns Discovered

- **Branding fidelity is per-request, not a standing rule.** The hotels-business rebuild restyled everything to the site's own Tailwind palette. Rishav then explicitly corrected that generalization for tea-brands: for that page he wanted the original AI Studio colors/fonts/logo/hero kept as-is. This is now recorded in memory (`feedback_match_site_branding.md`) — always ask/confirm per page rather than assuming either default.
- **Standing fixes that DO generalize across every AI Studio import** (unlike palette, which doesn't): wire lead forms to `/api/landing-lead`, replace fake WhatsApp chat sim with the real `wa.me` link, replace fabricated phone numbers with the real one, drop `alert()`-based fake Privacy/Terms links, and re-label any fabricated "verified" case studies/testimonials as "illustrative"/"example" (same false-claim concern as the `aggregateRating` SEO issue fixed earlier in this project — see `project_seo_audit.md` memory).

## Work Completed

### Tasks Finished

- [x] Rebuilt `/hotels-business` from a new AI Studio export: OTA-savings calculator, audit-reveal modal, direct-booking demo modal; restyled to site palette; real logo/photos; lead form wired to `/api/landing-lead`; fake WhatsApp/Privacy/Terms/booking-confirmation `alert()`s removed
- [x] Rebuilt `/tea-brands` with new D2C positioning (Shopify/D2C margin pitch instead of wholesale/export-buyer pitch) — confirmed as a deliberate audience change, not just a restyle
- [x] Reverted tea-brands visual design back to the *original* AI Studio palette/fonts/logo/hero/copy per Rishav's correction, while keeping the cross-cutting fixes (real lead form endpoint, real WhatsApp link, real phone number)
- [x] Swapped tea-brands' plain-text logo for the real logo image files in header and footer
- [x] Commented out the "Brand Studies" nav link in tea-brands' `Navbar.tsx`

### Files Modified

See commit stats above (`eb1c323`, `f8f3e7e`, `634b1ed`, `59371d8`, `a1c3f76`) — full file lists are in each commit; not duplicated here since the working tree is clean and git history is authoritative.

### Decisions Made

| Decision | Options Considered | Rationale |
|----------|-------------------|-----------|
| hotels-business restyled to site's Tailwind blue/indigo/slate palette | Keep source's custom `#0b1c30`/`#0053db` palette vs. restyle | Matches every other page on the site (standing convention at the time) |
| tea-brands kept its *original* AI Studio palette/fonts, not restyled | Restyle to match site (like hotels) vs. keep source design | Rishav explicitly corrected the generalized "always restyle" assumption for this specific page — per-page choice, now in memory |
| tea-brands positioning changed to D2C/Shopify pitch | Keep wholesale/export-buyer pitch vs. rebuild for new audience | Confirmed with Rishav as a deliberate audience/offer change |
| "Brand Studies" nav link commented out (not deleted) in tea-landing Navbar | Delete the feature entirely vs. hide vs. leave as-is | Unclear — see Open Questions below, this looks incomplete |

## Pending Work

### Immediate Next Steps

1. Resolve the "Brand Studies" inconsistency (see Open Questions) — decide whether to also comment out/remove the Footer's Brand Studies trigger and/or `CaseStudiesModal.tsx`, or restore the nav link.
2. Start the dev server and manually verify both `/hotels-business` and `/tea-brands` render correctly end-to-end (forms submit to `/api/landing-lead`, modals open/close, WhatsApp link works) — this has not been confirmed working in a browser this session.
3. No other known outstanding work; check with Rishav if there's a next page/task queued.

### Blockers/Open Questions

- [ ] **Tea-brands "Brand Studies" feature is now half-removed.** `a1c3f76` comments out the nav-bar trigger (`onOpenCaseStudies`) in `src/pages/tea-landing/Navbar.tsx`, but `src/pages/tea-landing/Footer.tsx` still has a live button calling the same `onOpenCaseStudies` handler, and `CaseStudiesModal.tsx` + the state wiring in `TeaBrandsPage.tsx` are all still present and functional. This looks like an unfinished edit rather than an intentional partial-hide — confirm with Rishav whether the feature should be fully removed, fully kept, or specifically hidden from nav only (unlikely, but ask rather than assume).

### Deferred Items

- None explicitly deferred; no incomplete/WIP code was found in the working tree.

## Context for Resuming Agent

### Important Context

- **Branding-fidelity rule is per-page, not global** — memory file `feedback_match_site_branding.md` documents this. Do not assume the hotels-business "restyle to site palette" approach applies to the next AI Studio import; ask.
- **Never publish/deploy without explicit approval** — standing rule from user's global CLAUDE.md, applies to any of these landing pages going live.
- The tea-brands hero image and leaf-macro image were deliberately re-hosted locally (`src/assets/landing/`) instead of linking the AI Studio/Google CDN URLs, because those hotlinks are session-tied and will break in production. Any future AI Studio import should follow the same download-and-self-host pattern for images.
- `server.js`'s `/api/landing-lead` `note` field is optional and was added specifically for schedule-request modals — don't assume every caller populates it.

### Assumptions Made

- Assumed (from git history alone, since this handoff was written without live session context) that the working tree being clean means all intended work for this task is actually finished, aside from the Brand Studies inconsistency flagged above. Verify with Rishav if unsure.

### Potential Gotchas

- Don't generalize a branding/styling correction made on one page into a rule for other AI Studio import pages — this already caused one real misjudgment (hotels → restyle, then wrongly assumed tea-brands should follow, then corrected). Ask per page.
- `srv-tech-board.png` vs `srv-tech-board-footer.png` choice depends on that specific section's background color (light vs dark), not a fixed "header uses X, footer uses Y" rule.
- The site forces Roboto sitewide via an `!important` CSS rule — if a page needs a different font (like tea-brands' Inter), it needs the same `@layer base` override technique already used on hotels-business, or the sitewide rule will silently win.

## Environment State

### Tools/Services Used

- Vite/React frontend (`src/pages/...`), Express backend (`server.js`) with `/api/landing-lead` for lead capture
- No other external tools/services touched in this work

### Active Processes

- None running as part of this handoff; no dev server was started in this session

### Environment Variables

- None referenced or required for this specific work

## Related Resources

- Memory: `feedback_match_site_branding.md` — records the per-page branding-fidelity lesson from this work
- Memory: `project_seo_audit.md` — prior precedent for the "don't label fabricated content as verified" fix pattern reused here on tea-brands' case studies

---

**Security Reminder**: Before finalizing, run `validate_handoff.py` to check for accidental secret exposure.
