import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { valetingPricesMacclesfield } from '@/data/macclesfield/car-valeting/prices';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: valetingPricesMacclesfield.seo.title,
  description: valetingPricesMacclesfield.seo.description,
  keywords: valetingPricesMacclesfield.seo.keywords,
  alternates: {
    canonical: valetingPricesMacclesfield.seo.canonical,
    languages: { 'en-GB': valetingPricesMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldValetingPricesPage() {
  return <ServicePageTemplate data={valetingPricesMacclesfield} location="Macclesfield" />;
}
