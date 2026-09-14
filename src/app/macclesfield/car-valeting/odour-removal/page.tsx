import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { odourRemovalMacclesfield } from '@/data/macclesfield/car-valeting/odour-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: odourRemovalMacclesfield.seo.title,
  description: odourRemovalMacclesfield.seo.description,
  keywords: odourRemovalMacclesfield.seo.keywords,
  alternates: {
    canonical: odourRemovalMacclesfield.seo.canonical,
    languages: { 'en-GB': odourRemovalMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldOdourRemovalPage() {
  return <ServicePageTemplate data={odourRemovalMacclesfield} location="Macclesfield" />;
}
