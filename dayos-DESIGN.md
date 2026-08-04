---
version: alpha
name: "Dayos AI — High-Contrast Condensed"
description: "Dayos uses a stark black-and-white foundation with a single electric yellow (#fff100) accent, anchored by the SuisseIntlCond display typeface at extreme weights and sizes. The UI is flat with no shadows, relying on border contrast and background fills for hierarchy. A floating pill-shaped nav bar, full-bleed dark backgrounds, and oversized condensed headlines define the brand's visual identity. Modal dialogs use white cards with generous rounded corners against the dark page backdrop."
colors:
  green-pillar-2-mint: "#d1ffca"
  grey-100: "#f3f3f3"
  white: "#ffffff"
  yellow: "#fff100"
  black: "#000000"
  grey-500: "#979797"
  grey-600: "#444444"
  grey-200: "#e5e5e5"
typography:
  hero-display-xl:
    fontFamily: "SuisseIntlCond"
    fontSize: "115.556px"
    fontWeight: "700"
    lineHeight: "104px"
    letterSpacing: "-3.46667px"
  hero-display-l:
    fontFamily: "SuisseIntlCond"
    fontSize: "71.1111px"
    fontWeight: "700"
    lineHeight: "64px"
    letterSpacing: "-2.13333px"
  hero-display-m:
    fontFamily: "SuisseIntlCond"
    fontSize: "56.8889px"
    fontWeight: "700"
    lineHeight: "51.2px"
    letterSpacing: "-1.70667px"
  display-s:
    fontFamily: "SuisseIntlCond"
    fontSize: "42.6667px"
    fontWeight: "700"
    lineHeight: "38.4px"
    letterSpacing: "-1.28px"
  subheading:
    fontFamily: "SuisseIntl"
    fontSize: "35.5556px"
    fontWeight: "450"
    lineHeight: "39.1111px"
    letterSpacing: "-0.711111px"
  body-default:
    fontFamily: "SuisseIntl"
    fontSize: "14.2222px"
    fontWeight: "400"
    lineHeight: "17.7778px"
  label-medium:
    fontFamily: "SuisseIntl"
    fontSize: "12.4444px"
    fontWeight: "500"
    lineHeight: "16.1778px"
    letterSpacing: "-0.124444px"
  label-small:
    fontFamily: "SuisseIntl"
    fontSize: "12.4444px"
    fontWeight: "500"
    lineHeight: "14.2222px"
  body-medium:
    fontFamily: "SuisseIntl"
    fontSize: "14.2222px"
    fontWeight: "500"
    lineHeight: "17.7778px"
    letterSpacing: "-0.284444px"
  mono-small:
    fontFamily: "SuisseIntlMono"
    fontSize: "10.6667px"
    fontWeight: "400"
    lineHeight: "17.0667px"
    letterSpacing: "-0.32px"
rounded:
  input-card-small: "10.6667px"
  pill-nav: "42.6667px"
  modal-large-card: "28.4444px"
  medium-card: "21.3333px"
  full-pill: "56.8889px"
  chip-tag: "3.5556px"
  button-subtle: "8.8889px"
  full-circle: "999px"
spacing:
  p1: "0.8rem"
  p2: "1.6rem"
  p3: "2.4rem"
  p4: "3.2rem"
  p5: "4rem"
  p6: "4.8rem"
  p7: "5.6rem"
  p8: "6.4rem"
  p10: "8rem"
  p12: "9.6rem"
  section-margin: "9.6rem"
  nav-height: "8rem"
  grid-side-margin: "8rem"
  grid-column-gap: "2.4rem"
---

## Overview

Dayos uses a stark black-and-white foundation with a single electric yellow (#fff100) accent, anchored by the SuisseIntlCond display typeface at extreme weights and sizes. The UI is flat with no shadows, relying on border contrast and background fills for hierarchy. A floating pill-shaped nav bar, full-bleed dark backgrounds, and oversized condensed headlines define the brand's visual identity. Modal dialogs use white cards with generous rounded corners against the dark page backdrop.

**Signature traits:**
- Dual typeface system: Pairs SuisseIntlCond and SuisseIntl across the type hierarchy.
- Soft, rounded geometry: Generous corner rounding up to 999px.

## Colors

The palette uses 8 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **action-text** maps to `black`: Role "text" is grounded by usage context "Primary text, button fills, icon fills, hero backgrounds".
- **surface-background** maps to `white`: Role "background" is grounded by usage context "Modal surfaces, card backgrounds, input backgrounds, body text on dark surfaces".
- **border-border** maps to `grey-200`: Role "border" is grounded by usage context "Dividers, input borders, subtle separators".
- **content-text** maps to `grey-500`: Role "text" is grounded by usage context "Placeholder text, secondary labels, muted captions".

### Text Scale
- **Black** (#000000): Primary text, button fills, icon fills, hero backgrounds. Role: text. {authored: rgb(0, 0, 0), space: rgb, alpha: 0.8}
- **Grey 500** (#979797): Placeholder text, secondary labels, muted captions. Role: text. {authored: rgb(151, 151, 151), space: rgb}
- **Grey 600** (#444444): Nav link text, secondary body text, form labels. Role: text. {authored: rgb(68, 68, 68), space: rgb}

### Interactive
- **Grey 200** (#e5e5e5): Dividers, input borders, subtle separators. Role: border. {authored: rgb(229, 229, 229), space: rgb}

### Surface & Shadows
- **Green Pillar 2 (Mint)** (#d1ffca): Pillar/feature section background tint (--cl-pillar1). Role: background. {authored: rgb(209, 255, 202), space: rgb}
- **Grey 100** (#f3f3f3): Nav bar pill background, secondary surface fills. Role: background. {authored: rgb(243, 243, 243), space: rgb}
- **White** (#ffffff): Modal surfaces, card backgrounds, input backgrounds, body text on dark surfaces. Role: background. {authored: rgb(255, 255, 255), space: rgb}
- **Yellow** (#fff100): Primary CTA button background, brand accent highlights. Role: background. {authored: rgb(255, 241, 0), space: rgb}

## Typography

Typography uses SuisseIntlCond, SuisseIntl, SuisseIntlMono across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes SuisseIntlCond and SuisseIntl and SuisseIntlMono for visual contrast. Weight range spans bold, medium, regular. Sizes range from 10.6667px to 115.556px.

### Font Roles
- **Headline Font**: SuisseIntl
- **Body Font**: SuisseIntl

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Largest hero headline, full-bleed section titles | SuisseIntlCond | 115.556px | 700 | 104px | -3.46667px | SuisseIntlCond | Extracted token |
| Primary hero and section display headlines | SuisseIntlCond | 71.1111px | 700 | 64px | -2.13333px | SuisseIntlCond | Extracted token |
| Mid-size section headlines | SuisseIntlCond | 56.8889px | 700 | 51.2px | -1.70667px | SuisseIntlCond | Extracted token |
| Sub-section headings, modal titles (e.g. 'BE THE FIRST TO EXPLORE') | SuisseIntlCond | 42.6667px | 700 | 38.4px | -1.28px | SuisseIntlCond | Extracted token |
| Large subheadings and pull quotes | SuisseIntl | 35.5556px | 450 | 39.1111px | -0.711111px | SuisseIntl | Extracted token |
| Primary body text, paragraph content | SuisseIntl | 14.2222px | 400 | 17.7778px | normal | SuisseIntl | Extracted token |
| Nav links, form labels, UI labels, button text | SuisseIntl | 12.4444px | 500 | 16.1778px | -0.124444px | SuisseIntl | Extracted token |
| Small UI labels, tags, chips | SuisseIntl | 12.4444px | 500 | 14.2222px | normal | SuisseIntl | Extracted token |
| Emphasized body text, feature descriptions | SuisseIntl | 14.2222px | 500 | 17.7778px | -0.284444px | SuisseIntl | Extracted token |
| Technical annotations, data labels, code-adjacent text | SuisseIntlMono | 10.6667px | 400 | 17.0667px | -0.32px | SuisseIntlMono | Extracted token |

## Layout

Responsive system uses 4 breakpoint tier(s): mobile, tablet, desktop, wide.

This system uses a 8px base grid with scale values 3.6, 7.1, 10.7, 14.2, 21.3, 28.4, 35.6, 41.1, 56.9, 71.1, 78.6, 85.3, 128, 153.6.

### Responsive Strategy
- **mobile (<= 767px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **tablet (>= 640px)**: Increase spacing and column structure for medium-width viewports.
- **desktop (>= 1024px)**: Expand layout density and horizontal composition for wide viewports.
- **wide (>= 1536px)**: Stretch composition with generous gutters and wider layout spans.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| p1 | 0.8rem | 12.8 | Mapped to --p1 |
| p2 | 1.6rem | 25.6 | Mapped to --p2 |
| p3 | 2.4rem | 38.4 | Mapped to --p3 |
| p4 | 3.2rem | 51.2 | Mapped to --p4 |
| p5 | 4rem | 64 | Mapped to --p5 |
| p6 | 4.8rem | 76.8 | Mapped to --p6 |
| p7 | 5.6rem | 89.6 | Mapped to --p7 |
| p8 | 6.4rem | 102.4 | Mapped to --p8 |
| p10 | 8rem | 128 | Mapped to --p10 |
| p12 | 9.6rem | 153.6 | Mapped to --p12 |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| n/a | 0 | No validated shadow payload |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | backdrop-filter | blur(10px) |
| Light | outline-color | rgb(0, 0, 0) ; rgb(255, 255, 255) ; rgb(151, 151, 151) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(1, 0, 0, 1, 0, 0) ; matrix(1, 0, 0, 1, 0, 16.1562) ; matrix(1, 0, 0, 1, 0, 35.5469) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| Chip / Tag | 3.5556px | 3.5556 | Subtle corner |
| Button Subtle | 8.8889px | 8.8889 | Control corner |
| Input / Card Small | 10.6667px | 10.6667 | Control corner |
| Medium Card | 21.3333px | 21.3333 | Large surface corner |
| Modal / Large Card | 28.4444px | 28.4444 | Large surface corner |
| Pill Nav | 42.6667px | 42.6667 | Large surface corner |
| Full Pill | 56.8889px | 56.8889 | Large surface corner |
| Full Circle | 999px | 999 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| Input / Card Small | 10.6667px | px |
| Pill Nav | 42.6667px | px |
| Modal / Large Card | 28.4444px | px |
| Medium Card | 21.3333px | px |
| Full Pill | 56.8889px | px |
| Chip / Tag | 3.5556px | px |
| Button Subtle | 8.8889px | px |
| Full Circle | 999px | px |

## Components

(none detected)

## Do's and Don'ts

Guardrails protect Dual typeface system, Soft, rounded geometry without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 767px | only screen and (max-width: 767px) |
| Mobile | >= 640px | (min-width: 640px) |
| Tablet | >= 768px | (min-width: 768px) |
| Desktop | >= 1024px | (min-width: 1024px) |
| Desktop | >= 1280px | (min-width: 1280px) |
| Desktop | >= 1536px | (min-width: 1536px) |
| Breakpoint 7 | Unknown | print |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
