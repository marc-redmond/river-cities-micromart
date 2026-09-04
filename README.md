# River City MicroMarkets

Marketing site for River City MicroMarkets — fully managed smart coolers and micro markets in Richmond and Fredericksburg, Virginia.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

This is a standard Next.js app. It runs on **Vercel** or **Netlify** with no extra config.

### Vercel

1. Push this folder to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Deploy. Production URL can later be pointed at `www.rivercitiesmarkets.com`.

### Netlify

1. Push this folder to GitHub.
2. Add a new site from that repo at [app.netlify.com](https://app.netlify.com).
3. Build command: `npm run build`. Netlify detects Next.js automatically.

## Contact form

The form opens the visitor’s email app addressed to `info@rivercitiesmarkets.com`. Update that address in `src/components/contact-form.tsx` if you use a different inbox. The phone number on the site is **(540) 385-1504**.
