import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { detailingPricesWarrington } from '@/data/warrington/car-detailing/prices';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: detailingPricesWarrington.seo.title,
  description: detailingPricesWarrington.seo.description,
  keywords: detailingPricesWarrington.seo.keywords,
  alternates: {
    canonical: detailingPricesWarrington.seo.canonical,
    languages: { 'en-GB': detailingPricesWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function DetailingPricesWarringtonPage() {
  return <ServicePageTemplate data={detailingPricesWarrington} location="Warrington" />;
}
