import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Keep in sync with the routes in src/App.jsx (listed in sitemap.xml)
const ROUTES = ['/', '/about', '/skills', '/services', '/projects', '/experience', '/education', '/profile']

/**
 * Emits robots.txt, and — once a site URL is known — sitemap.xml plus the absolute-URL
 * social image tags. Without a site URL those are omitted rather than pointing at a guessed domain.
 * The per-page canonical URL is set at runtime by usePageMeta, so it is not injected here.
 */
function siteMeta(siteUrl) {
  const base = siteUrl.replace(/\/+$/, '')

  return {
    name: 'site-meta',
    transformIndexHtml() {
      if (!base) return []
      const image = `${base}/og-image.png`
      return [
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
        const lastmod = new Date().toISOString().slice(0, 10)
        const urls = ROUTES.map(
          (route) => `  <url>\n    <loc>${base}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
        ).join('\n')
        robots.push('', `Sitemap: ${base}/sitemap.xml`)
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
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
