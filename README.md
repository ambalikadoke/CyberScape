# CyberScape

Cyber Awareness & Online Fraud Prevention website (React, frontend-only).

## Run locally
1. Install Node.js 18+ and Yarn (`npm install -g yarn`)
2. Open this folder in VS Code
3. In the terminal:
   ```
   yarn install
   yarn start
   ```
4. Open http://localhost:3000

## Build for hosting
```
yarn build
```
Upload the `build` folder to any static host (GitHub Pages, Netlify, Vercel).

## Main folders
- `src/pages` – Home, Digital World, Safety Hub, CYRA
- `src/components` – UI pieces
- `src/data` – all text content and the CYRA chatbot engine (`cyraEngine.js`)
