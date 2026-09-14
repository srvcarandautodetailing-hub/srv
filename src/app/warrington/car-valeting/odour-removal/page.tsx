import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { odourRemovalWarrington } from '@/data/warrington/car-valeting/odour-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: odourRemovalWarrington.seo.title,
  description: odourRemovalWarrington.seo.description,
  keywords: odourRemovalWarrington.seo.keywords,
  alternates: {
    canonical: odourRemovalWarrington.seo.canonical,
    languages: { 'en-GB': odourRemovalWarrington.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHS',
    'geo.placename': 'Warrington, Cheshire',
    'geo.position': '53.3900;-2.5970',
  },
};

export default function OdourRemovalWarringtonPage() {
  return <ServicePageTemplate data={odourRemovalWarrington} location="Warrington" />;
}
