---
name: URLy
description: A fast, precise URL shortener with terminal-grade focus
colors:
  bg-base: "#09090b"
  bg-surface: "#18181b"
  bg-elevated: "#27272a"
  amber: "#f59e0b"
  amber-deep: "#d97706"
  amber-glow: "rgba(245, 158, 11, 0.10)"
  text-primary: "#fafafa"
  text-secondary: "#d4d4d8"
  text-muted: "#a1a1aa"
  text-ghost: "#71717a"
  text-ultra-muted: "#52525b"
  border-default: "rgba(255, 255, 255, 0.10)"
  border-focus: "rgba(255, 255, 255, 0.28)"
  error: "#f87171"
  success: "#34d399"
  white-primary: "#ffffff"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, 'Cascadia Code', Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  xl: "18px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "#0c0c0d"
    rounded: "{rounded.lg}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.amber-deep}"
    textColor: "#0c0c0d"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  button-ghost-hover:
    backgroundColor: "rgba(255,255,255,0.10)"
    textColor: "{colors.text-primary}"
  input-default:
    backgroundColor: "rgba(9,9,11,0.60)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  card-surface:
    backgroundColor: "{colors.bg-surface}"
    rounded: "{rounded.xl}"
    padding: "20px"
---

# Design System: URLy

## Overview

**Creative North Star: "Terminal Precision"**

URLy operates like a well-engineered command-line tool translated into a visual interface. Every element is placed with intent; nothing decorates without earning its position. The zinc-950 background recedes like a dark terminal canvas, and warm amber — precise, rare, earned — marks the moments that matter: the action you take, the success you receive.

The palette is predominantly monochromatic. Zinc provides the depth hierarchy: five values from base to elevated, each doing a distinct spatial job. Amber appears only where the user's action or result is confirmed — the primary CTA and copy-confirmed state — which makes it feel like a signal rather than a style choice. Any screen should pass the "three-second scan" test: the amber finds the eye first, then the content, then the structure.

Typography is controlled but not cold. Inter is used at extremes of weight: 800 for the hero that communicates the product in one line, 400 for the body that gets out of the way, monospace for slugs and URLs where precision matters. Labels are uppercase tracked, echoing the vocabulary of terminal output.

**Key Characteristics:**
- Near-black zinc base with five-step tonal depth hierarchy
- Single warm amber accent, used for primary CTA and confirmed success only
- Monospace typography for all URL, slug, and code content
- Tactile interactions: scale and color transitions on press
- Dot-grid background texture at low opacity — implies structure without noise
- Glass-morphism surfaces (backdrop-blur + low-opacity fill) for floating panels

## Colors

A disciplined near-monochrome palette where amber earns meaning through scarcity.

### Primary
- **Warm Amber** (`#f59e0b`): The single warm accent. Used exclusively for the primary action button (Shorten URL), the confirmed-copy state, and amber-tinted success glows. Its rarity is structural — overuse collapses the signal.
- **Amber Deep** (`#d97706`): Amber hover/active state. 10% darker for press confirmation.

### Neutral
- **Base Black** (`#09090b`): Page background. The terminal canvas.
- **Surface Zinc** (`#18181b`): Card and panel backgrounds — first layer above base.
- **Elevated Zinc** (`#27272a`): Elements above a surface (table rows on hover, dropdowns, raised components).
- **Text Primary** (`#fafafa`): Headlines, interactive values, everything important.
- **Text Secondary** (`#d4d4d8`): Body copy, table content, standard form labels.
- **Text Muted** (`#a1a1aa`): Supporting labels, secondary metadata.
- **Text Ghost** (`#71717a`): Placeholders, helper text, non-critical metadata.
- **Text Ultra-muted** (`#52525b`): Timestamps, dividers, deeply secondary context.
- **Default Border** (`rgba(255,255,255,0.10)`): All borders at rest — surfaces, inputs, cards.
- **Focus Border** (`rgba(255,255,255,0.28)`): Input and button focus states.

### Named Rules
**The Amber Scarcity Rule.** Amber is the only warm color in the system. It appears on ≤2 interactive elements per screen at any time. Using it elsewhere — text, borders, backgrounds — spends the signal budget without earning return. When amber appears, it means "do this" or "it worked."

**The Five-Step Depth Rule.** Zinc provides exactly five depth values: base, surface, elevated, text-muted, text-ghost. Never invent a sixth. If a new element needs depth, it must be placed on one of these five steps.

## Typography

**Display Font:** Inter (self-hosted via next/font/google, `latin` subset)
**Body Font:** Inter
**Mono Font:** System monospace stack — `ui-monospace, SFMono-Regular, 'Cascadia Code', Menlo, monospace`

**Character:** Inter at extreme weights (800 / 400) creates compression and release. The heavy display weight commands without decorating; the regular body disappears into readability. Monospace appears wherever precision matters — slugs, URLs, code-like identifiers — reinforcing the terminal character without requiring a loaded display font.

### Hierarchy
- **Display** (800, 3rem / ~48px, lh 1.1, ls −0.025em): Hero headline only. One per page. Never used for section headers.
- **Headline** (700, 1.5rem / 24px, lh 1.25, ls −0.02em): Section titles, dashboard page headers.
- **Title** (600, 1rem / 16px, lh 1.5): Card headers, widget labels.
- **Body** (400, 0.875rem / 14px, lh 1.6): Body copy, table content, descriptions. Max line-length 65ch.
- **Label** (600, 0.6875rem / 11px, ls 0.1em, UPPERCASE): Section tags, status prefixes, table column headers. The terminal-output voice.
- **Mono** (400, 0.875rem / 14px, lh 1.5): All slugs, short links, URLs, alias previews, code-like strings.

### Named Rules
**The Mono-for-Data Rule.** Any string that is a URL, slug, identifier, or computed value renders in the monospace stack. Applying Inter to a slug collapses the terminal character.

## Layout

URLy operates on a single primary column with a 5xl max-width (896px) on the home page and 6xl (1152px) on the dashboard. The gutter is 16px at mobile, 24px at sm, and auto-centering above that via `mx-auto`. No grid beyond the header flex row.

The home page centers vertically in the available viewport (`min-h: calc(100vh − header)`) so the hero + form block lands at optical center on a laptop screen — typically 70% down the viewport.

Responsive pivot is at 640px (sm): the input + button row stacks on mobile, sits side-by-side from sm upward.

Vertical rhythm runs in multiples of 8px: 8/12/16/20/24/32/40/48. Avoid arbitrary values.

## Elevation & Depth

URLy uses tonal layering, not shadows, as its primary depth model. Base (zinc-950) → Surface (zinc-900) → Elevated (zinc-800) defines the visual stack. Elements appear above the page by being lighter, not by casting a shadow.

Glass-morphism surfaces (backdrop-blur-md + rgba fill ≤5%) are reserved for floating panels — the form card, the result card — to create a floating effect without appearing to block the dot-grid. This technique is used sparingly; not every surface floats.

Glow shadows are the one shadow exception: a low-opacity white box-shadow (`0 0 40px -12px rgba(255,255,255,0.12)`) appears under the result card and on the form wrapper. This is an ambient glow that reinforces the terminal-screen aesthetic, not a structural shadow.

**Amber Glow:** `0 0 32px -8px rgba(245,158,11,0.18)` — appears on the result card after a successful shorten. Applied once, at rest, never animating. Signals success without motion.

### Shadow Vocabulary
- **Glass float** (`box-shadow: 0 0 40px -12px rgba(255,255,255,0.12)`): Form wrapper and result card. Ambient halo, not structural.
- **Amber success glow** (`box-shadow: 0 0 32px -8px rgba(245,158,11,0.18)`): Result card post-success only.
- **Glass float sm** (`box-shadow: 0 0 20px -8px rgba(255,255,255,0.15)`): Smaller panels, inline glass elements.

### Named Rules
**The Flat-By-Default Rule.** Surfaces at rest are flat. Glass glow appears on the two floating panels only. No other elements receive box-shadow at rest; hover states may add a 1px border brightening instead.

## Shapes

URLy uses a consistent rounded-corner vocabulary: 6px for small elements (chips, badges), 10px for medium controls (selects, small inputs), 14px for primary inputs and buttons, 18px for cards and primary containers.

No sharp (0px) corners anywhere. No pill shapes (9999px). Roundedness is modulated, not maximized.

Borders are always `1px solid rgba(255,255,255,0.10)` at rest and `1px solid rgba(255,255,255,0.28)` on focus. Never 2px. Never colored borders (except error state: `rgba(248,113,113,0.40)`).

The dot-grid background (`radial-gradient` at 22px × 22px) is a texture layer, not a grid system. It implies structure at a glance, fades at any zoom level, and must remain at ≤8% opacity.

## Components

### Buttons
Tactile, with scale feedback on press. No border on the primary (amber fill stands alone).

- **Shape:** 14px radius
- **Primary (amber):** Amber fill (`#f59e0b`), near-black text (`#0c0c0d`), padding 12px × 20px, font-weight 600, font-size 14px. No border. Hover: amber-deep (`#d97706`). Active: `scale(0.97)`. Transition: 150ms ease.
- **Ghost:** `rgba(255,255,255,0.05)` fill, border `rgba(255,255,255,0.10)`, text zinc-200. Hover: `rgba(255,255,255,0.10)` fill, border `rgba(255,255,255,0.20)`. Active: `scale(0.97)`. Radius 10px.
- **Destructive (deactivate):** No fill, border `rgba(248,113,113,0.30)`, text red-400. Hover: `rgba(248,113,113,0.10)` fill. Radius 8px.

### Cards / Containers
- **Corner Style:** 18px radius
- **Background:** `rgba(24,24,27,0.80)` (zinc-900/80 — allows dot grid to show through lightly)
- **Border:** `1px solid rgba(255,255,255,0.10)`
- **Shadow:** Glass float glow (`0 0 40px -12px rgba(255,255,255,0.12)`)
- **Internal Padding:** 20px

### Inputs / Fields
- **Style:** Filled (`rgba(9,9,11,0.60)`), border `rgba(255,255,255,0.10)`, radius 14px, padding 12px 16px
- **Focus:** Border transitions to `rgba(255,255,255,0.28)`, ring `rgba(255,255,255,0.08)` 2px
- **Error:** Border `rgba(248,113,113,0.40)`, no background change
- **Disabled:** 60% opacity, cursor not-allowed
- **Placeholder:** Text ghost (`#71717a`)

### Navigation (Header)
- Sticky, `blur(12px)` backdrop, zinc-950/70 fill, border-b `rgba(255,255,255,0.10)`
- Logo: Inter 700, zinc-50, `tracking-tight`
- Nav links: Inter 500, 14px, zinc-400 at rest → zinc-100 on hover, 150ms transition
- No active indicator at current page. No horizontal padding excess.

### Result Card (Signature Component)
The post-shorten success panel. The most important surface on the home page.

- Same card styles as above, plus amber success glow on the box-shadow
- Short URL renders in mono (`font-mono text-sm`) with dotted underline
- Label above the URL ("YOUR SHORT LINK") in label style: 11px, uppercase, tracking-widest, zinc-400
- Copy button: ghost style + transitions to amber-tint on copied state ("✓ Copied" with amber text)
- QR code section below a divider, centered
- `animate-fade-in-up` on mount (0.35s ease-out)

### Status Badges
- **Active:** `rgba(52,211,153,0.10)` fill, emerald-400 text, `1px inset ring rgba(52,211,153,0.20)`
- **Inactive:** `rgba(255,255,255,0.05)` fill, zinc-500 text, `1px inset ring rgba(255,255,255,0.10)`
- Radius 9999px (pills only here, as a semantic "state indicator")

## Do's and Don'ts

### Do:
- **Do** use monospace for every URL, slug, alias preview, and computed identifier.
- **Do** add `active:scale-[.97]` or `active:scale-95` to every interactive element (buttons, copy targets, row actions).
- **Do** keep amber to exactly one or two active elements per screen. Its rarity is structural.
- **Do** use the five-step zinc depth model for all surface layering decisions.
- **Do** write labels in uppercase tracked Inter (font-semibold text-[11px] tracking-widest uppercase).
- **Do** let the dot-grid show through glass surfaces at ≤8% opacity.

### Don't:
- **Don't** add amber to text, borders, icons, or background areas — only CTA button fills and confirmed-copy states.
- **Don't** introduce a second accent color. The system is intentionally monochrome with one warm signal.
- **Don't** use font-mono for anything that isn't a URL, slug, alias, or computed identifier.
- **Don't** stack glass surfaces (blur inside blur). One level of backdrop-blur per visual layer.
- **Don't** use pill/circular radius except for status badge chips.
- **Don't** add a light mode, theme toggle, or any `prefers-color-scheme: light` rule.
- **Don't** place amber glow on more than the result card. Glow on every card erases the success signal.
