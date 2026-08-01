# Walima Invitation — Ammar & Afaza

A modern Islamic-luxury digital Walima invitation, built with React + Vite. Designed to be shared as a link over WhatsApp and opened beautifully on mobile.

## ✨ Features

- Elegant "opening doors" entrance animation revealing the invitation
- Live countdown timer to the Walima date/time
- Islamic geometric pattern background, arch motif, ornate dividers
- Arabic Bismillah, du'a, and Qur'an verse section
- One-tap "Open in Google Maps" venue button
- Fully responsive, mobile-first layout
- No heavy dependencies — just React + Vite

## 🛠 Local development

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## ✏️ Editing the invitation text

All event details (names, date, time, venue, messages, du'a text) live in one file:

```
src/eventData.js
```

Change the values there and every section of the site updates automatically — no need to touch the components.

To change the countdown target, update `isoDateTime` in that same file (format: `YYYY-MM-DDTHH:MM:SS`).

## 🖼 Replacing images / icons

The design currently uses inline SVG (patterns, arch, pin, star) so there are no image files to manage. If you'd like to add a couple's photo:

1. Drop the image into `src/assets/images/`
2. Import it in `src/components/Hero.jsx`: `import photo from '../assets/images/your-photo.jpg'`
3. Render it with an `<img src={photo} ... />` where you'd like it to appear

## 📦 Build for production

```bash
npm run build
```

Output is written to `dist/`.

## 🚀 Deploy to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Framework preset: **Vite** (auto-detected)
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**

Once deployed, share the Vercel URL over WhatsApp — it opens directly as a mobile-friendly invitation card.

## 📁 Project structure

```
src/
  components/
    Hero.jsx            Opening names, date, Bismillah
    Invitation.jsx       Invitation message + parents' names
    EventDetails.jsx     Date/time cards + countdown
    Countdown.jsx        Live countdown timer logic
    Venue.jsx             Venue name + Google Maps button
    IslamicSection.jsx    Du'a and Qur'an verse
    Footer.jsx             Closing note
    Divider.jsx            Ornate section divider
    OpeningOverlay.jsx    Entrance "door" animation
  eventData.js            All editable invitation content
  useReveal.js             Scroll reveal-on-view hook
  style.css                  Design tokens + all styling
  App.jsx
  main.jsx
```

## 🔜 Planned v2

A second, matching invitation for the Wedding Ceremony (Nikah) is planned using the same component structure — see `future_update` in the original project brief.
