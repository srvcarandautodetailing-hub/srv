import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/pages/ServicePageTemplate';
import { exteriorValetingMacclesfield } from '@/data/macclesfield/car-valeting/exterior-valeting';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: exteriorValetingMacclesfield.seo.title,
  description: exteriorValetingMacclesfield.seo.description,
  keywords: exteriorValetingMacclesfield.seo.keywords,
  alternates: {
    canonical: exteriorValetingMacclesfield.seo.canonical,
    languages: { 'en-GB': exteriorValetingMacclesfield.seo.canonical },
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'GB-CHE',
    'geo.placename': 'Macclesfield, Cheshire East',
    'geo.position': '53.2580;-2.1240',
  },
};

export default function MacclesfieldExteriorValetingPage() {
  return <ServicePageTemplate data={exteriorValetingMacclesfield} location="Macclesfield" />;
}
