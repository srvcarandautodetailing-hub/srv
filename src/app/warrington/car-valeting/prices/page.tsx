import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { valetingPricesWarrington } from '@/data/warrington/car-valeting/prices';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: valetingPricesWarrington.seo.title,
  description: valetingPricesWarrington.seo.description,
  keywords: valetingPricesWarrington.seo.keywords,
  alternates: {
    canonical: valetingPricesWarrington.seo.canonical,
    languages: { 'en-GB': valetingPricesWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function ValetingPricesWarringtonPage() {
  return <ServicePageTemplate data={valetingPricesWarrington} location="Warrington" />;
}
