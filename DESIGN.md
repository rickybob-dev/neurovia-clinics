# Neurovia Design System

## Direction

Neurovia is calm clinical software for people making difficult decisions. The interface uses familiar controls, explicit labels, flat materials, and strong information separation. Trust comes from linked evidence and understandable states rather than decorative authority signals.

## Color

All production colors use OKLCH tokens in `src/app.css`.

- Background: pure white
- Structure and navigation: deep teal
- Primary action and selected center: restrained oxblood
- Informational surface: pale aqua
- Verification: green with accompanying icon and text
- Focus: high-visibility yellow
- Body text: near-black; secondary copy uses a high-contrast slate

Never use color as the only carrier of meaning. Community ratings, verified facts, and completeness use distinct labels and structures.

## Typography

Atkinson Hyperlegible is locally bundled in regular and bold weights. Product type uses a compact fixed scale; only the introductory and methodology headings scale fluidly. Body copy remains at least `1rem`, with readable line length and generous leading.

## Layout

Desktop discovery uses synchronized list, map, and detail regions. Tablet retains list/map while detail becomes an anchored panel. Mobile uses an explicit list/map segmented control and a bottom detail panel. All touch targets are at least 44px.

## Components

- Buttons use one primary oxblood treatment and one teal outline treatment.
- Form controls retain native semantics and conventional interaction.
- Tags communicate factual taxonomy, not decoration.
- Dialogs use the native `dialog` element and focused, privacy-conscious forms.
- Empty, insufficient-data, verification, and moderation-pending states are written explicitly.

## Motion

Motion only communicates map selection or state changes. Reduced-motion preferences collapse transitions to effectively instant updates.

## Accessibility

Target WCAG 2.2 AA: visible focus, keyboard operation, semantic regions, native form labels, non-color status cues, browser zoom, reduced motion, and responsive reflow.
