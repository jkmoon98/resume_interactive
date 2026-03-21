# jonathan-moon-resume

Interactive resume (Vite + React).

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Test on your phone (same Wi‑Fi)

The dev server is configured with **`host: true`**, so your machine is reachable on the LAN.

1. Run `npm run dev`.
2. In the terminal, find the **Network** line, e.g. `http://192.168.1.42:5173`.
3. On your phone’s browser, open that URL (PC and phone must be on the same network).
4. If it doesn’t load, allow the port in your OS firewall.

## Build & deploy

```bash
npm run build
firebase deploy --only hosting
```

Or: `npm run deploy:all` (build, commit, push, deploy — see `scripts/deploy-all.sh`).
