# 💌 emotional-mini-app

> *"Est-ce que tu m'aimes ?"*  
> A simple question. An experience that lingers.

A viral-ready emotional mini web app built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- **Screen 1** — "Est-ce que tu m'aimes ?" — The "Non" button escapes the cursor
- **Screen 2** — "Pourquoi tu hésites ?" — Soft fade-in moment
- **Screen 3** — 6 gift boxes to open, each with a secret
- **Screen 4** — "Clique ici pour oublier" — Screen fades to white…
- Progress dots indicator
- Mobile-first, romantic minimal aesthetic
- Smooth Framer Motion transitions throughout

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂 Project Structure

```
emotional-mini-app/
├── src/
│   └── app/
│       ├── globals.css      # Global styles + grain texture
│       ├── layout.tsx       # Root layout + metadata
│       └── page.tsx         # All 4 screens + animations
├── public/                  # Static assets
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🐙 GitHub

```bash
git init
git add .
git commit -m "feat: initial emotional-mini-app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/emotional-mini-app.git
git push -u origin main
```

---

## ▲ Deploy on Vercel

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: emotional-mini-app
# - Directory: ./
# - Override settings? N

# For production deployment:
vercel --prod
```

### Option B — Vercel Website (easier)

1. Push your code to GitHub (see above)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"**
4. Import your GitHub repo `emotional-mini-app`
5. Keep all default settings (Next.js auto-detected)
6. Click **"Deploy"**
7. ✅ Your app is live in ~60 seconds!

---

## 📱 Share on TikTok / Instagram

After deploying, copy your Vercel URL (e.g. `https://emotional-mini-app.vercel.app`) and share it — the experience is designed for mobile and built to be passed around.

---

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 14.2.3 |
| React | 18 |
| Framer Motion | 11 |
| Tailwind CSS | 3.4 |
| TypeScript | 5 |

---

*Made with 🌹 and a little heartache.*
