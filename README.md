# Local Service Business Starter

A production-ready Next.js 15 starter configured for Rhino Landworks and designed to be reused for contractors and local service businesses.

## Included

- Next.js 15 App Router, TypeScript, Tailwind CSS, and ESLint
- Responsive header, mobile navigation, footer, service cards, calls to action, and forms
- Config-driven business details, navigation, services, and testimonials
- Static dynamic service routes using `app/services/[slug]`
- Metadata API, canonical URLs, Open Graph image, sitemap, robots.txt, and LocalBusiness JSON-LD
- Netlify Forms-compatible estimate form with honeypot protection
- Gallery, testimonials, thank-you page, and custom 404
- Netlify build and security-header configuration

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Customize for a new business

1. Edit `config/site.ts` for the name, URL, description, contact details, service area, and navigation.
2. Edit `data/services.ts` and `data/testimonials.ts`.
3. Replace logo files in `public/brand` and project media in `public/media`, then update their paths and accurate alternative text in the page data.
4. Change the five CSS brand variables at the top of `app/globals.css`.
5. Set `NEXT_PUBLIC_SITE_URL` to the production URL in Netlify.
6. Update the static form fields in `public/__forms.html` whenever fields in `components/EstimateForm.tsx` change.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Netlify deployment

1. In Netlify, choose **Add new site → Import an existing project → GitHub**.
2. Select this repository.
3. Netlify reads `netlify.toml`; the build command is `npm run build` and Node is 22.
4. Add `NEXT_PUBLIC_SITE_URL` under **Site configuration → Environment variables**.
5. Deploy. Do not add the legacy `@netlify/plugin-nextjs` package or a manual `.next` publish directory.
6. After the first deploy, open **Forms** and confirm `estimate-request` was detected.
7. Under **Project configuration → Notifications → Emails and webhooks → Form submission notifications**, add the destination email.

The visible React form posts URL-encoded data to `public/__forms.html`. That static file is intentionally present so Netlify can detect the form during deployment without parsing a server-rendered Next.js form. This resolves the Next.js Runtime form-migration error.

## GitHub template setup

After pushing the starter:

1. Open the repository on GitHub.
2. Choose **Settings → General**.
3. Enable **Template repository**.

Future projects can then use **Use this template** to create a clean repository without copying commit history.

## Content note

The Rhino build uses verified Google review excerpts. When reusing the template, replace the testimonials, review count, rating schema, and Google Business Profile link with verified details for the new business.
