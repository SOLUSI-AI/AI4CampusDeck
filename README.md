# Iwan Cahyo Suryadi — Portofolio & Solusi AI

Portofolio profesional interaktif **Iwan Cahyo Suryadi** (ICS), Founder & CEO [VOXIA](https://voxia.id) dan [INVEZTHINK](https://app.invezthink.com).

**Live:** [ics.qzz.io](https://ics.qzz.io)

## Tech Stack

| Layer | Teknologi |
|---|---|
| Frontend | React 19, TypeScript, Vite 6, Tailwind CSS 4, Motion (Framer Motion) |
| AI Chatbot | Cloudflare Worker → Fireworks AI (`llama-v3p1-8b-instruct`) |
| Deploy | GitHub Actions CI/CD → GitHub Pages |

## Fitur

- **Bilingual ID/EN** — toggle bahasa Indonesia / English
- **Virtual AI Assistant** — Chatbot berbasis LLM untuk menjawab pertanyaan tentang VOXIA, INVEZTHINK, dan profil ICS
- **Interactive Timeline** — Linimasa karir dengan detail per posisi
- **Skills Showcase** — Matriks keahlian dengan filter kategori
- **Company Simulators** — Simulasi AI Engine VOXIA + Candlestick Chart INVEZTHINK
- **WhatsApp Contact Generator** — Draft pesan WhatsApp langsung dari browser

## Run Lokal

```bash
npm install
npm run dev
```

## Deploy

Push ke `main` akan trigger GitHub Actions build + deploy otomatis ke GitHub Pages (custom domain `ics.qzz.io`).

Cloudflare Worker dideploy terpisah via `wrangler`:

```bash
cd worker
npx wrangler deploy
```

## Lisensi

All Rights Reserved. © 2025 Iwan Cahyo Suryadi.
