import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─── Primary crawlers ─────────────────────────────────────────────────
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin',
          '/admin/',
          // Block parameterised URLs that create duplicate content
          '/*?*utm_',
          '/*?*ref=',
          '/*?*fbclid=',
          '/*?*gclid=',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin', '/admin/', '/*?*utm_', '/*?*ref='],
      },
      // ─── All other legitimate crawlers ────────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin',
          '/admin/',
          '/*?*utm_',
          '/*?*ref=',
          '/*?*fbclid=',
          '/*?*gclid=',
        ],
      },
      // ─── AI citation & retrieval bots — allow ─────────────────────────────
      // These bots retrieve pages to answer user queries in real time.
      // Allowing them enables the site to appear in ChatGPT, Perplexity,
      // Claude, and Google AI Overview citations.
      {
        userAgent: 'ChatGPT-User',
        allow: ['/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/'],
      },
      // ─── AI training scrapers — deny ──────────────────────────────────────
      // Training crawlers extract content for model training but do not
      // surface the site in AI responses. Block to protect content value.
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        disallow: ['/'],
      },
      {
        userAgent: 'Google-Extended',
        disallow: ['/'],
      },
    ],
    sitemap: [
      'https://www.srvdetailing.co.uk/sitemap.xml',
      'https://www.srvdetailing.co.uk/image-sitemap.xml',
      'https://www.srvdetailing.co.uk/sitemap-index.xml',
    ],
    host: 'https://www.srvdetailing.co.uk',
  };
}
