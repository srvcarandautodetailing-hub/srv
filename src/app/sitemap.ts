import { MetadataRoute } from 'next';
import { getAllGuideSlugs } from '@/data/guides/guides-data';
import { getAllComparisonSlugs } from '@/data/compare/comparisons-data';
import { getAllManchesterAreaSlugs } from '@/data/manchester/areas/areas-data';
import { getAllStockportAreaSlugs } from '@/data/stockport/areas/areas-data';
import { getAllWilmslowAreaSlugs } from '@/data/wilmslow/areas/areas-data';
import { getAllCongletonAreaSlugs } from '@/data/congleton/areas/areas-data';
import { getAllMacclesfieldAreaSlugs } from '@/data/macclesfield/areas/areas-data';
import { getAllWarringtonAreaSlugs } from '@/data/warrington/areas/areas-data';
import { faqTopicsData } from '@/data/faq/faq-data';
import { getAllBlogSlugs, getAllBlogCategories } from '@/data/blog/blog-data';

const BASE = 'https://www.srvdetailing.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/services/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/services/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/booking`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Manchester hub + pillars + all services
  const manchesterPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/manchester`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/manchester/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/manchester/car-wash`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing pillar + services
    { url: `${BASE}/manchester/car-detailing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/manchester/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-detailing/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting pillar + services
    { url: `${BASE}/manchester/car-valeting`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/manchester/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/manchester/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/manchester/car-valeting/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Manchester areas (dynamic)
  const manchesterAreaPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/manchester/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...getAllManchesterAreaSlugs().map((slug) => ({
      url: `${BASE}/manchester/areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Wilmslow hub + pillars + all services
  const wilmslowPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/wilmslow`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/wilmslow/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/wilmslow/car-wash`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing pillar + services
    { url: `${BASE}/wilmslow/car-detailing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/wilmslow/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-detailing/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting pillar + services
    { url: `${BASE}/wilmslow/car-valeting`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/wilmslow/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/wilmslow/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wilmslow/car-valeting/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Wilmslow areas (dynamic)
  const wilmslowAreaPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/wilmslow/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...getAllWilmslowAreaSlugs().map((slug) => ({
      url: `${BASE}/wilmslow/areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Warrington hub + pillars + all services
  const warringtonPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/warrington`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/warrington/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/warrington/car-wash`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing pillar + services
    { url: `${BASE}/warrington/car-detailing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/warrington/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-detailing/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting pillar + services
    { url: `${BASE}/warrington/car-valeting`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/warrington/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/warrington/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/warrington/car-valeting/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Warrington areas (dynamic)
  const warringtonAreaPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/warrington/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...getAllWarringtonAreaSlugs().map((slug) => ({
      url: `${BASE}/warrington/areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Stockport hub + pillars + all services
  const stockportPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/stockport`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/stockport/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/stockport/car-wash`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing
    { url: `${BASE}/stockport/car-detailing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/stockport/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-detailing/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting
    { url: `${BASE}/stockport/car-valeting`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/stockport/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/car-valeting/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Stockport areas (dynamic)
  const stockportAreaPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/stockport/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...getAllStockportAreaSlugs().map((slug) => ({
      url: `${BASE}/stockport/areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Poynton area hub + dedicated service silos (static pages — SK12 location cluster)
  const poyntonPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/stockport/areas/poynton`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing hub + services
    { url: `${BASE}/stockport/areas/poynton/car-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting hub + services
    { url: `${BASE}/stockport/areas/poynton/car-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/stockport/areas/poynton/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Congleton hub + pillars + all services
  const congletonPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/congleton`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/congleton/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/congleton/car-wash`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing pillar + services
    { url: `${BASE}/congleton/car-detailing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/congleton/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/congleton/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/congleton/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/congleton/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/congleton/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/congleton/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/congleton/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/congleton/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/congleton/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/congleton/car-detailing/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting pillar + services
    { url: `${BASE}/congleton/car-valeting`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/congleton/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/congleton/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/congleton/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/congleton/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/congleton/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/congleton/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/congleton/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/congleton/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/congleton/car-valeting/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Congleton areas (dynamic)
  const congletonAreaPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/congleton/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...getAllCongletonAreaSlugs().map((slug) => ({
      url: `${BASE}/congleton/areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Macclesfield hub + pillars + all services
  const macclesfieldPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/macclesfield`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/macclesfield/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/macclesfield/car-wash`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Car Detailing pillar + services
    { url: `${BASE}/macclesfield/car-detailing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/macclesfield/car-detailing/ceramic-coating`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/macclesfield/car-detailing/paint-correction`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/macclesfield/car-detailing/interior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/macclesfield/car-detailing/new-car-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/macclesfield/car-detailing/exterior-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/macclesfield/car-detailing/engine-bay-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/macclesfield/car-detailing/headlight-restoration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/macclesfield/car-detailing/leather-conditioning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/macclesfield/car-detailing/swirl-mark-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/macclesfield/car-detailing/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Car Valeting pillar + services
    { url: `${BASE}/macclesfield/car-valeting`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/macclesfield/car-valeting/full-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/macclesfield/car-valeting/mini-valet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/macclesfield/car-valeting/mobile-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/macclesfield/car-valeting/interior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/macclesfield/car-valeting/exterior-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/macclesfield/car-valeting/pet-hair-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/macclesfield/car-valeting/odour-removal`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/macclesfield/car-valeting/upholstery-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/macclesfield/car-valeting/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Macclesfield areas (dynamic)
  const macclesfieldAreaPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/macclesfield/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...getAllMacclesfieldAreaSlugs().map((slug) => ({
      url: `${BASE}/macclesfield/areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Guides (dynamic)
  const guidePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...getAllGuideSlugs().map((slug) => ({
      url: `${BASE}/guides/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // Compare (dynamic)
  const comparePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...getAllComparisonSlugs().map((slug) => ({
      url: `${BASE}/compare/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // Pricing
  const pricingPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/pricing/car-detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/pricing/car-valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  // FAQ (dynamic)
  const faqPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...faqTopicsData.map((topic) => ({
      url: `${BASE}/faq/${topic.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  // Blog posts (dynamic)
  const blogPages: MetadataRoute.Sitemap = [
    ...getAllBlogSlugs().map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];

  // Blog category listing pages (dynamic — one page per unique category)
  const blogCategoryPages: MetadataRoute.Sitemap = getAllBlogCategories().map((category) => ({
    url: `${BASE}/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Gallery
  const galleryPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/gallery/detailing`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/gallery/valeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  return [
    ...corePages,
    ...manchesterPages,
    ...manchesterAreaPages,
    ...wilmslowPages,
    ...wilmslowAreaPages,
    ...warringtonPages,
    ...warringtonAreaPages,
    ...stockportPages,
    ...stockportAreaPages,
    ...poyntonPages,
    ...congletonPages,
    ...congletonAreaPages,
    ...macclesfieldPages,
    ...macclesfieldAreaPages,
    ...guidePages,
    ...comparePages,
    ...pricingPages,
    ...faqPages,
    ...blogPages,
    ...blogCategoryPages,
    ...galleryPages,
  ];
}
