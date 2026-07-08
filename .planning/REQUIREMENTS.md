# Requirements: Neurovia

**Defined:** 2026-07-08  
**Core Value:** People can find plausible rehabilitation centers and understand fit without confusing community experience with verified facts.

## v1 Requirements

### Discovery

- [x] **DISC-01**: User can search centers by name, city, region, or condition.
- [x] **DISC-02**: User can filter by condition, care mode, technology, and SSN access.
- [x] **DISC-03**: User can select a center from either the result list or map and see both views synchronize.
- [x] **DISC-04**: Mobile user can switch between an optimized list and map view.

### Center information

- [x] **CENT-01**: User can view official address, contact details, care modes, treated conditions, and technologies.
- [x] **CENT-02**: User can distinguish source-verified facts, community scores, and data completeness.
- [x] **CENT-03**: User can open the official source supporting a center record.

### Community

- [x] **COMM-01**: User can submit a review with `/10` category ratings and a treatment-relationship declaration.
- [x] **COMM-02**: User can propose a new center with an official website for moderation.
- [x] **COMM-03**: Centers without enough approved reviews show an explicit insufficient-data state.

### Internationalization and accessibility

- [x] **I18N-01**: User can switch the core interface between Italian and English.
- [x] **A11Y-01**: User can complete discovery and contribution flows with keyboard and screen reader.
- [x] **A11Y-02**: Interface meets contrast, focus, touch-target, zoom, and reduced-motion requirements.

## v2 Requirements

### Trust infrastructure

- **AUTH-01**: User can create and verify an account by email.
- **MOD-01**: Moderator can review, redact, approve, reject, and audit submissions.
- **RESP-01**: Verified center representative can publish an identified response.
- **SCORE-01**: Published ratings use Bayesian weighting with documented priors and minimum counts.

### European expansion

- **EURO-01**: Directory supports country-specific care-system metadata and languages.
- **EURO-02**: User can compare access routes without implying equivalence between national health systems.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Appointment booking | Requires provider integrations and operational guarantees |
| Clinical treatment recommendations | Requires licensed clinical governance |
| Anonymous instant publishing | Conflicts with moderation and abuse-prevention requirements |
| Fabricated or promotional center rankings | Conflicts with the trust model |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DISC-01..04 | Phase 1 | Complete |
| CENT-01..03 | Phase 1 | Complete |
| COMM-01..03 | Phase 1 | Complete |
| I18N-01 | Phase 1 | Complete |
| A11Y-01..02 | Phase 1 | Complete |

**Coverage:** 13 v1 requirements, 13 mapped, 0 unmapped.

---
*Last updated: 2026-07-08 after initial definition*
