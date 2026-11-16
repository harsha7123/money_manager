# Lekka · లెక్క

A simple money book for managing works, sub-works and the people in the field. Built for one person on a phone.

- **Works and sub-works.** Add a work (e.g. "Srinivas house construction") and its sub-works ("Plumbing", "Painting").
- **Paid and received.** Every entry is a numbered receipt slip with a name, amount, date, note and optional photo. Totals per work, sub-work and person.
- **Voice.** Tap the mic and say *"రమేష్ కి 500 ఇచ్చాను"* or *"Received 50,000 from Srinivas"*. It fills in the amount, paid/received and the name; check it and save. (Works in Chrome on Android.)
- **Photo.** Take a photo of a bill or the site; it is compressed and saved with the entry.
- **People.** See how much was paid to / received from each person across all works.
- **Telugu and English.** Switch in Settings.
- **Works offline, no login.** Data is stored only on the phone. Use **Settings → Save backup file** every week and send the file to WhatsApp or Drive. **Restore** brings it back on a new phone.

## Use it on the phone

The site is published with GitHub Pages at `https://harsha7123.github.io/money_manager/`. Open it in Chrome on the phone, then menu ⋮ → **Add to Home screen**. It then opens like an app.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. No build step; plain HTML, CSS and JavaScript.

## Files

`index.html`, `styles.css`, `app.js` (app), `sw.js` + `manifest.webmanifest` (offline / install), `PRODUCT.md` + `DESIGN.md` (product and design record for the [impeccable](https://github.com/pbakaus/impeccable) skill in `.claude/skills/impeccable`, Apache 2.0).
