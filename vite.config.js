import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Emits robots.txt, and — once VITE_SITE_URL is set (e.g. https://your-domain.com) —
 * sitemap.xml plus the absolute-URL meta tags (canonical, og:url, og:image).
 * Without a site URL those are omitted rather than pointing at a guessed domain.
 */
function siteMeta(siteUrl) {
  const base = siteUrl.replace(/\/+$/, '')

  return {
    name: 'site-meta',
    transformIndexHtml() {
      if (!base) return []
      const url = `${base}/`
      const image = `${base}/og-image.png`
      return [
        { tag: 'link', attrs: { rel: 'canonical', href: url }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:url', content: url }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image', content: image }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' }, injectTo: 'head' },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' }, injectTo: 'head' },
        {
          tag: 'meta',
          attrs: { property: 'og:image:alt', content: 'Shubham Prajapati — Software Engineer' },
          injectTo: 'head',
        },
        { tag: 'meta', attrs: { name: 'twitter:image', content: image }, injectTo: 'head' },
      ]
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /']
      if (base) {
        robots.push('', `Sitemap: ${base}/sitemap.xml`)
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`,
        })
      }
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots.join('\n')}\n` })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // Explicit VITE_SITE_URL wins; otherwise use the production domain Vercel exposes at build time
  const siteUrl =
    env.VITE_SITE_URL ||
    (env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : '')

  return {
    plugins: [react(), tailwindcss(), siteMeta(siteUrl)],
  }
})
