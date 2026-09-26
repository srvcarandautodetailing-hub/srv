import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { detailingPricesMacclesfield } from '@/data/macclesfield/car-detailing/prices';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: detailingPricesMacclesfield.seo.title,
  description: detailingPricesMacclesfield.seo.description,
  keywords: detailingPricesMacclesfield.seo.keywords,
  alternates: {
    canonical: detailingPricesMacclesfield.seo.canonical,
    languages: { 'en-GB': detailingPricesMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldDetailingPricesPage() {
  return <ServicePageTemplate data={detailingPricesMacclesfield} location="Macclesfield" />;
}
