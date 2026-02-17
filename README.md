# vibe.fm — AI Song Recommender

A Next.js web app that analyzes your Spotify listening history and uses **Claude AI** to generate a personalized playlist matching your current vibe.

---

## Features

- 🎵 Spotify OAuth login — fetches your 20 most recently played tracks  
- 🤖 Claude AI recommends 10–15 new songs with vibe explanations  
- 🎨 Dark editorial UI with animated waveforms and micro-interactions  
- 🔁 Demo mode with sample data (no Spotify account required)  
- ☁️ Deploy-ready for Vercel  

---

## Prerequisites

- Node.js 18+
- A [Spotify Developer account](https://developer.spotify.com/dashboard)
- An [Anthropic API key](https://console.anthropic.com/)

---

## Spotify App Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Click **Create App**
3. Fill in the app name and description
4. Set **Redirect URI** to:
   - Development: `http://localhost:3000/api/auth`
   - Production: `https://your-vercel-url.vercel.app/api/auth`
5. Copy your **Client ID** and **Client Secret**

---

## Local Setup

```bash
# 1. Clone and install
git clone https://github.com/your-username/vibe-recommender.git
cd vibe-recommender
npm install

# 2. Set up environment variables
cp .env.local .env.local
# Fill in your credentials in .env.local

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

| Variable | Description |
|---|---|
| `SPOTIFY_CLIENT_ID` | From Spotify Developer Dashboard |
| `SPOTIFY_CLIENT_SECRET` | From Spotify Developer Dashboard |
| `SPOTIFY_REDIRECT_URI` | `http://localhost:3000/api/auth` (dev) |
| `CLAUDE_API_KEY` | From Anthropic Console |
| `NEXT_PUBLIC_BASE_URL` | `http://localhost:3000` (dev) |

---

## Deploying to Vercel

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Add all environment variables in **Settings → Environment Variables**:
   - Update `SPOTIFY_REDIRECT_URI` to `https://your-app.vercel.app/api/auth`
   - Update `NEXT_PUBLIC_BASE_URL` to `https://your-app.vercel.app`
4. Update the Redirect URI in your Spotify Dashboard too
5. Click **Deploy**

---

## Project Structure

```
vibe-recommender/
├── pages/
│   ├── index.js          # Landing page & Spotify login
│   ├── playlist.js       # Playlist display page
│   └── api/
│       ├── login.js      # Redirect to Spotify OAuth
│       ├── auth.js       # OAuth callback & token exchange
│       ├── spotify.js    # Fetch recently played tracks
│       └── recommend.js  # Claude AI recommendations
├── components/
│   ├── Header.js         # Nav bar
│   └── SongCard.js       # Individual song display
├── lib/
│   ├── spotify.js        # Spotify API helpers
│   └── mockData.js       # Sample data for demo mode
└── styles/
    └── globals.css       # Global styles + Tailwind
```

---

## How It Works

1. User clicks **Connect with Spotify** → redirected to Spotify OAuth
2. After auth, Spotify redirects to `/api/auth` with a code
3. The code is exchanged for an access token
4. The app fetches the user's 20 most recently played tracks via `/api/spotify`
5. User clicks **Generate Playlist** → songs are sent to `/api/recommend`
6. Claude analyzes the song list and generates 10–15 vibe-matched recommendations
7. Recommendations appear with a short explanation for each track

---

## Testing Without Spotify

Click **"Try with sample data"** on the landing page to use pre-loaded mock songs and test the Claude recommendation engine without a Spotify account.

---

## License

MIT
