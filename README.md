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
3. Deploy. Production URL can later be pointed at `rivercitymicromarkets.com`.

### Netlify

1. Push this folder to GitHub.
2. Add a new site from that repo at [app.netlify.com](https://app.netlify.com).
3. Build command: `npm run build`. Netlify detects Next.js automatically.

## Contact form

Submissions are emailed to `hq@rivercitymicromarkets.com` through [Resend](https://resend.com).

1. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).
2. Verify `rivercitymicromarkets.com` at [resend.com/domains](https://resend.com/domains).
3. Add `RESEND_API_KEY` to `.env.local` locally and to the host’s environment variables in production.

Optional: set `RESEND_FROM_EMAIL` if you want to send from an address other than `hq@rivercitymicromarkets.com`.

The phone number on the site is **(540) 385-1504**.
