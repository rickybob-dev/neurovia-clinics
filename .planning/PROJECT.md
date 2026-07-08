# Neurovia

## What This Is

Neurovia is an accessible directory for people comparing neurological rehabilitation centers. It launches with verified institutional information for Italy and is designed to expand across Europe through locale-independent center records and translated interface copy.

## Core Value

A person under pressure can find plausible rehabilitation centers and understand why each may fit their needs without confusing community experience with verified medical facts.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Search and filter Italian neurological rehabilitation centers on an interactive map.
- [ ] Inspect verified specialties, care modes, technologies, accessibility, and source links.
- [ ] Submit moderated reviews across transparent care categories using a `/10` scale.
- [ ] Propose new centers with an official source URL.
- [ ] Use the core discovery experience in Italian or English.

### Out of Scope

- Medical recommendations or guaranteed-outcome claims — Neurovia is a decision aid, not medical advice.
- Unmoderated public reviews — health-provider reputation data needs abuse prevention.
- Production authentication and moderation backend in the visual MVP — requires a dedicated security phase.
- Pan-European center coverage in v1 — Italy validates the taxonomy first.

## Context

The initial product is a responsive SvelteKit experience using OpenStreetMap tiles. Seed center facts are attributed to official institutional sources. Ratings are never fabricated; centers without sufficient approved reviews display that state explicitly.

## Constraints

- **Accessibility**: WCAG 2.2 AA — users may have visual, motor, cognitive, or situational access needs.
- **Trust**: Verified facts, community experience, and data completeness must remain visually distinct.
- **Internationalization**: No user-facing copy or clinic taxonomy may depend structurally on Italian-only records.
- **Privacy**: Review forms must avoid collecting diagnoses or detailed medical narratives by default.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Italy-first vertical MVP | Validate the directory and trust model before European expansion | — Pending |
| Italian default with English switch | Serve launch users while preserving European scalability | — Pending |
| Separate community score and data completeness | Missing facts are not evidence of poor care | — Pending |
| Bayesian `/10` scoring after moderation | Small review counts must not dominate rankings | — Pending |
| SvelteKit + Leaflet/OpenStreetMap | Strong interactivity without a proprietary map dependency | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries. Requirements move to Validated only after implementation and verification; invalidated assumptions move to Out of Scope with a reason.

---
*Last updated: 2026-07-08 after initialization*
