import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { detailingPricesCongleton } from '@/data/congleton/car-detailing/prices';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: detailingPricesCongleton.seo.title,
  description: detailingPricesCongleton.seo.description,
  keywords: detailingPricesCongleton.seo.keywords,
  alternates: {
    canonical: detailingPricesCongleton.seo.canonical,
    languages: { 'en-GB': detailingPricesCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonDetailingPricesPage() {
  return <ServicePageTemplate data={detailingPricesCongleton} location="Congleton" />;
}
