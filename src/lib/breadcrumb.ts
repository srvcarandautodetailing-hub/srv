/**
 * Breadcrumb JSON-LD utilities
 *
 * Usage — add a <script> tag alongside any page template:
 *
 *   import { breadcrumbJsonLd, HOME, MANCHESTER } from '@/lib/breadcrumb';
 *
 *   const crumbs = breadcrumbJsonLd([HOME, MANCHESTER, { name: 'Didsbury', url: BASE + '/manchester/areas/didsbury' }]);
 *
 *   return (
 *     <>
 *       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
 *       <YourPageTemplate data={data} />
 *     </>
 *   );
 *
 * The <script> tag is invisible to users — it only adds structured data for
 * search engines without altering the visual content layout.
 */

export const BASE = 'https://www.srvdetailing.co.uk';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Generate a Schema.org BreadcrumbList object ready for JSON.stringify. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Shared crumb constants (avoids repetition across page files) ──────────

export const HOME: BreadcrumbItem = { name: 'Home', url: BASE };

export const MANCHESTER: BreadcrumbItem = { name: 'Manchester', url: `${BASE}/manchester` };
export const MANCHESTER_AREAS: BreadcrumbItem = { name: 'Areas', url: `${BASE}/manchester/areas` };
export const MANCHESTER_DETAILING: BreadcrumbItem = { name: 'Car Detailing', url: `${BASE}/manchester/car-detailing` };
export const MANCHESTER_VALETING: BreadcrumbItem = { name: 'Car Valeting', url: `${BASE}/manchester/car-valeting` };

export const STOCKPORT: BreadcrumbItem = { name: 'Stockport', url: `${BASE}/stockport` };
export const STOCKPORT_AREAS: BreadcrumbItem = { name: 'Areas', url: `${BASE}/stockport/areas` };
export const STOCKPORT_DETAILING: BreadcrumbItem = { name: 'Car Detailing', url: `${BASE}/stockport/car-detailing` };
export const STOCKPORT_VALETING: BreadcrumbItem = { name: 'Car Valeting', url: `${BASE}/stockport/car-valeting` };

export const WILMSLOW: BreadcrumbItem = { name: 'Wilmslow', url: `${BASE}/wilmslow` };
export const WILMSLOW_AREAS: BreadcrumbItem = { name: 'Areas', url: `${BASE}/wilmslow/areas` };
export const WILMSLOW_DETAILING: BreadcrumbItem = { name: 'Car Detailing', url: `${BASE}/wilmslow/car-detailing` };
export const WILMSLOW_VALETING: BreadcrumbItem = { name: 'Car Valeting', url: `${BASE}/wilmslow/car-valeting` };

export const CONGLETON: BreadcrumbItem = { name: 'Congleton', url: `${BASE}/congleton` };
export const CONGLETON_AREAS: BreadcrumbItem = { name: 'Areas', url: `${BASE}/congleton/areas` };
export const CONGLETON_DETAILING: BreadcrumbItem = { name: 'Car Detailing', url: `${BASE}/congleton/car-detailing` };
export const CONGLETON_VALETING: BreadcrumbItem = { name: 'Car Valeting', url: `${BASE}/congleton/car-valeting` };

export const MACCLESFIELD: BreadcrumbItem = { name: 'Macclesfield', url: `${BASE}/macclesfield` };
export const MACCLESFIELD_AREAS: BreadcrumbItem = { name: 'Areas', url: `${BASE}/macclesfield/areas` };
export const MACCLESFIELD_DETAILING: BreadcrumbItem = { name: 'Car Detailing', url: `${BASE}/macclesfield/car-detailing` };
export const MACCLESFIELD_VALETING: BreadcrumbItem = { name: 'Car Valeting', url: `${BASE}/macclesfield/car-valeting` };

export const WARRINGTON: BreadcrumbItem = { name: 'Warrington', url: `${BASE}/warrington` };
export const WARRINGTON_AREAS: BreadcrumbItem = { name: 'Areas', url: `${BASE}/warrington/areas` };
export const WARRINGTON_DETAILING: BreadcrumbItem = { name: 'Car Detailing', url: `${BASE}/warrington/car-detailing` };
export const WARRINGTON_VALETING: BreadcrumbItem = { name: 'Car Valeting', url: `${BASE}/warrington/car-valeting` };

export const POYNTON: BreadcrumbItem = { name: 'Poynton', url: `${BASE}/stockport/areas/poynton` };
export const POYNTON_DETAILING: BreadcrumbItem = { name: 'Car Detailing', url: `${BASE}/stockport/areas/poynton/car-detailing` };
export const POYNTON_VALETING: BreadcrumbItem = { name: 'Car Valeting', url: `${BASE}/stockport/areas/poynton/car-valeting` };

export const GUIDES: BreadcrumbItem = { name: 'Guides', url: `${BASE}/guides` };
export const COMPARE: BreadcrumbItem = { name: 'Compare', url: `${BASE}/compare` };
export const FAQ: BreadcrumbItem = { name: 'FAQ', url: `${BASE}/faq` };
export const BLOG: BreadcrumbItem = { name: 'Blog', url: `${BASE}/blog` };

/**
 * Convert a URL slug (e.g. "didsbury", "pet-hair-removal") to a display name.
 * Used as a fallback when the data object does not expose a .name field.
 */
export function slugToName(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
