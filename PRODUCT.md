# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JavaScript, no framework and no build step. Installable as a home-screen web app (PWA), works offline. Hosted on GitHub Pages. Chosen by the user from a recommendation.

## Users

One person: the owner's father, who manages people working in the field and other jobs. He uses it on his phone, often outdoors, between tasks, sometimes with dirty or busy hands. He reads Telugu and English. He is not a power user of apps; every action must be obvious.

## Product Purpose

Keep a clear record of each work (job), its sub-works, the people doing them, and the money: what was paid out (to people, for materials) and what was received from the client. Success means he can answer "how much have I paid, how much have I got, what is pending" for any work in a few seconds, and record a payment in under 15 seconds.

## Positioning

A private notebook for one contractor-style manager, not an accounting product. No accounts, no login, no cloud. Speak an entry instead of typing it. Attach a photo (receipt, site, person) as proof.

## Operating Context

- Works have sub-works (e.g. a building job with plumbing, painting sub-works).
- Entries are either money paid out (to a named person or for materials) or money received.
- Each entry can carry a person's name, an amount, a note, a date and an optional photo.
- Entry by voice in Telugu (te-IN) or English (en-IN) via the browser's speech recognition.
- Currency is Indian Rupees, Indian digit grouping (1,00,000).

## Capabilities and Constraints

- Data lives only on the phone (IndexedDB). Backup and restore through a downloadable file is required, because a lost phone means lost data.
- Voice input depends on the browser (works in Chrome on Android); the app must work fully without it.
- Photos are compressed on the phone before saving to keep storage small.
- Bilingual labels: Telugu and English, switchable.
- Only features useful to him: no charts for their own sake, no categories beyond what he needs, no multi-user.

## Product Principles

1. Fewest taps wins. Adding money is the most common job; it is always one tap away.
2. Numbers are the hero: totals readable at arm's length in sunlight.
3. Nothing is lost silently: confirm deletes, remind about backups.
4. Plain words in his language, not accounting jargon.

## Accessibility & Inclusion

Older user: large text (body 18px+), large touch targets (48px+), high contrast for outdoor use, no reliance on color alone for paid vs received.
