# GMFB website

Responsive Next.js App Router website with TypeScript, Tailwind CSS and Manrope, based on the [GMFB Figma design](https://www.figma.com/design/AppY9V7FFTmHL4aa7NQeXV/GMFB-WEBSITE-RE-DESIGN?node-id=0-1).

## Run locally

```sh
npm install
npm run dev -- --hostname 127.0.0.1 --port 8080
```

If another dev server is using this checkout, use the production preview on port 8080 instead:

```sh
npm run build
npm run start -- --hostname 127.0.0.1 --port 8080
```

## Pages

| Page | Route | Figma frame |
| --- | --- | --- |
| Home | `/` | `2004:7367` |
| About us | `/about-us` | `2004:7540` |
| Services | `/services` | `2004:7628` |
| Portfolio | `/portfolio` | `2004:7777` |
| Contact us | `/contact-us` | `2004:8025` |
| Blog | `/blog` | `2004:8102` |
| Careers | `/careers` | `2052:832` |

Blog entries have individual `/blog/[slug]` routes using the titles, images and introductory copy available in Figma. The category filters and portfolio gallery controls work in the browser.

The shared navigation and footer live in `app/components`, with navigation destinations in `app/lib/navigation.ts`. About and Services have separate page links and submenu toggles. The header stays visible while scrolling, and all page heroes include the header within one viewport.

## Forms

The Contact and Careers forms validate required fields, then open a draft addressed to `team@gmfb.co.nz` in the visitor’s email app. Visitors must send that draft themselves. Career applicants must attach their selected CV in their email app. No server-side email delivery or file upload service is configured, and the forms explain that handoff before submission.

## Assets

Figma photographs, project previews and icons are stored locally under `public/figma`. Byte-identical assets are shared between pages. The supplied logo is in `public/assets/gmfb-logo.png`; the favicon uses the theme purple `#8700ff`. The portfolio includes the supplied Pink Beluga video and David Reid Homes media.

David Reid Homes, Summit Builders and Allendale Electrical project links open their external websites in new tabs. Buttons and links do not have decorative arrow icons.

## Check

```sh
npm run build
```
