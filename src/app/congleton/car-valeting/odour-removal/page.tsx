import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { odourRemovalCongleton } from '@/data/congleton/car-valeting/odour-removal';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: odourRemovalCongleton.seo.title,
  description: odourRemovalCongleton.seo.description,
  keywords: odourRemovalCongleton.seo.keywords,
  alternates: {
    canonical: odourRemovalCongleton.seo.canonical,
    languages: { 'en-GB': odourRemovalCongleton.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Congleton, Cheshire East',
    'geo.position': '53.1634;-2.2021',
  },
};

export default function CongletonOdourRemovalPage() {
  return <ServicePageTemplate data={odourRemovalCongleton} location="Congleton" />;
}
