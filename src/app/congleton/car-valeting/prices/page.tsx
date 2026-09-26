import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { valetingPricesCongleton } from '@/data/congleton/car-valeting/prices';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: valetingPricesCongleton.seo.title,
  description: valetingPricesCongleton.seo.description,
  keywords: valetingPricesCongleton.seo.keywords,
  alternates: {
    canonical: valetingPricesCongleton.seo.canonical,
    languages: { 'en-GB': valetingPricesCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonValetingPricesPage() {
  return <ServicePageTemplate data={valetingPricesCongleton} location="Congleton" />;
}
