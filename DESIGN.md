# Design: Lekka

Phone-first money book in the world of a carbon receipt book. Operate mode: standard app layout and controls; the world lends palette, type, density and one signature move.

## Colour (tokens in `styles.css :root`)

| Token | Value | Job |
|---|---|---|
| `--ink` | #1E2B6F | Carbon-ink blue. Header, primary buttons, selected states, "Paid" amounts |
| `--ink-deep` | #141E52 | Balance strip, hover |
| `--ink-wash` | #E6E9F5 | Paid tag background, mic button, pressed rows |
| `--ground` | #ECEFF6 | Page background (ink-tinted) |
| `--slip` | #FFFFFF | Slips, rows, sheets |
| `--green` / `--green-wash` | #136636 / #E2F1E7 | Received money only |
| `--danger` | #A3271C | Delete, negative balance |
| `--text` / `--text-2` | #171E3D / #4A5374 | Body / secondary |

Paid vs received is never colour alone: each amount carries a word tag and an arrow icon.

## Type

Anek Telugu (Google Fonts, 400–700) for Telugu and Latin. Body 18px. Money uses tabular numerals and Indian grouping (₹1,00,000).

## Signature move

Every entry is a receipt slip: perforated top edge (CSS mask), date and receipt number "నం. 0004" above a dashed rule, name left, amount right. A newly saved slip tears into the list (`@keyframes tear`). The entry sheet itself is a slip with the same perforation.

## Components

Ink header with totals stub (received / paid, then balance on a darker strip) · list rows (white, 10px radius, soft shadow) · sub-work chips (filter, show paid total) · bottom tab bar (Works, People, Settings) · round "Add money" button · bottom sheets for entry, prompt, confirm. Touch targets ≥48px. Authored line icons (24px, 2px stroke) in an inline SVG sprite.

## Motion

Sheet rises (350ms, expo ease-out); slip tear on save; mic pulses while listening. All disabled under `prefers-reduced-motion`.
